// ==UserScript==
// @name         Survev-KrityHack
// @namespace    https://github.com/Drino955/survev-krityhack
// @version      0.2.0
// @description  Aimbot, xray, tracer, better zoom, smoke/obstacle opacity, autoloot, player names...
// @author       KrityTeam
// @match        *://survev.io/*
// @match        *://resurviv.biz/*
// @icon         https://www.google.com/s2/favicons?domain=survev.io
// @grant        none
// @run-at       document-start
// @webRequest   [{"selector":"*app-*.js","action":"cancel"}]
// @webRequest   [{"selector":"*shared-*.js","action":"cancel"}]
// @homepageURL  https://github.com/Drino955/survev-krityhack
// @updateURL    https://raw.githubusercontent.com/Drino955/survev-krityhack/main/krityhack.user.js
// @downloadURL  https://raw.githubusercontent.com/Drino955/survev-krityhack/main/krityhack.user.js
// @supportURL   https://github.com/Drino955/survev-krityhack/issues
// ==/UserScript==


console.log('Script injecting...')

window.AlguienClientEnabled = true;
window.gameOptimization = true;
window.ping = {};

// cannot insert through tampermonkey require cause "Cannot use import statement outside a module"
const appScript = document.createElement('script');
appScript.type = 'module';

if (window.location.hostname === 'survev.io') {
    console.log('Survev.io detected');
    appScript.src = '//cdn.jsdelivr.net/gh/drino955/survev-krityhack@759e3aeced64928ffa0ca067545aa390b6d00277/survev/app.js';
} else if(window.location.hostname === 'resurviv.biz')  {
    console.log('Resurviv.biz detected');
    appScript.src = '//cdn.jsdelivr.net/gh/drino955/survev-krityhack@759e3aeced64928ffa0ca067545aa390b6d00277/resurviv/app.js';
} else if(window.location.hostname == 'localhost') {
    document.addEventListener('DOMContentLoaded', () => {
        const servMenu = document.querySelector('#server-select-main');
        servMenu.innerHTML = `<optgroup id="server-opts" label="Region" data-l10n="index-region">
                      <option value="local" data-l10n="index-local" data-label="Local">Local [0 players]</option></optgroup>`;
    });
}

appScript.onload = () => console.log('app.js loaded');
appScript.onerror = (err) => console.error('Error in app.js loading:', err);

const pixiScript = document.createElement('script');
pixiScript.src = 'https://cdnjs.cloudflare.com/ajax/libs/pixi.js/7.0.3/pixi.min.js';
pixiScript.onload = () => console.log('pixi.js loaded');
pixiScript.onerror = (err) => console.error('Error in pixi.js loading:', err);

let aimBotEnabled = true;
let zoomEnabled = true;
let mobileAttackEnabled = true;
let spinBot = false;
let autoSwitchEnabled = true;

let espEnabled = true;
let xrayEnabled = true;
let autoStopEnabled = false;

const version = GM_info.script.version;


const overlay = document.createElement('div');
overlay.className = 'krity-overlay';

const krityTitle = document.createElement('h3');
krityTitle.className = 'krity-title';
krityTitle.innerText = `KrityHack ${version}`;



const styles = document.createElement('style');
styles.innerHTML = `
.krity-overlay{
    position: absolute;
    top: 128px;
    left: 0px;
    width: 100%;
    pointer-events: None;
    color: #fff;
    font-family: monospace;
    text-shadow: 0 0 5px rgba(0, 0, 0, .5);
    z-index: 1;
}

.krity-title{
    text-align: center;
    margin-top: 10px;
    margin-bottom: 10px;
    font-size: 25px;
    text-shadow: 0 0 10px rgba(0, 0, 0, .9);
    color: #fff;
    font-family: monospace;
    pointer-events: None;
}

.krity-control{
    text-align: center;
    margin-top: 3px;
    margin-bottom: 3px;
    font-size: 18px;
}

.aimbotDot{
    position: absolute;
    top: 0;
    left: 0;
    width: 10px;
    height: 10px;
    background-color: red;
    transform: translateX(-50%) translateY(-50%);
    display: none;
}
`;


const aimbotDot = document.createElement('div')
aimbotDot.className = 'aimbotDot';

window.addEventListener('keyup', function (event) {
    if (!window?.game?.ws) return;

    switch (String.fromCharCode(event.keyCode)) {
        case 'B': 
            aimBotEnabled = !aimBotEnabled; 
            aimbotDot.style.display = 'None';
            window.lastAimPos = null;
            window.aimTouchMoveDir = null;
            break;
        case 'Z': zoomEnabled = !zoomEnabled; break;
        case 'M': 
            mobileAttackEnabled = !mobileAttackEnabled;
            window.aimTouchMoveDir = null;
            event.stopImmediatePropagation()
            event.stopPropagation();
            event.preventDefault();
            break;
        case 'Y': spinBot = !spinBot; break;
        // case 'P': autoStopEnabled = !autoStopEnabled; break;
        // case 'U': autoSwitchEnabled = !autoSwitchEnabled; break;
        // case 'O': window.gameOptimization = !window.gameOptimization; break;
    }
    updateOverlay();
});

window.addEventListener('keydown', function (event) {
    if (!window?.game?.ws) return;

    switch (String.fromCharCode(event.keyCode)) {
        case 'M': 
            event.stopImmediatePropagation()
            event.stopPropagation();
            event.preventDefault();
            break;
    }
    updateOverlay();
});


// remove ceilings
Object.defineProperty( Object.prototype, 'textureCacheIds', {
	set( value ) {
		this._textureCacheIds = value;

		if ( Array.isArray( value ) ) {
			const scope = this;

            value.push = new Proxy( value.push, {
                apply( target, thisArgs, args ) {
                    // console.log(args[0], scope, scope?.baseTexture?.cacheId);
                    // console.log(scope, args[0]);
                    if (args[0].includes('ceiling') && !args[0].includes('map-building-container-ceiling-05') || args[0].includes('map-snow-')) {
						Object.defineProperty( scope, 'valid', {
							set( value ) {
								this._valid = value;
							},
							get() {
								return xrayEnabled ? false : this._valid;
							}
						});
					}
					return Reflect.apply( ...arguments );

				}
			});

		}

	},
	get() {
		return this._textureCacheIds;
	}
});

Object.defineProperty(window, 'game', {
    get () {
        return this._game;
    },
    set(value) {
        this._game = value;
        
        if (!value) return;
        
        initGame();
        
    }
});

Object.defineProperty(window, 'basicDataInfo', {
    get () {
        return this._basicDataInfo;
    },
    set(value) {
        this._basicDataInfo = value;
        
        if (!value) return;
        
        Object.defineProperty(window.basicDataInfo, 'isMobile', {
            get () {
                return true;
            },
            set(value) {
            }
        });
        
        Object.defineProperty(window.basicDataInfo, 'useTouch', {
            get () {
                return true;
            },
            set(value) {
            }
        });
        
    }
});

let espOneTime = false;
let aimBotOneTime = false;
let autoSwitchOneTime = false;
let obstacleOpacityOneTime = false;
let grenadeTimerOneTime = false;
function initGame() {
    console.log('init game...........');

    window.lastAimPos = null;
    window.aimTouchMoveDir = null;

    const tasks = [
        {isApplied: false, condition: () => window.game?.activePlayer?.localData, action: betterScale},
        // {isApplied: false, condition: () => window.game?.map?.obstaclePool?.pool != undefined, action: obstacleOpacity},
        {isApplied: false, condition: () => Array.prototype.push === window.game?.smokeBarn?.particles.push, action: smokeOpacity},
        {isApplied: false, condition: () => Array.prototype.push === window.game?.playerBarn?.playerPool?.pool.push, action: visibleNames},
        {isApplied: false, condition: () => window.game?.pixi?._ticker && window.game?.activePlayer?.container && window.game?.activePlayer?.pos, action: () => { if (!espOneTime) { window.game?.pixi?._ticker?.add(esp); espOneTime = true; } } },
        {isApplied: false, condition: () => window.game?.pixi?._ticker && window.game?.activePlayer?.container && window.game?.activePlayer?.pos, action: () => { if (!aimBotOneTime) { window.game?.pixi?._ticker?.add(aimBot); aimBotOneTime = true; } } },
        {isApplied: false, condition: () => window.game?.pixi?._ticker && window.game?.activePlayer?.container && window.game?.activePlayer?.pos, action: () => { if (!autoSwitchOneTime) { window.game?.pixi?._ticker?.add(autoSwitch); autoSwitchOneTime = true; } } },
        {isApplied: false, condition: () => window.game?.pixi?._ticker && window.game?.activePlayer?.container && window.game?.activePlayer?.pos, action: () => { if (!obstacleOpacityOneTime) { window.game?.pixi?._ticker?.add(obstacleOpacity); obstacleOpacityOneTime = true; } } },
        {isApplied: false, condition: () => window.game?.pixi?._ticker && window.game?.activePlayer?.container && window.game?.activePlayer?.pos, action: () => { if (!grenadeTimerOneTime) { window.game?.pixi?._ticker?.add(grenadeTimer); grenadeTimerOneTime = true; } } },
    ];

    (function checkLocalData(){
        if(!window?.game?.ws) return;

        console.log('Checking local data')

        console.log(
            window.game?.activePlayer?.localData, 
            window.game?.map?.obstaclePool?.pool,
            window.game?.smokeBarn?.particles,
            window.game?.playerBarn?.playerPool?.pool
        );

        tasks.forEach(task => console.log(task.action, task.isApplied))
        
        tasks.forEach(task => {
            if (task.isApplied || !task.condition()) return;
            task.action();
            task.isApplied = true;
        });
        
        if (tasks.some(task => !task.isApplied)) setTimeout(checkLocalData, 5);
        else console.log('All functions applied, stopping loop.');
    })();
}
mousedownClick();


function mousedownClick(){
    let timeoutId;

    function updateMouseButtons() {
        if (!window.game?.input?.mouseButtonsOld) return;
        Object.keys(window.game.input.mouseButtonsOld).forEach(key => delete (window.game.input.mouseButtonsOld[key]));

        timeoutId = setTimeout(updateMouseButtons, 5);
    }

    window.addEventListener('mousedown', function (event) {
        if (event.button === 0) { // 0 is the code for the left mouse button
            updateMouseButtons();
        }
    });

    window.addEventListener('mouseup', function (event) {
        if (event.button === 0) { // 0 is the code for the left mouse button
            window.lastAimPos = null;
            window.aimTouchMoveDir = null;
            clearTimeout(timeoutId);
        }
    });
}

function betterScale(){
    Object.defineProperty(window.game.camera, 'zoom', {
        get() {
            return Math.max(window.game.camera.targetZoom - (zoomEnabled ? 0.45 : 0), 0.35);
        },
        set(value) {
        }
    });

    let oldScope = window.game.activePlayer.localData.scope;
    Object.defineProperty(window.game.camera, 'targetZoom', {
        get(){
            return this._targetZoom;
        },
        set(value) {
            const newScope = window.game.activePlayer.localData.scope;
            const inventory = window.game.activePlayer.localData.inventory;

            const scopes = ['1xscope', '2xscope', '4xscope', '8xscope', '15xscope']

            // console.log(value, oldScope, newScope, newScope == oldScope, (inventory['2xscope'] || inventory['4xscope'] || inventory['8xscope'] || inventory['15xscope']));
            if ( (newScope == oldScope) && (inventory['2xscope'] || inventory['4xscope'] || inventory['8xscope'] || inventory['15xscope']) && value >= this._targetZoom
                || scopes.indexOf(newScope) > scopes.indexOf(oldScope) && value >= this._targetZoom
            ) return;

            oldScope = window.game.activePlayer.localData.scope;

            this._targetZoom = value;
        }
    });
}

function smokeOpacity(){
    console.log('smokeopacity')
    
    const particles = window.game.smokeBarn.particles;
    console.log('smokeopacity', particles, window.game.smokeBarn.particles)
    particles.push = new Proxy( particles.push, {
        apply( target, thisArgs, args ) {
            console.log('smokeopacity', args[0]);
            const particle = args[0];

            Object.defineProperty(particle.sprite, 'alpha', {
                get() {
                    return 0.12;
                },
                set(value) {
                }
            });

            return Reflect.apply( ...arguments );

        }
    });

    particles.forEach(particle => {
        Object.defineProperty(particle.sprite, 'alpha', {
            get() {
                return 0.12;
            },
            set(value) {
            }
        });
    });
}

function obstacleOpacity(){
    // setInterval(() => {
        window.game.map.obstaclePool.pool.forEach(obstacle => {
            if (!['bush', 'tree', 'table', 'stairs'].some(substring => obstacle.type.includes(substring))) return;
            obstacle.sprite.alpha = 0.45
        });
    // });
}

const getTeam = player => Object.keys(game.playerBarn.teamInfo).find(team => game.playerBarn.teamInfo[team].playerIds.includes(player.__id))
const GREEN = 0x00ff00;
const BLUE = 0x00f3f3;
const RED = 0xff0000;
const WHITE = 0xffffff;

function visibleNames(){
    const pool = window.game.playerBarn.playerPool.pool;

    console.log('visibleNames', pool)

    pool.push = new Proxy( pool.push, {
        apply( target, thisArgs, args ) {
            const player = args[0];
            Object.defineProperty(player.nameText, 'visible', {
                get(){
                    const me = window.game.activePlayer;
                    const meTeam = getTeam(me);
                    const playerTeam = getTeam(player);
                    // console.log('visible', player?.nameText?._text, playerTeam === meTeam ? BLUE : RED, player, me, playerTeam, meTeam)
                    this.tint = playerTeam === meTeam ? BLUE : RED;
                    player.nameText.style.fontSize = 40;
                    return true;
                },
                set(value){
                }
            });

            return Reflect.apply( ...arguments );
        }
    });

    pool.forEach(player => {
        Object.defineProperty(player.nameText, 'visible', {
            get(){
                const me = window.game.activePlayer;
                const meTeam = getTeam(me);
                const playerTeam = getTeam(player);
                // console.log('visible', player?.nameText?._text, playerTeam === meTeam ? BLUE : RED, player, me, playerTeam, meTeam)
                this.tint = playerTeam === meTeam ? BLUE : RED;
                player.nameText.style.fontSize = 40;
                return true;
            },
            set(value){
            }
        });
    });
}
function esp(){
    const pixi = window.game.pixi; 
    const me = window.game.activePlayer;
    const players = window.game.playerBarn.playerPool.pool;

    // We check if there is an object of Pixi, otherwise we create a new
    if (!pixi || me?.container == undefined) {
        // console.error("PIXI object not found in game.");
        return;
    }

    
    try{

    // Create a graphic object if it does not exist
    if (!me.container.lineDrawer) {
        me.container.lineDrawer = new PIXI.Graphics();
        me.container.addChild(me.container.lineDrawer);
    }
        
    const lineDrawer = me.container.lineDrawer;
    lineDrawer.clear(); // Cleaning previous lines
    const meX = me.pos.x;
    const meY = me.pos.y;

    const meTeam = getTeam(me);

    // For each player
    players.forEach((player) => {
        // We miss inactive or dead players
        if (!player.active || player.netData.dead || me.__id == player.__id) return;

        const playerX = player.pos.x;
        const playerY = player.pos.y;

        const playerTeam = getTeam(player);

        // We calculate the color of the line (for example, red for enemies)
        const lineColor = playerTeam === meTeam ? BLUE : me.layer === player.layer ? RED : WHITE;

        // We draw a line from the current player to another player
        lineDrawer.lineStyle(2, lineColor, 1);
        lineDrawer.moveTo(0, 0); // Container Container Center
        lineDrawer.lineTo(
            (playerX - meX) * 16,
            (meY - playerY) * 16
        );
    });

    if (!me.container.nadeDrawer) {
        me.container.nadeDrawer = new PIXI.Graphics();
        me.container.addChild(me.container.nadeDrawer);
    }
        
    const nadeDrawer = me.container.nadeDrawer;
    nadeDrawer.clear();

    Object.values(window.game.objectCreator.idToObj)
        .filter(obj => {
            const isValid = ( obj.__type === 9 && obj.type !== "smoke" )
                ||  (
                        // obj.img &&
                        // obj.img.match(/barrel-/g) &&
                        obj.smokeEmitter &&
                        window.objects[obj.type].explosion);
            // console.log('Filtering object:', obj, 'isValid:', isValid);
            return isValid;
        })
        .forEach(obj => {
            // console.log('Processing object:', obj);
            //If the object is inside a bunker and you're not etc, make the blast radius white
            if(obj.layer !== me.layer) {
                // console.log('Object is in a different layer:', obj.layer, 'me.layer:', me.layer);
                nadeDrawer.beginFill(0xffffff, 0.3);
            } else {
                // console.log('Object is in the same layer:', obj.layer, 'me.layer:', me.layer);
                nadeDrawer.beginFill(0xff0000, 0.2);
            }
            nadeDrawer.drawCircle(
                (obj.pos.x - meX) * 16,
                (meY - obj.pos.y) * 16,
                (window.explosions[
                    window.throwable[obj.type]?.explosionType ||
                    window.objects[obj.type].explosion
                        ].rad.max +
                    1) *
                16
            );
            nadeDrawer.endFill();
        });

    const curWeapon = findWeap(me);
    const curBullet = findBullet(curWeapon);
    
    if ( !me.container.laserDrawer ) {
        me.container.laserDrawer = new PIXI.Graphics();
        me.container.addChildAt(me.container.laserDrawer, 0);
    }
    const laserDrawer = me.container.laserDrawer;
    laserDrawer.clear();
        

    function laserPointer(
        curBullet,
        curWeapon,
        acPlayer,
        color = 0x0000ff,
        opacity = 0.3,
    ) {
        // console.log("laserPointer called with:", { curBullet, acPlayer, curWeapon, color, opacity });
        const { pos: acPlayerPos, posOld: acPlayerPosOld } = acPlayer;

        const dateNow = performance.now();
        if ( !(acPlayer.__id in lastFrames) ) lastFrames[acPlayer.__id] = [];
        lastFrames[acPlayer.__id].push([dateNow, acPlayerPos]);

        if (!acPlayerPosOld || lastFrames[acPlayer.__id].length < 20) {
            // console.log("Insufficient data for isMoving");
            return
        }

        if (lastFrames[acPlayer.__id].length > 20){
            lastFrames[acPlayer.__id].shift();
        }

        const deltaTime = (dateNow - lastFrames[acPlayer.__id][0][0]) / 1000; // Time since last frame in seconds

        // Calculate enemy velocity
        const acPlayerVelocity = {
            x: (acPlayerPos._x - lastFrames[acPlayer.__id][0][1]._x) / deltaTime,
            y: (acPlayerPos._y - lastFrames[acPlayer.__id][0][1]._y) / deltaTime,
        };

        // console.log(acPlayerVelocity, lastFrames)
    
        let lasic = {};
    
        // let isMoving =
        //     acPlayer.posOld &&
        //     (acPlayer.pos._x != acPlayer.posOld._x ||
        //     acPlayer.pos._y != acPlayer.posOld._y);
        let isMoving = !!(acPlayerVelocity.x || acPlayerVelocity.y);
    
        if(curBullet) {
            lasic.active = true;
            lasic.range = curBullet.distance * 16.25;
            let atan;
            if (acPlayer == me && !window.game.input.mouseButtons['0']){
                //local rotation
                atan = Math.atan2(
                    window.game.input.mousePos._y - window.innerHeight / 2,
                    window.game.input.mousePos._x - window.innerWidth / 2,
                );
            }else{
                atan = Math.atan2(
                    acPlayer.dir.x,
                    acPlayer.dir.y
                ) 
                -
                Math.PI / 2;
            }
            lasic.direction = atan;
            lasic.angle =
                ((curWeapon.shotSpread +
                    (isMoving ? curWeapon.moveSpread : 0)) *
                    0.01745329252) /
                2;
            // console.log("lasic updated:", lasic);
        } else {
            lasic.active = false;
            // console.log("No current bullet, lasic inactive");
        }
    
        if(!lasic.active) {
            // console.log("lasic is not active");
            return;
        }

        const center = {
            x: (acPlayerPos._x - me.pos._x) * 16,
            y: (me.pos._y - acPlayerPos._y) * 16,
        };
        const radius = lasic.range;
        let angleFrom = lasic.direction - lasic.angle;
        let angleTo = lasic.direction + lasic.angle;
        angleFrom =
            angleFrom > Math.PI * 2
                ? angleFrom - Math.PI * 2
                : angleFrom < 0
                ? angleFrom + Math.PI * 2
                : angleFrom;
        angleTo =
            angleTo > Math.PI * 2
                ? angleTo - Math.PI * 2
                : angleTo < 0
                ? angleTo + Math.PI * 2
                : angleTo;
        laserDrawer.beginFill(color, opacity);
        laserDrawer.moveTo(center.x, center.y);
        laserDrawer.arc(center.x, center.y, radius, angleFrom, angleTo);
        laserDrawer.lineTo(center.x, center.y);
        laserDrawer.endFill();
        // console.log("Laser pointer drawn with center:", center, "radius:", radius, "angles:", { angleFrom, angleTo });
    }
    
    
    laserPointer(
        curBullet,
        curWeapon,
        me,
    );
    
    players
        .filter(player => player.active || !player.netData.dead || me.__id !== player.__id || me.layer === player.layer || getTeam(player) != meTeam)
        .forEach(enemy => {
            const enemyWeapon = findWeap(enemy);
            // console.log("Processing enemy:", enemy);
            laserPointer(
                findBullet(enemyWeapon),
                enemyWeapon,
                enemy,
                "0",
                0.2,
            )
        });

    }catch(err){
        // console.error('esp', err)
    }
}

const inputCommands = {
    Cancel: 6,
    Count: 36,
    CycleUIMode: 30,
    EmoteMenu: 31,
    EquipFragGrenade: 15,
    EquipLastWeap: 19,
    EquipMelee: 13,
    EquipNextScope: 22,
    EquipNextWeap: 17,
    EquipOtherGun: 20,
    EquipPrevScope: 21,
    EquipPrevWeap: 18,
    EquipPrimary: 11,
    EquipSecondary: 12,
    EquipSmokeGrenade: 16,
    EquipThrowable: 14,
    Fire: 4,
    Fullscreen: 33,
    HideUI: 34,
    Interact: 7,
    Loot: 10,
    MoveDown: 3,
    MoveLeft: 0,
    MoveRight: 1,
    MoveUp: 2,
    Reload: 5,
    Revive: 8,
    StowWeapons: 27,
    SwapWeapSlots: 28,
    TeamPingMenu: 32,
    TeamPingSingle: 35,
    ToggleMap: 29,
    Use: 9,
    UseBandage: 23,
    UseHealthKit: 24,
    UsePainkiller: 26,
    UseSoda: 25,
};
let inputs = [];
window.initGameControls = function(gameControls){
    for (const command of inputs){
        gameControls.addInput(inputCommands[command]);
    }
    inputs = [];



    if (window.game.input.mouseButtons['0'] && window.aimTouchMoveDir) {
        if (window.aimTouchDistanceToEnemy < 4) gameControls.addInput(inputCommands['EquipMelee']);
        gameControls.touchMoveActive = true;
        gameControls.touchMoveLen = 255;
        gameControls.touchMoveDir.x = window.aimTouchMoveDir.x;
        gameControls.touchMoveDir.y = window.aimTouchMoveDir.y;
    }

    const curWeapIdx = window.game.activePlayer.localData.curWeapIdx;
    const weaps = window.game.activePlayer.localData.weapons;
    const curWeap = weaps[curWeapIdx];
    if(autoStopEnabled
        && window.game.input.mouseButtons['0'] 
        // && window.lastAimPos 
        && window.game.activePlayer.localData.curWeapIdx != 2 && window.game.activePlayer.localData.curWeapIdx != 3
        && (window.guns[curWeap.type].fireMode !== "auto" || window.guns[curWeap.type].fireMode !== "burst" )
    ){
        if ( ( Date.now() - ammo[curWeapIdx].lastShotDate ) / 1000 < window.guns[curWeap.type].fireDelay ) return gameControls;

        if (gameControls.moveDown){
            gameControls.moveUp = true;
        }
        if (gameControls.moveUp){
            gameControls.moveDown = true;
        }
        if (gameControls.moveLeft){
            gameControls.moveRight = true;
        }
        if (gameControls.moveRight){
            gameControls.moveLeft = true;
        }
    }
    return gameControls
}

function degreesToRadians(degrees) {
    return degrees * (Math.PI / 180);
}

let spinAngle = 0;
const radius = 100; // The radius of the circle
const spinSpeed = 37.5; // Rotation speed (increase for faster speed)
let date = performance.now();
let enemyAimBot = null;
let newEnemyAimBotDate = Date.now();
function aimBot() {

    if (!aimBotEnabled) return;

    Object.defineProperty(window.game.input.mousePos, 'x', {
        get(){
            if (window.game.input.mouseButtons['0'] && window.lastAimPos && window.game.activePlayer.localData.curWeapIdx != 3) {
                return window.lastAimPos.clientX;
            }
            if (!window.game.input.mouseButtons['0'] && !window.game.input.mouseButtons['2'] && window.game.activePlayer.localData.curWeapIdx != 3 && spinBot) {
                spinAngle += spinSpeed;
                return Math.cos(degreesToRadians(spinAngle)) * radius + window.innerWidth / 2;
            }
            return this._x;
        },
        set(value){
            this._x = value;
        }
    });

    Object.defineProperty(window.game.input.mousePos, 'y', {
        get(){
            if (window.game.input.mouseButtons['0'] && window.lastAimPos && window.game.activePlayer.localData.curWeapIdx != 3) {
                return window.lastAimPos.clientY;
            }
            if (!window.game.input.mouseButtons['0'] && !window.game.input.mouseButtons['2'] && window.game.activePlayer.localData.curWeapIdx != 3 && spinBot) {
                return Math.sin(degreesToRadians(spinAngle)) * radius + window.innerHeight / 2;
            }
            return this._y;
        },
        set(value){
            this._y = value;
        }
    });

    const players = window.game.playerBarn.playerPool.pool;
    const me = window.game.activePlayer;

    try {
        const meTeam = getTeam(me);

        let enemy = null;
        let minDistanceToEnemyFromMouse = Infinity;

        players.forEach((player) => {
            if ( enemyAimBot && player.active && !enemyAimBot.dead && me.layer === enemyAimBot.layer && (Date.now() - newEnemyAimBotDate) / 1000 < 0.5) {
                enemy = enemyAimBot;
                return;
            };

            // We miss inactive or dead players
            if (!player.active || player.netData.dead || me.__id === player.__id || me.layer !== player.layer || getTeam(player) == meTeam) return;

            const screenPlayerPos = window.game.camera.pointToScreen({x: player.pos._x, y: player.pos._y});
            const distanceToEnemyFromMouse = Math.hypot(screenPlayerPos.x - window.game.input.mousePos._x, screenPlayerPos.y - window.game.input.mousePos._y);
            
            if (distanceToEnemyFromMouse < minDistanceToEnemyFromMouse) {
                minDistanceToEnemyFromMouse = distanceToEnemyFromMouse;
                enemy = player;
            }
        });

        if (enemy) {
            const meX = me.pos._x;
            const meY = me.pos._y;
            const enemyX = enemy.pos._x;
            const enemyY = enemy.pos._y;

            const distanceToEnemy = Math.hypot(meX - enemyX, meY - enemyY);

            if (enemy != enemyAimBot) {
                enemyAimBot = enemy;
                newEnemyAimBotDate = Date.now();
            }

            const predictedEnemyPos = calculateAimbotTarget(enemy, me);

            if (!predictedEnemyPos) return;

            window.lastAimPos = {
                clientX: predictedEnemyPos.x,
                clientY: predictedEnemyPos.y,
            }
            
            // Autoattack with mobile movement
            if(mobileAttackEnabled && distanceToEnemy <= 8) {
                const moveAngle = calcAngle(enemy.pos, me.pos) + Math.PI;
                window.gameControls.touchMoveActive = true;
                window.aimTouchMoveDir = {
                    x: Math.cos(moveAngle),
                    y: Math.sin(moveAngle),
                }
                window.aimTouchDistanceToEnemy = distanceToEnemy;
            }else{
                window.aimTouchMoveDir = null;
                window.aimTouchDistanceToEnemy = null;
            }

            aimbotDot.style.left = predictedEnemyPos.x + 'px';
            aimbotDot.style.top = predictedEnemyPos.y + 'px';
            aimbotDot.style.display = 'block';
        }else{
            window.aimTouchMoveDir = null;
            window.lastAimPos = null;
            aimbotDot.style.display = 'none';
        }

        date = performance.now();
    } catch (error) {
        // console.error("Error in aimBot:", error);
    }
}

function calcAngle(playerPos, mePos){
    const dx = mePos._x - playerPos._x;
    const dy = mePos._y - playerPos._y;

    return Math.atan2(dy, dx);
}

let lastFrames = {
    enemy: []
}
function calculateAimbotTarget(enemy, curPlayer) {
    if (!enemy || !curPlayer) {
        console.log("Missing enemy or player data");
        return null;
    }
    
    const { pos: enemyPos, posOld: enemyPosOld } = enemy;
    const { pos: curPlayerPos, posOld: curPlayerPosOld } = curPlayer;

    const dateNow = performance.now();

    lastFrames.enemy.push([dateNow, enemyPos]);

    if (!enemyPosOld || !curPlayerPosOld || lastFrames.enemy.length < 10) {
        console.log("Insufficient data for prediction, using current position");
        return window.game.camera.pointToScreen({x: enemyPos._x, y: enemyPos._y});
    }

    if (lastFrames.enemy.length > 10){
        lastFrames.enemy.shift()
    }

    const deltaTime = (dateNow - lastFrames.enemy[0][0]) / 1000; // Time since last frame in seconds

    // Calculate enemy velocity
    const enemyVelocity = {
        x: (enemyPos._x - lastFrames.enemy[0][1]._x) / deltaTime,
        y: (enemyPos._y - lastFrames.enemy[0][1]._y) / deltaTime,
    };

    // Get weapon and bullet data
    const weapon = findWeap(curPlayer);
    const bullet = findBullet(weapon);

    let bulletSpeed;
    if (!bullet) {
        // console.log("Not finded bullet speed, using current position");
        return window.game.camera.pointToScreen({x: enemyPos._x, y: enemyPos._y});
    }

    bulletSpeed = bullet.speed;

    // Quadratic equation for time prediction
    const vex = enemyVelocity.x;
    const vey = enemyVelocity.y;
    const dx = enemyPos._x - curPlayerPos._x;
    const dy = enemyPos._y - curPlayerPos._y;
    const vb = bulletSpeed;

    const a = vb ** 2 - vex ** 2 - vey ** 2;
    const b = -2 * (vex * dx + vey * dy);
    const c = -(dx ** 2) - (dy ** 2);

    let t; 

    if (Math.abs(a) < 1e-6) {
        console.log('Linear solution bullet speed is much greater than velocity')
        t = -c / b;
    } else {
        const discriminant = b ** 2 - 4 * a * c;

        if (discriminant < 0) {
            console.log("No solution, shooting at current position");
            return window.game.camera.pointToScreen({x: enemyPos._x, y: enemyPos._y});
        }

        const sqrtD = Math.sqrt(discriminant);
        const t1 = (-b - sqrtD) / (2 * a);
        const t2 = (-b + sqrtD) / (2 * a);

        t = Math.min(t1, t2) > 0 ? Math.min(t1, t2) : Math.max(t1, t2);
    }


    if (t < 0) {
        console.log("Negative time, shooting at current position");
        return window.game.camera.pointToScreen({x: enemyPos._x, y: enemyPos._y});
    }

    // console.log(`A bullet with the enemy will collide through ${t}`)

    // Calculate predicted position
    const predictedPos = {
        x: enemyPos._x + vex * t,
        y: enemyPos._y + vey * t,
    };

    return window.game.camera.pointToScreen(predictedPos);
}

function findWeap(player) {
    const weapType = player.netData.activeWeapon;
    return weapType && window.guns[weapType] ? window.guns[weapType] : null;
}

function findBullet(weapon) {
    return weapon ? window.bullets[weapon.bulletType] : null;
}


function updateOverlay() {
    overlay.innerHTML = ``;

    const controls = [
        [ '[B] AimBot:', aimBotEnabled ],
        [ '[Z] Zoom:', zoomEnabled ],
        [ '[M] MobileAtk:', mobileAttackEnabled ],
        [ '[Y] SpinBot:', spinBot ],
        // [ '[P] AutoStop:', autoStopEnabled ],
        // [ '[U] AutoSwitch:', autoSwitchEnabled ],
        // [ '[O] gameOptimization:', gameOptimization ],
    ];

    controls.forEach((control, index) => {
        // console.log('control', control);
        let [text, isEnabled] = control;
        text = `${text} ${isEnabled ? 'ON' : 'OFF'}`;

        const line = document.createElement('p');
        line.className = 'krity-control';
        line.style.opacity = isEnabled ? 1 : 0.5;
        line.textContent = text;
        overlay.appendChild(line);
    });
}


const ammo = [
    {
        name: "",
        ammo: 0,
        lastShotDate: Date.now()
    },
    {
        name: "",
        ammo: 0,
        lastShotDate: Date.now()
    },
    {
        name: "",
        ammo: 0,
    },
    {
        name: "",
        ammo: 0,
    },
]


let sniperSwitchEnabled = true;
let sniperSpeed = 'idk';
let sniperSwitchMode = 'SniperSwitch'; // SniperSwitch / SmartSwitch
function autoSwitch(){

    if (!autoSwitchEnabled) return;

    try {
    // console.log("autoSwitch called");
    const curWeapIdx = window.game.activePlayer.localData.curWeapIdx;
    const weaps = window.game.activePlayer.localData.weapons;
    const curWeap = weaps[curWeapIdx];
    // console.log("Current weapon index:", curWeapIdx);
    // console.log("Current weapon:", curWeap);
    const shouldSwitch = gun => {
        let s = false;
        try {
            s =
                (sniperSwitchEnabled
                    ? window.guns[gun].fireMode === "single" ||
                    window.guns[gun].fireMode === "burst"
                    : true) &&
                window.guns[gun].fireDelay >=
                    (typeof sniperSpeed == "number"
                        ? sniperSpeed / 100
                        : 0.45);
        }
        catch (e) {
            // console.error("Sniper Switch",e);
        }
        // console.log("Should switch for gun", gun, ":", s);
        return s;
    }
    weapsEquip = ['EquipPrimary', 'EquipSecondary']
    if(curWeap.ammo !== ammo[curWeapIdx].ammo) {
        otherWeapIdx = (curWeapIdx == 0) ? 1 : 0
        otherWeap = weaps[otherWeapIdx]
        if (curWeap.ammo < ammo[curWeapIdx].ammo && shouldSwitch(curWeap.type) && curWeap.type == ammo[curWeapIdx].type) {
            ammo[curWeapIdx].lastShotDate = Date.now();
            console.log("Switching weapon due to ammo change");
            if ( shouldSwitch(otherWeap.type) && otherWeap.ammo ) { inputs.push(weapsEquip[otherWeapIdx]); }
            else if ( otherWeap.type !== "" ) { inputs.push(weapsEquip[otherWeapIdx]); inputs.push(weapsEquip[curWeapIdx]); }
            else { inputs.push('EquipMelee'); inputs.push(weapsEquip[curWeapIdx]); }
        }
        ammo[curWeapIdx].ammo = curWeap.ammo
        ammo[curWeapIdx].type = curWeap.type
    }
 
    // console.log("autoSwitch completed");
    }catch(err){}
}


document.addEventListener('DOMContentLoaded', () => {
    document.head.append(styles);
    document.head.append(appScript);
    document.head.append(pixiScript);
    document.querySelector('#ui-game').append(overlay);
    document.querySelector('#ui-top-left').insertBefore(krityTitle, document.querySelector('#ui-top-left').firstChild);
    document.querySelector('#ui-game').append(aimbotDot);
    updateOverlay();

});


let colors = {
    container_06: 14934793,
    barn_02: 14934793,
    stone_02: 1654658,
    tree_03: 16777215,
    stone_04: 0xeb175a,
    stone_05: 0xeb175a,
    bunker_storm_01: 14934793,
},
sizes = {
    stone_02: 4,
    tree_03: 2,
    stone_04: 2,
    stone_05: 2,
};

window.mapColorizing = map => {
    map.forEach(object => {
        if ( !colors[object.obj.type] ) return;
        object.shapes.forEach(shape => {
            shape.color = colors[object.obj.type];
            console.log(object);
            if ( !sizes[object.obj.type] ) return;
            shape.scale = sizes[object.obj.type];
            console.log(object);
        });
    });
}

console.log('Script injected')


let lastTime = Date.now();
let showing = false;
let timer = null;
function grenadeTimer(){
    try{
    let elapsed = (Date.now() - lastTime) / 1000;
    const player = window.game.activePlayer;
    const activeItem = player.netData.activeWeapon;

    if (3 !== window.game.activePlayer.localData.curWeapIdx 
        || player.throwableState !== "cook"
        || (!activeItem.includes('frag') && !activeItem.includes('mirv') && !activeItem.includes('martyr_nade'))
    )
        return (
            (showing = false),
            timer && timer.destroy(),
            (timer = false)
        );
    const time = 4;

    if(elapsed > time) {
        showing = false;
    }
    if(!showing) {
        if(timer) {
            timer.destroy();
        }
        timer = new window.pieTimerClass();
        window.game.pixi.stage.addChild(timer.container);
        timer.start("Grenade", 0, time);
        showing = true;
        lastTime = Date.now();
        return;
    }
    timer.update(elapsed - timer.elapsed, window.game.camera);
    }catch(err){}
}

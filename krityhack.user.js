// ==UserScript==
// @name         Survev-KrityHack
// @namespace    https://github.com/Drino955/survev-krityhack
// @version      0.1.6
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
    appScript.src = '//cdn.jsdelivr.net/gh/drino955/survev-krityhack@latest/survev/app.js';
} else if(window.location.hostname === 'resurviv.biz')  {
    console.log('Resurviv.biz detected');
    appScript.src = '//cdn.jsdelivr.net/gh/drino955/survev-krityhack@latest/resurviv/app.js';
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
let spinBot = true;

let espEnabled = true;
let xrayEnabled = true;

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
        case 'X': spinBot = !spinBot; break;
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
function initGame() {
    console.log('init game...........');

    window.lastAimPos = null;
    window.aimTouchMoveDir = null;

    const tasks = [
        {isApplied: false, condition: () => window.game?.activePlayer?.localData, action: betterScale},
        {isApplied: false, condition: () => window.game?.map?.obstaclePool?.pool != undefined, action: obstacleOpacity},
        {isApplied: false, condition: () => Array.prototype.push === window.game?.smokeBarn?.particles.push, action: smokeOpacity},
        {isApplied: false, condition: () => Array.prototype.push === window.game?.playerBarn?.playerPool?.pool.push, action: visibleNames},
        {isApplied: false, condition: () => window.game?.pixi?._ticker && window.game?.activePlayer?.container && window.game?.activePlayer?.pos, action: () => { if (!espOneTime) { window.game?.pixi?._ticker?.add(esp); espOneTime = true; } } },
        {isApplied: false, condition: () => window.game?.pixi?._ticker && window.game?.activePlayer?.container && window.game?.activePlayer?.pos, action: () => { if (!aimBotOneTime) { window.game?.pixi?._ticker?.add(aimBot); aimBotOneTime = true; } } },
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
    setInterval(() => {
        window.game.map.obstaclePool.pool.forEach(obstacle => {
            if (!['bush', 'tree', 'table', 'stairs'].some(substring => obstacle.type.includes(substring))) return;
            obstacle.sprite.alpha = 0.45
        });
    });
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
        console.error("PIXI object not found in game.");
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

    }catch{}
}

window.initGameControls = function(gameControls){
    if (window.game.input.mouseButtons['0'] && window.aimTouchMoveDir) {
        window.gameControls.addInput(13); // melee
        gameControls.touchMoveActive = true;
        gameControls.touchMoveLen = 255;
        gameControls.touchMoveDir.x = window.aimTouchMoveDir.x;
        gameControls.touchMoveDir.y = window.aimTouchMoveDir.y;
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
function aimBot() {

    if (!aimBotEnabled) return;

    Object.defineProperty(window.game.input.mousePos, 'x', {
        get(){
            if (window.game.input.mouseButtons['0'] && window.lastAimPos && window.game.activePlayer.localData.curWeapIdx != 3) return window.lastAimPos.clientX;
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
            if (window.game.input.mouseButtons['0'] && window.lastAimPos && window.game.activePlayer.localData.curWeapIdx != 3) return window.lastAimPos.clientY;
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
        const meX = me.pos._x;
        const meY = me.pos._y;
        const meTeam = getTeam(me);

        let closestEnemy = null;
        let distanceToEnemy = Infinity;
        let minDistanceToPlayerFromMouse = Infinity;

        players.forEach((player) => {
            // We miss inactive or dead players
            if (!player.active || player.netData.dead || me.__id === player.__id || me.layer !== player.layer) return;

            const playerTeam = getTeam(player);
            if (playerTeam === meTeam) return; // We miss the allies

            const playerX = player.pos._x;
            const playerY = player.pos._y;
            const distanceToPlayer = Math.hypot(meX - playerX, meY - playerY);
            const screenPlayerPos = window.game.camera.pointToScreen({x: player.pos._x, y: player.pos._y});
            const distanceToPlayerFromMouse = Math.hypot(screenPlayerPos.x - window.game.input.mousePos._x, screenPlayerPos.y - window.game.input.mousePos._y);

            if (distanceToPlayerFromMouse < minDistanceToPlayerFromMouse) {
                minDistanceToPlayerFromMouse = distanceToPlayerFromMouse;
                distanceToEnemy = distanceToPlayer;
                closestEnemy = player;
            }
        });

        if (closestEnemy) {
            const predictedEnemyPos = calculateAimbotTarget(closestEnemy, me);

            if (!predictedEnemyPos) return;

            window.lastAimPos = {
                clientX: predictedEnemyPos.x,
                clientY: predictedEnemyPos.y,
            }
            
            // Autoattack with mobile movement
            if(mobileAttackEnabled && distanceToEnemy <= 8) {
                window.game.activePlayer.localData.curWeapIdx = 2; // fists/katana/...
                const moveAngle = calcAngle(closestEnemy.pos, me.pos) + Math.PI;
                window.gameControls.touchMoveActive = true;

                window.aimTouchMoveDir = {
                    x: Math.cos(moveAngle),
                    y: Math.sin(moveAngle),
                }
            }else{
                window.aimTouchMoveDir = null;
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
        console.error("Error in aimBot:", error);
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
        console.log("Not finded bullet speed, using current position");
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
        [ '[X] SpinBot:', spinBot ],
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
    },
    {
        name: "",
        ammo: 0,
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




document.addEventListener('DOMContentLoaded', () => {
    document.head.append(styles);
    document.head.append(appScript);
    document.head.append(pixiScript);
    document.querySelector('#ui-game').append(overlay);
    document.querySelector('#ui-top-left').insertBefore(krityTitle, document.querySelector('#ui-top-left').firstChild);
    document.querySelector('#ui-game').append(aimbotDot);
    updateOverlay();

});

console.log('Script injected')

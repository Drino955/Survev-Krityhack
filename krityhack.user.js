// ==UserScript==
// @name         Survev-KrityHack
// @namespace    https://github.com/Drino955/survev-krityhack
// @version      0.1.1
// @description  Aimbot, xray, tracer, better zoom, smoke/obstacle opacity, autoloot, player names...
// @author       KrityTeam
// @match        *://survev.io/*
// @icon         https://www.google.com/s2/favicons?domain=survev.io
// @grant        none
// @run-at       document-end
// @webRequest   [{"selector":"*app-*.js","action":"cancel"}]
// @webRequest   [{"selector":"*shared-*.js","action":"cancel"}]
// @homepageURL  https://github.com/Drino955/survev-krityhack
// @updateURL    https://raw.githubusercontent.com/Drino955/survev-krityhack/main/krityhack.user.js
// @downloadURL  https://raw.githubusercontent.com/Drino955/survev-krityhack/main/krityhack.user.js
// @supportURL   https://github.com/Drino955/survev-krityhack/issues
// ==/UserScript==


console.log('Script injecting...')

window.AlguienClientEnabled = false;

// cannot insert through tampermonkey require cause "Cannot use import statement outside a module"
const appScript = document.createElement('script');
appScript.type = 'module';
appScript.src = '//cdn.jsdelivr.net/gh/drino955/survev-krityhack@latest/survev/app.js';
appScript.onload = () => console.log('app.js loaded');
appScript.onerror = (err) => console.error('Error in app.js loading:', err);
document.head.append(appScript);

const sharedScript = document.createElement('link');
sharedScript.rel = 'modulepreload';
sharedScript.href = '//cdn.jsdelivr.net/gh/drino955/survev-krityhack@latest/survev/shared.js';
sharedScript.onload = () => console.log('shared.js loaded');
sharedScript.onerror = (err) => console.error('Error in shared.js loading:', err);
document.head.append(sharedScript);

const pixiScript = document.createElement('script');
pixiScript.src = 'https://cdnjs.cloudflare.com/ajax/libs/pixi.js/7.0.3/pixi.min.js';
pixiScript.onload = () => console.log('pixi.js loaded');
pixiScript.onerror = (err) => console.error('Error in pixi.js loading:', err);
document.head.append(pixiScript);

let espEnabled = true;
let aimBotEnabled = true;
let xrayEnabled = true;
let zoomEnabled = true;

const version = '0.1.0';


const overlay = document.createElement('div');
overlay.className = 'krity-overlay';
document.querySelector('#ui-game').appendChild(overlay);

const krityTitle = document.createElement('h3');
krityTitle.className = 'krity-title';
krityTitle.innerText = `KrityHack ${version}`;
document.querySelector('#ui-top-left').insertBefore(krityTitle, document.querySelector('#ui-top-left').firstChild);



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
document.head.append(styles);


const aimbotDot = document.createElement('div')
aimbotDot.className = 'aimbotDot';
document.querySelector('#ui-game').appendChild(aimbotDot);


window.addEventListener('keyup', function (event) {
    switch (String.fromCharCode(event.keyCode)) {
        case 'N': espEnabled = !espEnabled; break;
        case 'B': aimBotEnabled = !aimBotEnabled; break;
        case 'H': xrayEnabled = !xrayEnabled; break;
        case 'Z': zoomEnabled = !zoomEnabled; break;
    }
    updateOverlay();
});

updateOverlay();



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
        if(!window.game.ws) return;

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
    const me = window.game.activePlayer; // Текущий игрок
    const players = window.game.playerBarn.playerPool.pool; // Список игроков

    // Проверяем, есть ли объект PIXI, иначе создаем новый
    if (!pixi || me?.container == undefined) {
        console.error("PIXI object not found in game.");
        return;
    }

    
    try{

    // Создаем графический объект, если он не существует
    if (!me.container.lineDrawer) {
        me.container.lineDrawer = new PIXI.Graphics();
        me.container.addChild(me.container.lineDrawer);
    }
        
    const lineDrawer = me.container.lineDrawer;
    lineDrawer.clear(); // Очистка предыдущих линий
    const meX = me.pos.x;
    const meY = me.pos.y;

    const meTeam = getTeam(me);

    // Проходим по каждому игроку
    players.forEach((player) => {
        // Пропускаем неактивных или мертвых игроков
        if (!player.active || player.netData.dead || me.__id == player.__id) return;

        const playerX = player.pos.x;
        const playerY = player.pos.y;

        const playerTeam = getTeam(player);

        // Вычисляем цвет линии (например, красный для врагов)
        const lineColor = playerTeam === meTeam ? BLUE : me.layer === player.layer ? RED : WHITE; // green/red

        // Рисуем линию от текущего игрока к другому игроку
        lineDrawer.lineStyle(2, lineColor, 1);
        lineDrawer.moveTo(0, 0); // Центр контейнера текущего игрока
        lineDrawer.lineTo(
            (playerX - meX) * 16,
            (meY - playerY) * 16
        );
    });

    }catch{}
}

window.initGameControls = function(gameControls){
    if (window.game.input.mouseButtons['0'] && window.aimTouchMoveDir) {
        gameControls.touchMoveActive = true;
        gameControls.touchMoveLen = 255;
        gameControls.touchMoveDir.x = window.aimTouchMoveDir.x;
        gameControls.touchMoveDir.y = window.aimTouchMoveDir.y;
    }
    return gameControls
}

let date = Date.now();
function aimBot() {

    if (!aimBotEnabled) return;

    Object.defineProperty(window.game.input.mousePos, 'x', {
        get(){
            if (window.game.input.mouseButtons['0'] && window.lastAimPos) return window.lastAimPos.clientX;
            return this._x;
        },
        set(value){
            this._x = value;
        }
    });

    Object.defineProperty(window.game.input.mousePos, 'y', {
        get(){
            if (window.game.input.mouseButtons['0'] && window.lastAimPos) return window.lastAimPos.clientY;
            return this._y;
        },
        set(value){
            this._y = value;
        }
    });

    const players = window.game.playerBarn.playerPool.pool;
    const me = window.game.activePlayer;

    try {
        const meX = me.pos.x;
        const meY = me.pos.y;
        const meTeam = getTeam(me);

        let closestEnemy = null;
        let distanceToEnemy = Infinity;
        let minDistanceToPlayerFromMouse = Infinity;

        players.forEach((player) => {
            // Пропускаем неактивных или мертвых игроков
            if (!player.active || player.netData.dead || me.__id === player.__id || me.layer !== player.layer) return; // добавить еще проверку если под землей

            const playerTeam = getTeam(player);
            if (playerTeam === meTeam) return; // Пропускаем союзников

            const playerX = player.pos.x;
            const playerY = player.pos.y;
            const distanceToPlayer = Math.hypot(meX - playerX, meY - playerY);
            const screenPlayerPos = window.game.camera.pointToScreen(player.pos);
            const distanceToPlayerFromMouse = Math.hypot(screenPlayerPos.x - window.game.input.mousePos.x, screenPlayerPos.y - window.game.input.mousePos.y);

            if (distanceToPlayerFromMouse < minDistanceToPlayerFromMouse) {
                minDistanceToPlayerFromMouse = distanceToPlayerFromMouse;
                distanceToEnemy = distanceToPlayer;
                closestEnemy = player;
            }
        });

        if (closestEnemy) {
            // const { x: screenTargetX, y: screenTargetY } = window.game.camera.pointToScreen(closestEnemy.pos);

            const pos = posCalc(closestEnemy, me);

            if (!pos) return;


            // window.lastAimPos = {
            //     clientX: screenTargetX,
            //     clientY: screenTargetY,
            // }
            window.lastAimPos = {
                clientX: pos.x,
                clientY: pos.y,
            }
            
            // autoattack with mobile movement
            if(distanceToEnemy <= 8) {
                const moveAngle = calcAngle(closestEnemy.pos, me.pos) + Math.PI;
                window.gameControls.touchMoveActive = true;

                window.aimTouchMoveDir = {
                    x: Math.cos(moveAngle),
                    y: Math.sin(moveAngle),
                }
            }

            // aimbotDot.style.left = screenTargetX + 'px';
            // aimbotDot.style.top = screenTargetY + 'px';
            aimbotDot.style.left = pos.x + 'px';
            aimbotDot.style.top = pos.y + 'px';
            aimbotDot.style.display = 'block';
        }else{
            window.aimTouchMoveDir = null;
            window.lastAimPos = null;
            aimbotDot.style.display = 'none';
        }

        date = Date.now();
    } catch (error) {
        console.error("Error in aimBot:", error);
    }
}

function calcAngle(playerPos, mePos){
    const dx = mePos.x - playerPos.x;
    const dy = mePos.y - playerPos.y;

    return Math.atan2(dy, dx);
}

function posCalc(enemy, curPlayer) {
    if(!enemy) {
        return;
    }
    if(!enemy.posOld || !curPlayer.posOld) {
        return window.game.camera.pointToScreen({
            x: enemy.pos.x,
            y: enemy.pos.y,
        });
    }
    let curWeap = findWeap(curPlayer);
    let curBullet = findBullet(curWeap);
    let FPS = (Date.now() - date) * 1.6;
    let bulletSpeed = curBullet ? curBullet.speed / FPS : 1000;
    var enemyPos = enemy.pos;
    var playerPos = curPlayer.pos;
    var distance = calcDistance(
        enemyPos.x,
        enemyPos.y,
        playerPos.x,
        playerPos.y
    );
    var userX = playerPos.x;
    var userY = playerPos.y;
    var enemyDirX = enemyPos.x - enemy.posOld.x;
    var enemyDirY = enemyPos.y - enemy.posOld.y;
    var diffX = enemyPos.x - userX;
    var diffY = enemyPos.y - userY;
    var a =
        enemyDirX * enemyDirX +
        enemyDirY * enemyDirY -
        bulletSpeed * bulletSpeed;
    var b = diffX * enemyDirX + diffY * enemyDirY;
    var c = diffX * diffX + diffY * diffY;
    var d = b * b - a * c;
    if(d < 0) {
        return;
    }
    d = Math.sqrt(d);
    var t = -(b + d) / a;
    var bulletAngle = Math.atan2(
        diffY + enemyDirY + enemyDirY * t,
        diffX + enemyDirX + enemyDirX * t
    );
    var pos = {
        x: playerPos.x + Math.cos(bulletAngle) * distance,
        y: playerPos.y + Math.sin(bulletAngle) * distance,
    };
    return window.game.camera.pointToScreen(pos);
}


function calcDistance(cx, cy, ex, ey) {
    return Math.sqrt(Math.pow(cx - ex, 2) + Math.pow(cy - ey, 2));
}

function findWeap(me) {
    var weapType = me.netData.activeWeapon;
    return weapType && window.guns[weapType] ? window.guns[weapType] : false;
}

function findBullet(curWeapon) {
    return !!curWeapon ? window.bullets[curWeapon.bulletType] : false;
}


// // Вспомогательная функция для плавного изменения угла
// function lerpAngle(current, target, factor) {
//     const delta = target - current;
//     return current + delta * factor;
// }





function updateOverlay() {
    overlay.innerHTML = `
    `;

    const controls = [
        [ '[B] AimBot:', aimBotEnabled ],
        // [ '[N] ESP:', espEnabled ],
        // [ '[H] X-Ray:', xrayEnabled ]
        [ '[Z] Zoom:', zoomEnabled ]
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

console.log('Script injected')
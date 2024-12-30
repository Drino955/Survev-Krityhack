// ==UserScript==
// @name         Survev-KrityHack
// @namespace    https://github.com/Drino955/survev-krityhack
// @version      0.0.8
// @description  Xray, tracer, better zoom, smoke/obstacle opacity, player names for survev.io.
// @author       KrityTeam
// @match        *://survev.io/*
// @icon         https://www.google.com/s2/favicons?domain=survev.io
// @grant        none
// @run-at       document-end
// @webRequest   [{"selector":"*app-*.js","action":"cancel"}]
// @homepageURL  https://github.com/Drino955/survev-krityhack
// @updateURL    https://raw.githubusercontent.com/Drino955/survev-krityhack/main/krityhack.user.js
// @downloadURL  https://raw.githubusercontent.com/Drino955/survev-krityhack/main/krityhack.user.js
// @supportURL   https://github.com/Drino955/survev-krityhack/issues
// ==/UserScript==


console.log('Script injecting...')

// cannot insert through tampermonkey require cause "Cannot use import statement outside a module"
const script = document.createElement('script');
script.type = 'module';
script.src = '//cdn.jsdelivr.net/gh/drino955/survev-krityhack/survev/app.js';
script.onload = () => console.log('app.js loaded');
script.onerror = (err) => console.error('Error in app.js loading:', err);
document.head.append(script);

const pixiScript = document.createElement('script');
pixiScript.src = 'https://cdnjs.cloudflare.com/ajax/libs/pixi.js/7.0.3/pixi.min.js';
document.head.append(pixiScript);

let espEnabled = false;
let aimbotEnabled = false;
let xrayEnabled = true;
let zoomEnabled = true;


const overlay = document.createElement('div');
overlay.className = 'krity-overlay';
document.querySelector('#ui-game').appendChild(overlay);

const styles = document.createElement('style');
styles.innerHTML = `
.krity-overlay{
    position: absolute;
    top: 100px;
    left: 0px;
    width: 100%;
    pointer-events: None;
    color: #fff;
    font-family: monospace;
}

.krity-control{
    text-align: center;
    margin-top: 3px;
    margin-bottom: 3px;
    font-size: 20px;
}
`;
document.head.append(styles);

window.addEventListener('keyup', function (event) {
    switch (String.fromCharCode(event.keyCode)) {
        case 'N': espEnabled = !espEnabled; break;
        case 'B': aimbotEnabled = !aimbotEnabled; break;
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
                    if (args[0].includes('ceiling') || args[0].includes('map-snow-')) {
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

function initGame() {
    console.log('init game...........');

    window.lastAimPos = null;
    window.aimTouchMoveDir = null;

    const tasks = [
        {isApplied: false, condition: () => window.game?.activePlayer?.localData, action: betterScale},
        {isApplied: false, condition: () => window.game?.map?.obstaclePool?.pool != undefined, action: obstacleOpacity},
        {isApplied: false, condition: () => Array.prototype.push === window.game?.smokeBarn?.particles.push, action: smokeOpacity},
        {isApplied: false, condition: () => Array.prototype.push === window.game?.playerBarn?.playerPool?.pool.push, action: visibleNames},
        {isApplied: false, condition: () => window.game?.pixi?._ticker && window.game?.activePlayer?.container, action: () => window.game?.pixi?._ticker?.add(esp)},
        {isApplied: false, condition: () => window.game?.pixi?._ticker && window.game?.activePlayer?.container, action: () => window.game?.pixi?._ticker?.add(aimBot)},
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

    let minDistanceToPlayer = Infinity;
    let minPlayer;

    // Проходим по каждому игроку
    players.forEach((player) => {
        // Пропускаем неактивных или мертвых игроков
        if (!player.active || player.netData.dead || me.__id == player.__id) return;

        const playerX = player.pos.x;
        const playerY = player.pos.y;

        const playerTeam = getTeam(player);

        const distanceToPlayer = Math.hypot(meX - playerX, meY - playerY);

        if (minDistanceToPlayer > distanceToPlayer) {
            minDistanceToPlayer = distanceToPlayer;
            minPlayer = player; 
        }

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

    // console.log(minPlayer?.nameText?._text, minDistanceToPlayer, minPlayer?.pos?.x, minPlayer?.pos?.y);

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

function aimBot() {
    const pixi = window.game.pixi;
    const me = window.game.activePlayer; // Текущий игрок
    const players = window.game.playerBarn.playerPool.pool; // Список игроков

    if (!pixi || me?.container === undefined) {
        console.error("PIXI object not found in game.");
        return;
    }


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

    try {
        const meX = me.pos.x;
        const meY = me.pos.y;
        const meTeam = getTeam(me);

        let closestEnemy = null;
        let minDistance = Infinity;

        players.forEach((player) => {
            // Пропускаем неактивных или мертвых игроков
            if (!player.active || player.netData.dead || me.__id === player.__id || me.layer !== player.layer) return; // добавить еще проверку если под землей

            const playerTeam = getTeam(player);
            if (playerTeam === meTeam) return; // Пропускаем союзников

            const playerX = player.pos.x;
            const playerY = player.pos.y;
            const distanceToPlayer = Math.hypot(meX - playerX, meY - playerY);

            if (distanceToPlayer < minDistance) {
                minDistance = distanceToPlayer;
                closestEnemy = player;
            }
        });

        if (closestEnemy) {
            const targetX = closestEnemy.pos.x;
            const targetY = closestEnemy.pos.y;

            const { x: screenTargetX, y: screenTargetY } = window.game.camera.pointToScreen(closestEnemy.pos);

            window.lastAimPos = {
                clientX: screenTargetX,
                clientY: screenTargetY,
            }
            
            if(minDistance <= 8) {
                const moveAngle = calcAngle(closestEnemy.pos, me.pos) + Math.PI;
                window.gameControls.touchMoveActive = true;

                window.aimTouchMoveDir = {
                    x: Math.cos(moveAngle),
                    y: Math.sin(moveAngle),
                }

            }
        }else{
            window.aimTouchMoveDir = null;
        }
    } catch (error) {
        console.error("Error in aimBot:", error);
    }
}

function calcAngle(playerPos, mePos){
    const dx = mePos.x - playerPos.x;
    const dy = mePos.y - playerPos.y;

    return Math.atan2(dy, dx);
}

// Вспомогательная функция для плавного изменения угла
function lerpAngle(current, target, factor) {
    const delta = target - current;
    return current + delta * factor;
}





function updateOverlay() {
    overlay.innerHTML = '';

    const controls = [
        // [ '[B] Aimbot', aimbotEnabled ],
        // [ '[N] ESP', espEnabled ],
        // [ '[H] X-Ray', xrayEnabled ]
        [ '[Z] Zoom', zoomEnabled ]
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
import { state } from '../vars.js';
import { getTeam } from '../utils.js';
import { updateOverlay, aimbotDot } from '../overlay.js';
import { findBullet, findWeap } from '../utils.js';


export function aimBot() {

    if (!state.isAimBotEnabled) return;

    const players = unsafeWindow.game.playerBarn.playerPool.pool;
    const me = unsafeWindow.game.activePlayer;

    try {
        const meTeam = getTeam(me);

        let enemy = null;
        let minDistanceToEnemyFromMouse = Infinity;
        
        if (state.focusedEnemy && state.focusedEnemy.active && !state.focusedEnemy.netData.dead) {
            enemy = state.focusedEnemy;
        }else{
            if (state.focusedEnemy){
                state.focusedEnemy = null;
                updateOverlay();
            }

            players.forEach((player) => {
                // We miss inactive or dead players
                if (!player.active || player.netData.dead || (!state.isAimAtKnockedOutEnabled && player.downed) || me.__id === player.__id || me.layer !== player.layer || getTeam(player) == meTeam || state.friends.includes(player.nameText._text)) return;
    
                const screenPlayerPos = unsafeWindow.game.camera.pointToScreen({x: player.pos._x, y: player.pos._y});
                // const distanceToEnemyFromMouse = Math.hypot(screenPlayerPos.x - unsafeWindow.game.input.mousePos._x, screenPlayerPos.y - unsafeWindow.game.input.mousePos._y);
                const distanceToEnemyFromMouse = (screenPlayerPos.x - unsafeWindow.game.input.mousePos._x) ** 2 + (screenPlayerPos.y - unsafeWindow.game.input.mousePos._y) ** 2;
                
                if (distanceToEnemyFromMouse < minDistanceToEnemyFromMouse) {
                    minDistanceToEnemyFromMouse = distanceToEnemyFromMouse;
                    enemy = player;
                }
            });
        }

        if (enemy) {
            const meX = me.pos._x;
            const meY = me.pos._y;
            const enemyX = enemy.pos._x;
            const enemyY = enemy.pos._y;

            const distanceToEnemy = Math.hypot(meX - enemyX, meY - enemyY);
            // const distanceToEnemy = (meX - enemyX) ** 2 + (meY - enemyY) ** 2;

            if (enemy != state.enemyAimBot) {
                state.enemyAimBot = enemy;
                state.lastFrames[enemy.__id] = [];
            }

            const predictedEnemyPos = calculatePredictedPosForShoot(enemy, me);

            if (!predictedEnemyPos) return;

            unsafeWindow.lastAimPos = {
                clientX: predictedEnemyPos.x,
                clientY: predictedEnemyPos.y,
            }
            
            // AutoMelee
            if(state.isMeleeAttackEnabled && distanceToEnemy <= 8) {
                const moveAngle = calcAngle(enemy.pos, me.pos) + Math.PI;
                unsafeWindow.aimTouchMoveDir = {
                    x: Math.cos(moveAngle),
                    y: Math.sin(moveAngle),
                }
                unsafeWindow.aimTouchDistanceToEnemy = distanceToEnemy;
            }else{
                unsafeWindow.aimTouchMoveDir = null;
                unsafeWindow.aimTouchDistanceToEnemy = null;
            }

            if (aimbotDot.style.left !== predictedEnemyPos.x + 'px' || aimbotDot.style.top !== predictedEnemyPos.y + 'px') {
                aimbotDot.style.left = predictedEnemyPos.x + 'px';
                aimbotDot.style.top = predictedEnemyPos.y + 'px';
                aimbotDot.style.display = 'block';
            }
        }else{
            unsafeWindow.aimTouchMoveDir = null;
            unsafeWindow.lastAimPos = null;
            aimbotDot.style.display = 'none';
        }
    } catch (error) {
        console.error("Error in aimBot:", error);
    }
}

export function aimBotToggle(){
    state.isAimBotEnabled = !state.isAimBotEnabled;
    if (state.isAimBotEnabled) return;

    aimbotDot.style.display = 'None';
    unsafeWindow.lastAimPos = null;
    unsafeWindow.aimTouchMoveDir = null;
}

export function meleeAttackToggle(){
    state.isMeleeAttackEnabled = !state.isMeleeAttackEnabled;
    if (state.isMeleeAttackEnabled) return;

    unsafeWindow.aimTouchMoveDir = null;
}

function calculatePredictedPosForShoot(enemy, curPlayer) {
    if (!enemy || !curPlayer) {
        console.log("Missing enemy or player data");
        return null;
    }
    
    const { pos: enemyPos } = enemy;
    const { pos: curPlayerPos } = curPlayer;

    const dateNow = performance.now();

    if ( !(enemy.__id in state.lastFrames) ) state.lastFrames[enemy.__id] = [];
    state.lastFrames[enemy.__id].push([dateNow, { ...enemyPos }]);

    if (state.lastFrames[enemy.__id].length < 30) {
        console.log("Insufficient data for prediction, using current position");
        return unsafeWindow.game.camera.pointToScreen({x: enemyPos._x, y: enemyPos._y});
    }

    if (state.lastFrames[enemy.__id].length > 30){
        state.lastFrames[enemy.__id].shift();
    }

    const deltaTime = (dateNow - state.lastFrames[enemy.__id][0][0]) / 1000; // Time since last frame in seconds

    const enemyVelocity = {
        x: (enemyPos._x - state.lastFrames[enemy.__id][0][1]._x) / deltaTime,
        y: (enemyPos._y - state.lastFrames[enemy.__id][0][1]._y) / deltaTime,
    };

    const weapon = findWeap(curPlayer);
    const bullet = findBullet(weapon);

    let bulletSpeed;
    if (!bullet) {
        bulletSpeed = 1000;
    }else{
        bulletSpeed = bullet.speed;
    }


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
            return unsafeWindow.game.camera.pointToScreen({x: enemyPos._x, y: enemyPos._y});
        }

        const sqrtD = Math.sqrt(discriminant);
        const t1 = (-b - sqrtD) / (2 * a);
        const t2 = (-b + sqrtD) / (2 * a);

        t = Math.min(t1, t2) > 0 ? Math.min(t1, t2) : Math.max(t1, t2);
    }


    if (t < 0) {
        console.log("Negative time, shooting at current position");
        return unsafeWindow.game.camera.pointToScreen({x: enemyPos._x, y: enemyPos._y});
    }

    // console.log(`A bullet with the enemy will collide through ${t}`)

    const predictedPos = {
        x: enemyPos._x + vex * t,
        y: enemyPos._y + vey * t,
    };

    return unsafeWindow.game.camera.pointToScreen(predictedPos);
}

function calcAngle(playerPos, mePos){
    const dx = mePos._x - playerPos._x;
    const dy = mePos._y - playerPos._y;

    return Math.atan2(dy, dx);
}
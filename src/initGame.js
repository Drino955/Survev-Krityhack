import { updateOverlay  } from './overlay.js';
import { bumpFire } from './plugins/bumpFire.js';
import { overrideMousePos } from './overrideMousePos.js';
import { betterZoom } from './plugins/betterZoom.js';
import { smokeOpacity } from './plugins/smokeOpacity.js';
import { visibleNames } from './plugins/visibleNames.js';
import { initTicker } from './initTicker.js';
import { state } from './vars.js';


let tickerOneTime = false;
export function initGame() {
    console.log('init game...........');

    unsafeWindow.lastAimPos = null;
    unsafeWindow.aimTouchMoveDir = null;
    state.enemyAimBot = null;
    state.focusedEnemy = null;
    state.friends = [];
    state.lastFrames = {};

    const tasks = [
        {isApplied: false, condition: () => unsafeWindow.game?.input?.mousePos && unsafeWindow.game?.touch?.aimMovement?.toAimDir, action: overrideMousePos},
        {isApplied: false, condition: () => unsafeWindow.game?.input?.mouseButtonsOld, action: bumpFire},
        {isApplied: false, condition: () => unsafeWindow.game?.activePlayer?.localData, action: betterZoom},
        {isApplied: false, condition: () => Array.prototype.push === unsafeWindow.game?.smokeBarn?.particles.push, action: smokeOpacity},
        {isApplied: false, condition: () => Array.prototype.push === unsafeWindow.game?.playerBarn?.playerPool?.pool.push, action: visibleNames},
        {isApplied: false, condition: () => unsafeWindow.game?.pixi?._ticker && unsafeWindow.game?.activePlayer?.container && unsafeWindow.game?.activePlayer?.pos, action: () => { if (!tickerOneTime) { tickerOneTime = true; initTicker(); } } },
    ];

    (function checkLocalData(){
        if(!unsafeWindow?.game?.ws) return;

        console.log('Checking local data')

        console.log(
            unsafeWindow.game?.activePlayer?.localData, 
            unsafeWindow.game?.map?.obstaclePool?.pool,
            unsafeWindow.game?.smokeBarn?.particles,
            unsafeWindow.game?.playerBarn?.playerPool?.pool
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

    updateOverlay();
}


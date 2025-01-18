import { state } from '../vars.js';
import { aimbotDot } from '../overlay.js';
import { updateOverlay } from '../overlay.js';
import { getTeam } from '../utils.js';


function keybinds(){
    window.addEventListener('keyup', function (event) {
        if (!window?.game?.ws) return;

        const validKeys = ['B', 'Z', 'M', 'Y', 'T'];
        if (!validKeys.includes(String.fromCharCode(event.keyCode))) return;
    
        switch (String.fromCharCode(event.keyCode)) {
            case 'B': 
                state.isAimBotEnabled = !state.isAimBotEnabled; 
                aimbotDot.style.display = 'None';
                window.lastAimPos = null;
                window.aimTouchMoveDir = null;
                break;
            case 'Z': state.isZoomEnabled = !state.isZoomEnabled; break;
            case 'M': 
                state.isMeleeAttackEnabled = !state.isMeleeAttackEnabled;
                window.aimTouchMoveDir = null;
                break;
            case 'Y': state.isSpinBotEnabled = !state.isSpinBotEnabled; break;
            case 'T': 
                if(state.focusedEnemy){
                    state.focusedEnemy = null;
                }else{
                    if (!state.enemyAimBot?.active || state.enemyAimBot?.netData?.dead) break;
                    state.focusedEnemy = state.enemyAimBot;
                }
                break;
            // case 'P': autoStopEnabled = !autoStopEnabled; break;
            // case 'U': autoSwitchEnabled = !autoSwitchEnabled; break;
            // case 'O': window.gameOptimization = !window.gameOptimization; break;
        }
        updateOverlay();
    });
    
    window.addEventListener('keydown', function (event) {
        if (!window?.game?.ws) return;

        const validKeys = ['M', 'T'];
        if (!validKeys.includes(String.fromCharCode(event.keyCode))) return;
    
        switch (String.fromCharCode(event.keyCode)) {
            case 'M': 
                event.stopImmediatePropagation()
                event.stopPropagation();
                event.preventDefault();
                break;
            case 'T': 
                event.stopImmediatePropagation()
                event.stopPropagation();
                event.preventDefault();
                break;
        }
    });

    window.addEventListener('mousedown', function (event) {
        if (event.button !== 1) return; // Only proceed if middle mouse button is clicked

        const mouseX = event.clientX;
        const mouseY = event.clientY;

        const players = window.game.playerBarn.playerPool.pool;
        const me = window.game.activePlayer;
        const meTeam = getTeam(me);

        let enemy = null;
        let minDistanceToEnemyFromMouse = Infinity;

        players.forEach((player) => {
            // We miss inactive or dead players
            if (!player.active || player.netData.dead || player.downed || me.__id === player.__id || getTeam(player) == meTeam) return;

            const screenPlayerPos = window.game.camera.pointToScreen({x: player.pos._x, y: player.pos._y});
            const distanceToEnemyFromMouse = (screenPlayerPos.x - mouseX) ** 2 + (screenPlayerPos.y - mouseY) ** 2;

            if (distanceToEnemyFromMouse < minDistanceToEnemyFromMouse) {
                minDistanceToEnemyFromMouse = distanceToEnemyFromMouse;
                enemy = player;
            }
        });

        if (enemy) {
            const enemyIndex = state.friends.indexOf(enemy.nameText._text);
            if (~enemyIndex) {
                state.friends.splice(enemyIndex, 1);
                console.log(`Removed player with name ${enemy.nameText._text} from friends.`);
            }else {
                state.friends.push(enemy.nameText._text);
                console.log(`Added player with name ${enemy.nameText._text} to friends.`);
            }
        }
    });
}

keybinds();

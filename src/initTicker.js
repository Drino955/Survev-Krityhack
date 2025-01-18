import { esp } from './plugins/esp.js';
import { aimBot } from './plugins/aimbot.js';
import { autoSwitch } from './plugins/autoSwitch.js';
import { obstacleOpacity } from './plugins/obstacleOpacity.js';
import { grenadeTimer } from './plugins/grenadeTimer.js';


export function initTicker(){
    window.game.pixi._ticker.add(esp);
    window.game.pixi._ticker.add(aimBot);
    window.game.pixi._ticker.add(autoSwitch);
    window.game.pixi._ticker.add(obstacleOpacity);
    window.game.pixi._ticker.add(grenadeTimer);
}
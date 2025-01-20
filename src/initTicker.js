import { esp } from './plugins/esp.js';
import { aimBot } from './plugins/aimBot.js';
import { autoSwitch } from './plugins/autoSwitch.js';
import { obstacleOpacity } from './plugins/obstacleOpacity.js';
import { grenadeTimer } from './plugins/grenadeTimer.js';


export function initTicker(){
    unsafeWindow.game.pixi._ticker.add(esp);
    unsafeWindow.game.pixi._ticker.add(aimBot);
    unsafeWindow.game.pixi._ticker.add(autoSwitch);
    unsafeWindow.game.pixi._ticker.add(obstacleOpacity);
    unsafeWindow.game.pixi._ticker.add(grenadeTimer);
    unsafeWindow.game.pixi._ticker.add(unsafeWindow.GameMod.startUpdateLoop.bind(unsafeWindow.GameMod));
}
import './injecting.js';
import './plugins/gameOptimization.js';
import './styles.js';
import './overlay.js';
import './plugins/mapColorizing.js';
import './plugins/alguienClient.js';
import './plugins/keybinds.js';
import './plugins/removeCeilings.js';
import './plugins/autoLoot.js';
import { initGame } from './initGame.js';
import './overrideInputs.js';


// init game every time()
function bootLoader(){
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
}

bootLoader(); 
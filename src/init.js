console.log('Script injecting...');
window.ping = {}; // for reverse compatibility

import './plugins/gameOptimization.js';
import './injecting.js'; // Modified App.js and Shared.js so that the script can interact with the game
import './styles.js';
import './overlay.js';
// import { updateOverlay } from './overlay.js';
import './plugins/mapColorizing.js';
import './plugins/alguienClient.js';
import './plugins/keybinds.js';
import './plugins/removeCeilings.js';
import './plugins/autoLoot.js';
import { initGame } from './initGame.js';
import './overrideInputs.js';


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

bootLoader(); // init game every time()


console.log('Script injected')

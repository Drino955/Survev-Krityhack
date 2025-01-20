import { state } from './vars';
import { inputCommands } from './overrideInputs';


let spinAngle = 0;
const radius = 100; // The radius of the circle
const spinSpeed = 37.5; // Rotation speed (increase for faster speed)
export function overrideMousePos() {
    Object.defineProperty(unsafeWindow.game.input.mousePos, 'x', {
        get() {
            if ( (  unsafeWindow.game.touch.shotDetected || unsafeWindow.game.inputBinds.isBindDown(inputCommands.Fire) ) && unsafeWindow.lastAimPos && unsafeWindow.game.activePlayer.localData.curWeapIdx != 3) {
                return unsafeWindow.lastAimPos.clientX;
            }
            if ( !(  unsafeWindow.game.touch.shotDetected || unsafeWindow.game.inputBinds.isBindDown(inputCommands.Fire) ) && !(unsafeWindow.game.inputBinds.isBindPressed(inputCommands.EmoteMenu) || unsafeWindow.game.inputBinds.isBindDown(inputCommands.EmoteMenu)) && unsafeWindow.game.activePlayer.localData.curWeapIdx != 3 && state.isSpinBotEnabled) {
                // SpinBot
                spinAngle += spinSpeed;
                return Math.cos(degreesToRadians(spinAngle)) * radius + unsafeWindow.innerWidth / 2;
            }
            return this._x;
        },
        set(value) {
            this._x = value;
        }
    });

    Object.defineProperty(unsafeWindow.game.input.mousePos, 'y', {
        get() {
            if ( (  unsafeWindow.game.touch.shotDetected || unsafeWindow.game.inputBinds.isBindDown(inputCommands.Fire) ) && unsafeWindow.lastAimPos && unsafeWindow.game.activePlayer.localData.curWeapIdx != 3) {
                return unsafeWindow.lastAimPos.clientY;
            }
            if ( !(  unsafeWindow.game.touch.shotDetected || unsafeWindow.game.inputBinds.isBindDown(inputCommands.Fire) ) && !(unsafeWindow.game.inputBinds.isBindPressed(inputCommands.EmoteMenu) || unsafeWindow.game.inputBinds.isBindDown(inputCommands.EmoteMenu)) && unsafeWindow.game.activePlayer.localData.curWeapIdx != 3 && state.isSpinBotEnabled) {
                return Math.sin(degreesToRadians(spinAngle)) * radius + unsafeWindow.innerHeight / 2;
            }
            return this._y;
        },
        set(value) {
            this._y = value;
        }
    });

}

function degreesToRadians(degrees) {
    return degrees * (Math.PI / 180);
}
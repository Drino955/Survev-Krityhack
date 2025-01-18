import { state } from './vars';


let spinAngle = 0;
const radius = 100; // The radius of the circle
const spinSpeed = 37.5; // Rotation speed (increase for faster speed)
export function overrideMousePos() {
    Object.defineProperty(window.game.input.mousePos, 'x', {
        get() {
            if (window.game.input.mouseButtons['0'] && window.lastAimPos && window.game.activePlayer.localData.curWeapIdx != 3) {
                return window.lastAimPos.clientX;
            }
            if (!window.game.input.mouseButtons['0'] && !window.game.input.mouseButtons['2'] && window.game.activePlayer.localData.curWeapIdx != 3 && state.isSpinBotEnabled) {
                // SpinBot
                spinAngle += spinSpeed;
                return Math.cos(degreesToRadians(spinAngle)) * radius + window.innerWidth / 2;
            }
            return this._x;
        },
        set(value) {
            this._x = value;
        }
    });

    Object.defineProperty(window.game.input.mousePos, 'y', {
        get() {
            if (window.game.input.mouseButtons['0'] && window.lastAimPos && window.game.activePlayer.localData.curWeapIdx != 3) {
                return window.lastAimPos.clientY;
            }
            if (!window.game.input.mouseButtons['0'] && !window.game.input.mouseButtons['2'] && window.game.activePlayer.localData.curWeapIdx != 3 && state.isSpinBotEnabled) {
                return Math.sin(degreesToRadians(spinAngle)) * radius + window.innerHeight / 2;
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
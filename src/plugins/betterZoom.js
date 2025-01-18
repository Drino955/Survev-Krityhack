import { state } from "../vars.js";


export function betterZoom(){
    Object.defineProperty(window.game.camera, 'zoom', {
        get() {
            return Math.max(window.game.camera.targetZoom - (state.isZoomEnabled ? 0.45 : 0), 0.35);
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
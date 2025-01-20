import { inputCommands } from "../overrideInputs";


export function bumpFire(){
    unsafeWindow.game.inputBinds.isBindPressed = new Proxy( unsafeWindow.game.inputBinds.isBindPressed, {
        apply( target, thisArgs, args ) {
            if (args[0] === inputCommands.Fire) {
                return unsafeWindow.game.inputBinds.isBindDown(...args);
            }
            return Reflect.apply( ...arguments );
        }
    });
}

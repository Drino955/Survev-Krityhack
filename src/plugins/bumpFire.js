export function bumpFire(){
    Object.defineProperty( window.game.input, 'mouseButtonsOld', {
        set( value ) {
            // console.log(value);
            // console.table(value);
            value[0] = false;
            this._value = value;
        },
        get() {
            return this._value || {};
        }
    });
}
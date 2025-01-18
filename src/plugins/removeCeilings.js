import { state } from '../vars.js';


function removeCeilings(){
    Object.defineProperty( Object.prototype, 'textureCacheIds', {
        set( value ) {
            this._textureCacheIds = value;
    
            if ( Array.isArray( value ) ) {
                const scope = this;
    
                value.push = new Proxy( value.push, {
                    apply( target, thisArgs, args ) {
                        // console.log(args[0], scope, scope?.baseTexture?.cacheId);
                        // console.log(scope, args[0]);
                        if (args[0].includes('ceiling') && !args[0].includes('map-building-container-ceiling-05') || args[0].includes('map-snow-')) {
                            Object.defineProperty( scope, 'valid', {
                                set( value ) {
                                    this._valid = value;
                                },
                                get() {
                                    return state.isXrayEnabled ? false : this._valid;
                                }
                            });
                        }
                        return Reflect.apply( ...arguments );
    
                    }
                });
    
            }
    
        },
        get() {
            return this._textureCacheIds;
        }
    });
}

removeCeilings();

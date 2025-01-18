import { getTeam } from '../utils.js';
import { state } from '../vars.js';
import { BLUE, RED, GREEN } from '../constants.js';


export function visibleNames(){
    const pool = window.game.playerBarn.playerPool.pool;

    console.log('visibleNames', pool)

    pool.push = new Proxy( pool.push, {
        apply( target, thisArgs, args ) {
            const player = args[0];
            Object.defineProperty(player.nameText, 'visible', {
                get(){
                    const me = window.game.activePlayer;
                    const meTeam = getTeam(me);
                    const playerTeam = getTeam(player);
                    // console.log('visible', player?.nameText?._text, playerTeam === meTeam ? BLUE : RED, player, me, playerTeam, meTeam)
                    this.tint = playerTeam === meTeam ? BLUE : state.friends.includes(player.nameText._text) ? GREEN : RED;
                    player.nameText.style.fontSize = 40;
                    return true;
                },
                set(value){
                }
            });

            return Reflect.apply( ...arguments );
        }
    });

    pool.forEach(player => {
        Object.defineProperty(player.nameText, 'visible', {
            get(){
                const me = window.game.activePlayer;
                const meTeam = getTeam(me);
                const playerTeam = getTeam(player);
                // console.log('visible', player?.nameText?._text, playerTeam === meTeam ? BLUE : RED, player, me, playerTeam, meTeam)
                this.tint = playerTeam === meTeam ? BLUE : RED;
                player.nameText.style.fontSize = 40;
                return true;
            },
            set(value){
            }
        });
    });
}
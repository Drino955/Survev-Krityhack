// ==UserScript==
// @name         Survev.IO-KrityHack: Aimbot, ESP & X-Ray
// @namespace    http://tampermonkey.net/
// @version      0.0.5
// @description  Aimbot and ESP for surviv.io. Locks the aim to the nearest player and shows lines between nearby players. Removes ceilings from buildings and let's you see inside them too.
// @author       KrityTeam
// @match        *://surviv.io/*
// @match        *://survev.io/*
// @match        *://surviv2.io/*
// @match        *://2dbattleroyale.com/*
// @match        *://2dbattleroyale.org/*
// @match        *://piearesquared.info/*
// @match        *://thecircleisclosing.com/*
// @match        *://archimedesofsyracuse.info/*
// @match        *://secantsecant.com/*
// @match        *://parmainitiative.com/*
// @match        *://nevelskoygroup.com/*
// @match        *://kugahi.com/*
// @match        *://chandlertallowmd.com/*
// @match        *://ot38.club/*
// @match        *://kugaheavyindustry.com/*
// @match        *://drchandlertallow.com/*
// @match        *://rarepotato.com/*
// @icon         https://www.google.com/s2/favicons?domain=survev.io
// @grant        none
// @run-at       document-start
// ==/UserScript==


let espEnabled = false;
let aimbotEnabled = false;
let xrayEnabled = false;


const overlay = document.createElement('div');
overlay.className = 'krity-overlay';
document.querySelector('#ui-game').appendChild(overlay);

const styles = document.createElement('style');
styles.innerHTML = `
.krity-overlay{
    position: absolute;
    top: 100px;
    left: 0px;
    width: 100%;
    pointer-events: None;
    color: #fff;
    font-family: monospace;
}

.krity-control{
    text-align: center;
    margin-top: 3px;
    margin-bottom: 3px;
    font-size: 20px;
}
`;
document.head.append(styles);


function updateOverlay() {
    overlay.innerHTML = '';

    const controls = [
        [ '[B] Aimbot', aimbotEnabled ],
        [ '[N] ESP', espEnabled ],
        [ '[H] X-Ray', xrayEnabled ]
    ];

    controls.forEach((control, index) => {
        // console.log('control', control);
        let [text, isEnabled] = control;
        text = `${text} ${isEnabled ? 'ON' : 'OFF'}`;

        const line = document.createElement('p');
        line.className = 'krity-control';
        line.style.opacity = isEnabled ? 1 : 0.5;
        line.textContent = text;
        overlay.appendChild(line);
    });
}



Object.defineProperty( Object.prototype, 'textureCacheIds', {
	set( value ) {
		this._textureCacheIds = value;

		if ( Array.isArray( value ) ) {
			const scope = this;

			value.push = new Proxy( value.push, {
				apply( target, thisArgs, args ) {
					// console.log(args[0], scope, scope?.baseTexture?.cacheId);
                    if (args[0].includes('ceiling') || args[0].includes('map-snow-')) {
						Object.defineProperty( scope, 'valid', {
							set( value ) {
								this._valid = value;
							},
							get() {
								return xrayEnabled ? false : this._valid;
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

// let ctx;
// HTMLCanvasElement.prototype.getContext = new Proxy( HTMLCanvasElement.prototype.getContext, {
// 	apply( target, thisArgs, args ) {
// 		const result = Reflect.apply( ...arguments );
 
// 		if ( thisArgs.parentNode ) {
// 			ctx = result;
//             console.log('ctx', ctx)
// 		}
// 		return result;
// 	}
// });

// const players = [];
// let radius;
// let mouseX = 0, mouseY = 0;

// window.addEventListener( 'mousemove', function ( event ) {
// 	if ( event.dispatchedByMe !== true ) {
// 		mouseX = event.clientX;
// 		mouseY = event.clientY;
// 	}
// });

window.addEventListener('keyup', function (event) {
    switch (String.fromCharCode(event.keyCode)) {
        case 'N': espEnabled = !espEnabled; break;
        case 'B': aimbotEnabled = !aimbotEnabled; break;
        case 'H': xrayEnabled = !xrayEnabled; break;
    }
    updateOverlay();
});

// const Context2D = CanvasRenderingContext2D.prototype;
// console.log('Context2D', Context2D);

// Context2D.drawImage = new Proxy( Context2D.drawImage, {
// 	apply( target, thisArgs, args ) {
//         console.log('drawImage', target, thisArgs, args)
// 		if ( aimbotEnabled && args[0].src && args[0].src.indexOf( 'loadout' ) > -1 && args[8] === 142 ) {
// 			const { a, b, e, f } = thisArgs.getTransform();

// 			radius = Math.hypot( a, b ) * args[8] + 10;

// 			const centerX = thisArgs.canvas.width / 2;
// 			const centerY = thisArgs.canvas.height / 2;

// 			if ( e !== centerX && f !== centerY ) {
// 				players.push( { x: e, y: f });
// 			}
// 		}

// 		return Reflect.apply( ...arguments );
// 	}
// });

// window.requestAnimationFrame = new Proxy( window.requestAnimationFrame, {
// 	apply( target, thisArgs, args ) {
// 		args[0] = new Proxy( args[0], {
// 			apply( target, thisArgs, args ) {
// 				players.length = 0;
// 				Reflect.apply( ...arguments );

// 				if ( players.length === 0 ) {
// 					return;
// 				}

// 				ctx.lineWidth = 5;
// 				ctx.strokeStyle = 'red';

// 				if ( espEnabled ) {
// 					const centerX = ctx.canvas.width / 2;
// 					const centerY = ctx.canvas.height / 2;

// 					ctx.beginPath();

// 					for ( let i = 0; i < players.length; i ++ ) {
// 						const player = players[ i ];

// 						ctx.moveTo( centerX, centerY );
// 						ctx.lineTo( player.x, player.y );
// 					}

// 					ctx.stroke();
// 				}

// 				if ( aimbotEnabled ) {
// 					let minDistance = Infinity;
// 					let targetPlayer;

// 					for ( let i = 0; i < players.length; i ++ ) {
// 						const player = players[ i ];
// 						const distance = Math.hypot( player.x - mouseX, player.y - mouseY );

// 						if ( distance < minDistance ) {
// 							minDistance = distance;
// 							targetPlayer = player;
// 						}
// 					}

// 					ctx.beginPath();

// 					ctx.arc( targetPlayer.x, targetPlayer.y, radius, 0, Math.PI * 2 );

// 					ctx.stroke();

// 					window.dispatchEvent( new MouseEvent( 'mousemove', {
// 						clientX: targetPlayer.x,
// 						clientY: targetPlayer.y,
// 						dispatchedByMe: true
// 					} ) );
// 				}
// 			}
// 		});

// 		return Reflect.apply( ...arguments );
// 	}
// });

updateOverlay();

// window.addEventListener( 'DOMContentLoaded', function () {
// 	const el = document.createElement( 'div' );

// 	el.innerHTML = `<style>

// 	.my-dialog {
// 		position: absolute;
// 		left: 50%;
// 		top: 50%;
// 		padding: 20px;
// 		background: rgba(0, 0, 0, 0.9);
// 		box-shadow: 0 0 0 1000vw rgba(0, 0, 0, 0.5);
// 		border-radius: 5px;
// 		color: #fff;
// 		transform: translate(-50%, -50%);
// 		text-align: center;
// 		z-index: 999999;
// 	}

// 	.my-dialog * {
// 		color: #fff;
// 	}

// 	.my-close {
// 		position: absolute;
// 		right: 5px;
// 		top: 5px;
// 		width: 20px;
// 		height: 20px;
// 		opacity: 0.5;
// 		cursor: pointer;
// 	}

// 	.my-close:before, .my-close:after {
// 		content: ' ';
// 		position: absolute;
// 		left: 50%;
// 		top: 50%;
// 		width: 100%;
// 		height: 20%;
// 		transform: translate(-50%, -50%) rotate(-45deg);
// 		background: #fff;
// 	}

// 	.my-close:after {
// 		transform: translate(-50%, -50%) rotate(45deg);
// 	}

// 	.my-close:hover {
// 		opacity: 1;
// 	}

// 	</style>
// 	<div class="my-dialog">${`<div class="my-close" onclick="this.parentNode.style.display='none';"></div>
// 		<big style="font-size: 2em;">Aimbot, ESP & X-Ray</big>
// 		<br>
// 		<br>
// 		[B] to toggle aimbot
// 		<br>
// 		[H] to toggle x-ray
// 		<br>
// 		[N] to toggle esp
// 		<br>
// 		<br>
// 		By Zertalious
// 		<br>
// 		<br>
// 		` }
// 	</div>`;

// 	while ( el.children.length > 0 ) {

// 		document.body.appendChild( el.children[ 0 ] );

// 	}
// });
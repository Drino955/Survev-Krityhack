import { version } from './constants.js';
import { state } from './vars.js';

const overlay = document.createElement('div');
overlay.className = 'krity-overlay';

const krityTitle = document.createElement('h3');
krityTitle.className = 'krity-title';
krityTitle.innerText = `KrityHack ${version}`;

export const aimbotDot = document.createElement('div')
aimbotDot.className = 'aimbotDot';

export function updateOverlay() {
    overlay.innerHTML = ``;

    const controls = [
        [ '[B] AimBot:', state.isAimBotEnabled, state.isAimBotEnabled ? 'ON' : 'OFF' ],
        [ '[Z] Zoom:', state.isZoomEnabled, state.isZoomEnabled ? 'ON' : 'OFF' ],
        [ '[M] MeleeAtk:', state.meleeStatus, state.meleeStatus ? 'ON' : 'OFF' ],
        [ '[Y] SpinBot:', state.isSpinBotEnabled, state.isSpinBotEnabled ? 'ON' : 'OFF' ],
        [ '[T] FocusedEnemy:', state.focusedEnemyStatus, state.focusedEnemy?.nameText?._text ? state.focusedEnemy?.nameText?._text : 'OFF' ],
        [ '[V] UseOneGun:', state.isUseOneGunEnabled, state.isUseOneGunEnabled ? 'ON' : 'OFF' ],
    ];

    controls.forEach((control, index) => {
        let [name, isEnabled, optionalText] = control;
        const text = `${name} ${optionalText}`;

        const line = document.createElement('p');
        line.className = 'krity-control';
        line.style.opacity = isEnabled ? 1 : 0.5;
        line.textContent = text;
        overlay.appendChild(line);
    });
}

export function overlayToggle(){
    state.isOverlayEnabled = !state.isOverlayEnabled;
    overlay.style.display = state.isOverlayEnabled ? 'block' : 'none';
}

document.querySelector('#ui-game').append(overlay);
document.querySelector('#ui-top-left').insertBefore(krityTitle, document.querySelector('#ui-top-left').firstChild);
document.querySelector('#ui-game').append(aimbotDot);

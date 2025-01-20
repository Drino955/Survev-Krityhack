import { state } from './vars.js';
import { aimBotToggle, meleeAttackToggle } from './plugins/aimBot.js';
import { updateOverlay, overlayToggle } from './overlay.js';
import { version } from './constants.js';


// Создание элемента с заданными стилями
function createElement(tag, styles = {}, innerHTML = '') {
    const element = document.createElement(tag);
    Object.assign(element.style, styles);
    element.innerHTML = innerHTML;
    return element;
}

export function updateButtonColors() {
    const buttons = uiContainer.querySelectorAll('div[data-stateName]');
    buttons.forEach(button => {
        const stateName = button.getAttribute('data-stateName');
        const role = button.getAttribute('data-role');
        const isEnabled = state[stateName];
        button.style.color =  isEnabled && role === 'sub' ? '#a8a922' : isEnabled ? 'white' : '#3e3e3e';
    });
}


// Создание кнопки функции
function createFeatureButton(name, clickHandler, stateName, role='sup') {
    let button;
    if (role === 'sup'){
        button = createElement('div', {
            fontFamily: 'Open Sans, sans-serif',
            fontSize: '18px',
            color: 'white',
            textAlign: 'left',
            cursor: 'pointer',
        }, name);
    }else if(role === 'sub'){
        button = createElement('div', {
            fontFamily: 'Open Sans, sans-serif',
            fontSize: '16px',
            color: '#a8a922',
            textAlign: 'left',
            paddingLeft: '14px',
            cursor: 'pointer',
        }, name);

    }else{
        throw new Error('Invalid role specified for feature button');
    }

    button.setAttribute('data-stateName', stateName);
    button.setAttribute('data-role', role);

    button.addEventListener('click', () => {
        clickHandler();
        updateOverlay();
        updateButtonColors();
    });

    return button;
}

// Создание контейнера UI
const uiContainer = createElement('div', {
    maxWidth: '400px',
    maxHeight: '400px',
    width: '30%',
    height: '60%',
    overflow: 'auto',
    backgroundColor: '#010302',
    borderRadius: '10px',
    position: 'fixed',
    left: '15px',
    top: '50%',
    transform: 'translateY(-50%)',
    display: 'none',
    zIndex: 2147483647,
    userSelect: 'none',
    transition: 'transform 0.2s ease-in-out'
});

uiContainer.addEventListener('mouseenter', () => {
    unsafeWindow.game.inputBinds.menuHovered = true;
});

uiContainer.addEventListener('mouseleave', () => {
    unsafeWindow.game.inputBinds.menuHovered = false;
});

// Создание заголовка
const headerSection = createElement('div', {
    width: '100%',
    backgroundColor: '#3e3e3e'
});
const headerText = createElement('div', {
    fontFamily: 'Open Sans, sans-serif',
    fontSize: '18px',
    color: 'white',
    textAlign: 'left',
    padding: '10px 20px',
    lineHeight: '100%'
}, `KrityHack v${version}`);
headerSection.appendChild(headerText);

// Создание содержимого
const bodyContent = createElement('div', {
    padding: '12px 20px',
    color: 'white',
    fontFamily: 'Open Sans, sans-serif'
});

// Создание кнопок функций
const featureAimbot = createFeatureButton('AimBot', aimBotToggle, 'isAimBotEnabled');

/*
const meleeAttackText = createElement('div', {
    fontFamily: 'Open Sans, sans-serif',
    fontSize: '16px',
    color: '#a8a922',
    textAlign: 'left',
    paddingLeft: '37px',
    display: 'block',
    transform: 'translateY(-2px)',
    textTransform: 'lowercase',
    transition: 'color 0.3s ease, transform 0.2s ease'
}, 'Melee Attack:');
const meleeAttackStatusText = createElement('span', {
    fontFamily: 'Open Sans, sans-serif',
    fontSize: '16px',
    color: '#545d67',
    paddingLeft: '3px'
}, state.isMeleeAttackEnabled ? ' on' : ' off');
meleeAttackText.appendChild(meleeAttackStatusText);

meleeAttackText.addEventListener('click', () => {
    meleeAttackText.style.transform = 'scale(1.1)';
    setTimeout(() => {
        meleeAttackText.style.transform = 'scale(1)';
    }, 200);
    if (state.isMeleeAttackEnabled) {
        meleeAttackStatusText.innerHTML = ' off';
        meleeAttackToggle();
        meleeAttackStatusText.style.color = '#d9534f';
    } else {
        meleeAttackStatusText.innerHTML = ' on';
        state.isMeleeAttackEnabled = !state.isMeleeAttackEnabled;
        meleeAttackStatusText.style.color = '#545d67';
    }
});
*/

const featureTracers = createFeatureButton('Tracers', () => {
    state.isLineDrawerEnabled = !state.isLineDrawerEnabled;
    state.isNadeDrawerEnabled = !state.isNadeDrawerEnabled;
    state.isLaserDrawerEnabled = !state.isLaserDrawerEnabled;
}, 'isLineDrawerEnabled');

const featureFlashlight = createFeatureButton('Flashlight', () => {
    state.isLaserDrawerEnabled = !state.isLaserDrawerEnabled;
}, 'isLaserDrawerEnabled', 'sub');

const featureZoom = createFeatureButton('Zoom', () => {
    state.isZoomEnabled = !state.isZoomEnabled;
}, 'isZoomEnabled');

const featureAimAtDowned = createFeatureButton('Aim at Downed', () => {
    state.isAimAtKnockedOutEnabled = !state.isAimAtKnockedOutEnabled;
}, 'aimAtKnockedOutStatus', 'sub');

const featureMeleeAttack = createFeatureButton('Melee Attack', meleeAttackToggle, 'meleeStatus', 'sub');

const featureSpinBot= createFeatureButton('SpinBot', () => {
    state.isSpinBotEnabled = !state.isSpinBotEnabled;
}, 'isSpinBotEnabled');


const featureUseOneGun = createFeatureButton('UseOneGun', () => {
    state.isUseOneGunEnabled = !state.isUseOneGunEnabled;
}, 'isUseOneGunEnabled');

const featureOverlay = createFeatureButton('Overlay', overlayToggle, 'isOverlayEnabled');

// document.addEventListener('click', event => {
//     const button = event.target.closest('[data-ice-feature-handler]');

//     console.log('btn', button);

//     if (button) {
//         const currentColor = unsafeWindow.getComputedStyle(button).color;
//         button.style.color = currentColor === 'rgb(255, 255, 255)' ? '#3e3e3e' : 'white';
//         const handler = button.dataset.iceFeatureHandler;
//         eval(handler);
//         // if (typeof window[handler] === 'function') {
//         //     window[handler]();
//         // }
//     }
// });

uiContainer.appendChild(headerSection);
bodyContent.appendChild(featureAimbot);
bodyContent.appendChild(featureAimAtDowned);
bodyContent.appendChild(featureMeleeAttack);
// bodyContent.appendChild(meleeAttackText);
bodyContent.appendChild(featureZoom);
bodyContent.appendChild(featureTracers);
bodyContent.appendChild(featureFlashlight);
bodyContent.appendChild(featureSpinBot);
bodyContent.appendChild(featureUseOneGun);
bodyContent.appendChild(featureOverlay);
uiContainer.appendChild(bodyContent);


document.body.appendChild(uiContainer);
updateButtonColors();

function syncMenuVisibility() {
    const gameMenu = document.getElementById('ui-game-menu');
    if (gameMenu) {
        const displayStyle = gameMenu.style.display;
        uiContainer.style.display = displayStyle;
    }
}

// Создаем наблюдатель за изменениями атрибутов
const observer = new MutationObserver(syncMenuVisibility);

// Начинаем наблюдение за изменениями атрибутов у элемента #ui-game-menu
const gameMenu = document.getElementById('ui-game-menu');
if (gameMenu) {
    observer.observe(gameMenu, { attributes: true, attributeFilter: ['style'] });
}

// Добавление стилей анимации
const styleSheet = createElement('style');
styleSheet.innerHTML = `
@keyframes fadeIn {
    0% { opacity: 0; }
    100% { opacity: 1; }
}`;
document.head.appendChild(styleSheet);
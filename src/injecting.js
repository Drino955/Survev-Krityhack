// cannot insert through tampermonkey "require" cause "Cannot use import statement outside a module"
const appScript = document.createElement('script');
appScript.type = 'module';

if (window.location.hostname === 'survev.io') {
    console.log('Survev.io detected');
    appScript.src = '//cdn.jsdelivr.net/gh/drino955/survev-krityhack@621cbd2bb8a2c9b9c4fbe11f892574a9af1dd9dc/survev/app.js';
} else if(window.location.hostname === 'resurviv.biz')  {
    console.log('Resurviv.biz detected');
    appScript.src = '//cdn.jsdelivr.net/gh/drino955/survev-krityhack@621cbd2bb8a2c9b9c4fbe11f892574a9af1dd9dc/resurviv/app.js';
}

appScript.onload = () => console.log('app.js loaded');
appScript.onerror = (err) => console.error('Error in app.js loading:', err);

document.head.append(appScript);
// ==UserScript==
// @name         Survev-KrityHack
// @namespace    https://github.com/Drino955/survev-krityhack
// @version      0.2.1
// @description  Aimbot, xray, tracer, better zoom, smoke/obstacle opacity, autoloot, player names...
// @author       KrityTeam
// @license      GPL3
// @match        *://survev.io/*
// @match        *://resurviv.biz/*
// @icon         https://www.google.com/s2/favicons?domain=survev.io
// @grant        none
// @run-at       document-start
// @webRequest   [{"selector":"*app-*.js","action":"cancel"}]
// @webRequest   [{"selector":"*shared-*.js","action":"cancel"}]
// @require      https://cdnjs.cloudflare.com/ajax/libs/pixi.js/7.0.3/pixi.min.js
// @homepageURL  https://github.com/Drino955/survev-krityhack
// @updateURL    https://raw.githubusercontent.com/Drino955/survev-krityhack/main/krityhack.user.js
// @downloadURL  https://raw.githubusercontent.com/Drino955/survev-krityhack/main/krityhack.user.js
// @supportURL   https://github.com/Drino955/survev-krityhack/issues
// ==/UserScript==


(function () {
    'use strict';

    window.gameOptimization = true;

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

    const fontAwesome = document.createElement('link');
    fontAwesome.rel = "stylesheet";
    fontAwesome.href = "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css";
    document.head.append(fontAwesome);


    const styles = document.createElement('style');
    styles.innerHTML = `
.krity-overlay{
    position: absolute;
    top: 128px;
    left: 0px;
    width: 100%;
    pointer-events: None;
    color: #fff;
    font-family: monospace;
    text-shadow: 0 0 5px rgba(0, 0, 0, .5);
    z-index: 1;
}

.krity-title{
    text-align: center;
    margin-top: 10px;
    margin-bottom: 10px;
    font-size: 25px;
    text-shadow: 0 0 10px rgba(0, 0, 0, .9);
    color: #fff;
    font-family: monospace;
    pointer-events: None;
}

.krity-control{
    text-align: center;
    margin-top: 3px;
    margin-bottom: 3px;
    font-size: 18px;
}

.aimbotDot{
    position: absolute;
    top: 0;
    left: 0;
    width: 10px;
    height: 10px;
    background-color: red;
    transform: translateX(-50%) translateY(-50%);
    display: none;
}

#news-current ul{
    margin-left: 20px;
    padding-left: 6px;
}
`;

    document.head.append(styles);

    // colors
    const GREEN = 0x00ff00;
    const BLUE = 0x00f3f3;
    const RED = 0xff0000;
    const WHITE = 0xffffff;

    // tampermonkey
    const version = GM_info.script.version;

    // let isAimBotEnabled = true;
    // let isZoomEnabled = true;
    // let isMeleeAttackEnabled = true;
    // let isSpinBotEnabled = false;
    // let isAutoSwitchEnabled = true;
    // let focusedEnemy = null;
    // let isXrayEnabled = true;
    // let friends = [];
    // let lastFrames = {};

    // export { isAimBotEnabled, isZoomEnabled, isMeleeAttackEnabled, isSpinBotEnabled, isXrayEnabled, isAutoSwitchEnabled, focusedEnemy, friends, lastFrames };


    let state = {
        isAimBotEnabled: true,
        isZoomEnabled: true,
        isMeleeAttackEnabled: true,
        isSpinBotEnabled: false,
        isAutoSwitchEnabled: true,
        focusedEnemy: null,
        isXrayEnabled: true,
        friends: [],
        lastFrames: {},
        enemyAimBot: null
    };

    const overlay = document.createElement('div');
    overlay.className = 'krity-overlay';

    const krityTitle = document.createElement('h3');
    krityTitle.className = 'krity-title';
    krityTitle.innerText = `KrityHack ${version}`;

    const aimbotDot = document.createElement('div');
    aimbotDot.className = 'aimbotDot';

    function updateOverlay() {
        overlay.innerHTML = ``;

        const controls = [
            [ '[B] AimBot:', state.isAimBotEnabled, state.isAimBotEnabled ? 'ON' : 'OFF' ],
            [ '[Z] Zoom:', state.isZoomEnabled, state.isZoomEnabled ? 'ON' : 'OFF' ],
            [ '[M] MeleeAtk:', state.isMeleeAttackEnabled, state.isMeleeAttackEnabled ? 'ON' : 'OFF' ],
            [ '[Y] SpinBot:', state.isSpinBotEnabled, state.isSpinBotEnabled ? 'ON' : 'OFF' ],
            [ '[T] FocusedEnemy:', state.focusedEnemy, state.focusedEnemy?.nameText?._text ? state.focusedEnemy?.nameText?._text : 'OFF' ],
            // [ '[O] gameOptimization:', gameOptimization ],
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


    document.addEventListener('DOMContentLoaded', () => {
        document.querySelector('#ui-game').append(overlay);
        document.querySelector('#ui-top-left').insertBefore(krityTitle, document.querySelector('#ui-top-left').firstChild);
        document.querySelector('#ui-game').append(aimbotDot);
    });

    let colors = {
        container_06: 14934793,
        barn_02: 14934793,
        stone_02: 1654658,
        tree_03: 16777215,
        stone_04: 0xeb175a,
        stone_05: 0xeb175a,
        bunker_storm_01: 14934793,
    },
    sizes = {
        stone_02: 4,
        tree_03: 2,
        stone_04: 2,
        stone_05: 2,
    };

    window.mapColorizing = map => {
        map.forEach(object => {
            if ( !colors[object.obj.type] ) return;
            object.shapes.forEach(shape => {
                shape.color = colors[object.obj.type];
                console.log(object);
                if ( !sizes[object.obj.type] ) return;
                shape.scale = sizes[object.obj.type];
                console.log(object);
            });
        });
    };

    window.GameMod = class GameMod { // metka mod
        constructor() {
            this.lastFrameTime = performance.now();
            this.frameCount = 0;
            this.fps = 0;
            this.kills = 0;
            this.setAnimationFrameCallback();
            this.isFpsVisible = true;
            this.isPingVisible = true;
            this.isKillsVisible = true;
            this.isMenuVisible = true;
            this.isClean = false;


            this.initCounter("fpsCounter", "isFpsVisible", this.updateFpsVisibility.bind(this));
            this.initCounter("pingCounter", "isPingVisible", this.updatePingVisibility.bind(this));
            this.initCounter("killsCounter", "isKillsVisible", this.updateKillsVisibility.bind(this));

            this.initMenu();
            this.initRules();
            this.loadBackgroundFromLocalStorage();
            this.loadLocalStorage();
            this.startUpdateLoop();
            this.setupWeaponBorderHandler();
            this.setupKeyListeners();
        }

        initCounter(id, visibilityKey, updateVisibilityFn) {
            this[id] = document.createElement("div");
            this[id].id = id;
            Object.assign(this[id].style, {
                color: "white",
                backgroundColor: "rgba(0, 0, 0, 0.2)",
                padding: "5px 10px",
                marginTop: "10px",
                borderRadius: "5px",
                fontFamily: "Arial, sans-serif",
                fontSize: "14px",
                zIndex: "10000",
                pointerEvents: "none",
            });

            const uiTopLeft = document.getElementById("ui-top-left");
            if (uiTopLeft) {
                uiTopLeft.appendChild(this[id]);
            }

            updateVisibilityFn();
        }

        updateFpsVisibility() {
            this.updateVisibility("fpsCounter", this.isFpsVisible);
        }

        updatePingVisibility() {
            this.updateVisibility("pingCounter", this.isPingVisible);
        }

        updateKillsVisibility() {
            this.updateVisibility("killsCounter", this.isKillsVisible);
        }


        updateVisibility(id, isVisible) {
            if (this[id]) {
                this[id].style.display = isVisible ? "block" : "none";
                this[id].style.backgroundColor = isVisible
                    ? "rgba(0, 0, 0, 0.2)"
                    : "transparent";
            }
        }

        toggleFpsDisplay() {
          this.isFpsVisible = !this.isFpsVisible;
          this.updateFpsVisibility();
        }
        
        setAnimationFrameCallback() {
            this.animationFrameCallback = (callback) => setTimeout(callback, 1);
        }


        togglePingDisplay() {
          this.isPingVisible = !this.isPingVisible;
          this.updatePingVisibility();
        }

        toggleKillsDisplay() {
          this.isKillsVisible = !this.isKillsVisible;
          this.updateKillsVisibility();
        }

        getKills() {
          const killElement = document.querySelector(
            ".ui-player-kills.js-ui-player-kills",
          );
          if (killElement) {
            const kills = parseInt(killElement.textContent, 10);
            return isNaN(kills) ? 0 : kills;
          }
          return 0;
        }

        getRegionFromLocalStorage() {
          let config = localStorage.getItem("surviv_config");
          if (config) {
            let configObject = JSON.parse(config);
            return configObject.region;
          }
          return null;
        }

        startPingTest() {
          const currentUrl = window.location.href;
          const isSpecialUrl = /\/#\w+/.test(currentUrl);

          const teamSelectElement = document.getElementById("team-server-select");
          const mainSelectElement = document.getElementById("server-select-main");

          const region =
            isSpecialUrl && teamSelectElement
              ? teamSelectElement.value
              : mainSelectElement
                ? mainSelectElement.value
                : null;

          if (region && region !== this.currentServer) {
            this.currentServer = region;
            this.resetPing();

            let servers;

            if (window.location.hostname === 'resurviv.biz'){
                servers = [
                  { region: "NA", url: "resurviv.biz:8001" },
                  { region: "EU", url: "217.160.224.171:8001" },
                ];
            }else if (window.location.hostname === 'survev.io'){
                servers = [
                    { region: "NA", url: "usr.mathsiscoolfun.com:8001" },
                    { region: "EU", url: "eur.mathsiscoolfun.com:8001" },
                    { region: "Asia", url: "asr.mathsiscoolfun.com:8001" },
                    { region: "SA", url: "sa.mathsiscoolfun.com:8001" },
                ];
            }


            const selectedServer = servers.find(
              (server) => region.toUpperCase() === server.region.toUpperCase(),
            );

            if (selectedServer) {
              this.pingTest = new PingTest(selectedServer);
              this.pingTest.startPingTest();
            } else {
              this.resetPing();
            }
          }
        }

        resetPing() {
          if (this.pingTest && this.pingTest.test.ws) {
            this.pingTest.test.ws.close();
            this.pingTest.test.ws = null;
          }
          this.pingTest = null;
        }


        saveBackgroundToLocalStorage(url) {
          localStorage.setItem("lastBackgroundUrl", url);
        }

        saveBackgroundToLocalStorage(image) {
          if (typeof image === "string") {
            localStorage.setItem("lastBackgroundType", "url");
            localStorage.setItem("lastBackgroundValue", image);
          } else {
            localStorage.setItem("lastBackgroundType", "local");
            const reader = new FileReader();
            reader.onload = () => {
              localStorage.setItem("lastBackgroundValue", reader.result);
            };
            reader.readAsDataURL(image);
          }
        }

        loadBackgroundFromLocalStorage() {
          const backgroundType = localStorage.getItem("lastBackgroundType");
          const backgroundValue = localStorage.getItem("lastBackgroundValue");

          const backgroundElement = document.getElementById("background");
          if (backgroundElement && backgroundType && backgroundValue) {
            if (backgroundType === "url") {
              backgroundElement.style.backgroundImage = `url(${backgroundValue})`;
            } else if (backgroundType === "local") {
              backgroundElement.style.backgroundImage = `url(${backgroundValue})`;
            }
          }
        }
        loadLocalStorage() {
            const savedSettings = JSON.parse(localStorage.getItem("userSettings"));
            if (savedSettings) {
                this.isFpsVisible = savedSettings.isFpsVisible ?? this.isFpsVisible;
                this.isPingVisible = savedSettings.isPingVisible ?? this.isPingVisible;
                this.isKillsVisible = savedSettings.isKillsVisible ?? this.isKillsVisible;
                this.isClean = savedSettings.isClean ?? this.isClean;
            }

            this.updateKillsVisibility();
            this.updateFpsVisibility();
            this.updatePingVisibility();
        }

        updateHealthBars() {
          const healthBars = document.querySelectorAll("#ui-health-container");
          healthBars.forEach((container) => {
            const bar = container.querySelector("#ui-health-actual");
            if (bar) {
              const width = Math.round(parseFloat(bar.style.width));
              let percentageText = container.querySelector(".health-text");

              if (!percentageText) {
                percentageText = document.createElement("span");
                percentageText.classList.add("health-text");
                Object.assign(percentageText.style, {
                  width: "100%",
                  textAlign: "center",
                  marginTop: "5px",
                  color: "#333",
                  fontSize: "20px",
                  fontWeight: "bold",
                  position: "absolute",
                  zIndex: "10",
                });
                container.appendChild(percentageText);
              }

              percentageText.textContent = `${width}%`;
            }
          });
        }

        updateBoostBars() {
          const boostCounter = document.querySelector("#ui-boost-counter");
          if (boostCounter) {
            const boostBars = boostCounter.querySelectorAll(
              ".ui-boost-base .ui-bar-inner",
            );

            let totalBoost = 0;
            const weights = [25, 25, 40, 10];

            boostBars.forEach((bar, index) => {
              const width = parseFloat(bar.style.width);
              if (!isNaN(width)) {
                totalBoost += width * (weights[index] / 100);
              }
            });

            const averageBoost = Math.round(totalBoost);
            let boostDisplay = boostCounter.querySelector(".boost-display");

            if (!boostDisplay) {
              boostDisplay = document.createElement("div");
              boostDisplay.classList.add("boost-display");
              Object.assign(boostDisplay.style, {
                position: "absolute",
                bottom: "75px",
                right: "335px",
                color: "#FF901A",
                backgroundColor: "rgba(0, 0, 0, 0.4)",
                padding: "5px 10px",
                borderRadius: "5px",
                fontFamily: "Arial, sans-serif",
                fontSize: "14px",
                zIndex: "10",
                textAlign: "center",
              });

              boostCounter.appendChild(boostDisplay);
            }

            boostDisplay.textContent = `AD: ${averageBoost}%`;
          }
        }

        setupWeaponBorderHandler() {
            const weaponContainers = Array.from(
              document.getElementsByClassName("ui-weapon-switch"),
            );
            weaponContainers.forEach((container) => {
              if (container.id === "ui-weapon-id-4") {
                container.style.border = "3px solid #2f4032";
              } else {
                container.style.border = "3px solid #FFFFFF";
              }
            });
      
            const weaponNames = Array.from(
              document.getElementsByClassName("ui-weapon-name"),
            );
            weaponNames.forEach((weaponNameElement) => {
              const weaponContainer = weaponNameElement.closest(".ui-weapon-switch");
              const observer = new MutationObserver(() => {
                const weaponName = weaponNameElement.textContent.trim();
                let border = "#FFFFFF";
      
                switch (weaponName.toUpperCase()) { 
                  //yellow
                  case "CZ-3A1": case "G18C": case "M9": case "M93R": case "MAC-10": case "MP5": case "P30L": case "DUAL P30L": case "UMP9": case "VECTOR": case "VSS": case "FLAMETHROWER": border = "#FFAE00"; break;
                  //blue 
                  case "AK-47": case "OT-38": case "OTS-38": case "M39 EMR": case "DP-28": case "MOSIN-NAGANT": case "SCAR-H": case "SV-98": case "M1 GARAND": case "PKP PECHENEG": case "AN-94": case "BAR M1918": case "BLR 81": case "SVD-63": case "M134": case "GROZA": case "GROZA-S": border = "#007FFF"; break;
                  //green
                  case "FAMAS": case "M416": case "M249": case "QBB-97": case "MK 12 SPR": case "M4A1-S": case "SCOUT ELITE": case "L86A2": border = "#0f690d"; break;
                  //red 
                  case "M870": case "MP220": case "SAIGA-12": case "SPAS-12": case "USAS-12": case "SUPER 90": case "LASR GUN": case "M1100": border = "#FF0000"; break;
                  //purple
                  case "MODEL 94": case "PEACEMAKER": case "VECTOR (.45 ACP)": case "M1911": case "M1A1": border = "#800080"; break;
                  //black
                  case "DEAGLE 50": case "RAINBOW BLASTER": border = "#000000"; break;
                  //olive
                  case "AWM-S": case "MK 20 SSR": border = "#808000"; break; 
                  //brown
                  case "POTATO CANNON": case "SPUD GUN": border = "#A52A2A"; break;
                  //other Guns
                  case "FLARE GUN": border = "#FF4500"; break; case "M79": border = "#008080"; break; case "HEART CANNON": border = "#FFC0CB"; break; 
                  default: border = "#FFFFFF"; break; }
      
                if (weaponContainer.id !== "ui-weapon-id-4") {
                  weaponContainer.style.border = `3px solid ${border}`;
                }
              });
      
              observer.observe(weaponNameElement, {
                childList: true,
                characterData: true,
                subtree: true,
              });
            });
          }

        updateUiElements() {
          const currentUrl = window.location.href;

          const isSpecialUrl = /\/#\w+/.test(currentUrl);

          const playerOptions = document.getElementById("player-options");
          const teamMenuContents = document.getElementById("team-menu-contents");
          const startMenuContainer = document.querySelector(
            "#start-menu .play-button-container",
          );

          if (!playerOptions) return;

          if (
            isSpecialUrl &&
            teamMenuContents &&
            playerOptions.parentNode !== teamMenuContents
          ) {
            teamMenuContents.appendChild(playerOptions);
          } else if (
            !isSpecialUrl &&
            startMenuContainer &&
            playerOptions.parentNode !== startMenuContainer
          ) {
            const firstChild = startMenuContainer.firstChild;
            startMenuContainer.insertBefore(playerOptions, firstChild);
          }
          const teamMenu = document.getElementById("team-menu");
          if (teamMenu) {
            teamMenu.style.height = "355px";
          }
          const menuBlocks = document.querySelectorAll(".menu-block");
          menuBlocks.forEach((block) => {
            block.style.maxHeight = "355px";
          });
          document.getElementById("left-column");
          document.getElementById("news-block");
          //scalable?
        }

        updateCleanMode() {
            const leftColumn = document.getElementById("left-column");
            const newsBlock = document.getElementById("news-block");

            if (this.isClean) {
                if (leftColumn) leftColumn.style.display = "none";
                if (newsBlock) newsBlock.style.display = "none";
            } else {
                if (leftColumn) leftColumn.style.display = "block";
                if (newsBlock) newsBlock.style.display = "block";
            }
        }

        updateMenuButtonText() {
          const hideButton = document.getElementById("hideMenuButton");
          hideButton.textContent = this.isMenuVisible
            ? "Hide Menu [P]"
            : "Show Menu [P]";
        }

        setupKeyListeners() {
          document.addEventListener("keydown", (event) => {
            if (event.key.toLowerCase() === "p") {
              this.toggleMenuVisibility();
            }
          });
        }
        //menu
        initMenu() {
            const middleRow = document.querySelector("#start-row-top");
            Object.assign(middleRow.style, {
                display: "flex",
                flexDirection: "row",
            });


            const menu = document.createElement("div");
            menu.id = "KrityHack";
            Object.assign(menu.style, {
              backgroundColor: "rgba(0, 0, 0, 0.5)",
              padding: "15px",
              borderRadius: "10px",
              boxShadow: "0 4px 10px rgba(0, 0, 0, 0.3)",
              fontFamily: "Arial, sans-serif",
              fontSize: "18px",
              color: "#fff",
              maxWidth: "300px",
              height: "100%",
            //   maxHeight: "320px",
              overflowY: "auto",
            //   marginTop: "20px",
              marginRight: "30px",
              boxSizing: "border-box",
            });

          
            const title = document.createElement("h2");
            title.textContent = "Social networks";
            title.className = 'news-header';
            Object.assign(title.style, {
              margin: "0 0 10px",
              fontSize: "20px",
            });
            menu.append(title);

            const description = document.createElement("p");
            description.className = "news-paragraph";
            description.style.fontSize = "14px";
            description.innerHTML = `⭐ Star us on GitHub<br>📢 Join our Telegram group<br>🎮 Join our Discord server`;
            menu.append(description);
          
            const createSocialLink = (text) => {
              const a = document.createElement("a");
              a.textContent = `${text}`;
              a.target = "_blank";
              Object.assign(a.style, {
                display: "block",
                border: "none",
                color: "#fff",
                padding: "10px",
                borderRadius: "5px",
                marginBottom: "10px",
                fontSize: "15px",
                lineHeight: "14px",
                cursor: "pointer",
                textAlign: "center",
                textDecoration: "none",
              });
              return a;
            };
          
            const githubLink = createSocialLink("");
            githubLink.style.backgroundColor = "#0c1117";
            githubLink.href = "https://github.com/Drino955/survev-krityhack";
            githubLink.innerHTML = `<i class="fa-brands fa-github"></i> KrityHack`;
            menu.append(githubLink);
            
            const telegramLink = createSocialLink("");
            telegramLink.style.backgroundColor = "#00a8e6";
            telegramLink.href = "https://t.me/krityteam";
            telegramLink.innerHTML = `<i class="fa-brands fa-telegram-plane"></i> KrityTeam`;
            menu.append(telegramLink);

            const discordLink = createSocialLink("");
            discordLink.style.backgroundColor = "#5865F2";
            discordLink.href = "https://discord.gg/wPuvEySg3E";
            discordLink.innerHTML = `<i class="fa-brands fa-discord"></i> [HACK] League of Hackers`;
            menu.append(discordLink);

            const additionalDescription = document.createElement("p");
            additionalDescription.className = "news-paragraph";
            additionalDescription.style.fontSize = "14px";
            additionalDescription.innerHTML = `Your support helps us develop the project and provide better updates!`;
            menu.append(additionalDescription);

            const leftColumn = document.querySelector('#left-column');
            leftColumn.innerHTML = ``;
            leftColumn.style.marginTop = "10px";
            leftColumn.style.marginBottom = "27px";
            leftColumn.append(menu);
          
            this.menu = menu;
        }

        initRules() {
            const newsBlock = document.querySelector("#news-block");
            newsBlock.innerHTML = `
<h3 class="news-header">KrityHack v0.2.1</h3>
<div id="news-current">
<small class="news-date">January 13, 2025</small>
                      
<h2>How to use the cheat in the game 🚀</h2>
<p class="news-paragraph">After installing the cheat, you can use the following features and hotkeys:</p>

<h3>Hotkeys:</h3>
<ul>
    <li><strong>[B]</strong> - Toggle AimBot</li>
    <li><strong>[Z]</strong> - Toggle Zoom</li>
    <li><strong>[M]</strong> - Toggle Melee Attack</li>
    <li><strong>[Y]</strong> - Toggle SpinBot</li>
    <li><strong>[T]</strong> - Focus on enemy</li>
</ul>

<h3>Features:</h3>
<ul>
    <li>By clicking the middle mouse button, you can add a player to friends. AimBot will not target them, green lines will go to them, and their name will turn green.</li>
    <li><strong>AutoMelee:</strong> If the enemy is close enough (4 game coordinates), AutoMelee will automatically move towards and attack them when holding down the left mouse button. If you equip a melee weapon, AutoMelee will work at a distance of 8 game coordinates.</li>
    <li><strong>AutoSwitch:</strong> Quickly switch weapons to avoid cooldown after shooting.</li>
    <li><strong>BumpFire:</strong> Shoot without constant clicking.</li>
    <li>Some ESP features can be disabled by changing their values in the code:
        <pre>let laserDrawerEnabled = true;
let lineDrawerEnabled = true;
let nadeDrawerEnabled = true;
        </pre>
        Set them to <code>false</code> to disable.
    </li>
    <li>AimBot activates when holding down the left mouse button.</li>
    <li><strong>FocusedEnemy:</strong> Press <strong>[T]</strong> to focus on an enemy. AimBot will continuously target the focused enemy. Press <strong>[T]</strong> again to reset.</li>
</ul>

<h3>Recommendations:</h3>
<ul>
    <li>Play smart and don't rush headlong, as the cheat does not provide immortality.</li>
    <li>Use adrenaline to the max to heal and run fast.</li>
    <li>The map is color-coded: white circle - Mosin, gold container - SV98, etc.</li>
</ul>

<p class="news-paragraph">For more details, visit the <a href="https://github.com/Drino955/survev-krityhack">GitHub page</a> and join our <a href="https://t.me/krityteam">Telegram group</a> or <a href="https://discord.gg/wPuvEySg3E">Discord</a>.</p></div>`;
        
        
        }

        toggleMenuVisibility() {
          const isVisible = this.menu.style.display !== "none";
          this.menu.style.display = isVisible ? "none" : "block";
        }

        startUpdateLoop() {
          const now = performance.now();
          const delta = now - this.lastFrameTime;

          this.frameCount++;

          if (delta >= 1000) {
            this.fps = Math.round((this.frameCount * 1000) / delta);
            this.frameCount = 0;
            this.lastFrameTime = now;

            this.kills = this.getKills();

            if (this.isFpsVisible && this.fpsCounter) {
              this.fpsCounter.textContent = `FPS: ${this.fps}`;
            }

            if (this.isKillsVisible && this.killsCounter) {
              this.killsCounter.textContent = `Kills: ${this.kills}`;
            }

            if (this.isPingVisible && this.pingCounter && this.pingTest) {
              const result = this.pingTest.getPingResult();
              this.pingCounter.textContent = `PING: ${result.ping} ms`;
            }
          }

          this.startPingTest();
          this.animationFrameCallback(() => this.startUpdateLoop());
          this.updateUiElements();
          this.updateCleanMode();
          this.updateBoostBars();
          this.updateHealthBars();
        }
        
      };

    window.PingTest = class PingTest {
        constructor(selectedServer) {
          this.ptcDataBuf = new ArrayBuffer(1);
          this.test = {
            region: selectedServer.region,
            url: `wss://${selectedServer.url}/ptc`,
            ping: 9999,
            ws: null,
            sendTime: 0,
            retryCount: 0,
          };
        }

        startPingTest() {
          if (!this.test.ws) {
            const ws = new WebSocket(this.test.url);
            ws.binaryType = "arraybuffer";

            ws.onopen = () => {
              this.sendPing();
              this.test.retryCount = 0;
            };

            ws.onmessage = () => {
              const elapsed = (Date.now() - this.test.sendTime) / 1e3;
              this.test.ping = Math.round(elapsed * 1000);
              this.test.retryCount = 0;
              setTimeout(() => this.sendPing(), 200);
            };

            ws.onerror = () => {
              this.test.ping = "Error";
              this.test.retryCount++;
              if (this.test.retryCount < 5) {
                setTimeout(() => this.startPingTest(), 2000);
              } else {
                this.test.ws.close();
                this.test.ws = null;
              }
            };

            ws.onclose = () => {
              this.test.ws = null;
            };

            this.test.ws = ws;
          }
        }

        sendPing() {
          if (this.test.ws.readyState === WebSocket.OPEN) {
            this.test.sendTime = Date.now();
            this.test.ws.send(this.ptcDataBuf);
          }
        }

        getPingResult() {
          return {
            region: this.test.region,
            ping: this.test.ping,
          };
        }
    };

    document.addEventListener('DOMContentLoaded', () => {
        new GameMod(); // AlguienClient
    });

    function getTeam(player) {
        return Object.keys(game.playerBarn.teamInfo).find(team => game.playerBarn.teamInfo[team].playerIds.includes(player.__id));
    }

    function findWeap(player) {
        const weapType = player.netData.activeWeapon;
        return weapType && window.guns[weapType] ? window.guns[weapType] : null;
    }

    function findBullet(weapon) {
        return weapon ? window.bullets[weapon.bulletType] : null;
    }

    function keybinds(){
        window.addEventListener('keyup', function (event) {
            if (!window?.game?.ws) return;

            const validKeys = ['B', 'Z', 'M', 'Y', 'T'];
            if (!validKeys.includes(String.fromCharCode(event.keyCode))) return;
        
            switch (String.fromCharCode(event.keyCode)) {
                case 'B': 
                    state.isAimBotEnabled = !state.isAimBotEnabled; 
                    aimbotDot.style.display = 'None';
                    window.lastAimPos = null;
                    window.aimTouchMoveDir = null;
                    break;
                case 'Z': state.isZoomEnabled = !state.isZoomEnabled; break;
                case 'M': 
                    state.isMeleeAttackEnabled = !state.isMeleeAttackEnabled;
                    window.aimTouchMoveDir = null;
                    break;
                case 'Y': state.isSpinBotEnabled = !state.isSpinBotEnabled; break;
                case 'T': 
                    if(state.focusedEnemy){
                        state.focusedEnemy = null;
                    }else {
                        if (!state.enemyAimBot?.active || state.enemyAimBot?.netData?.dead) break;
                        state.focusedEnemy = state.enemyAimBot;
                    }
                    break;
                // case 'P': autoStopEnabled = !autoStopEnabled; break;
                // case 'U': autoSwitchEnabled = !autoSwitchEnabled; break;
                // case 'O': window.gameOptimization = !window.gameOptimization; break;
            }
            updateOverlay();
        });
        
        window.addEventListener('keydown', function (event) {
            if (!window?.game?.ws) return;

            const validKeys = ['M', 'T'];
            if (!validKeys.includes(String.fromCharCode(event.keyCode))) return;
        
            switch (String.fromCharCode(event.keyCode)) {
                case 'M': 
                    event.stopImmediatePropagation();
                    event.stopPropagation();
                    event.preventDefault();
                    break;
                case 'T': 
                    event.stopImmediatePropagation();
                    event.stopPropagation();
                    event.preventDefault();
                    break;
            }
        });

        window.addEventListener('mousedown', function (event) {
            if (event.button !== 1) return; // Only proceed if middle mouse button is clicked

            const mouseX = event.clientX;
            const mouseY = event.clientY;

            const players = window.game.playerBarn.playerPool.pool;
            const me = window.game.activePlayer;
            const meTeam = getTeam(me);

            let enemy = null;
            let minDistanceToEnemyFromMouse = Infinity;

            players.forEach((player) => {
                // We miss inactive or dead players
                if (!player.active || player.netData.dead || player.downed || me.__id === player.__id || getTeam(player) == meTeam) return;

                const screenPlayerPos = window.game.camera.pointToScreen({x: player.pos._x, y: player.pos._y});
                const distanceToEnemyFromMouse = (screenPlayerPos.x - mouseX) ** 2 + (screenPlayerPos.y - mouseY) ** 2;

                if (distanceToEnemyFromMouse < minDistanceToEnemyFromMouse) {
                    minDistanceToEnemyFromMouse = distanceToEnemyFromMouse;
                    enemy = player;
                }
            });

            if (enemy) {
                const enemyIndex = state.friends.indexOf(enemy.nameText._text);
                if (~enemyIndex) {
                    state.friends.splice(enemyIndex, 1);
                    console.log(`Removed player with name ${enemy.nameText._text} from friends.`);
                }else {
                    state.friends.push(enemy.nameText._text);
                    console.log(`Added player with name ${enemy.nameText._text} to friends.`);
                }
            }
        });
    }

    keybinds();

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
                                        return false ;
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

    function autoLoot(){
        Object.defineProperty(window, 'basicDataInfo', {
            get () {
                return this._basicDataInfo;
            },
            set(value) {
                this._basicDataInfo = value;
                
                if (!value) return;
                
                Object.defineProperty(window.basicDataInfo, 'isMobile', {
                    get () {
                        return true;
                    },
                    set(value) {
                    }
                });
                
                Object.defineProperty(window.basicDataInfo, 'useTouch', {
                    get () {
                        return true;
                    },
                    set(value) {
                    }
                });
                
            }
        });
    }

    autoLoot();

    function bumpFire(){
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

    let spinAngle = 0;
    const radius = 100; // The radius of the circle
    const spinSpeed = 37.5; // Rotation speed (increase for faster speed)
    function overrideMousePos() {
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

    function betterZoom(){
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

                const scopes = ['1xscope', '2xscope', '4xscope', '8xscope', '15xscope'];

                // console.log(value, oldScope, newScope, newScope == oldScope, (inventory['2xscope'] || inventory['4xscope'] || inventory['8xscope'] || inventory['15xscope']));
                if ( (newScope == oldScope) && (inventory['2xscope'] || inventory['4xscope'] || inventory['8xscope'] || inventory['15xscope']) && value >= this._targetZoom
                    || scopes.indexOf(newScope) > scopes.indexOf(oldScope) && value >= this._targetZoom
                ) return;

                oldScope = window.game.activePlayer.localData.scope;

                this._targetZoom = value;
            }
        });
    }

    function smokeOpacity(){
        console.log('smokeopacity');
        
        const particles = window.game.smokeBarn.particles;
        console.log('smokeopacity', particles, window.game.smokeBarn.particles);
        particles.push = new Proxy( particles.push, {
            apply( target, thisArgs, args ) {
                console.log('smokeopacity', args[0]);
                const particle = args[0];

                Object.defineProperty(particle.sprite, 'alpha', {
                    get() {
                        return 0.12;
                    },
                    set(value) {
                    }
                });

                return Reflect.apply( ...arguments );

            }
        });

        particles.forEach(particle => {
            Object.defineProperty(particle.sprite, 'alpha', {
                get() {
                    return 0.12;
                },
                set(value) {
                }
            });
        });
    }

    function visibleNames(){
        const pool = window.game.playerBarn.playerPool.pool;

        console.log('visibleNames', pool);

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

    let laserDrawerEnabled = true,
        lineDrawerEnabled = true,
        nadeDrawerEnabled = true;
    function esp(){
        const pixi = window.game.pixi; 
        const me = window.game.activePlayer;
        const players = window.game.playerBarn.playerPool.pool;

        // We check if there is an object of Pixi, otherwise we create a new
        if (!pixi || me?.container == undefined) {
            // console.error("PIXI object not found in game.");
            return;
        }

        const meX = me.pos.x;
        const meY = me.pos.y;

        const meTeam = getTeam(me);
        
        try{

        // lineDrawer
        if (lineDrawerEnabled){

            if (!me.container.lineDrawer) {
                me.container.lineDrawer = new PIXI.Graphics();
                me.container.addChild(me.container.lineDrawer);
            }
                
            const lineDrawer = me.container.lineDrawer;
            try{lineDrawer.clear();}
            catch{return}
        
            // For each player
            players.forEach((player) => {
                // We miss inactive or dead players
                if (!player.active || player.netData.dead || me.__id == player.__id) return;
        
                const playerX = player.pos.x;
                const playerY = player.pos.y;
        
                const playerTeam = getTeam(player);
        
                // We calculate the color of the line (for example, red for enemies)
                const lineColor = playerTeam === meTeam ? BLUE : state.friends.includes(player.nameText._text) ? GREEN : me.layer === player.layer && !player.downed ? RED : WHITE;
        
                // We draw a line from the current player to another player
                lineDrawer.lineStyle(2, lineColor, 1);
                lineDrawer.moveTo(0, 0); // Container Container Center
                lineDrawer.lineTo(
                    (playerX - meX) * 16,
                    (meY - playerY) * 16
                );
            });
        }

        // nadeDrawer
        if (nadeDrawerEnabled){
            if (!me.container.nadeDrawer) {
                me.container.nadeDrawer = new PIXI.Graphics();
                me.container.addChild(me.container.nadeDrawer);
            }
                
            const nadeDrawer = me.container.nadeDrawer;
            try{nadeDrawer?.clear();}
            catch{return}
        
            Object.values(window.game.objectCreator.idToObj)
                .filter(obj => {
                    const isValid = ( obj.__type === 9 && obj.type !== "smoke" )
                        ||  (
                                obj.smokeEmitter &&
                                window.objects[obj.type].explosion);
                    return isValid;
                })
                .forEach(obj => {
                    if(obj.layer !== me.layer) {
                        nadeDrawer.beginFill(0xffffff, 0.3);
                    } else {
                        nadeDrawer.beginFill(0xff0000, 0.2);
                    }
                    nadeDrawer.drawCircle(
                        (obj.pos.x - meX) * 16,
                        (meY - obj.pos.y) * 16,
                        (window.explosions[
                            window.throwable[obj.type]?.explosionType ||
                            window.objects[obj.type].explosion
                                ].rad.max +
                            1) *
                        16
                    );
                    nadeDrawer.endFill();
                });
        }

        // flashlightDrawer(laserDrawer)
        if (laserDrawerEnabled) {
            const curWeapon = findWeap(me);
            const curBullet = findBullet(curWeapon);
            
            if ( !me.container.laserDrawer ) {
                me.container.laserDrawer = new PIXI.Graphics();
                me.container.addChildAt(me.container.laserDrawer, 0);
            }
            const laserDrawer = me.container.laserDrawer;
            try{laserDrawer.clear();}
            catch{return}
            
                
        
            function laserPointer(
                curBullet,
                curWeapon,
                acPlayer,
                color = 0x0000ff,
                opacity = 0.3,
            ) {
                const { pos: acPlayerPos, posOld: acPlayerPosOld } = acPlayer;
        
                const dateNow = performance.now();
        
                if ( !(acPlayer.__id in state.lastFrames) ) state.lastFrames[acPlayer.__id] = [];
                state.lastFrames[acPlayer.__id].push([dateNow, { ...acPlayerPos }]);
        
                if (state.lastFrames[acPlayer.__id].length < 30) return;
        
                if (state.lastFrames[acPlayer.__id].length > 30){
                    state.lastFrames[acPlayer.__id].shift();
                }
        
                const deltaTime = (dateNow - state.lastFrames[acPlayer.__id][0][0]) / 1000; // Time since last frame in seconds
        
                const acPlayerVelocity = {
                    x: (acPlayerPos._x - state.lastFrames[acPlayer.__id][0][1]._x) / deltaTime,
                    y: (acPlayerPos._y - state.lastFrames[acPlayer.__id][0][1]._y) / deltaTime,
                };
        
                let lasic = {};
            
                let isMoving = !!(acPlayerVelocity.x || acPlayerVelocity.y);
            
                if(curBullet) {
                    lasic.active = true;
                    lasic.range = curBullet.distance * 16.25;
                    let atan;
                    if (acPlayer == me && !window.game.input.mouseButtons['0']){
                        //local rotation
                        atan = Math.atan2(
                            window.game.input.mousePos._y - window.innerHeight / 2,
                            window.game.input.mousePos._x - window.innerWidth / 2,
                        );
                    }else {
                        atan = Math.atan2(
                            acPlayer.dir.x,
                            acPlayer.dir.y
                        ) 
                        -
                        Math.PI / 2;
                    }
                    lasic.direction = atan;
                    lasic.angle =
                        ((curWeapon.shotSpread +
                            (isMoving ? curWeapon.moveSpread : 0)) *
                            0.01745329252) /
                        2;
                } else {
                    lasic.active = false;
                }
            
                if(!lasic.active) {
                    return;
                }
        
                const center = {
                    x: (acPlayerPos._x - me.pos._x) * 16,
                    y: (me.pos._y - acPlayerPos._y) * 16,
                };
                const radius = lasic.range;
                let angleFrom = lasic.direction - lasic.angle;
                let angleTo = lasic.direction + lasic.angle;
                angleFrom =
                    angleFrom > Math.PI * 2
                        ? angleFrom - Math.PI * 2
                        : angleFrom < 0
                        ? angleFrom + Math.PI * 2
                        : angleFrom;
                angleTo =
                    angleTo > Math.PI * 2
                        ? angleTo - Math.PI * 2
                        : angleTo < 0
                        ? angleTo + Math.PI * 2
                        : angleTo;
                laserDrawer.beginFill(color, opacity);
                laserDrawer.moveTo(center.x, center.y);
                laserDrawer.arc(center.x, center.y, radius, angleFrom, angleTo);
                laserDrawer.lineTo(center.x, center.y);
                laserDrawer.endFill();
            }
            
            
            laserPointer(
                curBullet,
                curWeapon,
                me,
            );
            
            players
                .filter(player => player.active || !player.netData.dead || me.__id !== player.__id || me.layer === player.layer || getTeam(player) != meTeam)
                .forEach(enemy => {
                    const enemyWeapon = findWeap(enemy);
                    laserPointer(
                        findBullet(enemyWeapon),
                        enemyWeapon,
                        enemy,
                        "0",
                        0.2,
                    );
                });
        };

        }catch(err){
            console.error('esp', err);
        }
    }

    let date = performance.now();
    function aimBot() {

        if (!state.isAimBotEnabled) return;

        const players = window.game.playerBarn.playerPool.pool;
        const me = window.game.activePlayer;

        try {
            const meTeam = getTeam(me);

            let enemy = null;
            let minDistanceToEnemyFromMouse = Infinity;
            
            if (state.focusedEnemy && state.focusedEnemy.active && !state.focusedEnemy.netData.dead) {
                enemy = state.focusedEnemy;
            }else {
                if (state.focusedEnemy){
                    state.focusedEnemy = null;
                    updateOverlay();
                }

                players.forEach((player) => {
                    // We miss inactive or dead players
                    if (!player.active || player.netData.dead || player.downed || me.__id === player.__id || me.layer !== player.layer || getTeam(player) == meTeam || state.friends.includes(player.nameText._text)) return;
        
                    const screenPlayerPos = window.game.camera.pointToScreen({x: player.pos._x, y: player.pos._y});
                    // const distanceToEnemyFromMouse = Math.hypot(screenPlayerPos.x - window.game.input.mousePos._x, screenPlayerPos.y - window.game.input.mousePos._y);
                    const distanceToEnemyFromMouse = (screenPlayerPos.x - window.game.input.mousePos._x) ** 2 + (screenPlayerPos.y - window.game.input.mousePos._y) ** 2;
                    
                    if (distanceToEnemyFromMouse < minDistanceToEnemyFromMouse) {
                        minDistanceToEnemyFromMouse = distanceToEnemyFromMouse;
                        enemy = player;
                    }
                });
            }

            if (enemy) {
                const meX = me.pos._x;
                const meY = me.pos._y;
                const enemyX = enemy.pos._x;
                const enemyY = enemy.pos._y;

                const distanceToEnemy = Math.hypot(meX - enemyX, meY - enemyY);
                // const distanceToEnemy = (meX - enemyX) ** 2 + (meY - enemyY) ** 2;

                if (enemy != state.enemyAimBot) {
                    state.enemyAimBot = enemy;
                    state.lastFrames[enemy.__id] = [];
                }

                const predictedEnemyPos = calculatePredictedPosForShoot(enemy, me);

                if (!predictedEnemyPos) return;

                window.lastAimPos = {
                    clientX: predictedEnemyPos.x,
                    clientY: predictedEnemyPos.y,
                };
                
                // AutoMelee
                if(state.isMeleeAttackEnabled && distanceToEnemy <= 8) {
                    const moveAngle = calcAngle(enemy.pos, me.pos) + Math.PI;
                    window.gameControls.touchMoveActive = true;
                    window.aimTouchMoveDir = {
                        x: Math.cos(moveAngle),
                        y: Math.sin(moveAngle),
                    };
                    window.aimTouchDistanceToEnemy = distanceToEnemy;
                }else {
                    window.aimTouchMoveDir = null;
                    window.aimTouchDistanceToEnemy = null;
                }

                if (aimbotDot.style.left !== predictedEnemyPos.x + 'px' || aimbotDot.style.top !== predictedEnemyPos.y + 'px') {
                    aimbotDot.style.left = predictedEnemyPos.x + 'px';
                    aimbotDot.style.top = predictedEnemyPos.y + 'px';
                    aimbotDot.style.display = 'block';
                }
            }else {
                window.aimTouchMoveDir = null;
                window.lastAimPos = null;
                aimbotDot.style.display = 'none';
            }

            date = performance.now();
        } catch (error) {
            console.error("Error in aimBot:", error);
        }
    }

    function calculatePredictedPosForShoot(enemy, curPlayer) {
        if (!enemy || !curPlayer) {
            console.log("Missing enemy or player data");
            return null;
        }
        
        const { pos: enemyPos } = enemy;
        const { pos: curPlayerPos } = curPlayer;

        const dateNow = performance.now();

        if ( !(enemy.__id in state.lastFrames) ) state.lastFrames[enemy.__id] = [];
        state.lastFrames[enemy.__id].push([dateNow, { ...enemyPos }]);

        if (state.lastFrames[enemy.__id].length < 30) {
            console.log("Insufficient data for prediction, using current position");
            return window.game.camera.pointToScreen({x: enemyPos._x, y: enemyPos._y});
        }

        if (state.lastFrames[enemy.__id].length > 30){
            state.lastFrames[enemy.__id].shift();
        }

        const deltaTime = (dateNow - state.lastFrames[enemy.__id][0][0]) / 1000; // Time since last frame in seconds

        const enemyVelocity = {
            x: (enemyPos._x - state.lastFrames[enemy.__id][0][1]._x) / deltaTime,
            y: (enemyPos._y - state.lastFrames[enemy.__id][0][1]._y) / deltaTime,
        };

        const weapon = findWeap(curPlayer);
        const bullet = findBullet(weapon);

        let bulletSpeed;
        if (!bullet) {
            bulletSpeed = 1000;
        }else {
            bulletSpeed = bullet.speed;
        }


        // Quadratic equation for time prediction
        const vex = enemyVelocity.x;
        const vey = enemyVelocity.y;
        const dx = enemyPos._x - curPlayerPos._x;
        const dy = enemyPos._y - curPlayerPos._y;
        const vb = bulletSpeed;

        const a = vb ** 2 - vex ** 2 - vey ** 2;
        const b = -2 * (vex * dx + vey * dy);
        const c = -(dx ** 2) - (dy ** 2);

        let t; 

        if (Math.abs(a) < 1e-6) {
            console.log('Linear solution bullet speed is much greater than velocity');
            t = -c / b;
        } else {
            const discriminant = b ** 2 - 4 * a * c;

            if (discriminant < 0) {
                console.log("No solution, shooting at current position");
                return window.game.camera.pointToScreen({x: enemyPos._x, y: enemyPos._y});
            }

            const sqrtD = Math.sqrt(discriminant);
            const t1 = (-b - sqrtD) / (2 * a);
            const t2 = (-b + sqrtD) / (2 * a);

            t = Math.min(t1, t2) > 0 ? Math.min(t1, t2) : Math.max(t1, t2);
        }


        if (t < 0) {
            console.log("Negative time, shooting at current position");
            return window.game.camera.pointToScreen({x: enemyPos._x, y: enemyPos._y});
        }

        // console.log(`A bullet with the enemy will collide through ${t}`)

        const predictedPos = {
            x: enemyPos._x + vex * t,
            y: enemyPos._y + vey * t,
        };

        return window.game.camera.pointToScreen(predictedPos);
    }

    function calcAngle(playerPos, mePos){
        const dx = mePos._x - playerPos._x;
        const dy = mePos._y - playerPos._y;

        return Math.atan2(dy, dx);
    }

    const inputCommands = {
        Cancel: 6,
        Count: 36,
        CycleUIMode: 30,
        EmoteMenu: 31,
        EquipFragGrenade: 15,
        EquipLastWeap: 19,
        EquipMelee: 13,
        EquipNextScope: 22,
        EquipNextWeap: 17,
        EquipOtherGun: 20,
        EquipPrevScope: 21,
        EquipPrevWeap: 18,
        EquipPrimary: 11,
        EquipSecondary: 12,
        EquipSmokeGrenade: 16,
        EquipThrowable: 14,
        Fire: 4,
        Fullscreen: 33,
        HideUI: 34,
        Interact: 7,
        Loot: 10,
        MoveDown: 3,
        MoveLeft: 0,
        MoveRight: 1,
        MoveUp: 2,
        Reload: 5,
        Revive: 8,
        StowWeapons: 27,
        SwapWeapSlots: 28,
        TeamPingMenu: 32,
        TeamPingSingle: 35,
        ToggleMap: 29,
        Use: 9,
        UseBandage: 23,
        UseHealthKit: 24,
        UsePainkiller: 26,
        UseSoda: 25,
    };

    let inputs = [];
    window.initGameControls = function(gameControls){
        for (const command of inputs){
            gameControls.addInput(inputCommands[command]);
        }
        inputs = [];

        // autoMelee
        if (window.game.input.mouseButtons['0'] && window.aimTouchMoveDir) {
            if (window.aimTouchDistanceToEnemy < 4) gameControls.addInput(inputCommands['EquipMelee']);
            gameControls.touchMoveActive = true;
            gameControls.touchMoveLen = 255;
            gameControls.touchMoveDir.x = window.aimTouchMoveDir.x;
            gameControls.touchMoveDir.y = window.aimTouchMoveDir.y;
        }

        return gameControls
    };

    const ammo = [
        {
            name: "",
            ammo: null,
            lastShotDate: Date.now()
        },
        {
            name: "",
            ammo: null,
            lastShotDate: Date.now()
        },
        {
            name: "",
            ammo: null,
        },
        {
            name: "",
            ammo: null,
        },
    ];
    function autoSwitch(){
        if (!(window.game?.ws && window.game?.activePlayer?.localData?.curWeapIdx != null)) return; 

        try {
        const curWeapIdx = window.game.activePlayer.localData.curWeapIdx;
        const weaps = window.game.activePlayer.localData.weapons;
        const curWeap = weaps[curWeapIdx];
        const shouldSwitch = gun => {
            let s = false;
            try {
                s =
                    (window.guns[gun].fireMode === "single"
                    || window.guns[gun].fireMode === "burst") 
                    && window.guns[gun].fireDelay >= 0.45;
            }
            catch (e) {
            }
            return s;
        };
        const weapsEquip = ['EquipPrimary', 'EquipSecondary'];
        if(curWeap.ammo !== ammo[curWeapIdx].ammo) {
            const otherWeapIdx = (curWeapIdx == 0) ? 1 : 0;
            const otherWeap = weaps[otherWeapIdx];
            if ((curWeap.ammo < ammo[curWeapIdx].ammo || (ammo[curWeapIdx].ammo === 0 && curWeap.ammo > ammo[curWeapIdx].ammo && window.game.input.mouseButtons['0'])) && shouldSwitch(curWeap.type) && curWeap.type == ammo[curWeapIdx].type) {
                ammo[curWeapIdx].lastShotDate = Date.now();
                console.log("Switching weapon due to ammo change");
                if ( shouldSwitch(otherWeap.type) && otherWeap.ammo) { inputs.push(weapsEquip[otherWeapIdx]); } // && ammo[curWeapIdx].ammo !== 0
                else if ( otherWeap.type !== "" ) { inputs.push(weapsEquip[otherWeapIdx]); inputs.push(weapsEquip[curWeapIdx]); }
                else { inputs.push('EquipMelee'); inputs.push(weapsEquip[curWeapIdx]); }
            }
            ammo[curWeapIdx].ammo = curWeap.ammo;
            ammo[curWeapIdx].type = curWeap.type;
        }
        }catch(err){
            console.error('autoswitch', err);
        }
    }

    function obstacleOpacity(){
        window.game.map.obstaclePool.pool.forEach(obstacle => {
            if (!['bush', 'tree', 'table', 'stairs'].some(substring => obstacle.type.includes(substring))) return;
            obstacle.sprite.alpha = 0.45;
        });
    }

    let lastTime = Date.now();
    let showing = false;
    let timer = null;
    function grenadeTimer(){
        if (!(window.game?.ws && window.game?.activePlayer?.localData?.curWeapIdx != null && window.game?.activePlayer?.netData?.activeWeapon != null)) return; 

        try{
        let elapsed = (Date.now() - lastTime) / 1000;
        const player = window.game.activePlayer;
        const activeItem = player.netData.activeWeapon;

        if (3 !== window.game.activePlayer.localData.curWeapIdx 
            || player.throwableState !== "cook"
            || (!activeItem.includes('frag') && !activeItem.includes('mirv') && !activeItem.includes('martyr_nade'))
        )
            return (
                (showing = false),
                timer && timer.destroy(),
                (timer = false)
            );
        const time = 4;

        if(elapsed > time) {
            showing = false;
        }
        if(!showing) {
            if(timer) {
                timer.destroy();
            }
            timer = new window.pieTimerClass();
            window.game.pixi.stage.addChild(timer.container);
            timer.start("Grenade", 0, time);
            showing = true;
            lastTime = Date.now();
            return;
        }
        timer.update(elapsed - timer.elapsed, window.game.camera);
        }catch(err){
            console.error('grenadeTimer', err);
        }
    }

    function initTicker(){
        window.game.pixi._ticker.add(esp);
        window.game.pixi._ticker.add(aimBot);
        window.game.pixi._ticker.add(autoSwitch);
        window.game.pixi._ticker.add(obstacleOpacity);
        window.game.pixi._ticker.add(grenadeTimer);
    }

    let tickerOneTime = false;
    function initGame() {
        console.log('init game...........');

        window.lastAimPos = null;
        window.aimTouchMoveDir = null;
        state.enemyAimBot = null;
        state.focusedEnemy = null;
        state.friends = [];
        state.lastFrames = {};

        const tasks = [
            {isApplied: false, condition: () => window.game?.input?.mousePos, action: overrideMousePos},
            {isApplied: false, condition: () => window.game?.input?.mouseButtonsOld, action: bumpFire},
            {isApplied: false, condition: () => window.game?.activePlayer?.localData, action: betterZoom},
            {isApplied: false, condition: () => Array.prototype.push === window.game?.smokeBarn?.particles.push, action: smokeOpacity},
            {isApplied: false, condition: () => Array.prototype.push === window.game?.playerBarn?.playerPool?.pool.push, action: visibleNames},
            {isApplied: false, condition: () => window.game?.pixi?._ticker && window.game?.activePlayer?.container && window.game?.activePlayer?.pos, action: () => { if (!tickerOneTime) { tickerOneTime = true; initTicker(); } } },
        ];

        (function checkLocalData(){
            if(!window?.game?.ws) return;

            console.log('Checking local data');

            console.log(
                window.game?.activePlayer?.localData, 
                window.game?.map?.obstaclePool?.pool,
                window.game?.smokeBarn?.particles,
                window.game?.playerBarn?.playerPool?.pool
            );

            tasks.forEach(task => console.log(task.action, task.isApplied));
            
            tasks.forEach(task => {
                if (task.isApplied || !task.condition()) return;
                task.action();
                task.isApplied = true;
            });
            
            if (tasks.some(task => !task.isApplied)) setTimeout(checkLocalData, 5);
            else console.log('All functions applied, stopping loop.');
        })();

        updateOverlay();
    }

    console.log('Script injecting...');
    window.ping = {}; // for reverse compatibility


    function bootLoader(){
        Object.defineProperty(window, 'game', {
            get () {
                return this._game;
            },
            set(value) {
                this._game = value;
                
                if (!value) return;
                
                initGame();
                
            }
        });
    }

    bootLoader(); // init game every time()


    console.log('Script injected');

})();


console.log('Script injecting...');


(async () => {
    const links = [
        ...Array.from(document.querySelectorAll('link[rel="modulepreload"][href]')),
        ...Array.from(document.querySelectorAll('script[type="module"][src]'))
    ];

    const appLink = links.find(link => link.src?.includes('app-'));
    const sharedLink = links.find(link => link.href?.includes('shared-'));
    const vendorLink = links.find(link => link.href?.includes('vendor-'));


    const originalAppURL = appLink.src;
    const originalSharedURL = sharedLink.href;
    const originalVendorURL = vendorLink.href;

    let modifiedSharedURL = null;
    let modifiedAppURL = null;
    if (originalSharedURL) {
        const response = await GM.xmlHttpRequest({ url: originalSharedURL }).catch(e => console.error(e));
        let scriptContent = await response.responseText;
        // console.log(scriptContent);

        const sharedScriptPatches = [
            {
                name: 'bullets',
                from: /function\s+(\w+)\s*\(\s*(\w+)\s*,\s*(\w+)\s*\)\s*\{\s*return\s+(\w+)\((\w+),\s*(\w+),\s*(\w+)\)\s*\}\s*const\s+(\w+)\s*=\s*\{\s*(\w+)\s*:\s*\{\s*type\s*:\s*"(.*?)"\s*,\s*damage\s*:\s*(\d+)\s*,/,
                to: `function $1($2, $3) {\n    return $4($5, $6, $7)\n}\nconst $8 = window.bullets = {\n    $9: {\n        type: "$10",\n        damage: $11,`
            },
            {
                name: 'explosions',
                from: /(\w+)=\{explosion_frag:\{type:"explosion",damage:(\d+),obstacleDamage/,
                to: `$1 = window.explosions = {explosion_frag:{type:"explosion",damage:$2,obstacleDamage`
            },
            {
                name: 'guns',
                from: /(\w+)=\{(\w+):\{name:"([^"]+)",type:"gun",quality:(\d+),fireMode:"([^"]+)",caseTiming:"([^"]+)",ammo:"([^"]+)",/,
                to: `$1 = window.guns = {$2:{name:"$3",type:"gun",quality:$4,fireMode:"$5",caseTiming:"$6",ammo:"$7",`
            },
            {
                name: 'throwable',
                from: /(\w+)=\{(\w+):\{name:"([^"]+)",type:"throwable",quality:(\d+),explosionType:"([^"]+)",/,
                to: `$1 = window.throwable = {$2:{name:"$3",type:"throwable",quality:$4,explosionType:"$5",`
            },
            {
                name: 'objects',
                from: /\s*(\w+)\s*=\s*\{\s*(\w+)\s*:\s*Ve\(\{\}\)\s*,\s*(\w+)\s*:\s*Ve\(\{\s*img\s*:\s*\{\s*tint\s*:\s*(\d+)\s*\}\s*,\s*loot\s*:\s*\[\s*n\("(\w+)",\s*(\d+),\s*(\d+)\)\s*,\s*d\("(\w+)",\s*(\d+)\)\s*,\s*d\("(\w+)",\s*(\d+)\)\s*,\s*d\("(\w+)",\s*(\d+)\)\s*\]\s*\}\)\s*,/,
                to: ` $1 = window.objects = {\n    $2: Ve({}),\n    $3: Ve({\n        img: {\n            tint: $4\n        },\n        loot: [\n            n("$5", $6, $7),\n            d("$8", $9),\n            d("$10", $11),\n            d("$12", $13)\n        ]\n    }),`
            }
        ];

        for (const patch of sharedScriptPatches){
            scriptContent = scriptContent.replace(patch.from, patch.to)
        }

        const blob = new Blob([scriptContent], { type: 'application/javascript' });
        modifiedSharedURL = URL.createObjectURL(blob);
        console.log(modifiedSharedURL);
    }

    if (originalAppURL) {
        const response = await GM.xmlHttpRequest({ url: originalAppURL }).catch(e => console.error(e));
        let scriptContent = await response.responseText;
        // console.log(scriptContent);

        const appScriptPatches = [
            {
                name: 'Import shared.js',
                from: /"\.\/shared-[^"]+\.js";/,
                to: `"${modifiedSharedURL}";`
            },
            {
                name: 'Import vendor.js',
                from: /\.\/vendor-[a-zA-Z0-9]+\.js/,
                to: `${originalVendorURL}`
            },
            {
                name: 'servers',
                from: /var\s+(\w+)\s*=\s*\[\s*({\s*region:\s*"([^"]+)",\s*zone:\s*"([^"]+)",\s*url:\s*"([^"]+)",\s*https:\s*(!0|!1)\s*}\s*(,\s*{\s*region:\s*"([^"]+)",\s*zone:\s*"([^"]+)",\s*url:\s*"([^"]+)",\s*https:\s*(!0|!1)\s*})*)\s*\];/,
                to: `var $1 = window.servers = [$2];`
            },
            {
                name: 'Map colorizing',
                from: /(\w+)\.sort\(\s*\(\s*(\w+)\s*,\s*(\w+)\s*\)\s*=>\s*\2\.zIdx\s*-\s*\3\.zIdx\s*\);/,
                to: `$1.sort(($2, $3) => $2.zIdx - $3.zIdx);\nwindow.mapColorizing($1);`
            },
            {
                name: 'Position without interpolation (pos._x, pos._y)',
                from: /this\.pos\s*=\s*(\w+)\.copy\((\w+)\.netData\.pos\)/,
                to: `this.pos = $1.copy($2.netData.pos),this.pos._x = this.netData.pos.x, this.pos._y = this.netData.pos.y`
            },
            {
                name: 'Movement interpolation (Game optimization)',
                from: 'this.pos._y = this.netData.pos.y',
                to: `this.pos._y = this.netData.pos.y,(window.movementInterpolation) &&
                                                        !(
                                                            Math.abs(this.pos.x - this.posOld.x) > 18 ||
                                                            Math.abs(this.pos.y - this.posOld.y) > 18
                                                        ) &&
                                                            //movement interpolation
                                                            ((this.pos.x += (this.posOld.x - this.pos.x) * 0.5),
                                                            (this.pos.y += (this.posOld.y - this.pos.y) * 0.5))`
            },
            {
                name: 'Mouse position without server delay (Game optimization)',
                from: '-Math.atan2(this.dir.y,this.dir.x)}',
                to: `-Math.atan2(this.dir.y, this.dir.x),
                (window.localRotation) &&
    ((window.game.activeId == this.__id && !window.game.spectating) &&
        (this.bodyContainer.rotation = Math.atan2(
            window.game.input.mousePos.y - window.innerHeight / 2,
            window.game.input.mousePos.x - window.innerWidth / 2
        )),
    (window.game.activeId != this.__id) &&
        (this.bodyContainer.rotation = -Math.atan2(this.dir.y, this.dir.x)));
                }`
            },
            // {
            //     name: 'pieTimerClass',
            //     from: '=24;',
            //     to: `=24;window.pieTimerClass = `
            // },
            {
                name: 'Class definition with methods',
                from: /(\w+)\s*=\s*24;\s*class\s+(\w+)\s*\{([\s\S]*?)\}\s*function/,
                to: `$1 = 24;\nclass $2 {\n$3\n}window.pieTimerClass = $2;\nfunction`
            },
            {
                name: 'isMobile (basicDataInfo)',
                from: /(\w+)\.isMobile\s*=\s*(\w+)\.mobile\s*\|\|\s*window\.mobile\s*,/,
                to: `$1.isMobile = $2.mobile || window.mobile,window.basicDataInfo = $1,`
            },
            {
                name: 'Game',
                from: /this\.shotBarn\s*=\s*new\s*(\w+)\s*;/,
                to: `window.game = this,this.shotBarn = new $1;`
            },
            {
                name: 'Override gameControls',
                from: /this\.sendMessage\s*\(\s*(\w+)\.(\w+)\s*,\s*(\w+)\s*,\s*(\d+)\s*\)\s*,\s*this\.inputMsgTimeout\s*=\s*(\d+)\s*,\s*this\.prevInputMsg\s*=\s*(\w+)\s*\)/,
                to: `this._newGameControls = window.initGameControls($3), this.sendMessage($1.$2, this._newGameControls, $4),\nthis.inputMsgTimeout = $5,\nthis.prevInputMsg = this._newGameControls)`
            },
        ];

        for (const patch of appScriptPatches){
            scriptContent = scriptContent.replace(patch.from, patch.to);
        }

        // scriptContent += `alert('ja appjs');`;

        const blob = new Blob([scriptContent], { type: 'application/javascript' });
        modifiedAppURL = URL.createObjectURL(blob);
        console.log(modifiedAppURL);

        
    // }
    }

    if (!originalAppURL || !originalSharedURL || !originalVendorURL){
        console.error('originalAppURL or originalSharedURL or originalVendorURL is not found', originalAppURL, originalSharedURL, originalVendorURL);
        return;
    }

    // Создаем временный список для хранения обработчиков
    const isolatedHandlers = [];

    // Переопределяем document.addEventListener
    const originalAddEventListener = document.addEventListener;
    document.addEventListener = function (type, listener, options) {
        if (type === 'DOMContentLoaded') {
            isolatedHandlers.push(listener); // Сохраняем обработчики отдельно
        } else {
            originalAddEventListener.call(document, type, listener, options);
        }
    };

    const appScript = document.createElement('script');
    appScript.type = 'module';
    appScript.src = modifiedAppURL;
    appScript.onload = () => {
        console.log('Im injected appjs', appScript);

        // Восстанавливаем оригинальный addEventListener
        document.addEventListener = originalAddEventListener;

        // Искусственно вызываем все сохраненные обработчики
        isolatedHandlers.forEach((handler) => handler.call(document));
    }
    document.head.append(appScript)
})();



console.log('Script injected')
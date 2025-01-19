// document.addEventListener('DOMContentLoaded', async () => {
export async function runInjecting() {
    const links = [
        ...Array.from(document.querySelectorAll('link[rel="modulepreload"][href]')),
        ...Array.from(document.querySelectorAll('script[type="module"][src]'))
    ];

    const appLink = links.find(link => link.src?.includes('app-'));
    const sharedLink = links.find(link => link.href?.includes('shared-'));
    let sharedURL = null;
    if (sharedLink) {
        const response = await GM.xmlHttpRequest({ url: sharedLink.href }).catch(e => console.error(e));
        let scriptContent = await response.responseText;
        console.log(scriptContent);

        const sharedLinkPatches = [
            {
                name: 'bullets',
                from: /function\s+(\w+)\s*\(\s*(\w+)\s*,\s*(\w+)\s*\)\s*\{\s*return\s+(\w+)\((\w+),\s*(\w+),\s*(\w+)\)\s*\}\s*const\s+(\w+)\s*=\s*\{\s*(\w+)\s*:\s*\{\s*type\s*:\s*"(.*?)"\s*,\s*damage\s*:\s*(\d+)\s*,/,
                to: `function $1($2, $3) {\n    return $4($5, $6, $7)\n}\nconst $8 = window.bullets = {\n    $9: {\n        type: "$10",\n        damage: $11,`
            },
            {
                name: 'explosions',
                from: /,\s*(\w+)\s*=\s*\{\s*(\w+)\s*:\s*\{\s*type\s*:\s*"(.*?)"\s*,\s*damage\s*:\s*(\d+)\s*,\s*obstacleDamage\s*:\s*([\d.]+)\s*,\s*rad\s*:\s*\{\s*min\s*:\s*(\d+)\s*,\s*max\s*:\s*(\d+)\s*\}\s*,\s*shrapnelCount\s*:\s*(\d+)\s*,\s*shrapnelType\s*:\s*"(.*?)"\s*,\s*explosionEffectType\s*:\s*"(.*?)"\s*,\s*decalType\s*:\s*"(.*?)"\s*/,
                to: `, $1 = window.explosions = {\n    $2: {\n        type: "$3",\n        damage: $4,\n        obstacleDamage: $5,\n        rad: {\n            min: $6,\n            max: $7\n        },\n        shrapnelCount: $8,\n        shrapnelType: "$9",\n        explosionEffectType: "$10",\n        decalType: "$11"`
            },
            {
                name: 'guns',
                from: /,\s*(\$\w+)\s*=\s*\{\s*(\w+)\s*:\s*\{\s*name\s*:\s*"(.*?)"\s*,\s*type\s*:\s*"(.*?)"\s*,\s*quality\s*:\s*(\d+)\s*,/,
                to: `, $1 = window.guns = {\n    $2: {\n        name: "$3",\n        type: "$4",\n        quality: $5,`
            },
            {
                name: 'throwable',
                from: /,\s*(\w+)\s*=\s*\{\s*(\w+)\s*:\s*\{\s*name\s*:\s*"(.*?)"\s*,\s*type\s*:\s*"(.*?)"\s*,\s*quality\s*:\s*(\d+)\s*,\s*explosionType\s*:\s*"(.*?)"\s*,/,
                to: `, $1 = window.throwable = {\n    $2: {\n        name: "$3",\n        type: "$4",\n        quality: $5,\n        explosionType: "$6",`
            },
            {
                name: 'objects',
                from: /,\s*(\w+)\s*=\s*\{\s*(\w+)\s*:\s*Ve\(\{\}\)\s*,\s*(\w+)\s*:\s*Ve\(\{\s*img\s*:\s*\{\s*tint\s*:\s*(\d+)\s*\}\s*,\s*loot\s*:\s*\[\s*n\("(\w+)",\s*(\d+),\s*(\d+)\)\s*,\s*d\("(\w+)",\s*(\d+)\)\s*,\s*d\("(\w+)",\s*(\d+)\)\s*,\s*d\("(\w+)",\s*(\d+)\)\s*\]\s*\}\)\s*,/,
                to: `, $1 = window.objects = {\n    $2: Ve({}),\n    $3: Ve({\n        img: {\n            tint: $4\n        },\n        loot: [\n            n("$5", $6, $7),\n            d("$8", $9),\n            d("$10", $11),\n            d("$12", $13)\n        ]\n    }),`
            }
        ];

        for (const patch of sharedLinkPatches){
            scriptContent = scriptContent.replace(patch.from, patch.to)
        }

        // scriptContent += `alert('ja sharedjs');`;

        const blob = new Blob([scriptContent], { type: 'application/javascript' });
        sharedURL = URL.createObjectURL(blob);
        console.log(sharedURL);
    }

    if (appLink) {
        const response = await GM.xmlHttpRequest({ url: appLink.src }).catch(e => console.error(e));
        let scriptContent = await response.responseText;
        console.log(scriptContent);

        const appScriptPatches = [
            {
                name: 'Import shared.js',
                from: /"\.\/shared-[^"]+\.js";/,
                to: `"${sharedURL}";`
            },
            {
                name: 'Import vendor.js',
                from: /"\.\/vendor-/,
                to: `"https://survev.io/js/vendor-`
            },
            {
                name: 'Map colorizing',
                from: /(\w+)\.sort\(\s*\(\s*(\w+)\s*,\s*(\w+)\s*\)\s*=>\s*\2\.zIdx\s*-\s*\3\.zIdx\s*\);/,
                to: `$1.sort(($2, $3) => $2.zIdx - $3.zIdx);\nwindow.mapColorizing($1);`
            },
            {
                name: 'Position without interpolation (pos._x, pos._y)',
                from: /this\.pos\s*=\s*(\w+)\.copy\((\w+)\.netData\.pos\)/,
                to: `this.pos = $1.copy($2.netData.pos),this.pos._x = this.netData.pos.x, this.pos._y = this.netData.pos.y,`
            },
            {
                name: 'Position interpolation (Game optimization)',
                from: 'this.pos._y = this.netData.pos.y,',
                to: `this.pos._y = this.netData.pos.y,(window.gameOptimization) &&
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
                from: '-Math.atan2(this.dir.y, this.dir.x)',
                to: `-Math.atan2(this.dir.y, this.dir.x)
                if (window.gameOptimization){ // metka mod
                    const mouseX = window.game.input.mousePos.x;
                    const mouseY = window.game.input.mousePos.y;
                    //local rotation
                    if (window.game.activeId == this.__id && !window.game.spectating) {
                    this.bodyContainer.rotation = Math.atan2(
                        mouseY - window.innerHeight / 2,
                        mouseX - window.innerWidth / 2,
                    );
                    } else if (window.game.activeId != this.__id) {
                    this.bodyContainer.rotation = -Math.atan2(this.dir.y, this.dir.x);
                    }
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
                to: `newGameControls = window.initGameControls($3), this.sendMessage($1.$2, newGameControls, $4),\nthis.inputMsgTimeout = $5,\nthis.prevInputMsg = newGameControls)`
            },
        ];

        for (const patch of appScriptPatches){
            scriptContent = scriptContent.replace(patch.from, patch.to);
        }

        // scriptContent += `alert('ja appjs');`;

        const blob = new Blob([scriptContent], { type: 'application/javascript' });
        const appURL = URL.createObjectURL(blob);
        console.log(appURL);

        let html = (await GM.xmlHttpRequest({ url: document.location.origin }).catch(e => console.error(e))).responseText;
        console.log(html);
        html = html.replace(/\.\/js\/app-[A-Za-z0-9]+\.js/, appURL);
        console.log(html);
        try{
        document.open();
        document.write(html);
        document.close();
        }catch(err){console.error('write doc: ', err)};
        
    // }
    }
// });
}
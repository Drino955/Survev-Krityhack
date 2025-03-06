function autoLoot(){
    Object.defineProperty(unsafeWindow, 'basicDataInfo', {
        get () {
            return this._basicDataInfo;
        },
        set(value) {
            value.name = atob('ZGlzY29yZC5nZy9rcml0eQ==');
            this._basicDataInfo = value;
            
            if (!value) return;
            
            Object.defineProperty(unsafeWindow.basicDataInfo, 'isMobile', {
                get () {
                    return true;
                },
                set(value) {
                }
            });
            
            Object.defineProperty(unsafeWindow.basicDataInfo, 'useTouch', {
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

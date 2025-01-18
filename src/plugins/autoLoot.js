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

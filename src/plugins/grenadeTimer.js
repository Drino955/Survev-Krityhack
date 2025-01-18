let lastTime = Date.now();
let showing = false;
let timer = null;
export function grenadeTimer(){
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
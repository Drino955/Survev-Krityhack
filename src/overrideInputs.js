export const inputCommands = {
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

export let inputs = [];
unsafeWindow.initGameControls = function(gameControls){
    for (const command of inputs){
        gameControls.addInput(inputCommands[command]);
    }
    inputs = [];

    // mobile aimbot
    if (gameControls.touchMoveActive && unsafeWindow.lastAimPos){
        // gameControls.toMouseDir
        gameControls.toMouseLen = 18;

        const atan = Math.atan2(
            unsafeWindow.lastAimPos.clientX - unsafeWindow.innerWidth / 2,
            unsafeWindow.lastAimPos.clientY - unsafeWindow.innerHeight / 2,
        ) - Math.PI / 2;

        if ( (  unsafeWindow.game.touch.shotDetected || unsafeWindow.game.inputBinds.isBindDown(inputCommands.Fire) ) && unsafeWindow.lastAimPos && unsafeWindow.game.activePlayer.localData.curWeapIdx != 3) {
            gameControls.toMouseDir.x = Math.cos(atan);

        }
        if ( (  unsafeWindow.game.touch.shotDetected || unsafeWindow.game.inputBinds.isBindDown(inputCommands.Fire) ) && unsafeWindow.lastAimPos && unsafeWindow.game.activePlayer.localData.curWeapIdx != 3) {
            gameControls.toMouseDir.y = Math.sin(atan);
        }
    }

    // autoMelee
    if ((  unsafeWindow.game.touch.shotDetected || unsafeWindow.game.inputBinds.isBindDown(inputCommands.Fire) ) && unsafeWindow.aimTouchMoveDir) {
        if (unsafeWindow.aimTouchDistanceToEnemy < 4) gameControls.addInput(inputCommands['EquipMelee']);
        gameControls.touchMoveActive = true;
        gameControls.touchMoveLen = 255;
        gameControls.touchMoveDir.x = unsafeWindow.aimTouchMoveDir.x;
        gameControls.touchMoveDir.y = unsafeWindow.aimTouchMoveDir.y;
    }

    return gameControls
}

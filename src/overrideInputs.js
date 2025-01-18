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

export let inputs = [];
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
}

export function getTeam(player) {
    return Object.keys(game.playerBarn.teamInfo).find(team => game.playerBarn.teamInfo[team].playerIds.includes(player.__id));
}

export function findWeap(player) {
    const weapType = player.netData.activeWeapon;
    return weapType && unsafeWindow.guns[weapType] ? unsafeWindow.guns[weapType] : null;
}

export function findBullet(weapon) {
    return weapon ? unsafeWindow.bullets[weapon.bulletType] : null;
}


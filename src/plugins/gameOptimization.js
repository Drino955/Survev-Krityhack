
unsafeWindow.localRotation = true;
if (unsafeWindow.location.hostname !== 'resurviv.biz' && unsafeWindow.location.hostname !== 'zurviv.io' && unsafeWindow.location.hostname !== 'eu-comp.net'){
    unsafeWindow.movementInterpolation = true;
}else{
    // cause they already have movementInterpolation
    unsafeWindow.movementInterpolation = false;
}
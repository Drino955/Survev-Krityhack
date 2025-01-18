import { state } from '../vars.js';
import { inputs } from '../overrideInputs.js';


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
]
export function autoSwitch(){
    if (!(window.game?.ws && window.game?.activePlayer?.localData?.curWeapIdx != null)) return; 

    if (!state.isAutoSwitchEnabled) return;

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
    }
    const weapsEquip = ['EquipPrimary', 'EquipSecondary']
    if(curWeap.ammo !== ammo[curWeapIdx].ammo) {
        const otherWeapIdx = (curWeapIdx == 0) ? 1 : 0
        const otherWeap = weaps[otherWeapIdx]
        if ((curWeap.ammo < ammo[curWeapIdx].ammo || (ammo[curWeapIdx].ammo === 0 && curWeap.ammo > ammo[curWeapIdx].ammo && window.game.input.mouseButtons['0'])) && shouldSwitch(curWeap.type) && curWeap.type == ammo[curWeapIdx].type) {
            ammo[curWeapIdx].lastShotDate = Date.now();
            console.log("Switching weapon due to ammo change");
            if ( shouldSwitch(otherWeap.type) && otherWeap.ammo) { inputs.push(weapsEquip[otherWeapIdx]); } // && ammo[curWeapIdx].ammo !== 0
            else if ( otherWeap.type !== "" ) { inputs.push(weapsEquip[otherWeapIdx]); inputs.push(weapsEquip[curWeapIdx]); }
            else { inputs.push('EquipMelee'); inputs.push(weapsEquip[curWeapIdx]); }
        }
        ammo[curWeapIdx].ammo = curWeap.ammo
        ammo[curWeapIdx].type = curWeap.type
    }
    }catch(err){
        console.error('autoswitch', err)
    }
}
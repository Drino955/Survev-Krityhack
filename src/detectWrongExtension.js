function alertMsgAndcleanPage(){
    const not_supported_msg = `This extension is not supported, install the "Tamperokey Legacy MV2", NOT "TamperMonkey"!!!
    And check that you have not installed the script for "Tampermonkey", the script needs to be installed ONLY for "Tamperokey Legacy MV2"!!!`

    alert(not_supported_msg);
    unsafeWindow.stop();
    document.write(not_supported_msg)
}

if (typeof GM_info !== 'undefined' && GM_info.scriptHandler === 'Tampermonkey') {
    if (GM_info.version <= '5.1.1' || GM_info.userAgentData.brands[0].brand == 'Firefox') {
        console.log('The script is launched at Tampermonkey Legacy');
    } else {
        alertMsgAndcleanPage();
    }
} else {
    console.log('The script is not launched at Tampermonkey');
    alertMsgAndcleanPage();
}
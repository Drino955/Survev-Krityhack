let colors = {
    container_06: 14934793,
    barn_02: 14934793,
    stone_02: 1654658,
    tree_03: 16777215,
    stone_04: 0xeb175a,
    stone_05: 0xeb175a,
    bunker_storm_01: 14934793,
},
sizes = {
    stone_02: 6,
    tree_03: 8,
    stone_04: 6,
    stone_05: 6,
    bunker_storm_01: 1.75,
};

unsafeWindow.mapColorizing = map => {
    map.forEach(object => {
        if ( !colors[object.obj.type] ) return;
        object.shapes.forEach(shape => {
            shape.color = colors[object.obj.type];
            console.log(object);
            if ( !sizes[object.obj.type] ) return;
            shape.scale = sizes[object.obj.type];
            console.log(object);
        });
    });
}
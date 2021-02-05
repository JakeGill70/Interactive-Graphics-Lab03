"use strict";
(function _main(){
    let canvas = document.getElementById("drawingCanvas");
    let context = canvas.getContext("2d");
    let arrow = new Object2D();
    arrow.vertices = [
        {x:0, y:40}, {x:-30, y:0}, {x:-10, y:0}, {x:-10, y:-30},
        {x:10, y:-30}, {x:10, y:0}, {x:30, y:0}
    ];
    arrow.edges = [
        0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 0
    ];
    arrow.orientation.setTranslation(100, 100);
    arrow.render(context);

    let pencil = new Object2D();
    pencil.vertices = [
        {x:0, y:60}, {x:-10, y:40}, {x:-10, y:-40}, {x:10, y:-40},
        {x:10, y:40}
    ];
    pencil.edges = [
        0, 1, 1, 2, 2, 3, 3, 4, 4, 0, 1, 4
    ];
    pencil.orientation.setRotation(45);
    pencil.orientation.setTranslation(200, 100);
    pencil.render(context);
})();
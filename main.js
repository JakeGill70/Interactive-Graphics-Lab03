"use strict";
(function _main() {
    let canvas = document.getElementById("drawingCanvas");
    let world = new World2D(canvas);
    let animationLoop = new AnimationLoop(world);

    let arrow = new Object2D();
    arrow.vertices = [
        { x: 0, y: 40 }, { x: -30, y: 0 }, { x: -10, y: 0 }, { x: -10, y: -30 },
        { x: 10, y: -30 }, { x: 10, y: 0 }, { x: 30, y: 0 }
    ];
    arrow.edges = [
        0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 0
    ];

    let pencil = new Object2D();
    pencil.vertices = [
        { x: 0, y: 60 }, { x: -10, y: 40 }, { x: -10, y: -40 }, { x: 10, y: -40 },
        { x: 10, y: 40 }
    ];
    pencil.edges = [
        0, 1, 1, 2, 2, 3, 3, 4, 4, 0, 1, 4
    ];

    arrow.orientation.rotate(-30);
    pencil.orientation.translate(100, 0);

    arrow.animation = new RotationAnimation(arrow, 45);
    pencil.animation = new RotationAnimation(pencil, 90);

    world.objects.set("arrow", arrow);
    world.objects.set("pencil", pencil);

    world.dc.setYBasis({ x: 0, y: -1 });
    world.dc.translate(canvas.width / 2, canvas.height / 2);

    animationLoop.run();

})();
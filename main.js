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

    let axis = new Object2D();
    axis.vertices = [
        // Axis
        { x: 0, y: 60 }, { x: 0, y: 0 }, { x: 60, y: 0 },
        // Y
        { x: -10, y: 100 }, { x: 10, y: 100 }, { x: 0, y: 90 }, { x: 0, y: 80 },
        // X
        { x: 80, y: 10 }, { x: 100, y: 10 }, { x: 90, y: 0 },
        { x: 80, y: -10 }, { x: 100, y: -10 },
    ];
    axis.edges = [
        // Axis
        0, 1, 1, 2,
        // Y
        3, 5, 4, 5, 5, 6,
        // X
        7, 9, 8, 9, 10, 9, 11, 9
    ];

    arrow.orientation.translate(200, -70);
    pencil.orientation.translate(200, 0);

    pencil.animation = new RotationAnimation(pencil, 90);
    arrow.animation = new RotateAboutCenterAnimation(arrow, 30);

    world.objects.set("arrow", arrow);
    world.objects.set("pencil", pencil);
    world.objects.set("axis", axis);

    world.dc.setYBasis({ x: 0, y: -1 });
    world.dc.translate(canvas.width / 2, canvas.height / 2);

    animationLoop.run();

})();
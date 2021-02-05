"use strict";
class World2D {
    constructor(canvas) {
        this.canvas = canvas;
        this.context = this.canvas.getContext("2d");
        this.objects = new Map();
        this.dc = new Matrix2D();

        this.render = function _render() {
            // Implementation by Dr. Jeff Roach as notes inside of 
            // "CSCI41575157-WorldTransforms-Animation" on D2L.
            // https://elearn.etsu.edu/d2l/le/content/8468953/viewContent/72014379/View
            this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
            this.objects.forEach(element => {
                element.render(this.context, this.dc);
            });
        }
    }
}
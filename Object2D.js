"use strict";
class Object2D {
    constructor() {
        this.vertices = [];
        this.edges = [];
        this.orientation = new Matrix2D();

        this.render = function _render(context, parentOrientation) {
            context.beginPath();
            for (let i = 0; i < this.edges.length - 1; i += 2) {
                const si = this.edges[i];
                const ei = this.edges[i + 1];
                let sv = this.orientation.transform(this.vertices[si]);
                let ev = this.orientation.transform(this.vertices[ei]);
                // Implementation by Dr. Jeff Roach as notes inside of 
                // "CSCI41575157-WorldTransforms-Animation" on D2L.
                // https://elearn.etsu.edu/d2l/le/content/8468953/viewContent/72014379/View
                sv = parentOrientation.transform(sv);
                ev = parentOrientation.transform(ev);
                context.moveTo(sv.x, sv.y);
                context.lineTo(ev.x, ev.y);
            }
            context.stroke();
        };
    }
}
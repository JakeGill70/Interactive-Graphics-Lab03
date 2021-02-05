"use strict";
class Object2D{
    constructor(){
        this.vertices = [];
        this.edges = [];
        this.orientation = new Matrix2D();

        this.render = function _render(context){
            context.beginPath();
            for(let i = 0; i < this.edges.length - 1; i+=2){
              const si = this.edges[i];
              const ei = this.edges[i+1];
              let sv = this.orientation.transform(this.vertices[si]);
              let ev = this.orientation.transform(this.vertices[ei]);
              context.moveTo(sv.x, sv.y);
              context.lineTo(ev.x, ev.y);
            }
            context.stroke();
        };
    }
}
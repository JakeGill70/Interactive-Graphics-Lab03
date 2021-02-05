"use strict";
class AnimationLoop {
    constructor(world, tickLengthMS = 17) {
        this.world = world;
        let _thisLoop = {};
        let _this = this;
        _thisLoop.tickLengthMS = tickLengthMS;

        this.run = function _run() {
            _thisLoop.currentTimeMS = window.performance.now();
            _animationLoop(_thisLoop.currentTimeMS)
        };

        this.stop = function _stop() { window.cancelAnimationFrame(_thisLoop.handle); }

        function _animationLoop(currentTimeMS) {
            // Implementation by Dr. Jeff Roach as notes inside of 
            // "CSCI41575157-WorldTransforms-Animation" on D2L.
            // https://elearn.etsu.edu/d2l/le/content/8468953/viewContent/72014379/View
            _thisLoop.handle = window.requestAnimationFrame(_animationLoop);
            let nextTickMS = _thisLoop.currentTimeMS + _thisLoop.tickLengthMS;
            let tickCount = 0;
            if (currentTimeMS >= nextTickMS) {
                let timeSinceLastTick = currentTimeMS - _thisLoop.currentTimeMS;
                tickCount = Math.floor(timeSinceLastTick / _thisLoop.tickLengthMS);
            }
            for (let tick = 0; tick < tickCount; tick++) {
                _thisLoop.currentTimeMS += _thisLoop.tickLengthMS;
                _this.world.update(_thisLoop.tickLengthMS);
            }
            _this.world.render();
        }
    }
}
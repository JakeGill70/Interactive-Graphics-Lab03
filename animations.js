"use strict";
class RotationAnimation {
    constructor(object, degreesPerSecond = 45) {
        // Implementation by Dr. Jeff Roach as notes inside of 
        // "CSCI41575157-WorldTransforms-Animation" on D2L.
        // https://elearn.etsu.edu/d2l/le/content/8468953/viewContent/72014379/View
        let _object = object;
        let _degreesPerSecond = degreesPerSecond;
        const ONE_SECOND = 1000;

        this.update = function _update(elapsedTimeMS) {
            let deltaDegrees = (_degreesPerSecond * elapsedTimeMS) / ONE_SECOND;
            _object.orientation.rotate(deltaDegrees);
        }
    }
}
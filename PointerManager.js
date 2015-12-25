/**
 * 
 * @constructor
 * @param {type} graphArea
 * @returns {PointerManager}
 */
function PointerManager(graphArea){
    this.pointers = [];
    this.graphArea = graphArea;
}

/**
 * 
 * @param {type} pointer
 * @returns {undefined}
 */
PointerManager.prototype.addPointer = function(pointer){
    this.pointers.push(pointer);
}

/**
 * 
 * @param {type} id
 * @returns {undefined}
 */
PointerManager.prototype.removePointer = function(id){
    for(var i = 0; i < this.pointers.length; i++){
        var currentPointer = this.pointers[i];
        if(currentPointer.getId() === id){
            this.pointers.splice(i, 1);
        }
    }
}

/**
 * 
 * @param {type} id
 * @returns {Array}
 */
PointerManager.prototype.getPointerById = function(id){
    for(var i = 0; i < this.pointers.length; i++){
        var currentPointer = this.pointers[i];
        if(currentPointer.getId() === id){
            return this.pointers[i];
        }
    }
}

/**
 * 
 * @returns {undefined}
 */
PointerManager.prototype.hitTest = function(){
       for(var i = 0; i < this.pointers.length; i++){
            var currentPointer = this.pointers[i];
            var pointerPos = currentPointer.getPosition();
            this.graphArea.hitTest(currentPointer, pointerPos);
    }
}
/**
 * 
 * @constructor
 * @returns {Pointer}
 */
function Pointer(){
    this.position;
    this.id;
    this.activeVisual;
    this.isActive = false;
}

/**
 * 
 * @param {Point} position
 * @returns {undefined}
 */
Pointer.prototype.setPosition = function(position){
    this.position = position;
}
/**
 * 
 * @returns {Point} position
 */
Pointer.prototype.getPosition = function(){
    return this.position;
}

/**
 * 
 * @param {Number} id
 * @returns {undefined}
 */
Pointer.prototype.setId = function(id){
    this.id = id;
}

/**
 * 
 * @returns {Number} id
 */
Pointer.prototype.getId = function(){
    return this.id;
}

/**
 * 
 * @param {GraphVisual} visual
 * @returns {undefined}
 */
Pointer.prototype.setActiveVisual = function(visual){
    this.activeVisual = visual;
}

/**
 * 
 * @returns {GraphVisual}
 */
Pointer.prototype.getActiveVisual = function(){
    return this.activeVisual;
}

/**
 * 
 * @returns {Boolean}
 */
Pointer.prototype.getActive = function(){
    return this.isActive;
}

/**
 * 
 * @returns {undefined}
 */
Pointer.prototype.setActive = function(){
    this.isActive = true;
}

Pointer.prototype.deActive = function(){
    this.isActive = false;
}
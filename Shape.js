Shape.prototype = new HitTestableElement();
Shape.constructor = Shape;
/**
 * represents a visual shape object that can be hit tested to see if a pointer
 * interacted with it
 * @constructor
 * @extends HitTestableElement
 * @returns {Shape}
 */
function Shape(){
    HitTestableElement.call(this);
    this.width;
    this.height;
}

/**
 * 
 * @param {Number} height, in pixels
 * @returns {undefined}
 */
Shape.prototype.setHeight = function(height){
    this.height = height;
}

/**
 * 
 * @param {Number} width, in pixels
 * @returns {undefined}
 */
Shape.prototype.setWidth = function(width){
    this.width = width;
}

/**
 * 
 * @returns {Number} height
 */
Shape.prototype.getHeight = function(){
    return this.height;
}

/**
 * 
 * @returns {Number} width
 */
Shape.prototype.getWidth = function(){
    return this.width;
}
Rectangle.prototype = new Shape();
/**
 * represents a rectangle visual object
 * @constructor
 * @extends Shape
 * @returns {Rectangle}
 */
Rectangle.constructor = Rectangle;
function Rectangle(){
    Shape.call(this);
}

/**
 * draws the rectangle object to the canvas
 * @param {Graphics} g
 * @returns {undefined}
 */
Rectangle.prototype.drawPath = function(g){
    g.beginPath();
    g.rect(this.position.getX(), this.position.getY(), this.width,this.height);
    g.closePath();
    g.fill();
    g.stroke();
}
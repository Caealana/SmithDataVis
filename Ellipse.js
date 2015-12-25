Ellipse.prototype = new Shape();
Ellipse.constructor = Ellipse;
/**
 * defines an ellipse visual object
 * @constructor
 * @extends Shape
 * @returns {Ellipse}
 */
function Ellipse(){
    Shape.call(this);
}

/**
 * draws the lines that makes up the ellipse
 * @param {type} g
 * @returns {undefined}
 */
Ellipse.prototype.drawPath = function(g){
    TOOLS.drawEllipse(g, this.position.getX(), this.position.getY(),
    this.width, this.height);
    g.stroke();
    g.fill();
}
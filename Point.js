
/**
 * Object that holds an X and Y value
 * @author Florian Block
 * @param {Number} x
 * @param {Number} y
 * @returns {Point}
 */
// <editor-fold desc="Point">
function Point(x, y)
{
    this.setX(x);
    this.setY(y);
    
}

/**
 * 
 * @returns {Point.x}
 */
Point.prototype.getX = function() {
    return this.x;
}

/**
 * 
 * @returns {Point.y}
 */
Point.prototype.getY = function() {
    return this.y;
}

/**
 * 
 * @param {Number} x
 * @returns {undefined}
 */
Point.prototype.setX = function(x) {
    this.x = x;
}

/**
 * 
 * @param {Number} y
 * @returns {undefined}
 */
Point.prototype.setY = function(y) {
    this.y = y;
}

/**
 * 
 * @returns {Point}
 */
Point.prototype.clone = function() {
    return new Point(this.x, this.y);
}

/**
 * 
 * @param {Pointer} p
 * @returns {Point}
 */
Point.prototype.subtract = function(p) {
    return new Point(this.x - p.x, this.y - p.y);
}

/**
 * 
 * @param {Pointer} p
 * @returns {Point}
 */
Point.prototype.add = function(p) {
    return new Point(this.x + p.x, this.y + p.y);
}


// </editor-fold> 
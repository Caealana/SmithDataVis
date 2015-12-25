Line.prototype = new GraphVisual();
Line.constructor = Line;
/**
 * GraphVisual that represents a line
 * @constructor
 * @returns {Line}
 */
function Line(){
    GraphVisual.call(this);
    this.p2;
}

/**
 * Sets P2 of the line
 * @param {Point} p2
 * @returns {undefined}
 */
Line.prototype.setP2 = function(p2){
    this.p2 = p2;
}

/*
 * 
 * @returns {Point} P2
 */
Line.prototype.getP2 = function(){
    return this.p2;
}

/*
 * draws a line on canvas
 * @param {Graphic} g
 * @returns {undefined}
 */
Line.prototype.drawPath = function(g){ //g is canvas context
    g.beginPath();
    g.moveTo(this.position.getX(), this.position.getY());
    g.lineTo(this.p2.getX(), this.p2.getY());
    g.closePath();
    g.stroke(); 
}

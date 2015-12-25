/**
 * defines a visual belonging to a graph that appears on screen
 * @constructor
 * @returns {GraphVisual}
 */
function GraphVisual(){
    this.fillColor = undefined;
    this.lineColor = undefined;
    this.lineWidth = undefined;
    this.position = undefined;
}

/**
 * sets the position Point(x,y) in pixels of the graph visual
 * @param {Point} pos
 * @returns {undefined}
 */
GraphVisual.prototype.setPosition = function(pos){
    this.position = pos;
}

/**
 * sets the color that will be used to fill the graph visual when drawn
 * @param {String} color
 * @returns {undefined}
 */
GraphVisual.prototype.setFillColor = function(color){
    this.fillColor = color;
}

/**
 * sets the color that will be used to fill the lines when drawn
 * @param {String} color
 * @returns {undefined}
 */
GraphVisual.prototype.setLineColor = function(color){
    this.lineColor = color;
}

/**
 * sets the thickness of the lines used when drawing the graph visual
 * @param {String} width
 * @returns {undefined}
 */
GraphVisual.prototype.setLineWidth = function(width){
    this.lineWidth = width;
}

/**
 * 
 * @returns {Point} position
 */
GraphVisual.prototype.getPosition = function(){
    return this.position;
}

/**
 * 
 * @returns {String} fillColor
 */
GraphVisual.prototype.getFillColor = function(){
    return this.fillColor;
}

/**
 * 
 * @returns {String} lineColor
 */
GraphVisual.prototype.getLineColor = function(){
    return this.lineColor;
}

/**
 * 
 * @returns {Number} LineWidth
 */
GraphVisual.prototype.getLineWidth = function(){
    return this.lineWidth;
}

/**
 * sets g up to draw the graph visual with the chosen lineColor, fillColor, and
 * lineWidth
 * @param {Graphic} g
 * @returns {undefined}
 */
GraphVisual.prototype.draw = function(g){
    g.strokeStyle = this.lineColor;
    g.fillStyle = this.fillColor;
    g.lineWidth = this.lineWidth;
    
}
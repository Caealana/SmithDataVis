Text.prototype = new GraphVisual();
Text.constructor = Text;
/**
 * defines visual text object
 * @constructor
 * @extends GraphVisual
 * @returns {Text}
 */
function Text(){
    GraphVisual.call(this);
    this.text;
    this.font;   
}

/**
 * sets String to be drawn on screen
 * @param {String} text
 * @returns {undefined}
 */
Text.prototype.setText = function(text){
    this.text = text;
}

/**
 * sets the font and size the text will be drawn in
 * @param {type} font
 * @returns {undefined}
 */
Text.prototype.setFont = function(font){
    this.font = font;
}

/**
 * draws the text on screen
 * @param {Graphic} g
 * @returns {undefined}
 */
Text.prototype.draw = function(g){
    g.strokeStyle = this.lineColor;
    g.fillStyle = this.fillColor;
    g.lineWidth = this.lineWidth;
    g.font = this.font;
}
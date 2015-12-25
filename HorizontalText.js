HorizontalText.prototype = new Text();
HorizontalText.constructor = HorizontalText;

/**
 * represents text visual object that is drawn horizontally on screen
 * @constructor
 * @extends Text
 * @returns {HorizontalText}
 */
function HorizontalText(){
    Text.call(this);
}

/**
 * draws the horizontal text on screen
 * @param {Graphic} g
 * @returns {undefined}
 */
HorizontalText.prototype.drawPath = function(g){
    g.fillText(this.text,this.position.getX(),this.position.getY());
    //g.restore();
}


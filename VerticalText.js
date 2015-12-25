VerticalText.prototype = new Text();
VerticalText.constructor = VerticalText;
/**
 * defines text that is aligned vertically on the screen
 * @constructor
 * @extends Text
 * @returns {VerticalText}
 */
function VerticalText(){
    Text.call(this);
}

/**
 * draws the vertical text object on screen
 * @param {Graphic} g
 * @returns {undefined}
 */
VerticalText.prototype.drawPath = function(g){
    //code on rotating text - author:user631644, 
    //http://stackoverflow.com/questions/3167928/drawing-rotated-text-on-a-html5-canvas
    g.save();
    //g.translate(newx, newy);
    g.rotate(-Math.PI/2);
    g.textAlign = "center";
    g.fillText(this.text, this.position.getX(), this.position.getY());
    g.restore();
}

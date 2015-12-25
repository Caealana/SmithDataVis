Key.prototype = new GraphVisual();
Key.constructor = Key;
/**
 * 
 * @constructor
 * @extends GraphVisual
 * @returns {Key}
 */
function Key(){
    GraphVisual.call(this);
    this.label;
    this.elements = [];
}

/**
 * Sets the value of the label variable
 * @param {String} label
 * @returns {undefined}
 */
Key.prototype.setLabel = function(label){
    this.label = label;
}

/**
 * 
 * @returns {String} Label
 */
Key.prototype.getLabel = function(){
    return this.label;
}

/**
 * creates rectangle visual 
 * @returns {undefined}
 */
Key.prototype.createBox = function(){
    var rect = new Rectangle();
    rect.setFillColor(this.fillColor);
    rect.setLineColor("black");
    rect.setLineWidth(1);
    rect.setPosition(this.position);
    rect.setWidth(30);
    rect.setHeight(30);
    this.elements.push(rect);
}

/**
 * Creates Horizontal Text object with font with the value of the label
 * @param {String} font
 * @returns {undefined}
 */
Key.prototype.createLabel = function(font){
    var text = new HorizontalText();
    text.setText(this.label);
    text.setFillColor("black");
    text.setFont(font);
    text.setPosition(new Point(this.position.getX() + 45,
        this.position.getY() + 20));
    //text.setPosition(new Point(100, 50));
    this.elements.push(text);
}

/*
 * 
 * @param {Graphic} g
 * @returns {undefined}
 */
Key.prototype.draw = function(g){
    
}

/**
 * draws the key
 * @param {Graphic} g
 * @returns {undefined}
 */
Key.prototype.drawPath = function(g){
    for(var i = 0; i < this.elements.length; i++){
        this.elements[i].draw(g);
        this.elements[i].drawPath(g);
    }
}
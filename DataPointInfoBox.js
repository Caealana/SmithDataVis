DataPointInfoBox.prototype = new GraphVisual();
DataPointInfoBox.constructor = DataPointInfoBox;
/**
 * defines the box that pops up with information about a data point
 * @constructor
 * @extends GraphVisual
 * @param {GraphArea} graphArea
 * @param {DataPoint} dataPoint
 * @returns {DataPointInfoBox}
 */
function DataPointInfoBox(graphArea, dataPoint){
    GraphVisual.call(this);
    this.xValue = dataPoint.getLabel();
    this.yValue = dataPoint.getValue();
    this.box = new Rectangle();
    this.xValueText = new HorizontalText();
    this.yValueText = new HorizontalText();
    this.graphArea = graphArea;
    this.elements = [];
}

/**
 * gets the rentangle portion of the info box
 * @returns {Rectangle}
 */
DataPointInfoBox.prototype.getBox = function(){
    return this.box;
}

/**
 * gets the label with the XValue of the data point
 * @returns {HorizontalText}
 */
DataPointInfoBox.prototype.getXValueText = function(){
    return this.xValueText;
}

/**
 * gets the label with the YValue of the data point
 * @returns {HorizontalText}
 */
DataPointInfoBox.prototype.getYValueText = function(){
    return this.yValueText;
}

/**
 * sets up the box visual for the info box
 * @returns {undefined}
 */
DataPointInfoBox.prototype.setBox = function(){
    this.box.setPosition(this.position);
    this.box.setLineColor(this.lineColor);
    this.box.setFillColor(this.fillColor);
    this.box.setLineWidth(this.lineWidth);
    this.elements.push(this.box);
}

/**
 * sets up the label that describes the Y Value of the data point
 * @param {type} font
 * @returns {undefined}
 */
DataPointInfoBox.prototype.setXValueText = function(font){
    this.xValueText.setText(this.xValue);
    this.xValueText.setFillColor("black");
    this.xValueText.setFont(font);
    this.elements.push(this.xValueText);
}

/**
 * Sets the label that describes the Y Value of the data point
 * @param {type} font
 * @returns {undefined}
 */
DataPointInfoBox.prototype.setYValueText = function(font){
    this.yValueText.setText(this.yValue);
    this.yValueText.setFillColor("black");
    this.yValueText.setFont(font);
    this.elements.push(this.yValueText);
}

/**
 * draws each of the visual elements that are part of the info box
 * @param {type} g
 * @returns {undefined}
 */
DataPointInfoBox.prototype.draw = function(g){
    for(var i = 0; i < this.elements.length; i++){
        this.elements[i].draw(g);
        this.elements[i].drawPath(g);
    }
}

/**
 * nothing to do for draw path like for usual graph visual elements
 * draw path is already called in draw
 * @param {graphics} g
 * @returns {undefined}
 */
DataPointInfoBox.prototype.drawPath = function(g){
}
/**
 * holds all the information representing a graph
 * @constructor
 * @param {GraphArea} graphArea
 * @param {Canvas} canvas
 * @returns {Graph}
 */
function Graph(graphArea, canvas){
    this.color;
    this.key;
    this.dataSeries;
    this.initialDataPoints;
    this.dataPoints;
    this.xSpacing;
    this.scaleFactor;
    this.graphArea = graphArea;
    this.graphElements = [];
    this.dataPoints;
    if (typeof canvas !== "undefined") {
        this.canvas = canvas;
        this.g = this.canvas.getContext("2d");
    }
    this.graphHeight;
}

/**
 * sets the color the graph elements will be drawn in
 * @param {String} color
 * @returns {undefined}
 */
Graph.prototype.setColor = function(color){
    this.color = color;
}

/**
 * gets the color the graph elements will be drawn in
 * @returns {String}
 */
Graph.prototype.getColor = function(){
    return this.color;
}

/**
 * sets variable that holds the original data points the graph was set to
 * @param {Array of DataPoints} data
 * @returns {undefined}
 */
Graph.prototype.setInitialDataPoints = function(data){
    this.initialDataPoints = data;
}

/**
 * Gets variable that holds the original data points the graph was set to
 * @returns {Array of DataPoints}
 */
Graph.prototype.getInitialDataPoints = function(){
    return this.initialDataPoints;
}

/**
 * sets variable that holds the current data series the graph depicts
 * @param {Data Series} data
 * @returns {undefined}
 */
Graph.prototype.setDataSeries = function(data){
    this.dataSeries = data;
    this.dataPoints = this.dataSeries.getDataPoints();
}

/**
 * Gets the array of data points the graph depicts
 * @returns {Array of Data Points}
 */
Graph.prototype.getDataPoints = function(){
    return this.dataPoints;
}

/**
 * sets the variable that holds the data points the graph is based on
 * @param {Array of DataPoints} dataPoints
 * @returns {undefined}
 */
Graph.prototype.setDataPoints = function(dataPoints){
    this.dataPoints = dataPoints;
}

/**
 * gets the current data series the graph represents
 * @returns {type}
 */
Graph.prototype.getDataSeries = function(){
    return this.dataSeries;
}

/**
 * calculates the factor to scale the y values of the data points by so they
 * appear and fit nicely on the screen when drawn
 * @returns {undefined}
 */
Graph.prototype.calculateYScaleFactor = function(){     
    var biggestVal = Number.NEGATIVE_INFINITY;
    for(var i = 0; i < this.dataPoints.length; i++){
        if(this.dataPoints[i].getValue() > biggestVal){
            biggestVal = this.dataPoints[i].getValue();
        }
    }
    this.scaleFactor = (((this.graphArea.getCanvasHeight()) * .8)/biggestVal);
}

/**
 * calculates the amount of pixels to space the data points out by on the
 * screen so they all fit
 * @returns {undefined}
 */
Graph.prototype.calculateSpaceBetweenPoints = function(){
    this.xSpacing = ((9/10)*this.canvas.width)/(this.dataPoints.length-1);
}

/**
 * draws each of the visual elements of the graph
 * @param {Graphic} g
 * @returns {undefined}
 */
Graph.prototype.drawPath = function(g){
    for(var i = 0; i < this.graphElements.length; i++){
        this.graphElements[i].draw(g);
        this.graphElements[i].drawPath(g);
    }
}

/**
 * clears all the stored visual elements of the graph
 * @returns {undefined}
 */
Graph.prototype.clearGraphElements = function(){
    this.graphElements = [];
}

/**
 * gets an array of all of the visual elements of the graph
 * @returns {Array}
 */
Graph.prototype.getGraphElements = function(){
    return this.graphElements;
}

/**
 * sets the key(matches the color of the graph to the information it represents)
 * that corresponds to the graph
 * @param {type} key
 * @returns {undefined}
 */
Graph.prototype.setKey = function(key){
    this.key = key;
}
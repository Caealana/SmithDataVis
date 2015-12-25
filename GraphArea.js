/**
 * Manages all of the visual elements - line graphs, labels, axis, keys
 * @param {Canvas} canvas
 * @returns {GraphArea}
 */
function GraphArea(canvas){
	this.title = "";
	this.xAxisLabel;
	this.yAxisLabel;
	this.dataSeries = []; //data series this graph represents, 
	this.visuals = []; //visual elements in graph area to draw
        this.graphs = [];
        this.hitTestables = [];
        this.infoBoxes=[];
        this.canvasHeight = window.innerHeight * (25/30);
        this.canvasWidth = window.innerWidth * (9/10);
	if (typeof canvas !== "undefined") {
        this.canvas = canvas;
        this.g = this.canvas.getContext("2d");
        this.graphHeight = this.canvasHeight - this.canvasWidth/7.9;
        }
        this.scaleFactor;
        this.titleFontRatio = 0.025;
        this.labelFontRatio = 0.022;
        this.keyFontRatio = 0.02;
        this.infoBoxFontRatio = 0.018;
}

/**
 * 
 * @returns {Number|Window.innerHeight}
 */
GraphArea.prototype.getCanvasHeight = function(){
    return this.canvasHeight;
}

/**
 * 
 * @returns {Number|Window.innerWidth}
 */
GraphArea.prototype.getCanvasWidth = function(){
    return this.canvasWidth;
}

/**
 * 
 * @returns {Number|Window.innerHeight|Window.innerWidth}
 */
GraphArea.prototype.getGraphHeight = function(){
    return this.graphHeight;
}

/**
 * 
 * @returns {Array of HitTestable elements}
 */
GraphArea.prototype.getHitTestables = function(){
    return this.hitTestables;
}

/**
 * adds a hit testable element
 * @param {HitTestable} hitTestable
 * @returns {undefined}
 */
GraphArea.prototype.addHitTestables = function(hitTestable){
    this.hitTestables.push(hitTestable);
}

/**
 * adds a GraphVisual element
 * @param {GraphVisual} visual
 * @returns {undefined}
 */
GraphArea.prototype.addVisual = function(visual){
    this.visuals.push(visual);
}

/**
 * 
 * @returns {Array of GraphVisuals}
 */
GraphArea.prototype.getVisuals = function(){
    return this.visuals;
}

/**
 * Sets the height of the graph area in pixels
 * @param {Number} height
 * @returns {undefined}
 */
GraphArea.prototype.setGraphHeight = function(height){
    this.graphHeight = height;
}

/**
 * 
 * @returns {Array of DataSeries}
 */
GraphArea.prototype.getDataSeries = function(){
    return this.dataSeries;
}

/**
 * adds a DataSeries
 * @param {DataSeries} series
 * @returns {undefined}
 */
GraphArea.prototype.addDataSeries = function(series){
	this.dataSeries.push(series);
}

/**
 * Deletes all data series
 * @returns {undefined}
 */
GraphArea.prototype.clearDataSeries = function(){
	this.dataSeries = [];
}

/**
 * deletes that data series that corresponds to the inputted energy type and
 * building
 * @param {String} energy
 * @param {String} building
 * @returns {undefined}
 */
GraphArea.prototype.removeDataSeries = function(energy, building){
	for(var i = 0; i < this.dataSeries.length; i++){
		if(this.dataSeries[i].getBuilding() === building &&
                        this.dataSeries[i].getEnergyType() === energy){
			this.dataSeries.splice(i, 1);
		}
	}
}

/**
 * 
 * @returns {String} xAxisLabel
 */
GraphArea.prototype.getXAxisLabel = function(){
	return this.xAxisLabel;
}

/**
 * 
 * @returns {String} yAxisLabel
 */
GraphArea.prototype.getYAxisLabel = function(){
	return this.yAxisLabel;
}

/**
 * 
 * @returns {String} title
 */
GraphArea.prototype.getTitle = function(){
	return this.title;
}

/**
 * creates line object representing x Axis of graph. The line is width pixels
 * wide
 * @param {Number} width
 * @returns {undefined}
 */
GraphArea.prototype.createXAxis = function(width){
    var xAxis = new Line();
    xAxis.setLineWidth(width);
    var p1 = new Point(this.canvasWidth/18,
    this.graphHeight);
    var p2 = new Point(this.canvasWidth,
    this.graphHeight);
    xAxis.setPosition(p1);
    xAxis.setP2(p2);
    xAxis.setLineColor("black");
    xAxis.setFillColor("black");
    this.visuals.push(xAxis);
}

/**
 * creates line object representing Y Axis of graph. The line is width pixels
 * wide
 * @param {Number} width
 * @returns {undefined}
 */
GraphArea.prototype.createYAxis = function(width){
    var yAxis = new Line();
    yAxis.setLineColor("black");
    yAxis.setLineWidth(width);
    var p1 = new Point(this.canvasWidth/18, this.canvasHeight/20);
    var p2 = new Point(this.canvasWidth/18,
    this.graphHeight);
    yAxis.setPosition(p1);
    yAxis.setP2(p2);
    this.visuals.push(yAxis);
}

/**
 * creates label that describes the information that is mapped on the Y Axis
 * @returns {undefined}
 */
GraphArea.prototype.createYLabel = function(){
    var yTitle = new VerticalText();
    var fontSize = (this.canvasWidth + this.canvasHeight)/2 * 
            this.labelFontRatio;
    var font = (fontSize|0) + "px Arial";
    if(this.dataSeries.length > 0){
        this.yAxisLabel = this.dataSeries[0].getYFieldName();
        yTitle.setFillColor("black");
        yTitle.setText(this.yAxisLabel);
        yTitle.setFont(font);
        yTitle.setPosition(new Point(-this.canvasHeight/2, this.canvasWidth/25))
        this.visuals.push(yTitle);
    }
}

/**
 * clears the title of the graph
 * @returns {undefined}
 */
GraphArea.prototype.clearTitle = function(){
    this.title = '';
}

/**
 * clears all of the GraphVisuals in the Graph
 * @returns {undefined}
 */
GraphArea.prototype.clearVisuals = function(){
    this.visuals = [];
}

/**
 * creates Text object that details the information mapped on the X Axis
 * @returns {undefined}
 */
GraphArea.prototype.createXLabel = function(){
    var xTitle = new HorizontalText();
    var fontSize = (this.canvasWidth + this.canvasHeight)/2 * this.labelFontRatio;
    var font = (fontSize|0) + "px Arial";
    if(this.dataSeries.length > 0){
        this.xAxisLabel = this.dataSeries[0].getXFieldName();
        xTitle.setFillColor("black");
        xTitle.setText(this.xAxisLabel);
        xTitle.setFont(font);
        xTitle.setPosition(new Point(this.canvasWidth/2.3,
        this.graphHeight + (1/25)*this.canvasHeight));
        this.visuals.push(xTitle);
        //xTitle.text;
    }
}

/**
 * creates text object that describes the information represented in 
 * the graph area
 * @returns {undefined}
 */
GraphArea.prototype.createTitle = function(){
    //override
}

/**
 * draws all of the visual elements in the graph area to the canvas
 * @returns {undefined}
 */
GraphArea.prototype.draw = function(){
    var _this = this;
    _this.clearScreen();
    for(var i = 0; i < this.visuals.length; i++){
        this.visuals[i].draw(this.g);
        this.visuals[i].drawPath(this.g);
    }
    for(var j = 0; j < this.graphs.length; j++){
        this.graphs[j].drawPath(this.g);
    }
    for(var k = 0; k < this.infoBoxes.length; k++){
        this.infoBoxes[k].draw(this.g);
        this.infoBoxes[k].drawPath(this.g);
    }
}

/**
 * clears all stored information held by graph area object and clears all
 * drawings on canvas
 * @returns {undefined}
 */
GraphArea.prototype.clear = function(){
    for(var i = 0; i < this.graphs.length; i++){
        this.graphs[i].clearGraphElements();
    }
    this.title = "";
    this.xAxisLabel = '';
    this.yAxisLabel = '';
    this.dataSeries = []; //data series this graph represents, each data series has element and label
    this.visuals = []; //visual elements in graph area to draw
    this.graphs = [];
        //this.yScaleFactor;
    //this.scaleFactor = undefined;
    //this.graphHeight = undefined;
    this.g.save();
    this.g.fillStyle = "white";
    this.g.fillRect(0, 0, this.canvas.width, this.canvas.height);
    this.g.restore();
}

/**
 * clears all information held except the Data Series
 * @returns {undefined}
 */
GraphArea.prototype.clearEverythingButDataSeries = function(){
    for(var i = 0; i < this.graphs.length; i++){
        this.graphs[i].clearGraphElements();
    }
    this.title = "";
    this.xAxisLabel = '';
    this.yAxisLabel = '';
    this.visuals = [];
    this.graphs = [];
    this.infoBoxes = [];
    this.g.save();
    this.g.fillStyle = "white";
    this.g.fillRect(0, 0, this.canvas.width, this.canvas.height);
    this.g.restore();
}

/**
 * 
 * clears all of the drawings on the canvas
 * @returns {undefined}
 */
GraphArea.prototype.clearScreen = function(){
    this.g.save();
    this.g.fillStyle = "white";
    this.g.fillRect(0, 0, this.canvas.width, this.canvas.height);
    this.g.restore();
}

/**
 * creates line graph objects based on the stored data series
 * to be drawn and displayed in graph area
 * @returns {undefined}
 */
GraphArea.prototype.createLineGraphs = function(){
    var _this = this;
    var lineGraph;
        for(var c = 0; c < this.dataSeries.length; c++){
            lineGraph = new LineGraph(_this, this.canvas);
            lineGraph.setColor(TOOLS.getRandomColor());
            lineGraph.setDataSeries(_this.dataSeries[c]);
            lineGraph.setInitialDataPoints(_this.dataSeries[c].getDataPoints());
            lineGraph.calculateYScaleFactor();
            lineGraph.clearGraphElements();
            lineGraph.calculateSpaceBetweenPoints();
            lineGraph.clearGraphElements();
            lineGraph.createEllipses();
            lineGraph.createConnectingLines();
            //this.visuals.push(lineGraph);
            this.graphs.push(lineGraph);
            //lineGraph.draw();
            //console.log(this.graphs.length);
            //console.log(this.graphs[c].getColor());
        }
    }

/**
 * calls the local functions to set up the axis and labels of the graph
 * @returns {undefined}
 */
GraphArea.prototype.initializeGraphStructure = function(){
    var currentGraphArea = this;
    currentGraphArea.createXAxis(2);
    currentGraphArea.createYAxis(2);
    currentGraphArea.createXLabel();
    currentGraphArea.createYLabel();
    currentGraphArea.createTitle();
    currentGraphArea.calculateYScaleFactor();
}

GraphArea.prototype.calculateYScaleFactor = function(){      
    var biggestVal = Number.NEGATIVE_INFINITY;
    for(var i = 0; i < this.dataSeries.length; i++){
        for(var j = 0; j < this.dataSeries[i].getDataPoints().length; j++){
            if(this.dataSeries[i].getDataPoints()[j].getValue() > biggestVal){
                biggestVal = this.dataSeries[i].getDataPoints()[j].getValue();
            }
        }
    }
        this.scaleFactor = (((this.canvasHeight) * .6)/biggestVal);
}

GraphArea.prototype.getScaleFactor = function(){
    return this.scaleFactor;
}

/**
 *  Hit Tests all of the hit testable graph area elements
 * @param {Pointer} pointer
 * @param {Point} pointerPos
 * @returns {Boolean}
 */
GraphArea.prototype.isHit = function(pointer, pointerPos){
        for(var i = this.hitTestables.length-1; i >= 0; i--){
            if(this.hitTestables[i].isHit(pointerPos)){
                var activeVisual = this.hitTestables[i];
                pointer.setActiveVisual(activeVisual);
                return true;
            }
        else if( i === this.eleArray.length - 1){
            return false;
        }
    }
}

/**
 * calculates font size for title
 * @returns {Number|Window.innerWidth}
 */
GraphArea.prototype.calculateTitleFont = function(){
    var fontSize = this.canvasWidth * this.titleFontRatio;
    return fontSize;
}

/**
 * calculates font size for axis labels
 * @returns {GraphArea.fontSize}
 */
GraphArea.prototype.calculateLabelFont = function(){
    var fontSize = this.canvasWidth * this.labelFontRatio;
    return this.fontSize;
}
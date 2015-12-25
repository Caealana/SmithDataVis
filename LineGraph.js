LineGraph.prototype = new Graph();
LineGraph.constructor = LineGraph;
function LineGraph(graphArea, canvas){
    Graph.call(this, graphArea, canvas);
    this.graphPoints = [];
}

/**
 * creates ellipse objects representing the data points of the graph
 * @returns {undefined}
 */
LineGraph.prototype.createEllipses = function(){
    this.graphHeight = this.graphArea.getGraphHeight();
    var currentXValue = this.graphArea.getCanvasWidth()/18;
    console.log(this.dataPoints.length);
    for(var i = 0; i < this.dataPoints.length; i++){
        var yValue = this.graphArea.getGraphHeight() - 
                this.graphArea.getCanvasHeight()/100 -
                (this.dataPoints[i].getValue()*this.graphArea.getScaleFactor());
        var position = new Point(currentXValue,
        yValue);
        this.graphPoints.push(position);
        var ellipse = new Ellipse();
        ellipse.setWidth(7);
        ellipse.setHeight(7);
        ellipse.setFillColor(this.color);
        ellipse.setLineColor(this.color);
        ellipse.setLineWidth(2);
        ellipse.setPosition(position);
        ellipse.setBounds();
        this.graphElements.push(ellipse);
        this.graphArea.addHitTestables([ellipse, this.dataPoints[i]]);
        currentXValue += this.xSpacing;
    }
}

/**
 * creates lines that connect the ellipses to form a line graph
 * @returns {undefined}
 */
LineGraph.prototype.createConnectingLines = function(){
    for(var i = 0; i < this.graphPoints.length - 1; i++){
        var line = new Line();
        line.setPosition(new Point(this.graphPoints[i].getX(),
        this.graphPoints[i].getY() + 3));
        line.setP2(new Point(this.graphPoints[i+1].getX(),
        this.graphPoints[i+1].getY() + 2));
        line.setLineColor(this.color);
        line.setLineWidth(1.5);
        this.graphElements.push(line);
    }
}

/**
 * clears all information held by line graph
 * @returns {undefined}
 */
LineGraph.prototype.clear = function(){
    this.fillcolor = undefined;
    this.dataSeries = undefined;
    this.dataPoints = [];
    this.xSpacing = undefined;
    this.scaleFactor = undefined;
    this.graphArea = undefined;
    this.graphElements = [];
    this.canvas = undefined;
    this.g = undefined;
    this.graphPoints = [];
}

/**
 * clears all graph points
 * @returns {undefined}
 */
LineGraph.prototype.clearGraphPoints = function(){
    this.graphPoints = [];
}
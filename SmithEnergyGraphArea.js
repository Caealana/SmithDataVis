SmithEnergyGraphArea.prototype = new GraphArea();
SmithEnergyGraphArea.constructor = SmithEnergyGraphArea;
/**
 * Smith Energy Consumption Data specific GraphArea
 * controls graph elements specific to Smith Energy Consumption Visualization 
 * @constructor
 * @extends GraphArea
 * @param {Canvas} canvas
 * @returns {SmithEnergyGraphArea}
 */
function SmithEnergyGraphArea(canvas){
    GraphArea.call(this, canvas);
    this.energyType;
    this.buildings = [];
}

/**
 * adds a DataSeries to be represented in the graph area
 * @param {DataSeries} series
 * @returns {undefined}
 */
SmithEnergyGraphArea.prototype.addDataSeries = function(series){
	this.dataSeries.push(series);
        this.buildings.push(series.getBuilding());
}

/*
 * 
 * @returns {Ellipse} array of ellipse objects
 */
SmithEnergyGraphArea.prototype.getEllipses = function(){
    return this.ellipses;
}

/*
 * adds an ellipse to the graph area
 * @param {Ellipse} ellipse
 * @returns {undefined}
 */
SmithEnergyGraphArea.prototype.addEllipse = function(ellipse){
    this.ellipses.push(ellipse);
}

/**
 * creates text detailing the data series displayed graphically
 * @returns {undefined}
 */
SmithEnergyGraphArea.prototype.createTitle = function(){
    var buildings = [];
    for(var i = 0; i < this.dataSeries.length; i++){
        if(!(buildings.indexOf(this.dataSeries[i].getBuilding()) > -1)){
            buildings.push(this.dataSeries[i].getBuilding());
        }
    }
    for(var i = 0; i < buildings.length; i++){
        this.title += buildings[i] + " ";
    }
    var _this = this;
    var fontSize = _this.calculateTitleFont();
    var font = (fontSize|0) + "px Arial";
    this.energyType = this.dataSeries[0].getEnergyType();
    this.title += this.energyType + " Consumption per a Day";
    var text = new HorizontalText();
    text.setText(this.title);
    text.setFont(font);
    text.setPosition(new Point(this.canvasWidth/17, this.canvasHeight/20));
    this.visuals.push(text);
}

/**
 * creates key objects based on data series in graph area
 * @returns {undefined}
 */
SmithEnergyGraphArea.prototype.createKeys = function(){
    var currentX = this.canvasWidth/25;
    var fontSize = (this.canvasWidth + this.canvasHeight)/2
            * this.keyFontRatio;
    var font = (fontSize|0) + "px Arial";
    var key;
    for(var i = 0; i < this.graphs.length; i++){
        key = new Key();
        var building = this.graphs[i].getDataSeries().getBuilding();
        key.setFillColor(this.graphs[i].getColor());
        //console.log(this.graphs[i].getColor());
        key.setLabel(building);
        key.setPosition(new Point(currentX, this.graphHeight +
                this.canvas.height/20));
        key.createLabel(font);
        key.createBox();
        this.visuals.push(key);
        currentX = currentX + this.canvasWidth/4;
    }
}

/**
 * tests if a pointer has interacted with a HitTestable object
 * @param {Pointer} currentPointer
 * @param {Point} pointerPos
 * @returns {Boolean}
 */
SmithEnergyGraphArea.prototype.hitTest = function(currentPointer, pointerPos){
    var _this = this;
    for(var i = this.hitTestables.length - 1; i >= 0; i--){
        var ellipse = this.hitTestables[i][0];
        if(ellipse.isHit(pointerPos)){
            _this.createInfoBox(ellipse, i);
            return true;
        }
        else if(i === 0){
                /*if(this.visuals[this.visuals.length-1]
                    instanceof DataPointInfoBox){
                    this.visuals.splice(-1, 1);
                }*/
            this.infoBoxes = [];
            return false;
        }
    }
}

/**
 * updates the data points and corresponding line graphs based on inputs
 * from the sliders
 * @param {String} energyType
 * @param {int} waterMinutes
 * @param {int} peopleCount
 * @param {int} electricityMinutes
 * @returns {undefined}
 */
SmithEnergyGraphArea.prototype.updateGraphValues =
        function(energyType, waterMinutes, peopleCount, electricityMinutes){
            this.hitTestables = [];
            var showerFlowRate = 3.8; //gallons per a minute
            var kwhUsedPerHour = 0.032; //based on cfl light bulbs -> 16 watts
            var numberOfLightBulbs = 2; //per a bathroom
            for(var i = 0; i < this.graphs.length; i++){
                var dataPoints = this.graphs[i].getInitialDataPoints();
                var adjustedDataPoints = [];
                if(energyType === "water"){
                    var totalMinutes = waterMinutes * peopleCount;
                    var waterSaved = totalMinutes * showerFlowRate;
                    for(var j = 0; j < dataPoints.length; j++){
                        var currentValue = dataPoints[j].getValue();
                        var adjustedValue = currentValue - waterSaved;
                        if(adjustedValue < 0){
                            adjustedValue = 0;
                        }
                        var adjustedDataPoint = new DataPoint(
                                dataPoints[j].getLabel(), adjustedValue)
                        adjustedDataPoints[j] = adjustedDataPoint;
                    }
                }
                if(energyType === "electricity"){
                    var electricitySaved = (electricityMinutes/60) * 
                            kwhUsedPerHour * numberOfLightBulbs * peopleCount;
                    for(var k = 0; k < dataPoints.length; k++){
                        var currentValue = dataPoints[k].getValue();
                        var adjustedValue = currentValue - electricitySaved;
                        var adjustedDataPoint = new DataPoint(
                                dataPoints[k].getLabel(), adjustedValue);
                        adjustedDataPoints[k] = adjustedDataPoint;
                    }
                }
                this.graphs[i].setDataPoints(adjustedDataPoints);
                this.graphs[i].clearGraphElements();
                this.graphs[i].clearGraphPoints();
                this.graphs[i].createEllipses();
                this.graphs[i].createConnectingLines();
            }
        }

/**
 * creates the pop up boxes with information about a data point when its
 * corresponding ellipse hitTests true
 * @param {Ellipse} ellipse
 * @param {Number} i, index
 * @returns {undefined}
 */
SmithEnergyGraphArea.prototype.createInfoBox = function(ellipse, i){
            this.infoBoxes = [];
            var fontSize = (this.canvasWidth + this.canvasHeight)/2
            * this.infoBoxFontRatio;
            var font = (fontSize|0) + "px Arial";
            var _this = this;
            var dataPoint = this.hitTestables[i][1];
            var infoBox = new DataPointInfoBox(this, dataPoint);
            var infoBoxPosition = new Point(ellipse.getPosition().getX(),
                ellipse.getPosition().getY() - this.canvasHeight/8);
            infoBox.setPosition(infoBoxPosition);
            var box = infoBox.getBox();
            var xValueText = infoBox.getXValueText();
            var yValueText = infoBox.getYValueText();
            infoBox.setFillColor("white");
            infoBox.setLineWidth(1);
            infoBox.setLineColor("black");
            infoBox.setBox();
            box.setWidth(this.canvas.width/10);
            box.setHeight(this.canvasHeight/10);
            xValueText.setPosition(new Point(infoBoxPosition.getX(),
                infoBoxPosition.getY() + this.canvasHeight/30));
            yValueText.setPosition(new Point(infoBoxPosition.getX(),
                infoBoxPosition.getY() + this.canvasHeight/15));
            infoBox.setXValueText(font);
            infoBox.setYValueText(font);
            this.infoBoxes.push(infoBox);
    
}
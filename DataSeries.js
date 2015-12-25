/**
 * An array of data points, and general information about the set of data points
 * : title of the data set, what the x value represents, what the y value
 * represents
 * @constructror
 * @returns {DataSeries}
 */
function DataSeries(){
	this.title; //house+typeofenergy+consumption
	this.xFieldName;
	this.yFieldName;
	this.dataPoints = [];//array of points

}

/**
 * sets the title representing the data series
 * @param {String} title
 * @returns {undefined}
 */
DataSeries.prototype.setTitle = function(title){
	this.title = title;
}

/**
 * gets the title representing the data series
 * @returns {type}
 */
DataSeries.prototype.getTitle = function(){
	return this.title;
}

/**
 * adds a datapoint to the dataseries
 * @param {type} dataPoint
 * @returns {undefined}
 */
DataSeries.prototype.addDataPoint = function(dataPoint){
	this.dataPoints.push(dataPoint);
}

/**
 * gets all of the datapoints in the data series
 * @returns {Array}
 */
DataSeries.prototype.getDataPoints = function(){
	return this.dataPoints;
}

/**
 * sets the string representing the x values of the data points
 * @param {String} name
 * @returns {undefined}
 */
DataSeries.prototype.setXFieldName = function(name){
	this.xFieldName = name;
}

/**
 * gets the label representing the x values of the data points
 * @returns {String}
 */
DataSeries.prototype.getXFieldName = function(){
	return this.xFieldName;
}

/**
 * sets the string representing the y values of the data points
 * @param {String} name
 * @returns {undefined}
 */
DataSeries.prototype.setYFieldName = function(name){
	this.yFieldName = name;
}

/**
 * gets the string representing the x values of the data points
 * @returns {String}
 */
DataSeries.prototype.getYFieldName = function(){
	return this.yFieldName;
}

/**
 * sets the string representing the name of the meter used to gather the data
 * of the data series
 * @param {String} name
 * @returns {undefined}
 */
DataSeries.prototype.setMeterName = function(name){
	this.meterName = name;
}

/**
 * gets the string representing the name of the meter used to gather the data
 * of the data series
 * @returns {String}
 */
DataSeries.prototype.getMeterName = function(){
	return this.meterName;
}

/**
 * gets the string representing the title of the data series
 * @returns {String}
 */
DataSeries.prototype.getTitle = function(){
    return this.title;
}

/**
 * clears all of the datapoints in the data series
 * @returns {undefined}
 */
DataSeries.prototype.clearDataPoints = function(){
    this.dataPoints = [];
}
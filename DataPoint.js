/**
 * Stores a label and corresponding value to that label
 * @constructor 
 * @param {String} label
 * @param {Number} value
 * @returns {DataPoint}
 */
function DataPoint(label, value){
	this.label = label;
	this.value = value;
}

/**
 * gets value of the data point
 * @function
 * @returns {Number}
 */
DataPoint.prototype.getValue = function(){
	return this.value;
}

/**
 * gets the label of the data point
 * @returns {String}
 */
DataPoint.prototype.getLabel = function(){
	return this.label;
}

/**
 * sets the label of the data point
 * @param {type} label
 * @returns {undefined}
 */
DataPoint.prototype.setLabel = function(label){
	this.label = label;
}

/**
 * sets the value of the data point
 * @param {type} value
 * @returns {undefined}
 */
DataPoint.prototype.setValue = function(value){
	this.value = value;
}

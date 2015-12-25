/**
 * Array of Data Series
 * @constructor
 * @returns {DataManager}
 */
function DataManager(){ //takes Json and creates data series
	this.data;
	this.dataSeries = [];
}

/**
 * Sets the data JSON the DataManager parses
 * @param {JSON} data
 * @returns {undefined}
 */
DataManager.prototype.setData = function(data){
    this.data = data;
}

/**
 * breaks up and organizes data JSON into Data Series 
 * @returns {undefined}
 */
DataManager.prototype.initialize = function(){
    //override
}

/**
 * gets the data series stored in the data manager
 * @returns {Array}
 */
DataManager.prototype.getDataSeries = function(){
    return this.dataSeries;
}

/**
 * add a data series to the data series array
 * @param {type} data
 * @returns {undefined}
 */
DataManager.prototype.addDataSeries = function(data){
    this.dataSeries.push(data);
}

/**
 * gets the Data Series from the array 
 * @param {type} index
 * @returns {Array}
 */
DataManager.prototype.getDataSeriesByIndex = function(index){
    return this.dataSeries[index];
}

/**
 * clears the dataSeries Array
 * @returns {undefined}
 */
DataManager.prototype.clearDataSeries = function(){
    this.dataSeries = [];
}
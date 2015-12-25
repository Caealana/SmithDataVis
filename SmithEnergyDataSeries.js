//SmithEnergyDataSeries
SmithEnergyDataSeries.prototype = new DataSeries();
SmithEnergyDataSeries.constructor = SmithEnergyDataSeries;
/**
 * 
 * @returns {SmithEnergyDataSeries}
 */
function SmithEnergyDataSeries(){
        DataSeries.call(this);
	this.meterName;
	this.building;
	this.energyType;
        this.units;
}

/**
 * 
 * @param {type} name
 * @returns {undefined}
 */
SmithEnergyDataSeries.prototype.setMeterName = function(name){
	this.meterName = name;
}

/**
 * 
 * @returns {type}
 */
SmithEnergyDataSeries.prototype.getMeterName = function(){
	return this.meterName;
}

/**
 * 
 * @param {type} units
 * @returns {undefined}
 */
SmithEnergyDataSeries.prototype.setUnits = function(units){
	this.units = units;
}

/**
 * 
 * @returns {type}
 */
SmithEnergyDataSeries.prototype.getUnits = function(){
	return this.units;
}

/**
 * 
 * @param {type} name
 * @returns {undefined}
 */
SmithEnergyDataSeries.prototype.setBuilding = function(name){
	this.building = name;
}

/**
 * 
 * @returns {type}
 */
SmithEnergyDataSeries.prototype.getBuilding = function(){
	return this.building;
}

/**
 * 
 * @param {type} type
 * @returns {undefined}
 */
SmithEnergyDataSeries.prototype.setEnergyType = function(type){
	this.energyType = type;
}

/**
 * 
 * @returns {type}
 */
SmithEnergyDataSeries.prototype.getEnergyType = function(){
	return this.energyType;
}
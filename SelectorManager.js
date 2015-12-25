/**
 * Manages selector drop down objects
 * @constructor
 * @param {DataSeries} dataSeries
 * @returns {SelectorManager}
 */
function SelectorManager(dataSeries){
    this.selectors = [];
    this.dataSeries = dataSeries; //comprehensive list of dataSeries
}

/**
 * sets up initial selector drop downs
 * overriden by custom selector manager
 * @returns {undefined}
 */
SelectorManager.prototype.initializeSelectors = function(){
    
}


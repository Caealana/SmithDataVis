SmithEnergySelectorManager.prototype = new SelectorManager();
SmithEnergySelectorManager.constructor = SmithEnergySelectorManager;
/**
 * Manages the selector elements on the page and its input
 * @constructor
 * @extends SelectorManager
 * @param {type} dataSeries
 * @returns {SmithEnergySelectorManager}
 */
function SmithEnergySelectorManager(dataSeries){
    SelectorManager.call(this, dataSeries);
    this.energyType = [];
}

SmithEnergySelectorManager.prototype.intializeSelectors = function(){
    for(var i = 0; i < this.dataSeries.length; i++){
        var currentData = this.dataSeries[i];
        var energy = currentData.getEnergyType();
        if(!(this.energyType.indexOf(energy) > -1)){
            this.energyType.push(energy);
        }     
    }
    var energySelector = new SmithEnergySelector();
    this.selectors.push(energySelector);
    energySelector.createSelector("energySelector");
    energySelector.addEnergyOptions(this.energyType);
}

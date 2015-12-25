SmithEnergySelector.prototype = new Selector();
SmithEnergySelector.constructor = SmithEnergySelector;
/**
 * Smith Energy specific selector drop downs
 * @constructor
 * @extends Selector
 * @returns {SmithEnergySelector}
 */
function SmithEnergySelector(){
    Selector.call(this);
}

/**
 * creates selector object with inputted id and appends to div
 * @param {String} id
 * @returns {undefined}
 */
SmithEnergySelector.prototype.createSelector = function(id){
    //adding selector to html. author:tymeJV from http://stackoverflow.com/questions/17001961/javascript-add-select-programmatically
    var myDiv = document.getElementById("selectorDiv");
    this.selectList = document.createElement("select");
    this.selectList.id = id;
    myDiv.appendChild(this.selectList);
}

/**
 * adds energy options taken from Smith Energy Consumption Data to the selector
 * @param {String Array} options
 * @returns {undefined}
 */
SmithEnergySelector.prototype.addEnergyOptions = function(options){
    var option;
    for(var i = 0; i < options.length; i++){
        option = document.createElement('option');
        option.value = options[i];
        option.text = options[i];
        this.selectList.appendChild(option);
    }
}
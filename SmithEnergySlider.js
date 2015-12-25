SmithEnergySlider.prototype = new Slider();
/**
 * Sets up object that allows user to slide a bar along a line to input a value
 * Slider specific to Smith Energy Consumption Visualization
 * @param {String} label
 * @param {int} max
 * @param {int} min
 * @param {int} step
 * @param {SmithEnergySliderManager} manager
 * @returns {SmithEnergySlider}
 */
SmithEnergySlider.constructor = SmithEnergySlider;
function SmithEnergySlider(label, max, min, step, manager){
    Slider.call(this, label, max, min, step)
    this.manager = manager;
}

/**
 * sets up slider, label, and display showing value
 * @returns {undefined}
 */
SmithEnergySlider.prototype.initializeSlider = function(){
    this.labelDisplay = document.createElement("label");
    this.labelDisplay.for = this.label;
    this.labelDisplay.innerHTML = this.label;
    
    this.valueDisplay = document.createElement("input");
    this.valueDisplay.setAttribute("type", "text");
    this.valueDisplay.value = "";
    var id = this.label + " ValueDisplay";
    this.valueDisplay.id = id;
    
    this.slider = document.createElement("INPUT");
    this.slider.setAttribute("type", "range");
    this.slider.id = this.label;
    this.slider.min = this.min;
    this.slider.max = this.max;
    this.value = this.slider.value;
    
    this.valueDisplay.value = this.slider.value;
    
    var slider = this.slider;
    var valueDisplay = this.valueDisplay;
    var _this = this;
    var manager = this.manager;
    var label = this.label;
    this.slider.oninput = function(){
        valueDisplay.value = slider.value;
        _this.setValue(slider.value);
        manager.updateGraphValues(slider.value, label);
    }
}
/**
 * Sets up object that allows user to slide a bar along a line to input a value
 * @constructor
 * @param {String} label
 * @param {Number} max
 * @param {Number} min
 * @param {Number} step
 * @returns {Slider}
 */
function Slider(label, max, min, step){
    this.label = label;
    this.max = max;
    this.min = min;
    this.slider;
    this.labelDisplay;
    this.step = step;
    this.valueDisplay;
    this.value;
}

/**
 * 
 * @returns {Number}
 */
Slider.prototype.getValue = function(){
    return this.value;
}

/**
 * 
 * @param {Number} value
 * @returns {undefined}
 */
Slider.prototype.setValue = function(value){
    this.value = value;
}

/**
 * 
 * @param {Number} max
 * @returns {undefined}
 */
Slider.prototype.setMax = function(max){
    this.max = max;
}

/**
 * 
 * @returns {Number}
 */
Slider.prototype.getMax = function(){
    return this.max;
}

/**
 * 
 * @param {Number} min
 * @returns {undefined}
 */
Slider.prototype.setMin = function(min){
    this.min = min;
}

/**
 * 
 * @returns {Number} minimum value of the slider
 */
Slider.prototype.getMin = function(){
    return this.min;
}

/**
 * 
 * @param {Number} step
 * @returns {undefined}
 */
Slider.prototype.setStep = function(step){
    this.step = step;
}

/**
 * 
 * @returns {Number} step
 */
Slider.prototype.getStep = function(){
    return this.step;
}

/**
 * sets up HTML Range Object with corresponding label and value display
 * @returns {undefined}
 */
Slider.prototype.initializeSlider = function(){
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
    
    this.valueDisplay.value = this.slider.value;
    
    var slider = this.slider;
    var valueDisplay = this.valueDisplay;
    var _this = this;
    this.slider.oninput = function(){
        valueDisplay.value = slider.value;
        _this.setValue(slider.value);
    }
}

/**
 * 
 * @returns {HTML Range Object}
 */
Slider.prototype.getSlider = function(){
    return this.slider;
}

/**
 * 
 * @returns {Text}
 */
Slider.prototype.getLabelDisplay = function(){
    return this.labelDisplay;
}

/**
 * 
 * @returns {HTML Text Box}
 */
Slider.prototype.getValueDisplay = function(){
    return this.valueDisplay;
}

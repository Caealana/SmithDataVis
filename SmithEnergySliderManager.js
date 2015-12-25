SmithEnergySliderManager.prototype = new SliderManager();
SmithEnergySliderManager.constructor = SmithEnergySliderManager;
/**
 * Sets up Slider Control Elements and manages the values inputted into them
 * @constructor
 * @extends SliderManager
 * @param {HTML div element} div
 * @param {GraphArea} graphArea
 * @returns {SmithEnergySliderManager}
 */
function SmithEnergySliderManager(div, graphArea){
    SliderManager.call(this, div);
    this.graphArea = graphArea;
    this.waterMinutes;
    this.peopleCount;
    this.electricityMinutes;
    this.currentEnergyType;
    this.waterSlider;
    this.peopleSlider;
    this.electricitySlider;
}

/**
 * sets up Smith Energy Consumption Data specific sliders
 * @returns {undefined}
 */
SmithEnergySliderManager.prototype.initializeSliders = function(){
    var _this = this;
    this.peopleSlider = new SmithEnergySlider("# of People", 45, 0, 1, _this);
    this.waterSlider = new SmithEnergySlider
        ("Minutes Subtracted From Shower per Day",15, 0, 1, _this);
    this.electricitySlider = new SmithEnergySlider
    ("Extra Minutes Lights Stay Off in Dorm Room per Day", 120, 0, 1, _this);
    this.peopleSlider.initializeSlider();
    this.waterSlider.initializeSlider();
    this.electricitySlider.initializeSlider();
    this.peopleCount = this.peopleSlider.getValue();
    this.waterMinutes = this.waterSlider.getValue();
    this.electricityMinutes = this.electricitySlider.getValue();
    
}

/**
 * adds the sliders to the page
 * @param {String} type, type of data the slider alters
 * @returns {undefined}
 */
SmithEnergySliderManager.prototype.addSliders = function(type){
    this.div.innerHTML = "";
    if(type === "Water" || type === "Domestic Water"){
        this.div.appendChild(this.waterSlider.getLabelDisplay());
        this.div.appendChild(this.waterSlider.getValueDisplay());
        this.div.appendChild(this.waterSlider.getSlider());
        this.currentEnergyType = "water";
    }
    else{
        this.div.appendChild(this.electricitySlider.getLabelDisplay());
        this.div.appendChild(this.electricitySlider.getValueDisplay());
        this.div.appendChild(this.electricitySlider.getSlider());
        this.currentEnergyType = "electricity";
    }
    
    this.div.appendChild(this.peopleSlider.getLabelDisplay());
    this.div.appendChild(this.peopleSlider.getValueDisplay());
    this.div.appendChild(this.peopleSlider.getSlider());

}

/**
 * takes the value inputted in the sliders and sends to graph area to update
 * the data point values
 * @param {Number} value
 * @param {String} type, type of data the slider alters
 * @returns {undefined}
 */
SmithEnergySliderManager.prototype.updateGraphValues = function(value, type){
    if(type === "# of People"){
        this.peopleCount = value;
    }
    else if(type === "Minutes Subtracted From Shower per Day"){
        this.waterMinutes = value;
        this.currentEnergyType = "water";
    }
    else if(type === "Extra Minutes Lights Stay Off in Dorm Room per Day"){
        this.electricityMinutes = value;
        this.currentEnergyTypee = "electricity";
    }
    this.graphArea.updateGraphValues(this.currentEnergyType, this.waterMinutes,
        this.peopleCount, this.electricityMinutes);
}
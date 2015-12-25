/**
 * 
 * @param {type} div
 * @returns {SliderManager}
 */
function SliderManager(div){
    this.div = div;
    this.sliders = [];
}

/**
 * 
 * @returns {undefined}
 */
SliderManager.prototype.initializeSliders = function(){
    
}

/**
 * 
 * @param {type} slider
 * @returns {undefined}
 */
SliderManager.prototype.addSlider = function(slider){
    this.sliders.push(slider);
}



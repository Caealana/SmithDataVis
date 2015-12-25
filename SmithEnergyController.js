SmithEnergyController.prototype = new Controller();
SmithEnergyController.constructor = SmithEnergyController;
/**
 * Controller class specific to Smith College Energy Consumption Data
 * @constructor
 * @extends Constructor
 * @param {GraphArea} graphArea
 * @returns {SmithEnergyController}
 */
function SmithEnergyController(graphArea){
    Controller.call(this, graphArea);
}

/**
 * Sets up initial drawings and control panel for page
 * @function
 * @returns {undefined}
 */
SmithEnergyController.prototype.initialGraphSetUp = function(){ 
    var _this = this;
    this.dataManager = new SmithEnergyDataManager();
    this.dataManager.setData(dataJson);
    this.dataManager.initialize();
    this.dataSeries = this.dataManager.getDataSeries();
    
    this.canvas = document.getElementById("canvas");
    this.g = this.canvas.getContext('2d');
    
    this.selectorManager = new SmithEnergySelectorManager
    (this.dataManager.getDataSeries());
    this.selectorManager.intializeSelectors();
    
    var dataSeries = this.dataSeries;
    
    this.sliders = new SmithEnergySliderManager(
    document.getElementById("slidersDiv"), this.graphArea);
    this.sliders.initializeSliders();
    
    var sliders = this.sliders;
    document.getElementById("energySelector").onchange = function(){
        _this.graphArea.clear();
        var myDiv = document.getElementById("buildingsDiv");
        myDiv.innerHTML = "";
        var energyType = this.value;
        var buildings = [];
        for(var i = 0; i < dataSeries.length; i++){
            if(dataSeries[i].getEnergyType() === energyType){
                buildings.push(dataSeries[i].getBuilding());
            }
        }
        var buildingCheck = new Checkboxes(buildings);
        var myDiv = document.getElementById("buildingsDiv");
        buildingCheck.createCheckboxes(myDiv);
        //this.value is energy type - store it for safekeeping
        var checkBoxes = myDiv.getElementsByTagName('input');

        var checkedBuildings = [];
        for(var j = 0; j < checkBoxes.length; j++){
            //console.log(checkBoxes[j]);
            if(checkBoxes[j].type === 'checkbox'){
                checkBoxes[j].onclick = function(){
                    _this.graphArea.clear();
                    var _thisCheckBox = this;
                    if(_thisCheckBox.checked === true){
                        checkedBuildings.push(_thisCheckBox.value)
                    }
                    else{
                        if(checkedBuildings.indexOf(_thisCheckBox.value) > -1){
                            checkedBuildings.splice(checkedBuildings.
                                    indexOf(_thisCheckBox.value), 1)
                        }
                    }
                    _this.updateDataSeries(energyType, checkedBuildings);
                    if(_this.graphArea.getDataSeries().length > 0){
                        _this.displayGraphs();                        
                    }
                }
            }
        }
        sliders.addSliders(energyType);
    }
}

/**
 * Redraws the displayed graphs based on information taken from the control
 * panel
 * @function
 * @returns {undefined}
 */
SmithEnergyController.prototype.displayGraphs = function(){
    this.graphArea.initializeGraphStructure();
    //graphArea has function to create lineGraphs in it
    this.graphArea.createLineGraphs();
    this.graphArea.createKeys();
    this.graphArea.draw();
}

/**
 * updates the list of Data Series that are being displayed
 * @param {String} chosenEnergy
 * @param {String Array} checkedBuildings
 * @returns {undefined}
 */
 SmithEnergyController.prototype.updateDataSeries =
         function(chosenEnergy, checkedBuildings){
            for(var i = 0; i < this.dataSeries.length; i++){
                var dataSetEnergy = this.dataSeries[i].getEnergyType();
                var dataSetBuilding = this.dataSeries[i].getBuilding();
                //what if building 
                if(chosenEnergy === dataSetEnergy &&
                        (checkedBuildings.indexOf(dataSetBuilding) > -1)){
                        //console.log(this.dataSeries[i].getBuilding());
                        this.graphArea.addDataSeries(this.dataSeries[i]);
                }
            }
        }

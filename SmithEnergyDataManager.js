SmithEnergyDataManager.prototype = new DataManager();
SmithEnergyDataManager.constructor = SmithEnergyDataManager;
/**
 * Data Manager specific to Smith Energy Consumption Data
 * @extends DataManager
 * @constructor
 * @returns {SmithEnergyDataManager}
 */
function SmithEnergyDataManager() {
    DataManager.call(this);
}

/**
 * goes through smith energy consumption data json
 * organizes data into data series by House/building
 * dataJson[0] = house name
 * dataJson[1] = type of Energy
 * dataJson[2] = meterId
 * dataJson[3] = house - units
 * dataJson[i>3] -> field 1 = time stamp[date, time]
 * @returns {undefined}
 */
SmithEnergyDataManager.prototype.initialize = function () {
    var currentDate = undefined;
    var consumptionSums = [];
    var counter = 0;
    for (var i = 0; i < this.data.length; i++) {
        consumptionSums[i] = 0;
        var obj = this.data[i];
        if (i === 0) { //first object contains house names
            for (var key in obj) {
                if (key !== "FIELD1") {//skip first field - has type
                    var newDataSeries =
                            new SmithEnergyDataSeries();
                    newDataSeries.setTitle(obj[key]);
                    newDataSeries.setBuilding(obj[key]);
                    newDataSeries.setXFieldName
                            ("Date and Time");
                    this.dataSeries.push(newDataSeries);
                }
            }
        }
        else if (i === 1) { //add type of energy to title name
            var counter = 0;
            for (var key in obj) {
                if (counter > 0) {
                    var newTitle =
                            this.dataSeries[counter - 1].getTitle()
                            + " " + obj[key]
                            + " Consumption";
                    this.dataSeries[counter - 1]
                            .setTitle(newTitle);
                    this.dataSeries[counter - 1].
                            setEnergyType(obj[key]);
                }
                counter += 1;
            }
        }
        else if (i === 2) { //obj 3 contains meter id
            var counter = 0;
            for (var key in obj) {
                if (counter > 0) {
                    this.dataSeries[counter - 1]
                            .setMeterName(obj[key]);
                }
                counter += 1;
            }
        }
        else if (i === 3) { //obj 4 contains units
            var counter = 0;
            for (var key in obj) {
                if (counter > 0) {
                    var split = obj[key].split(" ");
                    //example: ["Chapin", "House", "-", "Electricity", "(kWh)"]
                    var currentData =
                            this.dataSeries[counter - 1];
                    var newTitle =
                            currentData.getTitle() + " "
                            + split[4];
                    currentData.
                            setUnits(split[4]);
                    currentData.
                            setXFieldName("Date And Time");
                    currentData.
                            setYFieldName(this.dataSeries[counter - 1]
                                    .getEnergyType() + " " + split[4]);
                    currentData.
                            setMeterName(obj[key]);
                    currentData.
                            setTitle(newTitle);
                }
                counter += 1;
            }
        }

        else if (i > 3) {
            var counter = 0;
            var time = obj["FIELD1"];
            var seperatedTime = time.split(" ");
            if(seperatedTime[0] != currentDate){
                for(var k = 0; k < this.dataSeries.length; k++){
                    var value = Math.round(consumptionSums[k]);
                    this.dataSeries[k].addDataPoint(new DataPoint(currentDate,
                    value));
                    consumptionSums[k] = 0;
                }
                currentDate = seperatedTime[0];
                //consumptionSums = [];
                //add the datapoints
            }
            //data[i].length: # of eles in array
            for(var j = 0; j < this.dataSeries.length; j++){
                var value = parseFloat(obj["FIELD" + (j + 2).toString()]);
                if(i === 4){
                    this.dataSeries[j].clearDataPoints();
                }
                if(isNaN(value) === false){
                    /*this.dataSeries[j].addDataPoint(new DataPoint(time,
                    value));*/
                    consumptionSums[j] = consumptionSums[j] + value;
                }
            }
        }
    }
}

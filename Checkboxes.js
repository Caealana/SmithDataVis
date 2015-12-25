/**
 * @constructor
 * @param {String Array} labels
 * @returns {Checkboxes}
 */
function Checkboxes(labels){
    this.labels = labels;
}

/**
 * //Takes each string in labels and creates a corresponding checkbox for it
 * @param {HTML div element} div
 * @returns {undefined}
 */
Checkboxes.prototype.createCheckboxes = function(div){
//creating checkboxes dynamically source: http://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_checkbox_create
    var input;
    var label;
    for(var i = 0; i < this.labels.length; i++){
        input = document.createElement("input");
        input.setAttribute("type", "checkbox");
        input.value = this.labels[i];
        input.id = this.labels[i];
        input.class = "checkBox";
        label = document.createElement('label');
        label.htmlFor = this.labels[i];
        label.appendChild(document.createTextNode(this.labels[i]));
        div.appendChild(input);
        div.appendChild(label);
    }
}



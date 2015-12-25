/**
 * An object that represents a selector dropdown menu
 * @constructor
 * @returns {Selector}
 */
function Selector(){
    this.id;
    this.selectList;
    this.options = [];
    this.position;
    
}

/**
 * creates HTML select object with inputted id
 * @param {String} id
 * @returns {undefined}
 */
Selector.prototype.createSelector = function(id){
    //adding selector to html. author:tymeJV from http://stackoverflow.com/questions/17001961/javascript-add-select-programmatically
    var myDiv = document.getElementById("selectorDiv");
    this.selectList = document.createElement("select");
    this.selectList.id = id;
    myDiv.appendChild(this.selectList);
}

/**
 * 
 * @returns {unresolved}
 */
Selector.prototype.getSelectList = function(){
    return this.selectList;
}
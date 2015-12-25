SmithEnergyGameLoop.prototype = new GameLoop();
SmithEnergyGameLoop.constructor = SmithEnergyGameLoop;
/**
 * Custom game loop for Smith Energy Consumption Data Visualization
 * clear, update, draw loop that handles mouse and touch input
 * @constructor
 * @returns {SmithEnergyGameLoop}
 */
function SmithEnergyGameLoop(){
    GameLoop.call(this);
    this.graphArea;
    this.pointerManager;
    this.controller;
    this.canvas = document.getElementById("canvas");
    this.g = this.canvas.getContext("2d");
}

/**
 * sets the width and height of the HTML canvas in pixels
 * @param {Number} width
 * @param {Number} height
 * @returns {undefined}
 */
SmithEnergyGameLoop.prototype.setCanvasSize = function(width, height){
    this.canvas.width = width;
    this.canvas.height = height;
}

/**
 * 
 * @returns {SmithEnergyGraphArea} graphArea
 */
SmithEnergyGameLoop.prototype.getGraphArea = function(){
    return this.graphArea;
}

/**
 * 
 * @param {GraphVisual} visual
 * @returns {undefined}
 */
SmithEnergyGameLoop.prototype.addVisual= function(visual){
    this.graphArea.addVisual(visual);
}

/**
 * 
 * @param {Graphic} g
 * @returns {undefined}
 */
SmithEnergyGameLoop.prototype.draw = function(g){ 
    this.graphArea.draw(g);
}

/**
 * 
 * @param {Number} id
 * @param {Point} position
 * @returns {undefined}
 */
SmithEnergyGameLoop.prototype.onPointerEnter = function(id, position){
    var pointer = new Pointer();
    pointer.setPosition(position);
    pointer.setId(id);
    this.pointerManager.addPointer(pointer);
}

/**
 * 
 * @param {Number} id
 * @param {Point} position
 * @returns {undefined}
 */
SmithEnergyGameLoop.prototype.onPointerMove = function(id, position){
    var pointer = this.pointerManager.getPointerById(id);
    pointer.setPosition(position);
    this.pointerManager.hitTest();
}

/**
 * 
 * @param {Number} id
 * @param {Point} position
 * @returns {undefined}
 */
SmithEnergyGameLoop.prototype.onPointerActivate = function(id,position){
   var pointer = this.pointerManager.getPointerById(id);
   pointer.setPosition(position);
   pointer.setActive();
   //this.pointerManager.hitTest();
}

/**
 * 
 * @param {Number} id
 * @param {Point} position
 * @returns {undefined}
 */
SmithEnergyGameLoop.prototype.onPointerDeactivate = function(id,position){
    var pointer = this.pointerManager.getPointerById(id);
    pointer.deActive();
}

/**
 * 
 * @param {Number} id
 * @param {Point} position
 * @returns {undefined}
 */
SmithEnergyGameLoop.prototype.onPointerLeave = function(id, position){
    this.pointerManager.removePointer(id);
}

/**
 * sets the game loop running to take in touch and mouse input and run the timer
 * that continously updates and draws on the screen
 * @param {Canvas} canvas
 * @returns {undefined}
 */
SmithEnergyGameLoop.prototype.initialize = function(canvas){
    this.canvas = canvas;
    this.isInputDebugModeEnabled = false;
    this.initializeGraphics();
    this.initializeInput();
    this.initializeTimer();
    this.graphArea = new SmithEnergyGraphArea(this.canvas);
    this.pointerManager = new PointerManager(this.graphArea);
    this.devicePixelRatio = window.devicePixelRatio;
    var _this = this;
    window.addEventListener('resize',
                           function() {
                               _this.onWindowResize();
                            }, false);
}

/**
 * for now, pops up an alert box when window is resized
 * @returns {undefined}
 */
SmithEnergyGameLoop.prototype.onWindowResize = function(){
    //var _this = this;
    //_this.setWidth((window.innerWidth)*(9/10) * this.devicePixelRatio) ;
    //_this.setHeight((window.innerHeight)*(23/30) * this.devicePixelRatio);
    window.alert("Application Does Not Yet Work with Window Resize");
}

/**
 * 
 * @param {Number} width
 * @returns {undefined}
 */
SmithEnergyGameLoop.prototype.setWidth = function(width) {
    this.canvas.width = width; //pixel width
    this.canvas.style.width = width/this.devicePixelRatio; //viewpoint width
}

/**
 * 
 * @param {Number} height
 * @returns {undefined}
 */
SmithEnergyGameLoop.prototype.setHeight = function(height) {
    this.canvas.height = height;
    this.canvas.style.height = height/this.devicePixelRatio;
}

/**
 * 
 * @param {SmithEnergyController} controller
 * @returns {undefined}
 */
SmithEnergyGameLoop.prototype.setController = function(controller){
    this.controller = controller;
}
function initialSetUp(){
    var gameLoop = new SmithEnergyGameLoop();
    gameLoop.initialize(document.getElementById("canvas"));
    var graphArea = gameLoop.getGraphArea();
    var controller = new SmithEnergyController(graphArea);
    controller.initialGraphSetUp();
    gameLoop.setController(controller);
}

function initialize() {
    initialSetUp();
}

window.onload = initialize;
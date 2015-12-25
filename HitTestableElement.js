HitTestableElement.prototype = new GraphVisual();
HitTestableElement.constructor = HitTestableElement;
/**
 * a graph visual element that is capable of responding when a pointer interacts
 * with it
 * @constructor
 * @extends GraphVisual
 * @returns {HitTestableElement}
 */
function HitTestableElement(){
    GraphVisual.call(this);
    this.bounds;
    var visual;
    visual = this;
}

/*
 * sets the bounds in pixels of the area of the object that is being tested for
 * pointer interaction
 */
HitTestableElement.prototype.setBounds = function(){
    var visual;
    visual = this;
    this.bounds = { minX: visual.getPosition().getX(),
        minY: visual.getPosition().getY(), 
        maxX: visual.getPosition().getX() + visual.getWidth(),
        maxY: visual.getPosition().getY() + visual.getHeight()};
}

/**
 * tests if the pointer is within the bounds of the hit testable element and
 * returns whether it's been hit or not
 * @param {type} coordinates
 * @returns {Boolean}
 */
HitTestableElement.prototype.isHit = function(coordinates){
    if(coordinates.getX() >= this.bounds.minX
            && coordinates.getX() <= this.bounds.maxX
            && coordinates.getY() >= this.bounds.minY
            && coordinates.getY() <= this.bounds.maxY){
        return true;
    }
    else{
        return false;
    }
}

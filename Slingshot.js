class Slingshot{
    constructor(bodyA, point2){
        var options = {
            bodyA: bodyA,
           pointB: point2,
            stiffness: 0.04,
            length: 10
        }
        this.sling = Constraint.create(options);
        this.pointB=point2
        World.add(world, this.sling);
    }
    fly(){
        this.sling.bodyA=null
    }
    attach(body){
        this.sling.bodyA = body; 
      }

    display(){
        if(this.sling.bodyA){
        var pointA = this.sling.bodyA.position;
        var pointB = this.pointB
        strokeWeight(4);
        stroke("white");
        line(pointA.x, pointA.y, pointB.x, pointB.y);
        }
    }
    
}
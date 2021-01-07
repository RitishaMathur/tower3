class Box {
  constructor(x, y, width, height) {
    var options = {
        //isStatic:true,
      'restitution':0.08,
        'friction':0.04,
        'density':0.01
    }
    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;
    this.Visibility=255
    
    World.add(world, this.body);
  }
  display(){
   
    if(this.body.speed<7){
      var pos =this.body.position;
      push();
      translate(pos.x, pos.y);
      rectMode(CENTER);
      fill("lightgreen");
      rect(0, 0, this.width, this.height);
      pop();
      }
      else{
        World.remove(world,this.body)
        this.Visibility = this.Visibility - 5;
        
      }
  }
  score(){
    if(this.Visibility<0&& this.Visibility>=-100){
      score++;
    }
  }
};



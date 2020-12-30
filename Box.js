class Box{
  constructor(x, y, width, height) {
      var options = {
          'restitution':0.5,
          'friction':0.5,
          'density':0.5,
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      this.image = loadImage("sprites/base.png");
      World.add(world, this.body);
    }
    display(){
      if(this.body.speed<3){
        rectMode(CENTER);
        rect(this.body.position.x, this.body.position.y,this.width, this.height);  
      } else{
        World.remove(world, this.body)
        push()
        this.visibility = this.visibility-2
        tint(255, this.visibility)
        pop()
      }
    }
}
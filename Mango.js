class Mango {
    constructor(x,y) {
      var options = {
          isStatic: true
      }
      this.body = Bodies.circle(x,y,40,options);
      this.radius = 40;
      this.mango=loadImage("mango.png");
      World.add(world, this.body);
    }
    display(){
      push();
      var pos =this.body.position;
      translate(pos.x, pos.y);
      imageMode(CENTER);
      fill("brown");
      image(this.mango,0,0,this.radius,this.radius);
      pop();
    }
  };
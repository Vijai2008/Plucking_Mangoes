class Stone {
    constructor(x,y) {
      var options = {
          isStatic: false,
          restitution: 0,
          friction: 0.7,
          density: 1.2
      }
      this.body = Bodies.circle(x,y,40,options);
      this.radius = 40;
      this.stone=loadImage("stone.png");
      World.add(world, this.body);
    }
    display(){
      push();
      var pos =this.body.position;
      translate(pos.x, pos.y);
      imageMode(CENTER);
      fill("brown");
      image(this.stone,0,0,this.radius,this.radius);
      pop();
    }
  };
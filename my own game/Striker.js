class Striker {
  constructor(x, y) {
      var options = {
          restitution: 1,
       //   frictionAir: 20,
          isStatic:true
      }
      this.r = 22;
      this.body = Bodies.circle(x, y, this.r, options);
    //  this.image=loadImage("sprites/bird.png")
      World.add(world, this.body);
  }
 
  display() {

      var pos = this.body.position;
      var angle = this.body.angle;

      push();
      translate(pos.x, pos.y);
      rotate(angle);
      imageMode(CENTER);
     fill("lightblue")
      noStroke();
      
      ellipseMode(RADIUS);
      ellipse(0,0,this.r,this.r);
      pop();
  }

};
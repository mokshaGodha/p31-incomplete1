class Plinko {
    constructor(x,y,r) {
      var options = {
          isStatic: true
      }
      this.r=r;
      this.body = Bodies.circle(x,y,r,options);
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      ellipseMode(CENTER);
      fill("white");
      ellipse(0,0,this.r,this.r)
    }
  };
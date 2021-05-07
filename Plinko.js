class Plinko{
    constructor(x,y){
      var options = {
         isStatic: true
      }
      this.body = Bodies.circle(x,y,30,options);
      this.radius = 30;
      World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        push()
        translate(pos.x,pos.y);
        fill("white")
        ellipseMode(CENTER)
        ellipse(0,0,this.radius,this.radius);
        pop()
    }
}
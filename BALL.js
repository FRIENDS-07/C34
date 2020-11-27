class Ball{

    constructor(x,y){

        var options = {
            friction : 0.5,
            density : 1
        }

        this.body = Bodies.circle(x,y,80,options);
        World.add(world,this.body);

    }

    display(){
        push();
        translate(this.body.position.x,this.body.position.y);
        rotate(this.body.angle);
        ellipseMode(CENTER);
        fill("red");
        ellipse(0,0,80,80);
        pop();
    }

}
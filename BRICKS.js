class Bricks{

    constructor(x,y){

        this.body = Bodies.rectangle(x,y,50,80);
        this.width = 50;
        this.height = 80;
        World.add(world,this.body);

    }

    display(){
        push();
        translate(this.body.position.x,this.body.position.y);
        rotate(this.body.angle);
        rectMode(CENTER);
        fill("cyan");
        rect(0,0,this.width,this.height);
        pop();
    }

}
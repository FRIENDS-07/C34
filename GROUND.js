class Ground{

    constructor(){

        var options = {
            isStatic : true
        }

        this.body = Bodies.rectangle(505,660,1010,50,options);
        this.width = 1010;
        this.height = 50;
        World.add(world,this.body);

    }

    display(){
        push();
        translate(this.body.position.x,this.body.position.y);
        rotate(this.body.angle);
        rectMode(CENTER);
        fill("brown");
        rect(0,0,this.width,this.height);
        pop();
    }

}
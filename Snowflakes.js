class Snowflake {
    constructor(x,y) {
        var options = {
            'restitution':0.8,
            'friction':0.1,
            'density':1.0
        }
        this.image = loadImage("snow4.webp");
        this.body = Bodies.circle(x,y,20,options);
        this.radius = 20;
        this.x = x;
        this.y = y;
        World.add(world,this.body);
    }
    update() {
        if(this.body.position.y > height) {
            Matter.Body.setPosition(this.body,{x:random(0,600), y:random(0,100)});
        }
    }
    display() {
        push();
        translate(this.body.position.x, this.body.position.y);
        imageMode(CENTER);
        image(this.image,0,0,this.radius,this.radius);
        pop();
    }
}
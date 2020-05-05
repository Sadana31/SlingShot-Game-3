class Box{
    constructor(x,y){
        var options = {
            'friction':2.0,
            'density':1.0
        }
        
        this.body = Bodies.rectangle(x,y,20,30,options);
        this.visibility = 255;
        this.image = loadImage("box2.png");
        World.add(world, this.body);
    }

    display(){
        if(this.body.speed<4){
            var pos =this.body.position;
            var angle = this.body.angle;
            push();
            translate(pos.x, pos.y);
            rotate(angle);
            rectMode(CENTER);
            rect(0, 0, 30,40);
            pop();
        }        

        else{
             World.remove(world, this.body);
            push();
            //World.remove(world, this.body);
            this.visibility = this.visibility - 5;
            tint(255, this.visibility);
            image(this.image, this.body.position.x, this.body.position.y, 20, 30);
            pop();
        }
    }
}
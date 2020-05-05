class Stacker{
    constructor(x,y,width){
        var options = {
            'friction':2.0,
            'density':1.0
        }

        this.body = Bodies.rectangle(x,y,width,20,options);
        this.width = width;
        World.add(world, this.body);
    }

    display(){
        var pos =this.body.position;
        rectMode(CENTER);
        fill("pink");     
        rect(pos.x, pos.y, this.width,20);   
    }
}
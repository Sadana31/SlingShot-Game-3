class Support{
    constructor(x,y){
        var options = {
            isStatic:true
        }

        this.body = Bodies.rectangle(x,y,200,20,options);
        World.add(world, this.body);
    }

    display(){
        var pos =this.body.position;
        rectMode(CENTER);
        fill("blue");
        rect(pos.x, pos.y, 200,20);
    }
}
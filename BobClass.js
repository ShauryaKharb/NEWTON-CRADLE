class Bob {
    constructor(x,y,a,b,c){
        var options = {
            density : 1,
            restitution : 1
        }
        this.bob=Bodies.circle(x,y,50,options);
        this.color=color(a,b,c);
        //this.bob.position.x=mouseX;
        //this.bob.position.y=mouseY;
        World.add(world,this.bob);
    }
    display(){
        var pos=this.bob.position;
        var angle=this.bob.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        fill(this.color);
        stroke("#fc6262");
        strokeWeight(7);
        circle(pos.x-pos.x,pos.y-pos.y,50*2);
        pop();
    }
}
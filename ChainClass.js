class String{
    constructor(bodyA,pointB){
        var options={
            bodyA : bodyA,
            pointB : pointB,
            stiffness : 1,
            angularStiffness : 1 ,
            length : 350
        }
        this.string=Constraint.create(options);
        World.add(world,this.string);
        this.pointB=pointB;
    }
    display(){
        var BodyA=this.string.bodyA.position;
        //var BodyB=this.string.pointB.position;
        push();
        strokeWeight(10);
        stroke("#ed62fc");
        fill("white");
        line(BodyA.x,BodyA.y,this.string.pointB.x,this.string.pointB.y);
        pop();
        }
    }
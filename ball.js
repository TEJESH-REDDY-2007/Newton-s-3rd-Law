class Ball {
    constructor(x,y){
        var options={
           isStatic:false,
           'restitution':0.8,
            'friction':1.0,
           'density':1.0
        }
        this.body = Bodies.circle(x,y,40,options)
        this.height=height
        this.width=width

        World.add(world,this.body)
    }

    display(){
       var pos=this.body.position
       fill("red")
       ellipseMode(RADIUS)
       ellipse(pos.x,pos.y,40,40)
    }
}

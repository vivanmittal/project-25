class Paper {
constructor(x,y,r){
    var options={
restitution:0.3,
density:1.2,
friction:0,
isStatic:false

    }
    this.body=Bodies.circle(x,y,r/2,options)
    this.image=loadImage("paper.png")
    World.add(world,this.body)
    this.r=r

}
display(){
    var pos=this.body.position
    var angle=this.body.angle

    push()
    translate(pos.x,pos.y)
    rotate (angle)
    imageMode(CENTER)
    image(this.image,0,0,this.r,this.r)
    pop()

}
    }

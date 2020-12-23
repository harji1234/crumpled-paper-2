class dustbin {
    constructor(x,y,width,height) {
        var options={
            isStatic:true
        }
        this.x=x;
        this.y=y;
        this.width=width;
        this.height=height;
        this.thickness=20;
        this.angle = 0;
        this.image=loadImage("dustbingreen.png")
        this.bottomBody=Bodies.rectangle(this.x, this.y, this.width, this.thickness,options);
        this.leftBody = Bodies.rectangle(this.x-this.width/2,this.y-this.height/2,this.thickness, this.height,options);
        this.rightBody = Bodies.rectangle(this.x+this.width/2,this.y-this.height/2,this.thickness, this.height,options);
        Matter.Body.setAngle(this.rightBody, -1*this.angle);
		World.add(world, this.bottomBody)
		World.add(world, this.leftBody)
		World.add(world, this.rightBody);
    }

    display()
	{
			var posBottom=this.bottomBody.position;
			var posLeft=this.leftBody.position;
			var posRight=this.rightBody.position;

			

			push()
			translate(posLeft.x, posLeft.y);
			rectMode(CENTER)
			
			pop()

			push()
			translate(posRight.x, posRight.y);
			rectMode(CENTER)
			
			pop()

			push()
			translate(posBottom.x, posBottom.y);
			
				
            imageMode(CENTER);
			image(this.image, 0,-this.height/2,this.width, this.height)
			pop()
			
	}
}
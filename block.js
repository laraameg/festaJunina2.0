class Block{
    constructor(x, y, width, height) {
        var options = {
                     
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
        this.image = loadImage("block.png");
        this.visibility = 255;
      }
      display(){
        var angle = this.body.angle;
        var pos= this.body.position;
        if (this.body.speed>4.5) {
          World.remove(world,this.body);
          this.visibility = this.visibility-5
          push();
    
          tint(255, this.visibility);
    
          imageMode(CENTER);
          image(this.image, pos.x, pos.y, 30, 40);
          pop();
        }
        else {
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        rectMode(CENTER);
        rect(0,0,this.width, this.height);
        pop();
      }
}
}

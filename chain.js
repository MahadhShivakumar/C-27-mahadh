class Chain {
    constructor(obj1,obj2){
       var options = {
            length:15,
            stifness:0.04,
            bodyA:obj1,
            bodyB:obj2
        }    
        this.chain=LinkCage.create(options)
        World.add(world, this.chain);
    }
  
    display() {
        var posA=this.chain.bodyA.position
        var posB=this.chain.bodyB.position
        line(posA.x,posA.y,posB.x,posB.y)  
    }
  }
  
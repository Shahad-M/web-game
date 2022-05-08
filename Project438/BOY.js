
class boy {
  constructor() {
    this.r = 175;
    this.x = 70;
    this.y = height - this.r;
    this.by = 0;
    this.gravity = 2;
  }

  jump() {
    if (this.y == height - this.r) {
      this.by = -150; 
      // حجم القفزه 
    }
  }

  hits(Shark) {
    let x1 = this.x + this.r * 0.5;
    let y1 = this.y + this.r * 0.5;
    let x2 = Shark.x + Shark.r * 0.5;
    let y2 = Shark.y + Shark.r * 0.5;    
    return collideCircleCircle(x1, y1, this.r, x2, y2, Shark.r);
    
  }

  move() {
    this.y += this.by;
    this.by += this.gravity;
    this.y = constrain(this.y, 0, height - this.r);
  }

  show() {
    image(BImg, this.x, this.y, this.r, this.r);
  }
}

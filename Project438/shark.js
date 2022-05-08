

class Shark {
  constructor() {
    this.r = 75; 
    //  حجم القرش 
    this.x = width;
    this.y = height - this.r;
  }

  move() {
    this.x -= 17;
  }

  show() {
    image(shImg, this.x, this.y, this.r, this.r);
  }
}

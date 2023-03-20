/*
  Given two lines, write a function to determine whether or not they intersect.
  
  y = mx + b
*/

class Line {
  constructor (slope, yIntercept) {
    this.epsilon = 0.00001; 
    this.slope = slope;
    this.yIntercept = yIntercept;
  }

  intersect (line) {
    if (this.equals(line)) return true;
    if (Math.abs(this.slope - line.slope) > this.epsilon) return true;
    return false;
  }
  
  equals(o) {
    if (!(o instanceof Line)) return false;
    return Math.abs(this.slope - o.slope) < this.epsilon && Math.abs(this.yIntercept - o.yIntercept) < this.epsilon;
  }

}

let a = new Line(0, 1); 
let b = new Line(1, 1);
a.intersect(b);

/**
 *  xây dựng class
 */

class Circle {
  // thuộc tính của nó
  radius: number;
  color: string;

  constructor(radius: number, color: string) {
    this.radius = radius;
    this.color = color;
  }

  // phương thức
  perimeter(): any {
    return 2 * Math.PI * this.radius;
  }

  acreage(): any {
    return Math.PI * this.radius * this.radius;
  }

  inputData(radius: number, color: string): void {
    this.radius = radius;
    this.color = color;
  }

  displayData(): void {
    console.log(`radius: ${this.radius}, color: ${this.color}`);
  }
}

const circle = new Circle(10, "red");

console.log("chu vi của hình tròn là:", circle.perimeter());
console.log("diện tích hình tròn là:", circle.acreage());

circle.inputData(20, "blue");
circle.displayData();

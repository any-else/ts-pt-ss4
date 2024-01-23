/**
 *  xây dựng class
 */
var Circle = /** @class */ (function () {
    function Circle(radius, color) {
        this.radius = radius;
        this.color = color;
    }
    // phương thức
    Circle.prototype.perimeter = function () {
        return 2 * Math.PI * this.radius;
    };
    Circle.prototype.acreage = function () {
        return Math.PI * this.radius * this.radius;
    };
    Circle.prototype.inputData = function (radius, color) {
        this.radius = radius;
        this.color = color;
    };
    Circle.prototype.displayData = function () {
        console.log("radius: ".concat(this.radius, ", color: ").concat(this.color));
    };
    return Circle;
}());
var circle = new Circle(10, "red");
console.log("chu vi của hình tròn là:", circle.perimeter());
console.log("diện tích hình tròn là:", circle.acreage());
circle.inputData(20, "blue");
circle.displayData();

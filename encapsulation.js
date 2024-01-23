var Animal = /** @class */ (function () {
    function Animal(name) {
        this.name = name;
    }
    Object.defineProperty(Animal.prototype, "getName", {
        get: function () {
            return this.name;
        },
        enumerable: false,
        configurable: true
    });
    return Animal;
}());
var cat = new Animal("mun");
console.log("con mèo tên là:", cat.getName);

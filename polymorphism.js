var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Cut = /** @class */ (function () {
    function Cut() {
    }
    Cut.prototype.cut = function () {
        console.log("Đây là một hành động cắt");
    };
    return Cut;
}());
var Doctor = /** @class */ (function (_super) {
    __extends(Doctor, _super);
    function Doctor() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Doctor.prototype.cut = function () {
        console.log("Bác sĩ cắt chỉ");
    };
    return Doctor;
}(Cut));
var Baber = /** @class */ (function (_super) {
    __extends(Baber, _super);
    function Baber() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Baber.prototype.cut = function () {
        console.log("Baber thì cắt tóc");
    };
    return Baber;
}(Cut));
var Designer = /** @class */ (function (_super) {
    __extends(Designer, _super);
    function Designer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Designer.prototype.cut = function () {
        console.log(" Designer thì cắt ảnh");
    };
    return Designer;
}(Cut));
var doctor = new Doctor();
doctor.cut();
var baber = new Baber();
baber.cut();
var designer = new Designer();
designer.cut();

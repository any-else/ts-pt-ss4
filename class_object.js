// tạo khuôn mẫu
var Idol = /** @class */ (function () {
    function Idol(name, age) {
        this.name = name;
        this.age = age;
    }
    Idol.prototype.saySlogan = function (slogan) {
        return slogan;
    };
    return Idol;
}());
// tạo ra đối tượng
var huan_rose = new Idol("Huấn hoa hồng", 40);
console.log("đối tượng huấn là:", huan_rose);
console.log("câu nói bất hủ là:", huan_rose.saySlogan("Ở xã hội này có làm thì mới có ăn"));
var tien_bip = new Idol("Tiến bịp", 43);
console.log("đôi tượng tiến bip là:", tien_bip);
console.log("câu nói bất hủ", tien_bip.saySlogan("còn cái nịt"));

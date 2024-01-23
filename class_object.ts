// tạo khuôn mẫu
class Idol {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  saySlogan(slogan: string): string {
    return slogan;
  }
}

// tạo ra đối tượng
const huan_rose = new Idol("Huấn hoa hồng", 40);

console.log("đối tượng huấn là:", huan_rose);
console.log(
  "câu nói bất hủ là:",
  huan_rose.saySlogan("Ở xã hội này có làm thì mới có ăn")
);

const tien_bip = new Idol("Tiến bịp", 43);
console.log("đôi tượng tiến bip là:", tien_bip);
console.log("câu nói bất hủ", tien_bip.saySlogan("còn cái nịt"));

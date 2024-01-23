class Animal {
  private name: string;
  constructor(name: string) {
    this.name = name;
  }

  get getName(): string {
    return this.name;
  }
}

class Bird extends Animal {
  // phương thức
  fly(): string {
    return "con chim đang bay";
  }
}

const chim_cu = new Bird("Chim cu");

console.log(chim_cu.fly());
console.log(chim_cu.getName);

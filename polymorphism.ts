class Cut {
  cut(): void {
    console.log("Đây là một hành động cắt");
  }
}

class Doctor extends Cut {
  cut(): void {
    console.log("Bác sĩ cắt chỉ");
  }
}

class Baber extends Cut {
  cut(): void {
    console.log("Baber thì cắt tóc");
  }
}

class Designer extends Cut {
  cut(): void {
    console.log(" Designer thì cắt ảnh");
  }
}

const doctor = new Doctor();
doctor.cut();
const baber = new Baber();
baber.cut();
const designer = new Designer();
designer.cut();

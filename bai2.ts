class Student {
  studentCode: number;
  studentName: string;
  studentAge: number;
  address: string;
  phoneNumber: number;

  // khởi tạo contructor
  constructor(
    studentCode: number,
    studentName: string,
    studentAge: number,
    address: string,
    phoneNumber: number
  ) {
    this.studentCode = studentCode;
    this.studentName = studentName;
    this.studentAge = studentAge;
    this.address = address;
    this.phoneNumber = phoneNumber;
  }

  inputData() {
    this.studentCode = Number(prompt("Nhập mã sinh viên"));
    this.studentName = prompt("Nhập vào tên sinh viên");
    this.studentAge = Number(prompt("Nhập vào tuổi sinh viên"));
    this.address = prompt("Nhập vào địa chỉ sinh viên");
    this.phoneNumber = Number(prompt("Nhập vào số điện thoại của sinh viên"));
  }

  displayData() {
    console.log(`
      Student có thông tin là: 
      Code: ${this.studentCode}
      Name: ${this.studentName}
      Age: ${this.studentAge}
      Address: ${this.address}
      Phone number: ${this.phoneNumber}
    `);
  }
}

class Main {
  listStudent: Student[];
  constructor() {
    this.listStudent = [];
  }

  main(): any {
    let choice: string;

    do {
      choice = prompt(`
       Danh sách menu: 
       1. Hiển thị thông tin 
       2. Thêm mới 
       3. Sửa thông tin
       4. Delete
       5. Thoát
      `);
      switch (choice) {
        case "1":
          this.displayListStudent();
        case "2":
          this.createStudent();
        case "5":
          break;
        default:
          console.log("Đã xảy ra lỗi rồi");
      }
    } while (choice !== "5");
  }

  displayListStudent() {
    console.log("List of all students:");
    this.listStudent.forEach((student) => {
      if (student) {
        student.displayData();
      }
    });
  }

  createStudent() {
    const newStudent = new Student(0, "", 0, "", 0);
    newStudent.displayData();
    this.listStudent.push(newStudent);
    console.log(" Thêm mới thành công ");
  }
}

const main = new Main();
main.main();

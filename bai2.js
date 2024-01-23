var Student = /** @class */ (function () {
    // khởi tạo contructor
    function Student(studentCode, studentName, studentAge, address, phoneNumber) {
        this.studentCode = studentCode;
        this.studentName = studentName;
        this.studentAge = studentAge;
        this.address = address;
        this.phoneNumber = phoneNumber;
    }
    Student.prototype.inputData = function () {
        this.studentCode = Number(prompt("Nhập mã sinh viên"));
        this.studentName = prompt("Nhập vào tên sinh viên");
        this.studentAge = Number(prompt("Nhập vào tuổi sinh viên"));
        this.address = prompt("Nhập vào địa chỉ sinh viên");
        this.phoneNumber = Number(prompt("Nhập vào số điện thoại của sinh viên"));
    };
    Student.prototype.displayData = function () {
        console.log("\n      Student c\u00F3 th\u00F4ng tin l\u00E0: \n      Code: ".concat(this.studentCode, "\n      Name: ").concat(this.studentName, "\n      Age: ").concat(this.studentAge, "\n      Address: ").concat(this.address, "\n      Phone number: ").concat(this.phoneNumber, "\n    "));
    };
    return Student;
}());
var Main = /** @class */ (function () {
    function Main() {
        this.listStudent = [];
    }
    Main.prototype.main = function () {
        var choice;
        do {
            choice = prompt("\n       Danh s\u00E1ch menu: \n       1. Hi\u1EC3n th\u1ECB th\u00F4ng tin \n       2. Th\u00EAm m\u1EDBi \n       3. S\u1EEDa th\u00F4ng tin\n       4. Delete\n       5. Tho\u00E1t\n      ");
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
    };
    Main.prototype.displayListStudent = function () {
        console.log("List of all students:");
        this.listStudent.forEach(function (student) {
            if (student) {
                student.displayData();
            }
        });
    };
    Main.prototype.createStudent = function () {
        var newStudent = new Student(32423, "Chính", 15, "Hà Nội", 239847328);
        this.listStudent.push(newStudent);
    };
    return Main;
}());
var main = new Main();
main.main();

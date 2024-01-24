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
        var _loop_1 = function () {
            choice = prompt("\n       Danh s\u00E1ch menu: \n       1. Hi\u1EC3n th\u1ECB th\u00F4ng tin \n       2. Th\u00EAm m\u1EDBi \n       3. S\u1EEDa th\u00F4ng tin\n       4. Delete\n       5. Tho\u00E1t\n      ");
            switch (choice) {
                case "1":
                    console.log("vào 1");
                    return { value: this_1.listStudent.forEach(function (student) {
                            console.log("student", student);
                            if (student) {
                                student.displayData();
                            }
                        }) };
                case "2":
                    var newStudent = new Student(0, "", 0, "", 0);
                    newStudent.inputData();
                    this_1.listStudent.push(newStudent);
                    break;
                case "3":
                    var codeStudent_1 = Number(prompt("Vui lòng nhập vào code student mà bạn muốn sửa: "));
                    var indexStudent = this_1.listStudent.findIndex(function (item) { return Number(item.studentCode) == Number(codeStudent_1); });
                    if (indexStudent == -1) {
                        console.log("mã code student bạn truyền vào không đúng");
                    }
                    else {
                        var editStudent = new Student(0, "", 0, "", 0);
                        editStudent.inputData();
                        this_1.listStudent[indexStudent] = editStudent;
                    }
                case "5":
                    break;
                default:
                    console.log("Đã xảy ra lỗi rồi");
            }
        };
        var this_1 = this;
        do {
            var state_1 = _loop_1();
            if (typeof state_1 === "object")
                return state_1.value;
        } while (choice !== "5");
    };
    return Main;
}());
var main = new Main();
main.main();

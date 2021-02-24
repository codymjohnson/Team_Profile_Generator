// constructor for Manager class via employee
const employee = require("./employee");

class Manager extends employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email);
        this.officeNumber = officeNumber;
    }

    grabOfficeNumber() {
        return this.officeNumber;
    }

    grabRole() {
        return "Manager";
    }
}

module.exports = Manager;
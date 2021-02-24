// constructor for Intern class via employee
const employee = require("./employee");

class Intern extends employee {
    constructor(name, id, email, school) {
        super(name, id, email);
        this.school = school;
    }

    grabSchool() {
        return this.school;
    }

    grabRole() {
        return "Intern";
    }
}

module.exports = Intern;
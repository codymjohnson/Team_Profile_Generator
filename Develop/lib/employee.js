// constructor for employee class
class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }

    grabName() {
        return this.name;
    }

    grabid() {
        return this.id;
    }

    grabEmail() {
        return this.email;
    }

    grabRole() {
        return "Employee";
    }
}

module.exports = Employee;
// constructor for engineer class via Employee
const employee = require("./employee");

class Engineer extends employee {
    constructor(name, id, email, github) {
        super(name, id, email);
        this.github = github;
    }

    grabGithub() {
        return this.github;
    }

    grabRole() {
        return "Engineer";
    }
}

module.exports = Engineer;
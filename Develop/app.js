// pulling required variables 
const Manager = require("./lib/manager");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
const joi = require("joi");

const employees = [];

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/renderHtml");

// inquire questions to build up employees files to push to new page
const getInfo = () => {
    inquirer.prompt([
        {
            type: "input",
            message: "What is the name of the manager?",
            name: "name",
        },
        {
            type: "input",
            message: "manager's ID?",
            name: "id",
        },
        {
            type: "input",
            message: "manager's email?",
            name: "email",
        },
        {
            type: "input",
            message: "Manager's office number?",
            name: "officeNumber",
        },
    ])
        .then((response) => {
            const manager = new Manager(response.name, response.id, response.email, response.officeNumber);
            employees.push(manager);
            addMember();
        });
};

const addMember = () => {
    inquirer.prompt({
        type: "list",
        message: "What type of team member do u want to add?",
        name: "employeeType",
        choices: ["Engineer", "Intern", "No new team members."],
    })
        .then((response) => {
            switch (response.employeeType) {
                case "Engineer":
                    engineer();
                    break;

                case "Intern":
                    intern();
                    break;

                case "No new team members.":
                    fs.writeFileSync(outputPath, render(employees));
                    process.exit();

            }
        });
};

// creating team members in object form
const engineer = () => {
    inquirer.prompt([
        {
            type: "input",
            message: "Engineer's name?",
            name: "name",
        },
        {
            type: "input",
            message: "Engineer's ID?",
            name: "id",
        },
        {
            type: "input",
            message: "Engineer's email?",
            name: "email",
        },
        {
            type: "input",
            message: "Engineer's github username?",
            name: "github",
        },
    ])
        .then((response) => {
            const engineer = new Engineer(response.name, response.id, response.email, response.github);
            employees.push(engineer);
            addMember();
        });
};

const intern = () => {
    inquirer.prompt([
        {
            type: "input",
            message: "Intern's name?",
            name: "name",
        },
        {
            type: "input",
            message: "Intern's ID?",
            name: "id",
        },
        {
            type: "input",
            message: "Intern's email?",
            name: "email",
        },
        {
            type: "input",
            message: "Intern's school?",
            name: "school",
        }
    ])
        .then((response) => {
            const intern = new Intern(response.name, response.id, response.email, response.school);
            employees.push(intern);
            addMember();
        });
};

const checkEmail = (email) => {
    const schema = joi.object({
        email: joi.string().email({ minDomainSegments: 2, tlds: { allow: ["com", "net"] } })
    });
    const validation = schema.validate(email);
    return validation || "Enter a valid email";
}

// initialize inquirer and begin process to build page
getInfo();




const path = require("path");
const fs = require("fs");

const templateDir = path.resolve(__dirname, "../templates");

const render = employees => {
    const html = [];

    html.push(...employees
        .filter(employee => employee.grabRole() === "Manager")
        .map(manager => rendManager(manager))
    );

    html.push(...employees
        .filter(employee => employee.grabRole() === "Engineer")
        .map(engineer => rendEngineer(engineer))
    );

    html.push(...employees
        .filter(employee => employee.grabRole() === "Intern")
        .map(intern => rendIntern(intern))
    );

    return rendIndex(html.join(""));
};

const rendManager = manager => {
    let template = fs.readFileSync(path.resolve(templateDir, "manager.html"), "utf8");
    template = changePlaceholder(template, "name", manager.grabName());
    template = changePlaceholder(template, "role", manager.grabRole());
    template = changePlaceholder(template, "email", manager.grabEmail());
    template = changePlaceholder(template, "id", manager.grabId());
    template = changePlaceholder(template, "officenumber", manager.grabOfficeNumber());
    return template;
};

const rendEngineer = engineer => {
    let template = fs.readFileSync(path.resolve(templateDir, "engineer.html"), "utf8");
    template = changePlaceholder(template, "name", engineer.grabName());
    template = changePlaceholder(template, "role", engineer.grabRole());
    template = changePlaceholder(template, "email", engineer.grabEmail());
    template = changePlaceholder(template, "id", engineer.grabId());
    template = changePlaceholder(template, "github", engineer.grabGithub());
    return template;
};

const rendIntern = intern => {
    let template = fs.readFileSync(path.resolve(templateDir, "intern.html"), "utf8");
    template = changePlaceholder(template, "name", intern.grabName());
    template = changePlaceholder(template, "role", intern.grabRole());
    template = changePlaceholder(template, "email", intern.grabEmail());
    template = changePlaceholder(template, "id", intern.grabId());
    template = changePlaceholder(template, "school", intern.grabSchool());
    return template;
};

const rendIndex = html => {
    const template = fs.readFileSync(path.resolve(templateDir, "index.html"), "utf8");
    return changePlaceholder(template, "team", html);
};

const changePlaceholder = (template, placeholder, value) => {
    const pattern = new RegExp("{{ " + placeholder + " }}", "gm");
    return template.replace(pattern, value);
};

module.exports = render;
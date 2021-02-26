const Manager = require("../lib/manager");
const Employee = require("../lib/employee");

test("Set office number by constructor", () => {
    const testValue = 100;
    const e = new Manager("Foo", 1, "this@that.com", testValue);
    expect(e.officeNumber).toBe(testValue);
})

test("grabRole() returns 'Manager'", () => {
    const testValue = "Manager";
    const e = new Manager("Foo", 1, "this@that.com", 100);
    expect(e.grabRole()).toBe(testValue);
});

test("Grab office number by grabOffice()", () => {
    const testValue = 100;
    const e = new Manager("Foo", 1, "this@that.com", testValue);
    expect(e.grabOfficeNumber()).toBe(testValue);
});
const Employee = require("../lib/employee");

test("Can instantiate Employee instance", () => {
    const e = new Employee();
    expect(typeof (e)).toBe("object");
});

test("Set name from constructors", () => {
    const name = "Ragnar";
    const e = new Employee(name);
    expect(e.name).toBe(name);
});

test("Set id from constructors", () => {
    const testValue = 100;
    const e = new Employee("Foo", testValue);
    expect(e.id).toBe(testValue);
});

test("Set email from constructors", () => {
    const testValue = "ragnar@lothbrook.com";
    const e = new Employee("Foo", 1, testValue);
    expect(e.email).toBe(testValue);
});

test("Grab name by grabName()", () => {
    const testValue = "Ragnar";
    const e = new Employee("Foo", testValue);
    expect(e.grabName()).toBe(testValue);
});

test("grab id by grabId()", () => {
    const testValue = 100;
    const e = new Employee("Foo", 1, testValue);
    expect(e.grabId()).toBe(testValue);
});

test("Grab email by grabEmail()", () => {
    const testValue = "ragnar@lothbrook.com";
    const e = new Employee("Foo", 1, testValue);
    expect(e.grabEmail()).toBe(testValue);
});

test("grabRole() return \"Employee\"", () => {
    const testValue = "Ragnar";
    const e = new Employee("Ragnar", 1, "ragnar@lothbrook.com");
    expect(e.grabRole()).toBe(testValue);
});


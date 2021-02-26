const Intern = require("../lib/intern");

test("Set school by using constructor", () => {
    const testValue = "CSU";
    const e = new Intern("Foo", 1, "this@that.com", testValue);
    expect(e.school).toBe(testValue);
});

test("grabRole() should return \"Intern\"", () => {
    const testValue = "Intern";
    const e = new Intern("Foo", 1, "this@that.com", "CSU");
});

test("Grabbing school by grabSchool()", () => {
    const testValue = "CSU";
    const e = new Intern("Foo", 1, "this@that.com", testValue);
    expect(e.grabSchool()).toBe(testValue);
});
const Engineer = require("../lib/engineer");

test("Set Github from constructor", () => {
    const testValue = "githubUser";
    const e = new Engineer("Foo", 1, "this@that.com", testValue);
    expect(e.github).toBe(testValue);
});

test("grabRole return \"Engineer\"", () => {
    const testValue = "Engineer";
    const e = new Engineer("Foo", 1, "this@that.com", "githubUser");
    expect(e.grabRole()).toBe(testValue);
});

test("Get github username from grabGitgub()", () => {
    const testValue = "githubUser";
    const e = new Engineer("Foo", 1, "this@that.com", testValue);
    expect(e.grabGithub()).toBe(testValue);
});
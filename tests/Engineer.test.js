const Engineer = require("../lib/Engineer");

test("Ability to get GitHub username using constructor function", () => {
    const gitHub = "MichaelScott123";
    const employee = new Engineer("Michael Scott", "1", "michael.scott@dundermifflin.com", gitHub);
    expect(employee.gitHub).toBe(gitHub);
});

test("getRole() should return as Engineer", () => {
    const role = "Engineer";
    const employee = new Engineer("Michael Scott", "1", "michael.scott@dundermifflin.com", "MichaelScott123");
    expect(employee.getRole()).toBe(role);
});

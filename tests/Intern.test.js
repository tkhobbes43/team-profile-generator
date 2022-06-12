const Intern = require ("../lib/Intern");

test("Ability to set school using constructor function", () => {
    const school = "Hogwarts";
    const employee = new Intern("Michael Scott", "1", "michael.scott@dundermifflin.com", school);
    expect(employee.school).toBe(school);
});

test("getRole() should return as Intern", () => {
    const role = "Intern";
    const employee = new Manager("Michael Scott", "1", "michael.scott@dundermifflin.com", "Hogwarts");
    expect(employee.getRole()).toBe(role);
});

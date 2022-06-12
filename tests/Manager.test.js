const Manager = require("../lib/Manager");

test("Ability to set office number using constructor function", () => {
    const officeNumber = "1738";
    const employee = new Manager("Michael Scott", "1", "michael.scott@dundermifflin.com", officeNumber);
    expect(employee.officeNumber).toBe(officeNumber);
});

test("getRole() should return as Manager", () => {
    const role = "Manager";
    const employee = new Manager("Michael Scott", "1", "michael.scott@dundermifflin.com", "1738");
    expect(employee.getRole()).toBe(role);
});

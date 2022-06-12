const Employee = require("../lib/Employee");

test("Ability to set name using contructor function", () => {
    const name = "Naruto Uzumaki";
    const employee = new Employee(name);
    expect(employee.name).toBe(name);
});


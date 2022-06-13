const Employee = require("../lib/Employee");

test("When creating a new instance of Data it is of object type", () => {
    // const name = "Naruto Uzumaki";
    const employee = new Employee();
    expect(typeof(employee)).toBe("object");
});

test("Ability to set name using contructor function, so getName() should return name", () => {
    const name = "Naruto Uzumaki";
    const employee = new Employee(name, "1", "naruto.uzumaki@hiddenleaf.com");
    expect(employee.name).toBe(name);
});

test("Ability to set the user ID using constructor function, so getId() should return id", () => {
    const id = "1";
    const employee = new Employee("Naruto Uzumaki", id, "naruto.uzumaki@hiddenleaf.com");
    expect(employee.id).toBe(id);
});

test("Running getEmail() should return the supplied email", () => {
    const email = "naruto.uzumaki@hiddenleaf.com";
    const employee = new Employee("Naruto Uzumaki", "1", email);
    expect(employee.getEmail()).toBe(email);
});

test("Running getRole() should return 'Employee'", () => {
    const role = "Employee";
    const employee = new Employee("Naruto Uzumaki", "1", "naruto.uzumaki@hiddenleaf.com");
    expect(employee.getRole()).toBe(role);
});

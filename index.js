// node modules
const inquirer = require("inquirer");
const fs = require("fs");

// linking generateHTML.js to create the mark up
const generateHTML = require("./src/generateHTML");

// team profiles
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");


// team array built up from user's input
const myEmployees = [];

// want first prompt to be for the manager, so that they can input their info and then build up their team with the rest of the prompts
const addManager = () => {
    return inquirer.prompt ([
        {
            type: 'input',
            name: 'name',
            message: 'Who is the manager of the team?'
        },
        {
            type: 'input',
            name: 'id',
            message: "Please enter the manager's ID.",
        },
        {
            type: 'input',
            name: 'email',
            message: "Please enter the manager's email."
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: "Please enter the manager's office number."
        }
    ])
    // thenifying data from prompts to push into employee constructor functions, to them push into myEmployees array
    .then(managerInput => {
        // destructuring used
        const { name, id, email, officeNumber } = managerInput;
        const manager = new Manager (name, id, email, officeNumber);

        myEmployees.push(manager);
        console.log(manager);
    })
};

const addEmployee = () => {
    console.log(`
    =====================
    Adding employees to the team
    =====================
    `);

    return inquirer.prompt ([
        {
            type: 'list',
            name: 'role',
            message: "Please choose a role for your employee.",
            choices: ['Engineer', 'Intern']
        },
        {
            type: 'input',
            name: 'name',
            message: "What is the name of the employee?"
        },
        {
            type: 'input',
            name: 'id',
            message: "Please enter the employee's ID."
        },
        {
            type: 'input',
            name: 'email',
            message: "Please enter employee's email."
        },
        {
            type: 'input',
            name: 'gitHub',
            message: "Please enter the employee's github username.",
            when: (input) => input.role === "Engineer",
        },
        {
            type: 'input',
            name: 'school',
            message: "Please enter the intern's school.",
            when: (input) => input.role === "Intern",
        },
        {
            type: 'confirm',
            name: 'confirmAddEmployee',
            message: 'Would you like to add more team members?',
            default: false
        }
    ])
    // thenifying data from prompts for either engineer or internand then push into employee constructor functions, to them push into myEmployees array
    .then(employeeData => {
        // data for the employee types using destructuring
        let { name, id, email, role, gitHub, school, confirmAddEmployee } = employeeData;
        let employee;
        if (role === "Engineer") {
            employee = new Engineer (name, id, email, gitHub);
            console.log(employee);
        } else if (role === "Intern") {
            employee = new Intern (name, id, email, school);
            console.log(employee);
        }
        myEmployees.push(employee);
        if (confirmAddEmployee) {
            return addEmployee(myEmployees);
        } else {
            return myEmployees;
        }
    })
};

// function to actually generate the HTML page using fs
const writeFile = data => {
    fs.writeFile('./dist/index.html', data, err => {
        // if there is an error
        if (err) {
            console.log(err);
            return;
            // when the profile has been created
        } else {
            console.log("Your team profile has been successfully created! Please checkout the dynamically created index.html!")
        }
    })
};

addManager()
    .then(addEmployee)
    .then(myEmployees => {
        return generateHTML(myEmployees);
    })
    .then(pageHTML => {
        return writeFile(pageHTML);
    })
    .catch(err => {
        console.log(err);
    });
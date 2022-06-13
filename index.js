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
    .then(managerInput => {
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
        }
        {
            type: 'confirm',
            name: 'confirmAddeEmployee',
            message: 'Would you like to add more team members?',
            default: false
        }
    ])
    .then
}
addManager()
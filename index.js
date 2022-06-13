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

addManager()
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
        }

    ])
}
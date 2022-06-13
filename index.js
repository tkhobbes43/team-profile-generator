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

// help from tutor on how path I can take to execute all of this
// const newIntern = new Intern ("Mike", 123, "test@test.test", "Rice");
// const newManager = new Manager ("Bike", 123, "test@test.test", 432);
// myEmployees.push(newIntern);
// myEmployees.push(newManager);

// myEmployees.forEach(employee => {
//     console.log(employee.getRole())
//     if(employee.getRole() == "Intern"){
//         //maybe run a function that builds a template for interns
//         console.log("I'm an intern, here is my school:")
//         console.log(employee.getSchool())
//     }else {
//         console.log("manager here:")
//         console.log(employee.getOfficeNumber())
//     }
// })
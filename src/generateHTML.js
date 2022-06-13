// create cards for each type of employee, and then using const myEmployees from index.js 
// manager card
const generateManager = function(manager) {
    return `
    <div class="card border" style="width: 18rem;">
        <div class="card-body card text-white bg-primary mb-3">
            <h5 class="card-title">${manager.name}</h5>
            <p class="card-text">Manager</p>
        </div>
        <ul class="list-group list-group-flush p-4">
            <li class="list-group-item border">ID: ${manager.id}</li>
            <li class="list-group-item border">Email: <a href="mailto:${manager.email}">${manager.email}</a></li>
            <li class="list-group-item border">Office Number: ${manager.officeNumber}</li>
        </ul>
    </div>
    `;
}

// engineer card
const generateEngineer = function(engineer) {
    return `
    <div class="card border" style="width: 18rem;">
        <div class="card-body card text-white bg-primary mb-3">
            <h5 class="card-title">${engineer.name}</h5>
            <p class="card-text">Manager</p>
        </div>
        <ul class="list-group list-group-flush p-4">
            <li class="list-group-item border">ID: ${engineer.id}</li>
            <li class="list-group-item border">Email: <a href="mailto:${engineer.email}">${engineer.email}</a></li>
            <li class="list-group-item border">Github: <a href="https://github.com/${engineer.gitHub}">${engineer.github}</a></li>
        </ul>
    </div>
    `;
}

// intern card
const generateIntern = function(intern) {
    return `
    <div class="card border" style="width: 18rem;">
        <div class="card-body card text-white bg-primary mb-3">
            <h5 class="card-title">${intern.name}</h5>
            <p class="card-text">Manager</p>
        </div>
        <ul class="list-group list-group-flush p-4">
            <li class="list-group-item border">ID: ${intern.id}</li>
            <li class="list-group-item border">Email: <a href="mailto:${intern.email}">${intern.email}</a></li>
            <li class="list-group-item border">School: ${intern.school}/li>
        </ul>
    </div>
    `;
}

generateHTML = (data) => {
    // array for the cards
    pageArray = [];
    // for loop to iterate through data for all the employees and their roles
    for (let i = 0; i < data.length; i++) {
        const employee = data[i];
        const role = employee.getRole();
        
        // using conditionals within for loop to call either manager, engineer, or intern functions above
        // first is to call manager and push it into an pageArray 
        if (role ==='Manager') {
            const managerCard = generateManager(employee);
            pageArray.push(managerCard);
        }

        // call engineer function
        if (role ==='Engineer') {
            const engineerCard = generateEngineer(employee);
            pageArray.push(engineerCard);
        }

        // call intern function
        (role ==='Intern') {
            const internCard = generateIntern(employee);
            pageArray.push(internCard);
        }
    }
    const employeeCards = pageArray.join('')
    // return to generated page
    const generateTeam = generateTeamProfiles(employeeCards);
    return generateTeam;
}

// will generate the HTML page
const generateTeamProfiles = function() {
return`
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Caladea&family=Courgette&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
    <title>Team Profile</title>
</head>
    <body>
        <header style="color:white;background-color:red;text-align:center;">
            <h1><strong>My Team</strong></h1>
        </header>
        <main>
            <div class = "card-deck">
                <div class="card">
                ${employeeCards}
                </div>
            </div>
        </main>
</body>
</html>
`;
}

module.exports = generateHTML;

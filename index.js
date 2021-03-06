// dependencies
const inquirer = require('inquirer');
const fs = require('fs');

// classes
const Employee = require('./lib/Employee');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');

// functions
function runInitalPrompts() {
    const promptArray = [
    {
        type: 'input',
        message: 'What is your name?',
        name: 'name'
    },
    {
        type: 'input',
        message: 'What is your ID number?',
        name: 'id'
    },
    {
        type: 'input',
        message: 'What is your email?',
        name: 'email'
    },
    {
        type: 'list',
        message: 'What is your title?',
        choices: ['Engineer', 'Intern', 'Manager'],
        name: 'title'
    }];

    return inquirer.prompt(promptArray);
}

function runManagerPrompts() {
    const promptArray = [
        {
            type: 'input',
            message: 'What is your office number?',
            name: 'officeNumber'
        }
    ];

    return inquirer.prompt(promptArray);
}

function runEngineerPrompts() {
    const promptArray = [
        {
            type: 'input',
            message: 'What is your GitHub username?',
            name: 'github'
        }
    ];

    return inquirer.prompt(promptArray);
}

function runInternPrompts() {
    const promptArray = [
        {
            type: 'input',
            message: 'What school do you attend?',
            name: 'school'
        }
    ];

    return inquirer.prompt(promptArray);
}

async function run() {
    let employeeArray = [];
    const repeatMax = 4;
    for (i = 0; i < repeatMax; i++) {
        const promise = new Promise((resolve, reject) => {
            runInitalPrompts()
                .then(function ({ name, id, email, title }) {

                    if (title === "Manager") {
                        runManagerPrompts().then(function ({ officeNumber }) {
                            this.employee = new Manager(name, id, email, officeNumber, title);
                            console.log(officeNumber);
                            employeeArray.push(employee);
                            resolve("done");
                        });

                    } else if (title === "Engineer") {
                        runEngineerPrompts().then(function ({ github }) {
                            this.employee = new Engineer(name, id, email, github, title);
                            console.log(github);
                            employeeArray.push(employee);
                            resolve("done");
                        });
                    } else if (title === "Intern") {
                        runInternPrompts().then(function ({ school }) {
                            this.employee = new Intern(name, id, email, school, title);
                            console.log(school);
                            employeeArray.push(employee);
                            resolve("done");
                        });
                    }

                }).catch(function (err) {
                    console.log("There was an error.");
                    console.log(err);
                });
        });

        const result = await promise;
        console.log(result);
    }


    function displayTitle(employee) {
        if (employee.title === 'Manager') {
            console.log(employee.officeNumber);
            return `office number: ${employee.officeNumber}`;
        }

        if (employee.title === 'Engineer') {
        return `GitHub: ${employee.github}`;
        }

        if (employee.title === 'Intern') {
        return `School: ${employee.school}`;
        }
    }

    function cardHTML() {
        let html = "";
        for (q = 0; q < repeatMax; q++) {
            console.log(employeeArray[q])
            html += `<div class="card bg-dark justify-content-center align-items-center" style="width: 18rem;">
                <div class="col card-header">
                    <h4>${employeeArray[q].name}</h4>
                </div>
                <div class="col card-header">
                    <h4>${employeeArray[q].title}</h4 >
                </div >
                <ul class="list-group list-group-flush text">
                    <li class="list-group-item">ID: ${employeeArray[q].id}</li>
                    <li class="list-group-item">Email: ${employeeArray[q].email}</li>
                    <li class="list-group-item"> ${displayTitle(employeeArray[q])}</li>
                </ul>
            </div > `;
        }
        return html;
    }

    let html = `
        <!DOCTYPE html>
        <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta http-equiv="X-UA-Compatible" content="IE=edge">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"  integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
                <title>Document</title>
                <style>
                    .row {
                        display: flex;
                        flex-wrap: wrap;
                        justify-content: center;
                        margin-top: 20px;
                        margin-bottom: 20px;
                    }

                    .card {
                        padding: 15px;
                        border-radius:6px;
                        background-color: white;
                        color: lightskyblue;
                        margin: 15px;
                    }

                    .text {
                        padding: 15px;
                        background-color: white;
                        color: black;
                        margin: 15px;
                    }

                    .col {
                        flex: 1;
                        text-align: center;
                    }
                </style>
            </head>
            <body>
                <nav class="navbar-dark bg-dark justofy-content-center align-items-center">
                    <span class="navbar-brand mb-0 h1">
                        <h1>My Team Profile</h1>
                    </span>
                </nav>
                <div class="row">
                    ${cardHTML()}
                </div>
            </body>
        </html>
    `;

    fs.writeFile('team.html', html, function (err) {
        if (err) throw err;
        console.log('File complete! find team.html in team-profile-generator directory');
    });
}

run();
const inquirer = require("inquirer");
const fs = require("fs");
const Manager = require("./lib/Manager");
const Intern = require("./lib/Intern");
const Engineer = require("./lib/Engineer");
const generateHtml = require("./src/generateHtml");

// Empty array to add new employee objects to
const employeeList = [];

// Simple validation check for epmty strings
const validation = (answer) => {
    if (answer == "") {
        console.log("\x1b[31m%s\x1b[0m", "Please enter something!");
        return false;
    } else {
        return true;
    }
};

// Default Startup Questions
const questions = [
    {
        type: "input",
        message: "Team manager's name:",
        name: "manager_name",
        validate: validation,
    },
    {
        type: "input",
        message: "Team manager's Employee ID:",
        name: "manager_id",
        validate: validation,
    },
    {
        type: "input",
        message: "Team manager's Email Address:",
        name: "manager_email",
        validate: validation,
    },
    {
        type: "input",
        message: "Team manager's Office Number:",
        name: "manager_office",
        validate: validation,
    },
];

// Continues with questions to add further employees
function addMore() {
    inquirer
        .prompt([
            {
                type: "list",
                message: "Would you like to add more team members?",
                name: "team",
                choices: ["Add Engineer", "Add Intern", "Finish Building Team"],
            },
        ])
        .then((response) => {
            // Checks which option is selected
            switch (response.team) {
                case "Add Engineer":
                    addEngineer();
                    break;

                case "Add Intern":
                    addIntern();
                    break;

                default:
                    // If Finish Building Team is selected, write to the index.html file using generateHtml() as the data
                    fs.writeFile(
                        "./dist/index.html",
                        generateHtml(employeeList),
                        (err) => {
                            if (err) console.log(err);
                            else {
                                console.log("file successfully written!");
                            }
                        }
                    );
            }
        });
}

// function for adding an engineer
function addEngineer() {
    inquirer
        .prompt([
            {
                type: "input",
                message: "Engineer's name:",
                name: "manager_name",
                validate: validation,
            },
            {
                type: "input",
                message: "Engineer's Employee ID:",
                name: "manager_id",
                validate: validation,
            },
            {
                type: "input",
                message: "Engineer's Email Address:",
                name: "manager_email",
                validate: validation,
            },
            {
                type: "input",
                message: "Engineer's Github Username:",
                name: "manager_office",
                validate: validation,
            },
        ])
        .then((response) => {
            // variables were left the same name for simplicity, response information is different
            const engineer = new Engineer(
                response.manager_office,
                response.manager_name,
                response.manager_id,
                response.manager_email
            );
            // pushes new employee object into array
            employeeList.push(engineer);
            addMore();
        });
}

function addIntern() {
    inquirer
        .prompt([
            {
                type: "input",
                message: "Intern's name:",
                name: "manager_name",
                validate: validation,
            },
            {
                type: "input",
                message: "Intern's Employee ID:",
                name: "manager_id",
                validate: validation,
            },
            {
                type: "input",
                message: "Intern's Email Address:",
                name: "manager_email",
                validate: validation,
            },
            {
                type: "input",
                message: "Intern's School:",
                name: "manager_office",
                validate: validation,
            },
        ])
        .then((response) => {
            // variables were left the same name for simplicity, response information is different
            const intern = new Intern(
                response.manager_office,
                response.manager_name,
                response.manager_id,
                response.manager_email
            );
            // pushes new employee object into array
            employeeList.push(intern);
            addMore();
        });
}

function start() {
    inquirer.prompt(questions).then((response) => {
        const manager = new Manager(
            response.manager_office,
            response.manager_name,
            response.manager_id,
            response.manager_email
        );
        // pushes new employee object into array
        employeeList.push(manager);
        addMore();
    });
}

start();

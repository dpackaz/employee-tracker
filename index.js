// packages needed for application
const inquirer = require("inquirer");
const fs = require("fs");
const app = express();

const starterPrompt = [
    {
        type: "list",
        name: "begin",
        message: "Welcome to the company employee tracker! What would you like to do?",
        choices: [
            "View All Departments",
            "Add New Department",
            "Vew All Positions",
            "Add New Position",
            "View All Employees",
            "Add New Employee",
            "Edit Existing Employee"
            ]
    },
];

const addDepartment = [
    {
        name: "new-department",
        message: "What department would you like to add?"
    },
];

const addPosition = [
    {
        name: "new-position",
        message: "What position would you like to add?"
    },
];

const addEmployee = [
    {
        name: "first-name",
        message: "What is the new employee's first name?"
    },
    {
        name: "last-name",
        message: "What is the new employee's last name?"
    },
    {
        name: "position",
        message: "What is the new employee's position?"
    },
    {
        name: "manager",
        message: "Who is the new employee's manager?"
    },
];

const updateEmployee = [
    {
        name: "new-position",
        message: "What is the employee's new position?"
    },
];
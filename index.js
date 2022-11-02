// packages needed for application
const inquirer = require("inquirer");
const cTable = require("console.table");
const mysql = require("mysql2");

const connectMysql = mysql.createConnection(
    {
        host: "localhost",
        user: "root",
        password: "password",
        database: "employees_db"
    },
)

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
            "Edit Employee Position"
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
        name: "edit-employee",
        message: "Which employee's position would you like to edit?"
    },
    {
        name: "new-position",
        message: "What is the employee's new position?"
    },
];

// create a function that will begin the starter prompt

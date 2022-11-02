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
    console.log("Accessing Company Database...")
);

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
            "Edit Employee Position",
            "Exit"
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

// begin the starter prompt and redirect to interactive functions
const firstQuestion = () => {
    inquirer.createPromptModule(starterPrompt).then((response => {
        if (response.task === "View All Departments") {
            viewDepartments();
        } else if (response.task === "Add New Department") {
            newDepartment();
        } else if (response.task === "View All Positions") {
            viewPositions();
        } else if (response.task === "Add New Position") {
            newPosition();
        } else if (response.task === "View All Employees") {
            viewEmployees();
        } else if (response.task === "Add New Employee") {
            newEmployee();
        } else if (response.task === "Edit Employee Position") {
            editEmployee();
        } else if (response.task === "Exit") {
            exit();
        }
    }))
}


// view all departments function
function viewDepartments() {
    connectMysql.query("SELECT * FROM department", function (err, res) {
        console.table(res[0]);
        firstQuestion()
    })
}

// view all positions function
function viewPositions() {
    connectMysql.query(`SELECT position.title AS Position, position.position_id AS Position_Id, department_name AS Department, position.salary AS Salary FROM position JOIN department`,
    function (err, res) {
        console.table(res[0]);
        firstQuestion()
    })
}

// view all employees function
function viewEmployees() {
    connectMysql.query(`SELECT employee.employee_id AS ID, CONCAT(employee.first_name, ' ', employee.last_name) as Name, position.title AS Position, department.name AS Department, position.salary AS Salary, CONCAT(manager.first_name, ' ', manager.last_name) AS Manager FROM employee LEFT JOIN position on position.position_id = employee.position_id LEFT JOIN department ON department.department_id = position.department_id LEFT JOIN employee manager ON manager.employee_id = employee.manager_id`,
    function (err, res) {
        console.table(res[0]);
        firstQuestion()
    })
}

// exit function
function exit() {
    process.exit()
}
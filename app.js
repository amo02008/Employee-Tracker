const mysql = require("mysql");
const inquirer = require("inquirer");
const cTable = require("console.table");

const connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "root",
  database: "employee_db",
});

function start() {
  inquirer
    .prompt({
      name: "action",
      type: "list",
      message: "Welcome to the Employee Tracker! What would you like to do?",
      choices: [
        "View ALL Employees",
        "View ALL Departments",
        "View ALL Roles",
        "Add Employee",
        "Add Department",
        "Add Role",
        "Exit",
      ],
    })
    .then(function (answer) {
      console.log(answer);
      switch (answer.action) {
        case "View ALL Employees":
          viewAllEmployees();
          break;

        case "View ALL Departments":
          viewDepartments();
          break;

        case "View ALL Roles":
          viewRoles();
          break;

        case "Add Employee":
          addEmployee();
          break;

        case "Add Department":
          addDepartment();
          break;

        case "Add Role":
          addRoles();
          break;

        case "Exit Application":
          connection.end();
          break;
      }
    });

  function viewAllEmployees() {
    let query = "SELECT * FROM employee";
    connection.query(query, function (err, res) {
      if (err) throw err;
      console.table(res);
    });
    start();
  }

  function viewRoles() {
    let query = "SELECT * FROM role";
    connection.query(query, function (err, res) {
      if (err) throw err;
      console.table(res);
    });
    start();
  }

  function viewDepartments() {
    let query = "SELECT * FROM department;";
    connection.query(query, function (err, res) {
      if (err) throw err;
      console.table(res);
    });
    start();
  }

  function addEmployee() {
    inquirer
      .prompt([
        {
          type: "input",
          name: "first_name",
          message: "Enter the employee's first name?",
        },
        {
          type: "input",
          name: "last_name",
          message: "Enter the employee's last name?",
        },
        {
          type: "input",
          name: "role",
          message: "Enter the emloyee's Role ID",
        },
        {
          type: "input",
          name: "department",
          message: "Enter the emloyee's Deapartment ID",
        },
      ])
      .then((answer) => {
        // connection.query(
        //   "INSERT INTO employee?", employee);
        //   {
        //     first_name: answer.first_name,
        //     last_name: answer.last_name,
        //     roled_id: answer.roled_id,
        //     manager_id: answer.manager_id,
        //   },
        //   function (err, res) {
        //     if (err) throw error;
        console.log("Added New Employee");
        start();
      });
  }

  function addRoles() {
    inquirer
      .prompt([
        {
          type: "list",
          name: "action",
          message: "Select the new employee's role",
          choices: [
            "Network Tech",
            "Financial Advisor",
            "Branch Manager",
            "Sales Assistant",
          ],
        },
      ])
      .then((answer) => {
        console.log(answer);
        start();
      });
  }

  function addDepartment() {
    inquirer
      .prompt([
        {
          type: "list",
          name: "action",
          message: "Select the new employee's department",
          choices: ["IT", "Sales", "Management", "Support"],
        },
      ])
      .then((answer) => {
        console.log(answer);
        start();
      });
  }
}

start();

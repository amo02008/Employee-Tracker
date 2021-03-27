const mysql = require("mysql");
const inquirer = require("inquirer");
const cTable = require("console.table");

/*
Intializing the msql connection to the database.
*/

const connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "root",
  database: "employee_db",
});

connection.connect(function (error) {
  if (error) throw error;
  start();
});
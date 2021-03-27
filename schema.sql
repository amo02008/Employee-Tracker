DROP DATABASE IF EXISTS employee_db;

CREATE DATABASE employee_db;

USE employee_db;

CREATE TABLE department (
  id INT(20) AUTO_INCREMENT NOT NULL,
  name VARCHAR(50)
  PRIMARY KEY (id)
);


CREATE TABLE role (
  id INT AUTO_INCREMENT NOT NULL,
  title VARCHAR(30),
  salary DECIMAL NOT NULL,
  department_id INT(20),
  PRIMARY KEY (id)
);


CREATE TABLE employee (
 
 id INT AUTO_INCREMENT NOT NULL,
 first_name VARCHAR(30),
 last_name VARCHAR(30),
 roles_id INT(20) AUTO_INCREMENT NOT NULL,
 manager_id INT (20) AUTO_INCREMENT 
PRIMARY KEY (id)
);


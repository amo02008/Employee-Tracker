USE employee_db;

INSERT INTO department
    (name)
VALUES
    ('IT'),
    ('Sales'),
    ('Management'),
    ('Support');

SELECT * FROM department;

INSERT INTO role
    (title, salary, department_id)
VALUES
    ('Network Tech', 100000, 1),
    ('Financial Advisor', 80000, 2),
    ('Branch Manager', 150000, 3),
    ('Sales Assistant', 120000, 4);

    
SELECT * FROM role;
    

INSERT INTO employee
    (first_name, last_name, role_id, manager_id)
VALUES
    ('Robert', 'Davis', 1, NULL),
    ('Audrey', 'Brown', 2, 3),
    ('David', 'Jones', 3, NULL),
    ('Jessica', 'Miller', 4, 3);

SELECT * FROM employee;

   

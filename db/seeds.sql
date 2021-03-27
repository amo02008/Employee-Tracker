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
    ('Financial Advisor', 80000, 1),
    ('Branch Manager', 150000, 2),
    ('Sales Assistant', 120000, 2),

    
SELECT * FROM role;
    

INSERT INTO employee
    (first_name, last_name, role_id, manager_id)
VALUES
    ('Robert', 'Davis', 1, 4),
    ('Audrey', 'Brown', 2, 2),
    ('David', 'Jones', 3, 1),
    ('Jessica', 'Miller', 4, 3),
    
SELECT * FROM employee;

   

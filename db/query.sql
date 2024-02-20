-- select all from department for drop down
SELECT * FROM department;

-- select all from role for drop down
SELECT * FROM role;

-- select all from employee for drop down
SELECT * FROM employee;

-- show role title and department and emp info for all employee
SELECT employee.id, employee.first_name, employee.last_name, role.title, role.salary, department.department_name
FROM employee
LEFT JOIN role ON role.id=employee.role_id
LEFT JOIN department ON department.id=role.department_id;

-- select from employee and show manager last_name
SELECT e1.id, e1.first_name, e1.last_name, e1.manager_id, e2.id, e2.first_name, e2.last_name
FROM employee e1
LEFT JOIN employee e2 ON e2.id=e1.manager_id;

-- select role title, department and role info for all roles
SELECT role.id, role.title, role.salary, department.department_name
FROM role
LEFT JOIN department on department.id = role.department_id;

-- add a department
INSERT INTO
department(id, department_name)
VALUES (5, "Trades");

-- add a role
INSERT INTO
role(id, title, salary, department_id)
VALUES (9, "Electrician", 60000, 5);

-- add an employee
INSERT INTO
employee(id, first_name, last_name, role_id, manager_id)
VALUES (9, "chris", "Fox", 5, "null");

-- update a role in an employee
UPDATE employee
SET
role_id = 7
WHERE
id = 2;






'SELECT e1.id, e1.first_name AS "Employee First", e1.last_name AS "Employee Last", role.title AS "Title", role.sa
lary AS "Salary", department.department_name AS "Department Name", e2.first_name AS "Manager First", e2.last_name AS "Man
ager Last" 
FROM employee e1 
LEFT JOIN role ON role.id=e1.role_id 
LEFT JOIN department ON department.id=role.department_id 
LEFT JOIN employee e2 ON e2.id=e1.manager_id;'
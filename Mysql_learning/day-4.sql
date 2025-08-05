
create database company_db;
use company_db;
create table employees(
  employee_id int primary key,
  name varchar(50),
  department_id int
)

CREATE TABLE departments (
    department_id INT PRIMARY KEY,
    department_name VARCHAR(50)
);


INSERT INTO employees (employee_id, name, department_id) VALUES
(1,  'Alice',     1),   -- HR
(2,  'Bob',       2),   -- IT
(3,  'Charlie',   3),   -- Finance
(4,  'David',     NULL),-- No department
(5,  'Eve',       1),   -- HR
(6,  'Frank',     2),   -- IT
(7,  'Grace',     4),   -- Marketing
(8,  'Hannah',    2),   -- IT
(9,  'Ian',       3),   -- Finance
(10, 'Jack',      NULL),-- No department
(11, 'Karen',     1),   -- HR
(12, 'Leo',       4),   -- Marketing
(13, 'Mia',       NULL),-- No department
(14, 'Nina',      3),   -- Finance
(15, 'Oscar',     2);   -- IT

INSERT INTO departments VALUES
(1, 'HR'),
(2, 'IT'),
(3, 'Finance'),
(4, 'Marketing');


 --here i have made emplo alise e ADD
-- SELECT e.name, d.department_name
-- FROM employees e
-- INNER JOIN departments d
-- ON e.department_id = d.department_id;

-- select e.name,d.department_name
-- from employees  e
-- left join departments d 
-- on e.department_id=d.department_id;












SELECT name AS entity FROM employees
UNION
SELECT department_name FROM departments;

SELECT name AS entity FROM employees
UNION ALL
SELECT department_name FROM departments;


SELECT name, department_id
FROM employees
WHERE department_id = 1
UNION
SELECT department_name, department_id
FROM departments
WHERE department_id != 1;


SELECT name
FROM employees
WHERE department_id = (
    SELECT department_id
    FROM employees
    WHERE name = 'Alice'
);
CREATE DATABASE COLLEGE1;
USE COLLEGE1;
CREATE TABLE student(
roll_no INT PRIMARY KEY,
name VARCHAR(60),
marks INT NOT NULL,
grade VARCHAR(1),
city VARCHAR(20));
INSERT INTO student(ROLL_no,name,marks,grade,city)VALUES
(101,"anil",78,"C","pune"),
(102,"bhumika",93,"A","Mumbai"),
(103,"chetan",85,"B","Mumbai"),
(104,"dhruv",96,"A","Delhi"),
(105,"emanuel",12,"F","Delhi"),
(106,"farha",82,"B","Delhi");
select * from student; 

SELECT city FROM student;
SELECT DISTINCT city FROM student;
SELECT * 
FROM student
WHERE marks>80;
SELECT * 
FROM student 
WHERE marks>90 AND city="Delhi";  

SELECT *  FROM student WHERE marks>90 OR CITY="Mumbai";

SELECT * FROM student WHERE marks between 80 and 90;
SELECT * FROM student WHERE city in ("Delhi","Mumbai");
SELECT * FROM student WHERE city NOT IN ("Delhi","Mumbai");
select * from student LIMIT 3; 
select * from student where city="Mumbai" limit 2;
select * from student order by city desc;
select * from student order by marks asc limit 4;



create view view1 as
select roll_no,marks from student;
select * from view1;
drop view view1;
select * from view1;
-- alter=> Once a table is created using CREATE TABLE, you may later realize you need to:

alter table student 
add column age  int;
select * from student ;
alter table student drop column age;
select * from student ;

#trancate query(here i can delete full table data in one single query)
truncate table student;
#change the name of the column  "name to "full name"
alter table student 
change  name full_name varchar(60);
# delete all the students who scored marks less than  80
set SQL_SAFE_UPDATES=0;
delete from student where marks<80;
select * from student ;
# DELETE THE COLUMN FOR GRADE 
alter table student 
drop column grade;


#update queries
set SQL_SAFE_UPDATES=0; --using this query we able update our table .if you not use before update query it does not give pernition to update any valun in any table 
update student set city="Kamarpukur" where city="Mumbai";
select * from student;

delete from student where marks=93;
select * from student;
#Display 2 student records who belong to Mumbai.
select * from student where city in("Mumbai") limit 3;

#Display all student records ordered by city in descending order.

#Display the 4 students with the lowest marks using the ORDER BY and LIMIT clauses.

select max(marks) from student;
select avg(marks) from student;
select COUNT(roll_no) from student; 


select city,count(name)
from student 
group by city;

SELECT COUNT(name), city
FROM student
GROUP BY city
ORDER BY COUNT(name) DESC;
use COLLEGE;

select grade,count(roll_no)
from student
group by grade
order by grade;





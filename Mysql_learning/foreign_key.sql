-- Assignment SQL – II
create DATABASE online;
use online;
-- Step 1:parent table

create table customers(
  cust_id INT PRIMARY KEY,
  name varchar(50)NOT NULL,
  age int,
  address VARCHAR(100),
  salary DECIMAL(10,2));


create table shipement(
  shipement_no int primary key,
  cust_id int ,
  weight decimal(8,2),
-- Step c) Foreign key constraint
Foreign Key (cust_id) REFERENCES customers(cust_id)

);

--  Change shipment_no from INT to VARCHAR(10)
alter table shipement
MODIFY COLUMN shipement_no varchar(10);
-- d). Add new column START_CITY in SHIPMENT table.
alter table shipement
add column start_city VARCHAR(50);


select * from shipement;

INSERT INTO CUSTOMERS (CUST_ID, NAME, AGE, ADDRESS, SALARY) VALUES
(1, 'Ramesh', 32, 'Ahmedabad', 12000.00),
(2, 'Khilan', 25, 'Delhi', 14500.00),
(3, 'Kaushik', 23, 'Kota', 18000.00),
(4, 'Muffy', 25, 'Mumbai', 15000.00);

INSERT INTO shipement(shipement_no,cust_id,weight,start_city)VALUES
('S201',1,120,"Indore"),
('S202',2,210,"Kolkata"),
('S203',3,320,"Mumbai");


DESCRIBE customers;

DESCRIBE shipement;

-- ⁉️ Show the entire customer and shipment table

select * from shipement;
select * from CUSTOMERS;

select start_city from shipement;
-- 4. Change age of Kaushik to 35.
set SQL_SAFE_UPDATES=0; --Before running the UPDATE, disable safe updates temporarily:
UPDATE customers
set age=35
where name='Kaushik';

-- 5. Change salary of Ramesh to 15500.00.
update customers
set salary=15500
where name="Ramesh";
-- checking purpose 
select * from CUSTOMERS;

-- 6. Delete data of S202 in Shipment table.
DELETE FROM shipement 
where  shipement_no="S202"
LIMIT 1;
-- checking purpose 
select * from shipement;

start transaction;
create DATABASE demo;
use demo;
create table cust(
  cust_id INT PRIMARY KEY,
  name varchar(50)NOT NULL,
  age int,
  address VARCHAR(100),
  salary DECIMAL(10,2));

INSERT INTO cust (cust_id, name, age, address, salary)
VALUES 

(1, 'Megha', 25, 'Kolkata', 18000),
(2, 'Khilan', 25, 'Delhi', 14500.00),
(3, 'Kaushik', 23, 'Kota', 18000.00);
update customers set salary=20000 where cust_id=1;
select * from cust;
update cust set salary=20000 where cust_id=1;
select * from cust;

ROLLBACK;
savepoint before_update;
select * from customers;


UPDATE customers SET salary = 15000 WHERE cust_id = 2;
select * from customers;

ROLLBACK TO before_update;






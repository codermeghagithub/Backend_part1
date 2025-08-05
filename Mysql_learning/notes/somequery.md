## 🔹 What is a VIEW?
A view in SQL is like a virtual table based on a SELECT query.

```
👨🏻‍💻👨🏻‍💻
create view view1 as
select roll_no,marks from student;
select * from view1;
👨🏻‍💻👨🏻‍💻
```
## 🔍 Why Use a View?
To show only important data (e.g., marks without revealing names or cities).

To simplify complex queries (you can use view1 instead of rewriting the full SELECT).

For security.

#### What This View Does:
It creates a virtual table called view1 that contains only the:

roll_no

marks

from the original student table.***

So after this query, if you run:
```
SELECT * FROM view1;  -- you can see full table of view which contain roll_no,marks.
```
## 🔹 Why do we use ALTER TABLE?
Because:

Once a table is created using CREATE TABLE, you may later realize you need to:

▫️**Add a column**
▫️Remove a column
▫️Change data type

▫️Rename a column
...and so on.

Instead of deleting and recreating the whole table, you just alter (modify) the structure.

## ✅ TRUNCATE TABLE student;
This command:

Deletes all rows (data) from the student table

But keeps the table structure (the table still exists — with the same columns)

## ❌ If you used DROP instead:
```
DROP TABLE student;
```
This command:

Deletes the entire table, including:

All rows (data)

The table structure (column names, data types, constraints — everything!)

After this, the table no longer exists
## ❓ What is SQL_SAFE_UPDATES?
SQL_SAFE_UPDATES is a MySQL setting that helps prevent accidental data loss during UPDATE and DELETE operations.
| Command                     | Purpose                                                             |
| --------------------------- | ------------------------------------------------------------------- |
| `SET SQL_SAFE_UPDATES = 0;` | Turn OFF safe mode so you can run unrestricted `DELETE` or `UPDATE` |
| `SET SQL_SAFE_UPDATES = 1;` | Turn ON safe mode (default) — prevents risky queries                |



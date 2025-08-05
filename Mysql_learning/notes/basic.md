## What is the meaning of NOT NULL?
## different types of constrain  and use this 

### what is composite key


### what is the transaction control language?
1) **COMMIT**=>used to save the changes made to the table permanently.
2) **ROLLBACK**=>ROLLBACK is used in SQL to undo the changes you made in a transaction before saving them permanently.

**NOTE:** Table can be rolled-back only if it is temporarly.
if you committed your changes ,it cannot be rolled-back.

3) **SAVEPOINT** => This is helpfull if you want to rollback only a particular part of the table .
SAVEPOINT in SQL is used to set a point in a transaction that you can roll back to later without undoing the entire transaction.
**The ROLLBACK command** in SQL is used to undo changes made in the current transaction. It reverts the database to the last COMMIT or the beginning of the transaction if no commit has occurred.

**SET TRANSACTION**	=>Sets the characteristics of the transaction (e.g., isolation level).

✅ Syntax:

ROLLBACK;
📝 Example:

BEGIN;

DELETE FROM frameworks WHERE id = 5;

-- Something goes wrong or you change your mind
ROLLBACK;
🔄 Behavior:
All changes after the BEGIN (or START TRANSACTION) will be undone.

If you're using an auto-commit mode (common in some environments like MySQL Workbench), you must explicitly disable it or wrap your queries in a transaction.

 rollback
foreign key




## 🔶 What is CASCADE?
CASCADE is used with ON DELETE or ON UPDATE clauses in a foreign key constraint. It means:

**ON DELETE CASCADE:** If a row in the parent table is deleted, all related rows in the child table will also be automatically deleted.

**ON UPDATE CASCADE:** If a value in the parent table is updated, all related rows in the child table will be automatically updated to match.

##  🔶 When to use CASCADE?
Use it when:
Assume today i have deleted a specific row from parent table not child table. so that after changing /deleting parent table or child table data also automatically reflect in related tables.(it only work when we use foreign key)

You want to avoid orphaned rows (child records with no matching parent).

Example: Deleting a user should also delete all their orders.

** 👨🏻‍💻👨🏻‍💻code 👨🏻‍💻👨🏻‍💻**
```
CREATE TABLE frameworks (
    id INT PRIMARY KEY AUTO_INCREMENT,
    tech_id INT,
    framework_name VARCHAR(50) NOT NULL,
    version VARCHAR(10) DEFAULT '1.0',
    CONSTRAINT fk_tech FOREIGN KEY (tech_id)
        REFERENCES tech(id)
        ON DELETE CASCADE
        ON UPDATE CASCADE
);
```
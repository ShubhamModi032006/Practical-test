Q-1 :Write an SQL query to create a table MenuItem with the following columns:

item_id INT (Primary Key)

item_name VARCHAR(50) (Unique)

price INT (NOT NULL)

category VARCHAR(30)

---
---
```
CREATE TABLE Menu (
    itemid INT PRIMARY KEY,
    itemname VARCHAR(50) UNIQUE,
    price INT NOT NULL,
    category VARCHAR(30)
);
```
---
Q-2 : Write SQL queries for the following operations on the MenuItem table:

Insert three menu items in one query

Update the price of any one item

Delete one item using item_id

Find the average price of all items

Find the sum of all prices.

```

CREATE TABLE MenuItems (
    item_id INT PRIMARY KEY,
    item_name VARCHAR(50) UNIQUE,
    price INT NOT NULL,
    category VARCHAR(30)
);


INSERT INTO MenuItems (item_id, item_name, price, category)
VALUES 
(1, 'Rice', 750, 'Main Course'),
(2, 'Burger', 150, 'Snacks'),
(3, 'Coke', 50, 'Drinks');

UPDATE MenuItems
SET price = 300
WHERE item_id = 1;   -- Updates price of Pizza

DELETE FROM MenuItems
WHERE item_id = 3;   -- Deletes Coke

SELECT AVG(price) AS Average_Price
FROM MenuItems;

SELECT SUM(price) AS Total_Price
FROM MenuItems;
```
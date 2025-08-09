### Title : Advanced Queries in MongoDB

### ✅ `$exists` Operator Example

**Use case**: Find products that have a `rating` field (some documents might be missing this field).

```js
db.products.find({
  rating: { $exists: true },
});
```

👉 This query returns all products **where `rating` field exists**.

If you want to find documents **where `rating` is missing**, use:

```js
db.products.find({
  rating: { $exists: false },
});
```

---

### ✅ `$type` Operator Example

**Use case**: Check the type of a field. For example, return all products where `price` is a number.

```js
db.products.find({
  price: { $type: "double" },
});
```

🧠 Why use this? Because sometimes, some documents may accidentally store values as **strings instead of numbers**.

> You can also use aliases like `"string"`, `"bool"`, `"array"`, `"object"`, `"date"`, etc.

---

### ✅ `$expr` Operator Example

**Use case**: Use expressions for advanced comparisons. For example, return products where `price > rating * 5`.

```js
db.products.find({
  $expr: {
    $gt: ["$price", { $multiply: ["$rating", 5] }],
  },
});
```

🔍 This will return products where **price is greater than 5 times the rating**.

Another `$expr` example: find products where `height` is **greater than width**:

```js
db.products.find({
  $expr: {
    $gt: ["$height", "$width"],
  },
});
```

---

### Bonus: Combine Them

You can even combine operators:

**Example**: Find products that:

- Have a `rating` field
- The type of `rating` is a number
- And `price > 5 * rating`

```js
db.products.find({
  rating: { $exists: true, $type: "int" },
  $expr: {
    $gt: ["$price", { $multiply: ["$rating", 5] }],
  },
});
```
explaination=>
 db.food.find({
  rating: { $exists: true, $type: "int" }, // rating exists & is integer
  $expr: {                                 // use expression to compare
    $eq: [                                 // check equality
      "$price",                            // field: price
      { $multiply: ["$rating", 7] }        // rating × 7
    ]
  }
});

---


## Qestion 

**Q1: Multi-field price check**
Find products where:

rating exists and is an integer

price is greater than rating × 4 and less than (height ÷ 20)
**ans**
```js
db.food.find({
  rating:{$exists:true,$type:"int"},
  $expr:{$and:[{$gt:["$price",{$multiply:["$rating",4]}]},
  {$lt:["$price",{$divide:["$height",20]}]}]}}); 
```
**Q2: Conditional match**
Find products where:

rating exists and is an integer

Either:

price is greater than width × 0.1, or

price is less than rating × 3
**ans**=>
```js
 db.food.find({rating:
 {$exists:true,$type:"int"},$expr:
 {$or:[
  {$gt:["$price",{$multiply:["$width",0.1]}]},
  {$lt:["$price",{$multiply:["$rating",3]}]}]}});
 ```
Q3: Complex ratio filter
Find products where:

rating exists and is an integer

price divided by rating is greater than or equal to (width ÷ height) × 100

```js
db.food.find({
  rating: { $exists: true, $type: "int", $ne: 0 },
  height: { $ne: 0 },
  $expr: {
    $gte: [
      { $divide: ["$price", "$rating"] },
      { $multiply: [
          { $divide: ["$width", "$height"] },
          100
        ]
      }
    ]
  }
});
```
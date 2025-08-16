### MongoDB Update Made Easy: Notes with Coding Examples  
**Collection Name: `comments`**  

MongoDB provides several methods to update documents in a collection. These include updating specific fields, replacing entire documents, or updating multiple documents at once.  

---

### **1. Methods for Updating Documents**  
1. **`updateOne()`**: Updates the first matching document.  
2. **`updateMany()`**: Updates all documents that match the query.  
3. **`replaceOne()`**: Replaces an entire document.

---

### **2. Basic Syntax**  

#### **`updateOne()`**
- Updates the first document that matches the filter.  
**Example:**
```javascript
db.comments.updateOne(
  { user: "user1" }, // Filter condition
  { $set: { text: "Updated comment text!" } } // Update action
);
```
- **Explanation**: This finds the first document where `user` is `"user1"` and updates the `text` field.

---

#### **`updateMany()`**
- Updates all documents that match the filter.  
**Example:**
```javascript
db.comments.updateMany(
  { likes: { $lt: 10 } }, // Filter condition
  { $set: { priority: "low" } } // Update action
);
```
- **Explanation**: This updates all documents with `likes` less than `10` by setting the `priority` field to `"low"`.

---

#### **`replaceOne()`**
- Replaces the entire document except for the `_id` field.  
**Example:**
```javascript
db.comments.replaceOne(
  { user: "user2" }, // Filter condition
  { user: "user2", text: "Completely new comment!", likes: 0 } // New document
);
```
- **Explanation**: This replaces the document for `"user2"` with the new one provided.

---
## Update Operators and Their Use

Here’s a quick recap of MongoDB update operators for reference:


$set: Sets or updates a field’s value (creates the field if it doesn’t exist).



$inc: Increments a numeric field by a specified value.



$push: Adds an item to an array field.



$pull: Removes a specific item from an array field.



$unset: Deletes a field from the document. 


### **3. Update Operators**  
MongoDB uses **update operators** to modify documents. Some common ones are:  

| Operator      | Description                                | Example                              |
|---------------|--------------------------------------------|--------------------------------------|
| **`$set`**    | Updates/sets a specific field.             | `{ $set: { field: value } }`         |
| **`$inc`**    | Increments a numeric value.               | `{ $inc: { likes: 1 } }`            |
| **`$push`**   | Adds a value to an array.                 | `{ $push: { tags: "important" } }`  |
| **`$pull`**   | Removes matching values from an array.    | `{ $pull: { tags: "spam" } }`       |
| **`$unset`**  | Removes a field from the document.        | `{ $unset: { field: "" } }`         |

---

### **4. Examples of Update Operators**

#### **Updating a Specific Field**
```javascript

```
- **Explanation**: Updates the `text` field and adds a new field `edited`.

#### **Incrementing a Value**
```javascript
db.articles.updateOne(
  { title: "Mastering Git: Essential Commands" },
  { $inc: { "metadata.likes": 15 } }
);
// Update: Uses $inc to increase likes from 96 to 111.
```
- **Explanation**: Increases the `likes` field by `5`.

#### **Adding to an Array**
```javascript
 db.comments.updateOne({ "comments.user": "user1" },{ $push: { "comments.$.tags": "favorite" }});
```
- **Explanation**: Adds `"favorite"` to the `tags` array.

#### **Removing from an Array**
```javascript
db.articles.updateMany(
  { "metadata.views": { $gt: 2500 } },
  { $pull: { comments: { text: { $regex: "Can", $options: "i" } } } }
);
```
**Update: Uses $pull to remove comments where the text field contains "Can" (case-insensitive).**
- **Explanation**: Removes `"spam"` from the `tags` array.

#### **Removing a Field**
```javascript
db.comments.updateOne(
  { user: "user4" },
  { $unset: { edited: "" } }
);
```
- **Explanation**: Removes the `edited` field from the document.

---

### **5. Upsert Option**
- Ensures a document is created if no matching document is found.  
**Example:**
```javascript
db.comments.updateOne(
  { user: "newUser" }, // Filter
  { $set: { text: "This is a new comment!" } }, // Update
  { upsert: true } // Upsert option
);
```
- **Explanation**: If no document with `user: "newUser"` exists, it creates a new one.

---

### **6. Updating Multiple Documents**
**Example:**
```javascript
db.comments.updateMany(
  { likes: { $gte: 100 } },
  { $set: { priority: "high" } }
);
```
- **Explanation**: Updates all comments with `likes` greater than or equal to `100`, setting `priority` to `"high"`.

---

### Summary Cheat Sheet
| Method          | Updates | Creates New Document (Upsert) | Notes                        |
|------------------|---------|------------------------------|-----------------------------|
| **`updateOne`**  | 1 doc   | Optional                    | Updates the first match only|
| **`updateMany`** | Many    | Optional                    | Updates all matches         |
| **`replaceOne`** | 1 doc   | Optional                    | Replaces entire document    |



### implement $unset operator
```js
{
    _id: ObjectId('689828debd0dd3eb7d3b2ea7'),
    title: 'Understanding JavaScript Closures',
    content: 'Closures are a fundamental concept in JavaScript...',
    author: 'John Doe',
    comments: [
      {
        user: 'user1',
        text: 'Great explanation!',
        tags: [ 'favorite' ]
      },
      { user: 'user2', text: 'Really helpful, thanks!' }
    ],
    metadata: { likes: 60, views: 1200, like: 15 }
  }
```
### Delete the like field (with value 15) from the metadata

```js
db.articles.updateOne(
  { _id: ObjectId('689828debd0dd3eb7d3b2ea7') }, // Filter: Match the document by _id
  { $unset: { "metadata.like": "" } } // Remove the like field from metadata
);
```


## Delete query
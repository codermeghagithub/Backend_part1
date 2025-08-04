## 1. What is Express.js and its advantages
👉🏻 Express.js is a minimal and flexible Node.js web application framework that provides a list of features for building web and mobile applications easily.
### 🌐 Advantages of Express.js:
▫️ **Fast and Lightweight:**
Express is designed to be minimal, without unnecessary features, which contributes to its speed and ease of customization.

▫️**Flexible and Unopinionated:**
It does not enforce a specific project structure or architecture, allowing developers the freedom to organize code as they see fit. 

▫️**Large Ecosystem and Community Support:**
A vast array of middleware options and strong community backing enable quick extension of functionality.

▫️**Ideal for APIs:**
Its clean routing system and middleware support make it well-suited for building RESTful APIs.

▫️**Scalability:**
It can handle a large number of concurrent connections due to Node.js's event-driven, non-blocking I/O model and supports clustering for scaling across multiple CPUs or servers.
🌐



##  2. Create endpoints for a simple blog (CRUD operations)
➡️



##  3. Build a REST API for a todo list with all request methods


## How to create endpoints for each method



##  explain patch method 
```
app.patch("/get-user/:id", (req, res) => {
  const id = parseInt(req.params.id); // Get user ID from URL
  const updates = req.body;           // Get the fields to update from request body

  // Find the user by ID
  const userIndex = data.findIndex(u=>u.id===id);

// or for understand   const userIndex = data.findIndex(u=>u.id===id); syntax ✅✅
//  const userIndex = data.findIndex(function(u) {
//   return u.id === id;
// });


  if (userIndex === -1) {
    return res.status(404).json({ success: false, message: "User not found" });
  }


  // Update only provided fields
  data[userIndex] = { ...data[userIndex], ...updates };
// ...data[userIndex] means :all key-value pairs of the user object at that index.   

// Becomes:

// data[1] = {  // full menaing of ...data[userIndex] 
//   id: 2,
//   name: "Sneha",
//   email: "newemail@example.com"  // This **overwrites** the old email
// };

// 🔹 ...updates
// This means:

// "Take all key-value pairs from the updates object and add them too."

  res.json({
    success: true,
    message: "User updated successfully",
    user: data[userIndex]
  });
});  //👉🏻Sends a JSON response with:

success: true
A success message
The updated user object

```

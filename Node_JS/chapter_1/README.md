## ❓ Question 1: Can we use module.exports as an array?

✅ Yes , we can use module.exports as an array in node js.

🔹Module.export can hold any type of value it can be string,object,function,array and number.
## 
❓ Question 2: What is UTF-8 Encoding in Node.js?

What is UTF-8?
UTF-8 stands for Unicode Transformation Format – 8-bit.
It is a text encoding system that can represent all characters from all languages, including emojis 😊.

🔹 Why is UTF-8 important in Node.js?

In Node.js, when you read or write files, text data is often stored using UTF-8 so that:

It supports international languages

It handles special characters and symbols

Text can be shared across platforms safely

## WATCHING FILES 👁️👁️ 

Watching Files in Node.js with fs.watch()

What does fs.watch() do?
It monitors a file or folder and notifies you when something changes.

For example:

A file is updated

A new file is added to a folder

A file is deleted

## "Method, endpoint, data, request, and response all together make an API call/request."

### Here's the difference:
```js
One API Call:
Method: GET
Endpoint: https://api.weather.com/current
Data: {"city": "London"}
Request: Asking for weather
Response: {"temperature": 20, "condition": "sunny"}
```
### An API (the whole system):
* Multiple endpoints
* Documentation
* Authentication system
* Error handling
* Rate limiting
* Many possible API calls

## ✅ JSON.stringify() — When to use

You use JSON.stringify() when you want to convert a JavaScript object into a JSON string, typically for:
**Eample :**
```js
const user = {
  name: "John",
  age: 25
};

// Send this in POST body
fetch("/api/users", {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify(user)
});

```

## ✅ JSON.parse(): To convert a JSON string into a JavaScript object, you use JSON.parse()

This is the reverse of JSON.stringify().

```js
const jsonStr = '{"name": "Alice", "age": 30}';

const obj = JSON.parse(jsonStr);

console.log(obj.name); // Output: Alice
console.log(obj.age);  // Output: 30


```
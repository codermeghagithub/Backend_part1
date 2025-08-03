## What is middleware 
✅ Middleware is a function that runs between receiving a request and sending a response.

You can think of middleware as a "middle man" 🧍‍♂️ that can:

Check something (like authentication ✅)

Modify the request or response

Stop the request or pass it forward


## 🔷 2. What are Routes in Express.js?
✅ Simple Definition:
Routes are endpoints (URLs) that define how your app responds to client requests.

A route connects a URL + HTTP method to a response.

## Types of middleware and explain 


| Concept      | Role                            | Example                                    |
| ------------ | ------------------------------- | ------------------------------------------ |
| **Route**    | Code that defines the logic     | `app.get("/contact", (req, res) => {...})` |
| **Endpoint** | URL + HTTP method a client hits | `GET /contact`                             |
**So yes — you're creating endpoints, and Express handles them through routes.**

So technically:

✅ This line:

```
app.get("/about", handler);
```
is a route in code.(o/p)

✅ But the part:
```
GET /about
```
is the endpoint.

## When we usre middleware and wahy use this 
➡️

▶️
## use cases of middleware
=> Authentication,athorization,error handling compression,catching logger 

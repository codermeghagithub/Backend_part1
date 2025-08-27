## why we write res.send why not req.gend in this code?
**[bellow mention this code ]**
req = request → represents the HTTP request coming from the client (like browser, Postman, etc.)

res = response → represents the HTTP response that you send back to the client

✅ So why do we use res.send()?

Because you’re sending a response back to the client. That’s the job of the response object (res).

❓ Why not req.send()?

Because req is for reading what the client sent to you — like:

req.query → for query parameters

req.params → for URL parameters

req.body → for POST body data

But it’s not responsible for sending anything back.

Only the res (response object) has methods like:

res.send() → to send a string or object as response

res.json() → to send a JSON response

res.status() → to set status code

res.redirect() → to redirect to another URL

etc.

**🧠 Think of it like this:**
Role	Object	Purpose
Client talks	req	You read data from client
Server replies	res	You send data to client


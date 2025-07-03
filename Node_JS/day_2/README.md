## 📖What is an HTTP Module?
In NodeJS, the HTTP module is a core built-in module that enables developers to create and manage HTTP servers.It plays a crucial role in handling server-side HTTP requests and responses, allowing for seamless communication between clients and servers.


## 🌐 Difference Between HTTP and HTTPS

| Feature           | HTTP (HyperText Transfer Protocol)        | HTTPS (HTTP Secure)                          |
|------------------|--------------------------------------------|----------------------------------------------|
| **Full Form**     | HyperText Transfer Protocol                | HyperText Transfer Protocol Secure           |
| **Security**      | ❌ Not secure — data is sent in plain text | ✅ Secure — data is encrypted with SSL/TLS    |
| **Port Number**   | 80                                         | 443                                          |
| **Data Privacy**  | Vulnerable to hacking and eavesdropping   | Safe from attackers; ensures data privacy    |
| **URL Format**    | `http://example.com`                       | `https://example.com`                        |
| **Used For**      | Non-sensitive sites                       | Login, payments, and sensitive data          |
| **Padlock Icon**  | ❌ Not shown in browser                    | ✅ Shows 🔒 in browser                        |
| **SEO Ranking**   | Lower                                      | Preferred by search engines                  |

> **Note:** Always use **HTTPS** for websites that handle personal or sensitive information.


## 🌐 Is request or response an Object or Array in Node.js?
In Node.js, both req (request) and res (response) are Objects, not Arrays.


| Parameter | Type       | Description                                                                                                                            |
| --------- | ---------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| `req`     | **Object** | Represents the **HTTP request** made by the client. It contains data like URL, headers, query params, and body.                        |
| `res`     | **Object** | Represents the **HTTP response** that the server will send back to the client. You use it to set headers, status codes, and send data. |

``` js 

const http=require("http")

const server=http.createServer((req,res)=>{

  console.log(typeof req); // 'object'
  console.log(typeof res); // 'object'
  // console.log("Request: ",req)
  // console.log(req.url)
  if(req.url==="/")
  {
    res.end("This is from url");
  }
  else if(req.url==="/about"){
    res.end("This is from about");

  }
  else{
console.log("no url")
  }
// res.end("Good morning Everyone")
})
server.listen(8000,()=>{
  console.log("server is running on port 8000")
})

```



## REST API depends on requests and responses. Are these request and response objects or arrays?

✅ In Node.js, especially when using frameworks like Express.js, the request and response are objects, not arrays.

✅ In simple terms:
req (short for request) is an object that contains details about the incoming HTTP request.

res (short for response) is an object that lets you send a response back to the client.

## Difference Between IP Address and Port

| Feature            | IP Address                                         | Port                                               |
|--------------------|----------------------------------------------------|----------------------------------------------------|
| Definition         | A unique address that identifies a device on a network | A virtual endpoint for communication used to identify specific processes or services on a device |
| Purpose            | Locates the device on a network                    | Directs data to the correct application or service |
| Example            | `192.168.1.10`, `8.8.8.8`                          | `80` (HTTP), `443` (HTTPS), `3000` (custom app)    |
| Range              | IPv4: `0.0.0.0` to `255.255.255.255`               | 0 to 65535                                         |
| Identifies         | A device                                           | A specific service or application on that device   |
| Used in            | Network addressing                                 | Network communication                             |
| Analogy            | Street address of a house                          | Apartment number or room inside the house          |



## What is domain?

👉A domain name is a text-based address that maps to an IP address using the Domain Name System (DNS).

Instead of remembering complex IP addresses (like 172.217.160.78), we use simple names like:

google.com                     
facebook.com


## Difference Between Port, IP Address, and Domain (Based on Node.js HTTP Module) 📖📖

| Feature       | IP Address                        | Port                             | Domain Name                       |
|---------------|-----------------------------------|----------------------------------|-----------------------------------|
| Role in Node.js | Identifies the device/interface to bind the server | Identifies the entry point on the device for the server | Maps to the IP address to access the server using a readable name |
| Used In Code | `server.listen(3000, '127.0.0.1')` | `server.listen(3000)` → Port 3000 | Access via `http://localhost:3000` |
| Example       | `127.0.0.1`, `192.168.1.10`        | `3000`, `8080`, `80`, `443`      | `localhost`, `example.com`        |
| Works At      | Network level (Layer 3 – IP layer) | Transport layer (Layer 4 – TCP/UDP) | Application layer (Layer 7 – DNS) |
| Analogy       | Street address of a building       | Room/door number in the building | Building's nickname or URL name   |


## What would life be like without IP addresses, domain names, and ports?"

🚫 Without IP Addresses:
Devices wouldn’t have a unique address.

Your computer wouldn’t know where to send or receive data.

Visiting a website or sending a message would be impossible — it's like mailing a letter without knowing the destination.

🔎 Real-life analogy:
It’s like trying to deliver a package with no address written on it. It’ll never reach the correct house.
## 
🚫 Without Domain Names:
We’d have to remember long, complex IP numbers like 142.250.195.14 instead of typing google.com.

The internet would be very hard to use — not user-friendly at all.

🔎 Analogy:
It’s like calling people by their phone numbers instead of names. Confusing, right? It's actually Confusing.
## 
🚫 Without Ports:
Even if data reached your device, it wouldn't know which application (browser, email, etc.) should handle it.

No web browsing, video calls, or online gaming — because services would be mixed up.

🔎 Analogy:
It’s like a house with no room numbers — you get the mail, but don’t know which room it belongs to.


## setImmediate() vs setTimeout()
setImmediate() and setTimeout() are similar, but behave in different ways depending on when they are called.

setImmediate() is designed to execute a script once the current poll phase completes.
setTimeout() schedules a script to be run after a minimum threshold in ms has elapsed. 

The order in which the timers are executed will vary depending on the context in which they are called. If both are called from within the main module, then timing will be bound by the performance of the process (which can be impacted by other applications running on the machine).

For example, if we run the following script which is not within an I/O cycle (i.e. the main module), the order in which the two timers are executed is non-deterministic, as it is bound by the performance of the process:
## 📄 Example: `setTimeout` vs `setImmediate` in Node.js

```js
// timeout_vs_immediate.js

setTimeout(() => {
  console.log('timeout');
}, 0);

setImmediate(() => {
  console.log('immediate');
});

```

## ✅ When is a Promise executed?

A Promise in JavaScript (and Node.js) starts executing immediately when it is created — not when .then() or .catch() is called.

```js
const promise = new Promise((resolve, reject) => {
  console.log('Promise is running'); // This runs immediately
  resolve('Done');
});

```

## 🔁 How is a Promise executed in the Node.js Event Loop?
In Node.js, the event loop has different phases (like timers, I/O callbacks, etc.).

Promises (specifically .then(), .catch(), .finally()) are handled in the microtask queue — a special fast queue that runs after the current operation and before the next event loop phase.
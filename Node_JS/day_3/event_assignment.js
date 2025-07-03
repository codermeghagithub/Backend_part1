// *** OBJECTIVE ***
// * CREATE A PROGRAM USING NODE-JS EVENTEMITTER THAT:

// ? LISTENS FOR MULTIPLE TYPES OF USER EVENTS (E.G LOGIN , LOGOUT , PURCHASE , AND PROFILE UPDATE)✅
// ? tRACKS HOW MANY TIMES EACH EVENT IS EMITTED.
// ? LOGS A SUMMARY OF ALL EVENTS OCCURRENCES WHEN A SPECIAL SUMMARRY EVENT IS TRIGGERED

// !REQUIREMENT

// ? create at least four custom events
// ? emit these events multiple times with different argumensts ( e.g username , item purchased)
// ? tracks and store the count of each event type.
// ? define a summary events that logs a detailed report of how many times each event was triggered

// 1.  i will be created 4 custom events // login ,logout, purchese,profileupdate

const EventEmitter = require("events");
const fs = require("fs");
const custom_event = new EventEmitter();

const eventCounts = {
  login: 0,
};

const logFile = "eventLogs.json";

if (fs.existsSync(logFile)) {
  const data = fs.readFileSync(logFile, "utf-8");
  Object.assign(eventCounts, JSON.parse(data));
  console.log(data);
}

function saveCounts() {
  fs.writeFileSync(logFile, JSON.stringify(eventCounts, null, 2));
}

// login
custom_event.on("LOGIN", (username) => {
  eventCounts.login++;
  console.log(`${username} logged in successfully `);
  saveCounts();
});

// logout

// custom_event.on("LOG OUT",(username)=>{
//   console.log("username is : "+username)
// });
// purchese
// profileupdate

custom_event.emit("LOGIN", "Megha");
console.log(eventCounts);

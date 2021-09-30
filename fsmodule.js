const fs = require('fs');
// Asynchronous Read
fs.readFile('file.txt', 'utf8', (err, data) => {
    console.log("error = " + err);
    console.log("data = " + data);
})
console.log("This will run before readFile");

console.log("-----------------------------------------------");

//Synchronous Read
const readSync = fs.readFileSync('file.txt');
console.log(readSync.toString());
console.log("This will run after readSync");

console.log("-----------------------------------------------");

// Asynchronous Write
fs.writeFile('file.txt', "I am debadrita Ghosh.Learning Node.js", () => {
    console.log("Done")
})
console.log("This will run before writeFile");

console.log("-----------------------------------------------");

//Synchronous Read
const writeSync = fs.writeFileSync('file.txt', "Debadrita Ghosh");
console.log(writeSync);
console.log("This will run after writeSync");
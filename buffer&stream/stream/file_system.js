var fs = require('fs');


// Asynchronous read
fs.readFile('input.txt', function (e, data) {
    if (e) {
        return console.error(e);
    }
    console.log('Asynchronous read: ' + data.toString());
});

// Synchronous read
var data = fs.readFileSync('input.txt');
console.log('Synchronous read: ' + data.toString());
console.log('Program ended');

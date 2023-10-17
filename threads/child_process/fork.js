const { fork } = require('child_process');
const childProcess = fork('fibonacci.js');

childProcess.on('message', result => {
    console.log(`Fibonacci: ${result}`);
});
childProcess.send(10);

console.log('this is main process');
console.log('____________________');
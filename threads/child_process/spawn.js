const { spawn } = require('child_process');
const ls = spawn('ls', ['-lh']);

ls.stdout.on('data', data => {
    console.log(`stdout: ${data}`);
});

ls.stderr.on('data', data => {
    console.log(`stderr: ${data}`);
});

ls.on('close', code => {
    console.log(`child process exited with code ${code}`);
});
console.log('this is main process');
console.log('____________________');
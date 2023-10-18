const cluster = require('node:cluster');
const numCPUs = require('node:os').cpus().length;
const express = require('express');

if (cluster.isPrimary) {
    console.log(`Primary ${process.pid} is running`);

    for (let i = 0; i<numCPUs; i++) {
        cluster.fork();
    }

    cluster.on('exit', (worker, code, signal) => {
        console.log(`worker ${worker.process.id} exited`);
    })
} else {
    const app = express();
    app.use(express).listen(8000);

    console.log(`Worker ${process.pid} started`);
}
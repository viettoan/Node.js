function fibonacci(n) {
    if (n < 2) {
        return n;
    } else {
        return fibonacci(n - 1) + fibonacci(n - 2);
    }
}

process.on('message', (msg) => {
    const result = fibonacci(msg);
    process.send(result);
});
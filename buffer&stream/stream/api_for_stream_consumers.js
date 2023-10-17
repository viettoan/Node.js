const http = require('node:http');

const server = http.createServer(
    (req, res) => {
        // `req` is an http.IncomingMessage, which is a readable stream.
        // `res` is an http.ServerResponse, which is a writable stream.
        let body = '';

        // Get the data as utf8 strings.
        // If an encoding is not set, Buffer objects will be received.
        req.setEncoding('utf8');
        // Readable streams emit 'data' events once a listener is added.
        req.on('data', chunk => {
            body += chunk;
        })
        // The 'end' event indicates that the entire body has been received.
        req.on(
            'end',
            () => {
                try {
                    const data = JSON.parse(body);
                    // Write back something interesting to the user:
                    res.write(typeof data);
                    res.end();
                } catch (e) {
                    res.statusCode = 400;
                    return res.end(`error: ${e.message}`);
                }
            }
        )
    }
);

server.listen(1337);

const { Buffer } = require('node:buffer');

const buf = Buffer.from('hello world', 'utf8');

console.log(buf);

// decode buf to string hex
console.log("hex: ", buf.toString('hex'));

// decode buf to string base64
console.log("base64: ", buf.toString('base64'));

// decode buf to string base64url
console.log("base64url: ", buf.toString('base64url'));
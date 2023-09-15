const { Buffer } = require('node:buffer');

// Create TypedArray

// Passing Buffer to a TypedArray constructor
const buf = Buffer.from([1, 2, 3, 4]);
const uint32array = new Uint32Array(buf);

console.log('Passing Buffer to a TypedArray constructor: ', uint32array);

// Passing the Buffers underlying ArrayBuffer will create a TypedArray that shares its memory with the Buffer.
const buf2 = Buffer.from('hello', 'utf16le');
const uint16array = new Uint16Array(
    buf2.buffer,
    buf2.byteOffset,
    buf2.length / Uint16Array.BYTES_PER_ELEMENT);

// console.log(buf2.buffer);
// console.log(buf2.byteOffset);
// console.log(buf2.length);
// console.log(Uint16Array.BYTES_PER_ELEMENT);
console.log(uint16array);

const arr = new Uint16Array(2);

arr[0] = 5000;
arr[1] = 4000;

// Copies the contents of `arr`.
const buf3 = Buffer.from(arr);

// Shares memory with `arr`.
const buf4 = Buffer.from(arr.buffer);

console.log(buf3);
// Prints: <Buffer 88 a0>
console.log(buf4);
// Prints: <Buffer 88 13 a0 0f>

arr[1] = 6000;

console.log(buf3);
// Prints: <Buffer 88 a0>
console.log(buf4);
// Prints: <Buffer 88 13 70 17>
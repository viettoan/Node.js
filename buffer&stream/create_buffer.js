const { Buffer } = require('node:buffer');

/**
 *  HOW TO CREATE BUFFER
 */

// Tao 1 buffer la 1 mang cac so 0, do dai = 3
const buf1 = Buffer.alloc(3);
console.log("buf1: ", buf1);

// Tao 1 buffer la 1 mang cac so 1, do dai = 3
const buf2 = Buffer.alloc(3, 1);
console.log("buf2: ", buf2);

// Tao 1 buffer chua duoc khoi tao co do dai = 10,
// Nhanh hon alloc nhung noi dung can duoc ghi de bang cac ham khac cua buffer
const buf3 = Buffer.allocUnsafe(10);
console.log("buf3: ", buf3);

// Tao 1 buffer chua cac byte = [1,2,3]
const buf4 = Buffer.from([1, 2, 3]);
console.log("buf4: ", buf4);

// Tao 1 buffer chua cac byte
// Voi cac gia tri truyen vao deu duoc cat ngan theo gia tri 0-255
const buf5 = Buffer.from([258, 256, 255, 257.5, -255, -254, '1']);
console.log("buf5: ", buf5);


// Tao 1 buffer co content la cac byte duoc ma hoa utf-8 cho 1 string
const buf6 = Buffer.from('tést');
console.log("buf6: ", buf6);

// Tao 1 buffer co content la cac byte latin-1 cho 1 string
const buf7 = Buffer.from('tést', 'latin1');
console.log("buf7: ", buf7);


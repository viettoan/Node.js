const { Blob, Buffer } = require('node:buffer');

const buf1 = Buffer.from('hello there');
const blob1 = new Blob([buf1], {
    type: 'string'
});

blob1.slice(1,4).text().then(
    text => {
        console.log(text);
    }
)
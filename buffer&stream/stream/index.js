const { pipeline, finished } = require('node:stream/promises');
const fs = require('node:fs');

/*
async function processChunk(chunk, { signal }) {
    // Convert the chunk to uppercase and return it
    return chunk.toUpperCase();
}
async function run() {
    await pipeline(
        fs.createReadStream('lowercase.txt'),
        async function* (source, { signal }) {
            source.setEncoding('utf8');
            for await (const chunk of source) {
                yield await processChunk(chunk, { signal });
            }
        },
        fs.createWriteStream('uppercase.txt')
    );
    console.log('Pipeline succeeded.');
}
run().catch(console.error);
*/

const rs = fs.createReadStream('lowercase.txt');
async function run() {
    await finished(rs);
    console.log('Stream is done reading');
}

run().catch(console.error);
rs.resume();

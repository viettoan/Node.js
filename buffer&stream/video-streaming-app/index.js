const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
const PORT = 3000;
app.get('/', (req, res) => {
   try {
       console.log(__dirname);
       res.sendFile(__dirname + '/public/index.html')
   } catch (e) {
       res.status(500).send(e.message);
   }
});

app.get('/video', (req, res) => {
    const range = req.headers.range;

    if (!range) {
        return res.status(400).send('Range must be provided');
    }
    const videoPath = path.join(__dirname, 'public', 'movie.mp4');
    const videoSize = fs.statSync(videoPath).size;
    const chunkSize = 10**6;
    const start = Number(range.replace(/\D/g, ""));
    const end = Math.min(start + chunkSize, videoSize -1);
    const contentLength = end-start+1;
    const  headers = {
        "Content-Range":  `bytes ${start}-${end}/${videoSize}`,
        "Accept-Ranges":  "bytes",
        "Content-Length":  contentLength,
        "Content-Type":  "video/mp4",
    };
    res.writeHead(206, headers);
    const videoStream = fs.createReadStream(videoPath, {start, end});
    videoStream.pipe(res);
})
app.get('/:file_name', (req, res) => {
    try {
        res.sendFile(__dirname + '/public/' + req.params.file_name);
    } catch (e) {
        res.status(500).send(e.message);
    }
})
app.listen(PORT, () => {
    console.log('server started at port ' + PORT);
})
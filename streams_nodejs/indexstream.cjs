const fs = require('fs');

const readstream = fs.createReadStream(__dirname+'./run.txt')

const writestream = process.stdout;

readstream.pipe(writestream);




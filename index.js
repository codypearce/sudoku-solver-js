const readline = require('readline'),
    fs = require('fs'),
    args = process.argv.splice(2);

// Get first input and open stream to read file
var inputFilename = args[0];
const rl = readline.createInterface({
    input: fs.createReadStream(inputFilename)
});

let grid = [];

// Read each line of the file and insert it into the grid
rl.on('line', (line) => grid.push(line.split(''))); 

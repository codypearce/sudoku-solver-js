const readline = require('readline'),
	fs = require('fs'),
	args = process.argv.splice(2),
	SolveSudoku = require('./src/SolveSudoku');

// Error message if user does not input filename
if (args.length < 1) {
	console.log(`Usage: node ${process.argv[1]} INPUTFILENAME`);
	process.exit(1);
}

// Get first input and open stream to read file
var inputFilename = args[0];
const rl = readline.createInterface({
	input: fs.createReadStream(`./puzzles/${inputFilename}`)
});

let grid = [];

// Read each line of the file and insert it into the grid
rl.on('line', (line) => grid.push(line.split(''))); 

// When finished reading the file, solve the grid 
rl.on('close', () => new SolveSudoku(grid));

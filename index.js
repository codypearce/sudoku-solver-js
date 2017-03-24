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
const inputFilename = args[0];
const outputFilename = `./solutions/${inputFilename.slice(0,-3)}sln.txt`;

const rl = readline.createInterface({
	input: fs.createReadStream(`./puzzles/${inputFilename}`),
});

let grid = [];

// Read each line of the file and insert it into the grid
rl.on('line', (line) => grid.push(line.split(''))); 

// When finished reading the file, solve the grid 
rl.on('close', function() {
	var solution = new SolveSudoku(grid);
	var display = solution.print();
	fs.writeFile(outputFilename, display, function(err) {
		if (err) {
			throw err;
		}
		console.log(display);
		console.log(`Results were saved to: ${outputFilename}`);
   });
});

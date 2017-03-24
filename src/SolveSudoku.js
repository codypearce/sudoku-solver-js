const 	Unique = require('./Unique'),
		unique = new Unique();

class SolveSudoku {
	constructor(grid) {
		this.grid = grid;
		this.startTime = new Date();
		this.recursions = 0;
		this.init();
	}
	init() {
		const cell = [0, 0];
		this.solveCell(cell);
	}
	solveCell(cell) {
		this.recursions++;
		if (cell == null) {
			this.print();
			console.log(`Recursions: ${this.recursions}`);
			let timeNow = new Date();
			let timeElasped = timeNow - this.startTime;
			console.log(`Time: ${timeElasped}ms`);
			return true;
		}
		const row = cell[0];
		const column = cell[1];
		
		// If cell already has a number go to next cell
		if(this.grid[row][column] != 'X') {
			return this.solveCell(this.nextCell(row, column));
		}
		
		for(let num = 1; num <= 9; num++) {
			// If number is not unique in row, column, and box, then try next number
			if(unique.check(this.grid, row, column, num)) {
				continue;
			} else {
				// Else try number in that cell
				this.grid[row][column] = num;
				
				// Recurse next cell, if it works then keep going
				if(this.solveCell(this.nextCell(row, column))) {
					return true;
				}
				// Backtrack if no unique number could be found
				this.grid[row][column] = 'X';
			}
			
		}
	}
	nextCell(row, column) {
		// Base Case, on last cell
		if(row == 8 && column == 8) {
			return;
		} else if(column == 8) {
			// End of row, go to next row
			column = 0;
			row++;
		} else {
			column++;
		}
		return [row, column];
	}
	print() {
		var gridDisplay = '';
		for (var row = 0; row < 9; row++) {
			for (var column = 0; column < 9; column++) {
				gridDisplay += this.grid[row][column];
			}
			gridDisplay += '\n';
		}
		return gridDisplay;
	}
}

module.exports = SolveSudoku;

const 	Unique = require('./Unique'),
		unique = new Unique();

class SolveSudoku {
	constructor(grid) {
		this.grid = grid;
		this.init();
	}
	init() {
		const cell = [0, 0];
		this.solveCell(cell);
	}
	solveCell(cell) {
		const row = cell[0];
		const column = cell[1];
		
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
}

module.exports = SolveSudoku;

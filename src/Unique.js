class Unique {	
	check(grid, row, column, num) {
		// check for uniqueness in row, column, and box, return true if not unique
		return this.checkRow(grid, row, column, num) || this.checkColumn(grid, row, column, num) || this.checkBox(grid, row, column, num);
	}

	checkRow(grid, row, column, num) {
		for (let i = 0; i < 9; i++) {
			if(grid[row][i] == num) {
				return true;
			}
		}
		return false;
	}
	checkColumn(grid, row, column, num) {
		for (let i = 0; i < 9; i++) {
			if (grid[i][column] == num) {
				return true;
			}
		}
		return false;	        
	}
	checkBox(grid, row, column, num) {
		const boxRow = Math.floor(row / 3) * 3;
		const boxColumn = Math.floor(column / 3) * 3;

		for (let i = 0; i < 3; i++) {
			for (let j = 0; j < 3; j++) {        
				if (grid[boxRow + i][boxColumn + j] == num) {
					return true;
				}
			}
		}
		return false;
	}
}

module.exports = Unique;

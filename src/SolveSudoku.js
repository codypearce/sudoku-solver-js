class SolveSudoku {
    constructor(grid) {
        this.grid = grid;
        this.init();
    }
    init() {
        this.solveCell(0,0);
    }
    solveCell(row, column) {
        var cell = this.nextCell();
        row = cell[0];
        column = cell[0];
        
        for(let num = 1; num <= 9; num++) {
            if(this.check(row, column, num)) {
                continue;
            }
            this.grid[row][column] = num;
            if(this.solveCell((row, column))) {
                return true;
            }
            this.grid[row][column] = 'X';
        }
    }
    nextCell() {
        
    }
    check() {
        
    }
}

module.exports = SolveSudoku;

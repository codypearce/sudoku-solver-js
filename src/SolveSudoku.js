class SolveSudoku {
    constructor(grid) {
        this.grid = grid;
        this.init();
    }
    init() {
        this.solve(0,0);
    }
    solve(row, column) {
        for(let num = 1; num <= 9; num++) {
            if(this.check(row, column, num)) {
                continue;
            }
            this.grid[row][column] = num;
            if(this.solve((row, column))) {
                return true;
            }
            this.grid[row][column] = 'X';
        }
    }
    check() {
        
    }
}

module.exports = SolveSudoku;

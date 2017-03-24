/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
const   expect = require('chai').expect,
		testGrid = require('./testData').testGrid,
		solutionGrid = require('./testData').solutionGrid,
		SolveSudoku = require('../src/SolveSudoku');

// Copy test grid so that solving does not modify the original data
const grid = JSON.parse(JSON.stringify(testGrid));

describe('SolveSudoku', function() {
	describe('nextCell should move to next cell', function() {
		it('should move to next row ', function() {
			const solver = new SolveSudoku(grid);
			expect(solver.nextCell(2,8).toString()).to.equal([3,0].toString());
		});
		it('should go to next column', function() {
			const solver = new SolveSudoku(grid);
			expect(solver.nextCell(5,3).toString()).to.equal([5,4].toString());
		});
	});
	describe('solve grid', function() {
		it('should solve the given grid and output the answer', function() {
			const solver = new SolveSudoku(grid);
			solver.solve();
			expect(solver.grid.toString()).to.equal(solutionGrid.toString());
		});
	});
});

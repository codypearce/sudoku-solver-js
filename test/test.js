/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
const   expect = require('chai').expect,
		SolveSudoku = require('../src/SolveSudoku'),
		Unique = require('../src/Unique'),
		unique = new Unique();


const testGrid = [
	['X', 'X', 'X', '7', '4', '3', 'X', 'X', 'X'],
	['X', 'X', '9', 'X', 'X', 'X', '6', 'X', 'X'],
	['X', '1', '8', 'X', 'X', 'X', '4', '3', 'X'],
	['6', 'X', 'X', 'X', 'X', 'X', 'X', 'X', '2'],
	['8', 'X', 'X', 'X', 'X', 'X', 'X', 'X', '1'],
	['X', '4', '1', '2', 'X', '9', '5', '7', 'X'],
	['X', 'X', 'X', '5', 'X', '1', 'X', 'X', 'X'],
	['X', 'X', '5', 'X', 'X', 'X', '9', 'X', 'X'],
	['X', 'X', '3', '9', '2', '6', '7', 'X', 'X']
];
const solutionGrid = [
	['5', '2', '6', '7', '4', '3', '1', '8', '9'],
	['4', '3', '9', '1', '5', '8', '6', '2', '7'],
	['7', '1', '8', '6', '9', '2', '4', '3', '5'],
	['6', '9', '7', '3', '1', '5', '8', '4', '2'],
	['8', '5', '2', '4', '6', '7', '3', '9', '1'],
	['3', '4', '1', '2', '8', '9', '5', '7', '6'],
	['9', '7', '4', '5', '3', '1', '2', '6', '8'],
	['2', '6', '5', '8', '7', '4', '9', '1', '3'],
	['1', '8', '3', '9', '2', '6', '7', '5', '4']
];
describe('Sudoku Solver', function() {
	describe('Unique', function() {
		describe('row uniqueness', function() {
			it('2 should be unique', function() {
				const check = unique.checkRow(testGrid, 1, 2, 2);
				expect(check).to.be.false;
			});
			it('8 should not be unique', function() {
				const check = unique.checkRow(testGrid, 4, 2, 8);
				expect(check).to.be.true;
			});
		});
		describe('column uniqueness', function() {
			it('4 should be unique', function() {
				const check = unique.checkColumn(testGrid, 2, 2, 4);
				expect(check).to.be.false;
			});
			it('9 should not be unique', function() {
				const check = unique.checkColumn(testGrid, 4, 6, 9);
				expect(check).to.be.true;
			});
		});
		describe('box uniqueness', function() {
			it('6 should be unique', function() {
				const check = unique.checkBox(testGrid, 0, 0, 6);
				expect(check).to.be.false;
			});
			it('1 should not be unique', function() {
				const check = unique.checkBox(testGrid, 0, 0, 1);
				expect(check).to.be.true;
			});
		});
		describe('overall uniqueness', function() {
			it('5 should be unique', function() {
				const check = unique.check(testGrid, 0, 0, 5);
				expect(check).to.be.false;
			});
			it('7 should not be unique', function() {
				const check = unique.check(testGrid, 0, 0, 7);
				expect(check).to.be.true;
			});
		});
	});
	describe('SolveSudoku', function() {
		it('should solve the grid', function() {
			var solution = new SolveSudoku(testGrid);
			expect(solution.grid.toString()).to.equal(solutionGrid.toString());
		});
	});
	
});

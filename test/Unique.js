/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
const   expect = require('chai').expect,
		testGrid = require('./testData').testGrid,
		Unique = require('../src/Unique'),
		unique = new Unique();

describe('Unique', function() {
	describe('checkrow', function() {
		it('should return false if number is unique in row', function() {
			const check = unique.checkRow(testGrid, 1, 2, 2);
			expect(check).to.be.false;
		});
		it('should return true if number is not unique in row', function() {
			const check = unique.checkRow(testGrid, 4, 2, 8);
			expect(check).to.be.true;
		});
	});
	describe('checkColumn', function() {
		it('should return false if number is unique in column', function() {
			const check = unique.checkColumn(testGrid, 2, 2, 4);
			expect(check).to.be.false;
		});
		it('should return true if number is not unique in column', function() {
			const check = unique.checkColumn(testGrid, 4, 6, 9);
			expect(check).to.be.true;
		});
	});
	describe('checkBox', function() {
		it('should return false if number is unique in box', function() {
			const check = unique.checkBox(testGrid, 0, 0, 6);
			expect(check).to.be.false;
		});
		it('should return true if number is not unique in box', function() {
			const check = unique.checkBox(testGrid, 0, 0, 1);
			expect(check).to.be.true;
		});
	});
	describe('overall uniqueness', function() {
		it('should return false if number is unique in row, col, and box', function() {
			const check = unique.check(testGrid, 0, 0, 5);
			expect(check).to.be.false;
		});
		it('should return true if number is not unique in row, col, and box', function() {
			const check = unique.check(testGrid, 0, 0, 7);
			expect(check).to.be.true;
		});
	});
});

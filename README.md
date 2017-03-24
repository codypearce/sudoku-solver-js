# Solving Sudoku

Sudoku solver built in ES6 and Node.js to solve a set of sudoku puzzles. The puzzles and the requirements for the solver can be found in the puzzle's folder, the solutions are in the solutions folder.

## Installation
You need to install Node V5.0 or above, then clone the project and run npm install.

```
git clone https://github.com/codypearce/sudoku-solver-js.git
cd sudoku-solver-js
npm install
```

## Usage
You can solve a sudoku puzzle by running the following command:

```
node index.js puzzle.txt
```

You'll need to put the puzzle in the puzzle folder and name it something unique. The solution, as well as the time it took to solve, will display in the console. Additionally, a file named '${yourfilename}.sln.txt', will appear in the solutions folder.

/**
 * 
 * @param grid 
 * Input: grid = [[1,1,1,-1,-1],[1,1,1,-1,-1],[-1,-1,-1,1,1],[1,1,1,1,-1],[-1,-1,-1,-1,-1]]
  Output: [1,-1,-1,-1,-1]
  Explanation: This example is shown in the photo.
  Ball b0 is dropped at column 0 and falls out of the box at column 1.
  Ball b1 is dropped at column 1 and will get stuck in the box between column 2 and 3 and row 1.
  Ball b2 is dropped at column 2 and will get stuck on the box between column 2 and 3 and row 0.
  Ball b3 is dropped at column 3 and will get stuck on the box between column 2 and 3 and row 0.
  Ball b4 is dropped at column 4 and will get stuck on the box between column 2 and 3 and row 1.
 */

  /**
   * Example 2:

Input: grid = [[-1]]
Output: [-1]
Explanation: The ball gets stuck against the left wall.
   */

/**
 * Example 3:[1,-1,-1,-1,-1]

Input: grid = [[1,1,1,1,1,1],[-1,-1,-1,-1,-1,-1],[1,1,1,1,1,1],[-1,-1,-1,-1,-1,-1]]
Output: [0,1,2,3,4,-1]
 */

/**
 * Constraints:
  m == grid.length
  n == grid[i].length
  1 <= m, n <= 100
  grid[i][j] is 1 or -1.
 */

enum fallDirection {
  right = 1,
  left = -1,
}

const isOutOfGrid = (grid: number[][], column: number): boolean => {
  const width = grid[0].length;
  if (column < width && column >= 0) {
    return false;
  }
  return true;
}

const isNearCellWillStuckOrFall = (grid: number[][], direction: fallDirection, row: number, column: number) => {
  if (direction === fallDirection.right) {
    // right fall, check right cell
    const rightRow = row;
    const rightColumn = column + 1;
    if (isOutOfGrid(grid, rightColumn)) {
      return true;
    }
    const rightCell = grid[rightRow][rightColumn];
    if (rightCell === fallDirection.left) {
      // if direction is otherwise -> stuck
      return true;
    }
    return false;
  }

  // left fall
  const leftRow = row;
  const leftColumn = column - 1;
  if (isOutOfGrid(grid, leftColumn)) {
    return true;
  }
  const leftCell = grid[leftRow][leftColumn];

  if (leftCell === fallDirection.right) {
    // if direction is otherwise -> stuck
    return true;
  }
  return false;
}


export function findBall(grid: number[][]): number[] {
  const matrixWidth = grid[0].length;
  const matrixHeight = grid.length;
  const result: number[] = [];

  for (let i = 0; i < matrixWidth; i++) {
    let row: number = 0;
    let column: number = i;
    while (row < matrixHeight) {
      const beginColumn = column;
      // take start row of matrix and column
      const direction = grid[row][column];
      // console.log(row, column, direction);
      if (direction === fallDirection.right) {
        // fall right 
        if (isNearCellWillStuckOrFall(grid, fallDirection.right, row, column)) {
          // add result
          result.push(-1);
          break;
        }
        row++;
        column++;
      } else {
        if (isNearCellWillStuckOrFall(grid, fallDirection.left, row, column)) { 
          result.push(-1);
          break;
        }
        row++;
        column--;
      }
      // is end of box
      if (row > matrixHeight - 1) {
        result.push(column);
      }
    }
  }

  return result;
};

interface TableTest<T, K> {
  name: string,
  input: T,
  output: K,
}

const tt: TableTest<number[][], number[]>[] = [
  {
    name: 'test1',
    input:  [[1,1,1,-1,-1],[1,1,1,-1,-1],[-1,-1,-1,1,1],[1,1,1,1,-1],[-1,-1,-1,-1,-1]],
    output: [1,-1,-1,-1,-1],
  },
  {
    name: 'test2',
    input:  [[1,1,1,1,1,1],[-1,-1,-1,-1,-1,-1],[1,1,1,1,1,1],[-1,-1,-1,-1,-1,-1]],
    output: [0,1,2,3,4,-1],
  },
  {
    name: 'test3',
    input:  [[-1]],
    output: [-1],
  },
  {
    name: 'test4',
    input: [[-1,1,-1,-1,-1,-1,-1,-1,1,-1,-1,-1,-1,1,1,-1,-1,-1,1,1,1,-1,-1,1,1,-1,-1,1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,-1,1,-1,-1,-1,-1,-1,-1,-1,1,-1,-1,1,-1,1,-1,-1,1,1,-1,1,-1,-1,-1,-1,1,1,1,1,1,1,-1,1,1,1,-1,1,1,1,-1,-1,-1,1,-1,1,-1,-1,1,1,-1,-1,1,-1,1,-1,1,1,1,-1,-1,-1,-1]],
    output: [-1,-1,-1,2,3,4,5,6,-1,-1,9,10,11,14,-1,-1,15,16,19,20,-1,-1,21,24,-1,-1,25,-1,-1,28,29,30,31,32,33,34,35,-1,-1,-1,-1,40,41,42,43,44,45,-1,-1,48,-1,-1,-1,-1,53,56,-1,-1,-1,-1,59,60,61,64,65,66,67,68,-1,-1,71,72,-1,-1,75,76,-1,-1,77,78,-1,-1,-1,-1,83,86,-1,-1,87,-1,-1,-1,-1,94,95,-1,-1,96,97,98]
  },
  {
    name: 'test5',
    input: [
      [1,-1,-1,1,-1,1,1,1,1,1,-1,1,1,1,1,1,1,-1,-1,-1,-1,-1,-1,1,-1,1,-1,1,-1,-1,-1,-1,1,-1,1,1,-1,-1,-1,-1,-1,1],
      [-1,1,1,1,-1,-1,-1,-1,1,1,1,-1,-1,-1,1,-1,-1,1,1,1,1,1,1,-1,1,-1,-1,-1,-1,-1,1,-1,1,-1,-1,-1,-1,1,1,-1,1,1],
      [1,-1,-1,-1,-1,1,-1,1,1,1,1,1,1,1,-1,1,-1,-1,-1,1,-1,-1,1,-1,1,-1,1,-1,-1,1,-1,1,-1,1,1,-1,-1,1,1,-1,1,-1]
    ],
    output: [-1,-1,1,-1,-1,-1,-1,10,11,-1,-1,12,13,-1,-1,-1,-1,-1,17,-1,-1,20,-1,-1,-1,-1,-1,-1,-1,-1,27,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
  }
]

const logTestFailedResult = <T, K>(test: TableTest<T, K>, result: K) => {
  console.log('FAILED ', test.name);
  console.log('OUT:', result);
  console.log('EXPECTED: ', test.output);
}

const isRightWhereTheBallIsFall = (result: number[], expected: number[]): boolean => {
  if (result.length !== expected.length) {
    return false;
  }
  for (let i = 0; i < result.length; i++) {
    if (result[i] !== expected[i]) {
      return false;
    }
  }
  return true;
}

const runTests = <T, K>(tt: TableTest<T, K>[], func: (input: T) => K, isRight: (result: K, expected: K) => boolean) => {
  for (let test of tt) {
    const result = func(test.input);
    if (!isRight(result, test.output)) {
      logTestFailedResult(test, result);
      continue;
    }
    console.log('OK: ', test.name);
  }
}

runTests(tt, findBall, isRightWhereTheBallIsFall);

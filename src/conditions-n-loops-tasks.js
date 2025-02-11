/* *******************************************************************************************
 *                                                                                           *
 * Please read the following tutorial before implementing tasks:                             *
 * https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Looping_code    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration         *
 * https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/conditionals    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch       *
 *                                                                                           *
 ******************************************************************************************* */

/**
 * Determines whether a given number is positive. Zero is considered positive.
 * This function does not use Number or Math class methods.
 *
 * @param {number} number - The number to check.
 * @return {boolean} True if the number is positive or zero, false otherwise.
 *
 * @example:
 *  10 => true
 *  0  => true
 *  -5 => false
 */
function isPositive(number) {
  let result;
  if (number >= 0) {
    result = true;
  } else {
    result = false;
  }
  return result;
}

/**
 * Returns the maximum of three numbers without using Array and Math classes methods.
 *
 * @param {number} a - The first number.
 * @param {number} b - The second number.
 * @param {number} c - The third number.
 * @return {number} The maximum of the three numbers.
 *
 * @example:
 *  1, 2, 3       => 3
 *  -5, 0, 5      => 5
 *  -0.1, 0, 0.2  => 0.2
 */
function getMaxNumber(a, b, c) {
  const numbers = [a, b, c];
  let result = -Infinity;
  for (let i = 0; i < numbers.length; i += 1) {
    if (result < numbers[i]) result = numbers[i];
  }
  return result;
}

/**
 * Checks if a queen can capture a king in the next move on an 8x8 chessboard.
 * See more details at яё
 *
 * @typedef {{
 *  x: number,
 *  y: number
 * }} Position
 * @param {Object} queen - The position of the queen.
 * @param {Object} king - The position of the king.
 * @return {boolean} True if the queen can capture the king, false otherwise.
 *
 * @example
 * {x: 1, y: 1}, {x: 5, y: 5} => true
 * {x: 2, y: 1}, {x: 2, y: 8} => true
 * {x: 1, y: 1}, {x: 2, y: 8} => false
 * {x: 1, y: 1}, {x: 2, y: 8} => false
 */
function canQueenCaptureKing(queen, king) {
  let result = false;
  if (queen.x === king.x || queen.y === king.y) {
    result = true;
  } else if (queen.x === queen.y && king.x === king.y) {
    result = true;
  } else if (queen.x + queen.y === king.x + king.y) {
    result = true;
  }
  return result;
}

/**
 * Determines whether a triangle is isosceles based on its side lengths.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} a - The length of the first side.
 * @param {number} b - The length of the second side.
 * @param {number} c - The length of the third side.
 * @return {boolean} True if the triangle is isosceles, false otherwise.
 *
 * @example:
 *  1, 2, 3   => false
 *  3, 1, 2   => false
 *  2, 3, 2   => true
 *  3, 2, 2   => true
 *  2, 2, 3   => true
 *  2, 2, 5   => false
 *  3, 0, 3   => false
 */
function isIsoscelesTriangle(a, b, c) {
  let result = false;
  if (a === b && a + b > c && c !== 0) {
    result = true;
  } else if (b === c && b + c > a && a !== 0) {
    result = true;
  } else if (c === a && c + a > b && b !== 0) {
    result = true;
  }
  return result;
}

/**
 * Converts a number to Roman numerals. The number will be between 1 and 39.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} num - The number to convert.
 * @return {string} The Roman numeral representation of the number.
 *
 * @example:
 *  1   => I
 *  2   => II
 *  5   => V
 *  10  => X
 *  26  => XXVI
 */
function convertToRomanNumerals(num) {
  let result = '';
  let value = num;
  const roman = ['X', 'IX', 'V', 'IV', 'I'];
  const romanValue = [10, 9, 5, 4, 1];
  for (let i = 0; i < roman.length; i += 1) {
    while (value >= romanValue[i]) {
      result += roman[i];
      value -= romanValue[i];
    }
  }
  return result;
}

/**
 * Converts a number to a string, replacing digits with words.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} numberStr - The number as a string.
 * @return {string} The number with digits replaced by words.
 *
 * @example:
 *  '1'       => 'one'
 *  '10'      => 'one zero'
 *  '-10'     => 'minus one zero'
 *  '10.5'    => 'one zero point five'
 *  '10,5'    => 'one zero point five'
 *  '1950.2'  => 'one nine five zero point two'
 */
function convertNumberToString(numberStr) {
  const numName = [
    'zero',
    'one',
    'two',
    'three',
    'four',
    'five',
    'six',
    'seven',
    'eight',
    'nine',
  ];
  let result = '';
  for (let i = 0; i < numberStr.length; i += 1) {
    switch (numberStr[i]) {
      case '-':
        result += 'minus';
        break;
      case ',':
      case '.':
        result += 'point';
        break;
      default:
        result += numName[numberStr[i]];
    }
    if (i !== numberStr.length - 1) {
      result += ' ';
    }
  }
  return result;
}

/**
 * Determines whether a string is a palindrome.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} str - The string to check.
 * @return {boolean} True if the string is a palindrome, false otherwise.
 *
 * @example:
 *  'abcba'     => true
 *  '0123210'   => true
 *  'qweqwe'    => false
 */
function isPalindrome(str) {
  let result = true;
  let preIndex;
  let postIndex;
  if (str.length % 2) {
    preIndex = (str.length - 1) / 2 - 1;
    postIndex = preIndex + 2;
  } else {
    postIndex = str.length / 2;
    preIndex = postIndex - 1;
  }
  for (let i = 0; i <= preIndex; i += 1) {
    if (str[preIndex] !== str[postIndex]) {
      result = false;
    }
    preIndex -= 1;
    postIndex += 1;
  }
  return result;
}

/**
 * Finds the first occurrence of a letter in a string.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} str - The string to search.
 * @param {string} letter - The letter to find.
 * @return {number} The index of the first occurrence of the letter, or -1 if not found.
 *
 * @example:
 *  'qwerty', 'q'     => 0
 *  'qwerty', 't'     => 4
 *  'qwerty', 'Q'     => -1
 *  'qwerty', 'p'     => -1
 */
function getIndexOf(str, letter) {
  let index = -1;
  for (let i = 0; i < str.length; i += 1) {
    if (str[i] === letter) {
      index = i;
      break;
    }
  }
  return index;
}

/**
 * Checks if a number contains a specific digit.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} num - The number to check.
 * @param {number} digit - The digit to search for.
 * @return {boolean} True if the number contains the digit, false otherwise.
 *
 * @example:
 *  123450, 5   => true
 *  123450, 1   => true
 *  123450, 0   => true
 *  12345, 0    => false
 *  12345, 6    => false
 */
function isContainNumber(num, digit) {
  let checkDigit = false;
  for (let i = num; i >= 1; i = (i - (i % 10)) / 10) {
    if (i % 10 === digit) {
      checkDigit = true;
      break;
    }
  }
  return checkDigit;
}

/**
 * Finds the index of an element in an array where the sum of elements to the left equals the sum of elements to the right.
 * If such an index does not return -1.
 * In this task, the use of methods of the Array and String classes is not allowed.
 *
 * @param {number[]} arr - The array to check.
 * @return {number} The index of the balance point, or -1 if none exists.
 *
 * @example:
 *  [1, 2, 5, 3, 0] => 2    => 1 + 2 === 3 + 0 then balance element is 5 and its index = 2
 *  [2, 3, 9, 5] => 2       => 2 + 3 === 5 then balance element is 9 and its index = 2
 *  [1, 2, 3, 4, 5] => -1   => no balance element
 */
function getBalanceIndex(arr) {
  if (arr.length < 3) return -1;
  for (let i = 0; i < arr.length - 2; i += 1) {
    let leftSum = 0;
    let rightSum = 0;

    for (let j = 0; j < 1 + i; j += 1) {
      leftSum += arr[j];
    }

    for (let k = i + 2; k < arr.length; k += 1) {
      rightSum += arr[k];
    }

    if (leftSum === rightSum) return i + 1;
  }

  return -1;
}

/**
 * Generates a spiral matrix of a given size, filled with numbers in ascending order starting from one.
 * The direction of filling with numbers is clockwise.
 * Usage of String and Array classes methods is not allowed in this task.
 *
 * @param {number} size - The size of the matrix.
 * @return {number[][]} The spiral matrix.
 *
 * @example:
 *        [
 *          [1, 2, 3],
 *  3  =>   [8, 9, 4],
 *          [7, 6, 5]
 *        ]
 *        [
 *          [1,  2,  3,  4],
 *  4  =>   [12, 13, 14, 5],
 *          [11, 16, 15, 6],
 *          [10, 9,  8,  7]
 *        ]
 */
function getSpiralMatrix(size) {
  const spiralMatrix = [];
  let y = 0;
  let x = 0;
  const up = () => {
    y -= 1;
  };
  const right = () => {
    x += 1;
  };
  const down = () => {
    y += 1;
  };
  const left = () => {
    x -= 1;
  };
  const directionList = [up, right, down, left];
  let directionIndex = 1;
  let quantSteps = size - 1;
  let countSteps = quantSteps;
  let countLines = null;

  for (let i = 0; i < size; i += 1) {
    spiralMatrix[i] = [];
  }
  for (let j = 1; j <= size ** 2; j += 1) {
    if (j === size) {
      directionIndex += 1;
      countLines = 2;
    }
    spiralMatrix[y][x] = j;
    directionList[directionIndex]();

    if (countLines !== null) {
      countSteps -= 1;
      if (countSteps === 0) {
        countLines -= 1;
        if (countLines === 0) {
          countLines = 2;
          quantSteps -= 1;
        }
        countSteps = quantSteps;
        if (directionIndex === 3) {
          directionIndex = 0;
        } else {
          directionIndex += 1;
        }
      }
    }
  }
  return spiralMatrix;
}

/**
 * Rotates a matrix by 90 degrees clockwise in place.
 * Take into account that the matrix size can be very large. Consider how you can optimize your solution.
 * Usage of String and Array class methods is not allowed in this task.
 *
 * @param {number[][]} matrix - The matrix to rotate.
 * @return {number[][]} The rotated matrix.
 *
 * @example:
 *  [                 [
 *    [1, 2, 3],        [7, 4, 1],
 *    [4, 5, 6],  =>    [8, 5, 2],
 *    [7, 8, 9]         [9, 6, 3]
 *  ]                 ]
 */
function rotateMatrix(matrix) {
  const newMatrix = matrix;
  const matrixRotate = [];
  let columnIndex = matrix.length - 1;

  for (let i = 0; i < matrix.length; i += 1) {
    matrixRotate[i] = [];
  }

  for (let j = 0; j < matrix.length; j += 1) {
    for (let k = 0; k < matrix.length; k += 1) {
      matrixRotate[k][columnIndex] = matrix[j][k];
    }
    columnIndex -= 1;
  }

  for (let j = 0; j < matrix.length; j += 1) {
    for (let k = 0; k < matrix.length; k += 1) {
      newMatrix[j][k] = matrixRotate[j][k];
    }
  }

  return newMatrix;
}

/**
 * Sorts an array of numbers in ascending order in place.
 * Employ any sorting algorithm of your choice.
 * Take into account that the array can be very large. Consider how you can optimize your solution.
 * In this task, the use of methods of the Array and String classes is not allowed.
 *
 * @param {number[]} arr - The array to sort.
 * @return {number[]} The sorted array.
 *
 * @example:
 *  [2, 9, 5]       => [2, 5, 9]
 *  [2, 9, 5, 9]    => [2, 5, 9, 9]
 *  [-2, 9, 5, -3]  => [-3, -2, 5, 9]
 */
function sortByAsc(array) {
  function partOfQuickSort(arr, start, end) {
    const arrLink = arr;
    let left = start;
    let right = end;
    const pivot = arr[Math.floor((right + left) / 2)];
    while (left <= right) {
      while (arr[left] < pivot) left += 1;
      while (arr[right] > pivot) right -= 1;

      if (left <= right) {
        const memory = arrLink[left];
        arrLink[left] = arrLink[right];
        arrLink[right] = memory;
        left += 1;
        right -= 1;
      }
    }
    return left;
  }

  function quickSort(arr, start, end) {
    if (start >= end) return;
    const leftPointer = partOfQuickSort(arr, start, end);

    quickSort(arr, start, leftPointer - 1);
    quickSort(arr, leftPointer, end);
  }

  quickSort(array, 0, array.length - 1);
  return array;
}

/**
 * Shuffles characters in a string so that the characters with an odd index are moved to the end of the string at each iteration.
 * Take into account that the string can be very long and the number of iterations is large. Consider how you can optimize your solution.
 * Usage of Array class methods is not allowed in this task.
 *
 * @param {string} str - The string to shuffle.
 * @param {number} iterations - The number of iterations to perform the shuffle.
 * @return {string} The shuffled string.
 *
 * @example:
 *  '012345', 1 => '024135'
 *  'qwerty', 1 => 'qetwry'
 *  '012345', 2 => '024135' => '043215'
 *  'qwerty', 2 => 'qetwry' => 'qtrewy'
 *  '012345', 3 => '024135' => '043215' => '031425'
 *  'qwerty', 3 => 'qetwry' => 'qtrewy' => 'qrwtey'
 */
function shuffleChar(str, iterations) {
  let result = str;
  const quanIteration = iterations % (str.length / 2 + 4);

  for (let i = 0; i < quanIteration; i += 1) {
    let left = '';
    let right = '';
    for (let j = 0; j < result.length; j += 1) {
      if (j % 2) right += result[j];
      else left += result[j];
    }
    result = left + right;
  }
  return result;
}

/**
 * Returns the nearest largest integer consisting of the digits of the given positive integer.
 * If there is no such number, it returns the original number.
 * Usage of String class methods is not allowed in this task.
 *
 * @example:
 * 12345    => 12354
 * 123450   => 123504
 * 12344    => 12434
 * 123440   => 124034
 * 1203450  => 1203504
 * 90822    => 92028
 * 321321   => 322113
 *
 * @param {number} number The source number
 * @returns {number} The nearest larger number, or original number if none exists.
 */
function getNearestBigger(number) {
  const arrNums = [];
  let temp = number;

  while (temp) {
    arrNums.push(temp % 10);
    temp = Math.floor(temp / 10);
  }
  arrNums.reverse();

  let sliceIndex = -1;
  let swapIndex;
  for (let i = arrNums.length - 1; i > 0; i -= 1) {
    if (arrNums[i] > arrNums[i - 1]) {
      swapIndex = i;
      for (let j = i + 1; j < arrNums.length; j += 1) {
        if (arrNums[swapIndex] > arrNums[j] && arrNums[j] > arrNums[i - 1]) {
          swapIndex = j;
        }
      }

      sliceIndex = i;
      break;
    }
  }
  if (sliceIndex === -1) return number;

  temp = arrNums[sliceIndex - 1];
  arrNums[sliceIndex - 1] = arrNums[swapIndex];
  arrNums[swapIndex] = temp;

  temp = [];
  for (let i = sliceIndex; i < arrNums.length; i += 1) {
    temp.push(arrNums[i]);
  }
  temp.sort();

  let result = 0;

  for (let i = 0; i < sliceIndex; i += 1) {
    result = result * 10 + arrNums[i];
  }
  for (let i = 0; i < temp.length; i += 1) {
    result = result * 10 + temp[i];
  }

  return result;
}

module.exports = {
  isPositive,
  getMaxNumber,
  canQueenCaptureKing,
  isIsoscelesTriangle,
  convertToRomanNumerals,
  convertNumberToString,
  isPalindrome,
  getIndexOf,
  isContainNumber,
  getBalanceIndex,
  getSpiralMatrix,
  rotateMatrix,
  sortByAsc,
  shuffleChar,
  getNearestBigger,
};

// Common pattern types:
// i. Sequential - Constant sequence
// ii. Alternating - Alternate consistently
// iii. Repeating - Repeating consistently
// iv. Symmetric / Palindromic - Data reads the same
// v. Growth / Decay - Data grows or skrinks by rule
// vi. Nested / Structural - Pattern within patterns

// Execise 1
// Check constant difference - Verify if difference is constant

let array = [2, 4, 6, 8, 10];

// Logic: Loop, get the difference of number and the next number.
// Pseudocode:
// start
// set constant to empty array
// for i from 0 to length of array - 1
//      set cur to array[i]
//      set next to array[i + 1]
//      push next - cur to constant
// endfor
// display cosntant
// end

// let constant = [];
// for (let i = 0; i < array.length; i++) {
//     let cur = array[i];
//     let next = array[i + 1];
//     if (next !== undefined ) constant.push(next - cur);
// }
// for (let i = 0; i < constant.length; i++) {
//     let cur = constant[i];
//     let next = constant[i + 1];
//     if (next !== undefined) {
//         if (cur !== next) return console.log(false)
//     };
// }
// return console.log(true);

function isConstant(array) {
    let constant = [];

    for (let i = 0; i < array.length - 1; i++) {
        let cur = array[i];
        let next = array[i + 1];
        let diff = next - cur;

        if (constant.length !== 0) {
            if (diff !== constant[0]) return false;
        } else {
            constant.push(diff);
        }
    }
    return true;
}

console.log(isConstant(array)); // true
console.log(isConstant([3, 6, 9, 15])); // should be false
console.log(isConstant([10, 7, 4, 1, -2])); // true (difference = -3)
console.log(isConstant([1])); // true (edge case)
console.log(isConstant([])); // true (edge case)

console.log('-----------')

// Exercise 2: Alternating Pattern Detection.
// Goal:
// Detect if an array follows a repeating two-element alternation pattern.
// [A, B, A, B, A] → valid
// [1, 2, 1, 2, 1] → valid
// [1, 2, 2, 1] → invalid

// Logic: Use modulus, return true if all even/odd numbers are equal

// Pseudocode:
// start
// create function isAlternate() that accept array
// set evenValue to array[0]
// set oddValue to array[1]
// for i from 0 to length of array - 1
//      if i % 2 === 0 then
//          if array[i] !== evenValue then
//              return false
//          endif
//      else
//          if array[i] !== oddValue then
//              return false
//          endif
//      endif
// endfor
// return true
// end

// function isAlternate(array) {
//     let evenValue = array[0];
//     let oddValue = array[1];

//     for (let i = 0; i < array.length; i++) {
//         if (i % 2 === 0) {
//             if (array[i] !== evenValue) return false;
//         } else {
//             if (array[i] !== oddValue) return false;
//         }
//     }

//     return true;
// }

// Refactored version
function isAlternate(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== arr[i % 2]) return false;
    }
    return true;
}

console.log(isAlternate([1, -1, 1, -1, 1])); // true
console.log(isAlternate(['A', 'B', 'A', 'B'])); // true
console.log(isAlternate([1, 2, 2, 1])); // false
console.log(isAlternate([5])); // true
console.log(isAlternate([])); // true

console.log('-----------')

// Exercise 3 — Repeating Pattern Check
// Determine if an array repeats a fixed block.

// Logic:
// Get possible repeating cycle
// Get 

// Pseudocode:
// start
// create function isRepeating() that accept array
//
// i. Get possible repeating cycle
// set cycle to empty array
// if n == 1 cycle = [1]
// for i from 1 to half of length - 1
//      push i to cycle
// endfor
//
// for j from 0 to length of cycle - 1
//      if (arr.slice(0, cycle[j]).join('') !== arr.slice(cycle + 1, cycle[j * 2]).join('')) then
//          return false;
//
// endfor
//      

// function isRepeating(arr) {
//     let n = arr.length;
//     if (n === 1) return true;

//     // i. Get possible repeating cycle
//     let possibleCycle = [];
//     for (let i = 1; i <= Math.floor(n / 2); i++) {
//         if (n % i === 0) possibleCycle.push(i);
//     }

//     // ii. Compare cycle
//     for (let j = 0; j < possibleCycle.length; j++) {
//         let k = possibleCycle[j];
//         let pattern = arr.slice(0, k).join(',');

//         let good = true;
//         for (let start = k; start < n; start += k) {
//             if (arr.slice(start, start + k).join(',') !== pattern) {
//                 good = false;
//                 break;
//             }
//         }

//         if (good) return true;
//     }

//     return false;
// }

// [1, 2, 1, 2, 1, 2] → true   // repeats [1,2]
// ['A', 'B', 'A', 'B'] → true
// [3,3,3,3] → true           // repeats [3]
// [1,2,3,1,2] → true? false? (you decide based on logic)
// [1,2,3,4] → false
// [7] → true                 // trivial repeat
// [] → true                  // trivial repeat

// Refactored version:
function isRepeating(arr) {
    let n = arr.length;
    if (n === 1) return true;

    outer:
    for (let size = 1; size <= Math.floor(n / 2); size++) {
        if (n % size !== 0) continue;

        for (let start = size; start < n; start++) {
            if (arr[start] !== arr[start % size]) continue outer;
        }

        return true;
    }

    return false;
}

console.log(isRepeating([1, 2, 1, 2, 1, 2])); // true
console.log(isRepeating([1, 2, 3, 4, 5])); // false
console.log(isRepeating([5])); // true
console.log('-----------')

// Exercise 3: isPalindromeArray
// Goal: Check if an array reads the same forwards and backwards.

// [1, 2, 3, 2, 1] → true
// [7, 8, 8, 7]     → true
// [1, 2, 3, 4]     → false
// ['A', 'B', 'B', 'A'] → true
// [5] → true
// [] → true

// Logic: 
// Think two pointers: start and end.
// Compare elements until they meet in the middle.

// 1st version - Pseudocode:
// start
// create function isPalindromeArray() that accepts array
// set order to empty array
// set reversed to empty array
// for i from 0 to length of array - 1
//      unshift array[i] to reversed
//      push array[i] to order
// endfor
// if order === reversed then
//      return true
// else
//      return false
// end

// 2nd version - Pseudocode:
// start
// create function isPalindromeArray() that accepts array
// set good = true
// for start from 0 to length of array - 1
//      set end to array length - 1 - start
//      if arr.slice(start, start + 1)[0] !== arr.slice(end, end + 1)[0]
//          good = false;
//          break;
//      endif
// endfor
// if good return true;
// return false
// end

// 3rd version - Pseudocode:
// start
// create function isPalindromeArray() that accepts array
// if array.join('') === array.reverse().join() then
//      return true
// else
//      return false
// endif
// end

// 1st version - Code:
// function isPalindromeArray(arr) {
//     let order = [];
//     let reversed = [];

//     arr.forEach(item => {
//         order.unshift(item);
//         reversed.push(item);
//     })

//     if (order.join('') === reversed.join('')) {
//         return true;
//     } else {
//         return false;
//     }
// }

// 2nd version - Code:
// function isPalindromeArray(arr) {
//     let good = true;

//     for (let start = 0; start < arr.length; start++) {

//         let end = arr.length - 1 - start;
        
//         if (arr.slice(start, start + 1)[0] !== arr.slice(end, end + 1)[0]) {
//             good = false;
//             break;
//         }
//     }

//     if (good) return true;
//     return false;
// }

// 3rd version - code
// function isPalindromeArray(arr) {
//     if (arr.join() === arr.reverse().join()) return true;
//     return false;
// }

// Refactored version
// 1
// function isPalindromeArray(arr) {
//     let reverse = [];
//     arr.forEach(item => {
//         reverse.unshift(item);
//     });
//     if (reverse.join() === arr.join()) return true;
//     return false;
// }

// 2
// function isPalindromeArray(arr) {
//     for (let start = 0; start < arr.length / 2; start++) {
//         let end = arr.length - start - 1;
//         if (arr[start] !== arr[end]) return false;
//     }
//     return true;
// }

// 3
function isPalindromeArray(arr) {
    if (arr.join() === arr.slice().reverse().join()) return true;
    return false;
}

console.log(isPalindromeArray([1, 2, 3, 2, 1])) // true
console.log(isPalindromeArray([7, 8, 8, 7, 5])); // false
console.log(isPalindromeArray([])); // true
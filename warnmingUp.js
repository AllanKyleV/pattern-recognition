// Count the vowels in a string.
function countVowels(str) {
  let count = 0;
  str.split('').forEach(char => {
    if ('aeiou'.split('').includes(char)) count++;
  })
  return count;
}
console.log(countVowels('javascript'));

// Sum of digits
function sumOfDigits(num) {
    let sum = 0;
    String(num).split('').forEach(char => {
        sum += Number(char);
    })
    return sum;
}
console.log(sumOfDigits(493))

// Check if a number is a whole number
function isWholeNumber(num) {
    if (Math.floor(num) === num) return true;
    return false;
}
console.log(isWholeNumber(5.2));

// Reverse a string (manually, no reverse())
function reverse(str) {
    let result = []
    str.split('').forEach(char => {
        result.unshift(char);
    });
    return result.join('');
}
console.log(reverse('hello'));

// Find the smallest number in an array
function getSmallest(arr) {
    let min = arr[0];
    arr.forEach(num => {
        if (num < min) min = num;
    })
    return min;
}
console.log(getSmallest([5 ,2, 7, 1]));

console.log('-----------');

// 5 kyu Challenge: “Longest Consecutive Sequence”
// Given an unsorted array of numbers, return the length of the longest sequence of consecutive integers (in any order).

// Logic: Get all the consecutive sequence, then return the longest.
// Question, how the fuck do we gell all the consecutive sequence?
// i. Sort the array first
// Return the longest


// The logic has flawes, create new ones.

// Pseudocode:
// start
// create function getLongestConsecutiveSequence() that accepts array
//
// i. sort the array first
// for i from 0 to array length - 1
//      for j from 0 to array length -2
//          if (arr[i] < arr[j]) [arr[i], arr[j]] = [arr[j], arr[i]]
//          endif
//      endfor
// endfor
//
// ii. get the all consecutive sequence
// set sequence to empty array
// for each number of array
//      set set to empty array
//      for i from 0 to length of array - 1
//          if number + i == arr[i]
//              push arr[i] to set
//          endif
//      endfor
//      if set.length > 1 sequence.push(set)
//      endif
// endfor
//
// iii. return the sequence with longest consecutive sequence
// set max to sequence[0]
// for each set of sequence
//      if set.length > max.length
//          max = set
//      endif
// endfor
//
// return max
// end

 

// function getLongestConsecutiveSequence(arr) {

//     if (arr.length === 0) return 0;

//     // i. sort the array
//     for (let i = 0; i < arr.length; i++) {
//         for (let j = 0; j < arr.length - 1; j++) {
//             if (arr[i] < arr[j]) [arr[i], arr[j]] = [arr[j], arr[i]];
//         }
//     }

//     // ii. get the all consecutive sequence
//     let sequence = [];
//     arr.forEach(num => {

//         let set = [];
//         for (let i = 0; i < arr.length; i++) {
//             if (num + i === arr[i]) set.push(arr[i]);
//         }

//         sequence.push(set);
//     })

//     // iii. return the sequence with longest consecutive sequence
//     let max = sequence[0];
//     sequence.forEach(set => {
//         if (set.length > max.length) max = set;
//     })

//     return max.length;
// }

// function getLongestConsecutiveSequence(arr) {
    
//     if (arr.length === 0) return 0;

//     for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr.length - 1 - i; j++) { 
//         if (arr[j] > arr[j + 1]) {
//             [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]; // swap
//         }
//     }
// }


//     let maxLen = 1;
//     let currentLen = 1;

//     for (let i = 1; i < arr.length; i++) {
//         if (arr[i] === arr[i - 1]) {
//             continue;
//         } else if (arr[i] === arr[i-1] + 1) {
//             currentLen++;
//         } else {
//             currentLen = 1;
//         }

//         if (currentLen > maxLen) {
//             maxLen = currentLen;
//         }
//     }

//     return maxLen;
// }

// Refactored version:
function getLongestConsecutiveSequence(arr) {
    if (arr.length === 0) return 0;

    // Sort ascending using built-in sort (clean + fast)
    arr.sort((a, b) => a - b);

    let maxLen = 1;
    let currentLen = 1;

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] === arr[i - 1]) continue;          
        if (arr[i] === arr[i - 1] + 1) currentLen++;
        else currentLen = 1;                          

        if (currentLen > maxLen) maxLen = currentLen; 
    }

    return maxLen;
}

console.log(getLongestConsecutiveSequence([])); // 0  → empty
console.log(getLongestConsecutiveSequence([5])); // 1  → single element
console.log(getLongestConsecutiveSequence([2,2,2])); // 1  → duplicates only
console.log(getLongestConsecutiveSequence([1,2,3,4])); // 4  → perfect sequence
console.log(getLongestConsecutiveSequence([4,1,3,2])); // 4  → unsorted perfect sequence
console.log(getLongestConsecutiveSequence([100,4,200,1,3,2])); // 4  → classic test
console.log(getLongestConsecutiveSequence([9,1,20,2,3,10])); // 3

// Exercise: Check if an array is a repeating sequence.
// Goal: Given an array, check if the whole array is made of one sequence repeated multiple times.

// Pseudocode:
// start
// create function isRepeatingSequence(array)
// if array.length <= 1 then 
//      return true
// endif
// for size from 1 to half of array length - 1
//      set pattern to array.slice(0, size)
//          
//      for i from size length of array - 1
//          if (arr.slice(i, i + size).join(',') !== pattern.join(','))
//              return false
//          endif
//      endfor
//      return true
// endfor
// return true
// end

function isRepeatingSequence(array) {
    if (array.length !== 0) {
        
    }
    return true;
}

console.log(isRepeatingSequence(1, 2, 3, 1, 2, 3, 5)); // false
console.log(isRepeatingSequence(1, 2, 5, 3, 2, 6)); // false

// let array = [1, 2, 3, 1, 2, 3]
// console.log(array.slice(0, 2).join('') === array.slice(3, 5).join('') ? true : false);
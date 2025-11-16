// Pattern 5: isArithmetic()
// Goal: Check if an array forms an arithmetic sequence
// (meaning the difference between consecutive elements is always the same)

// Logic:
// difference = arr[1] - arr[0]
// check if every next - current === difference

// Pseudocode:
// start
// create function isArithmetic() that accepts array
// if arr.length < 2 return true
// set diff to arr[1] - arr[0]
// for i from 0 to arr.length - 2
//      set current to arr[i]
//      set next to arr[i + 1]
//      if next - current !== diff
//          return false
//      endif
// endfor
// return true
// end

// function isArithmetic(arr) {
//     if (arr.length < 2) return true;

//     const diff = arr[1] - arr[0];
//     for (let i = 0; i < arr.length - 1; i++) {
//         let curr = arr[i];
//         let next = arr[i + 1];

//         if (next - curr !== diff) return false;
//     }

//     return true;
// }

// Refactored version:
function isArithmetic(arr) {
    if (arr.length < 2) return true;

    const diff = arr[1] - arr[0];

    for (let i = 0; i < arr.length - 1; i++) {
        
        if (arr[i + 1] - arr[i] !== diff) return false;
    }

    return true;
}


console.log(isArithmetic([2, 4, 6, 8])); // true
console.log(isArithmetic([5, 5, 5, 5])); // true
console.log(isArithmetic([10, 7, 4, 1])); // true
console.log(isArithmetic([3, 6, 10])); // false
console.log('-------------')

// Pattern 6: isZigzag()
// Goal: Check if an array alternates up then down then up then down... or down then up then down then up...

// Logic:
// a < b > c < d > e ... OR a > b < c > d < e ...
// If the item with odd index is

// Pseudocode:
// start
// create function isZigzag() that accepts array
// 

console.log(isZigzag([1, 3, 2, 4, 3])); // true
console.log(isZigzag([5, 2, 8, 1, 9])); // false
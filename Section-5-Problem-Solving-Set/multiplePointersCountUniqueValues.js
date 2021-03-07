// Multiple Potiner Problem
//Implement a function called countUniqueValues, which accepts a sorted array, 
//and counts the unique values in the array.

function countUniqueValues (array) {
    let counter = 0;
    let prevNum = 0;

    for (let num of array) {
        if (num !== prevNum) {
            ++counter;
            prevNum = num;
        }
    }
    return counter;
}

console.log(countUniqueValues([1,1,1,1,1,2]))
console.log(countUniqueValues([]));
console.log(countUniqueValues([-2,-1,-1,0,1]));
console.log(countUniqueValues([1,2,3,4,4,4,7,7,12,12,13]));



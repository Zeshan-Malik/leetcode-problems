// ---------------------Problem Statement------------------------

//2733. Neither Minimum nor Maximum

// Given an integer array nums containing distinct positive integers, find and return any number from the array that is neither the minimum nor the maximum value in the array, or -1 if there is no such number.

// Return the selected integer.



// ---------------------------Solution-------------------------------

const findNonMinOrMax =  (nums) => {
    if (nums.length <= 2) return -1
    let sortedArr = nums.sort((a, b) => a - b)
    let min = sortedArr[0]
    let max = sortedArr[nums.length - 1]
    let res = -1
    for (const n of nums) {
        if (n > min && n < max) {
            res = n;
            break
        }
    }
    return res

};


console.log(findNonMinOrMax([3,2,1,4]))

console.log(findNonMinOrMax([1,2]))

console.log(findNonMinOrMax([2,1,3]))


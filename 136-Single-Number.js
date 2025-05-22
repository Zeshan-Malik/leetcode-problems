// ---------------------Problem Statement------------------------

// Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.

// You must implement a solution with a linear runtime complexity and use only constant extra space


// ---------------------------Solution-------------------------------


var singleNumber = function(nums) {
    for(const n of nums){
        if(nums.indexOf(n) ==nums.lastIndexOf(n)) return n
    }
};


console.log(singleNumber([2,2,1]))

console.log(singleNumber([4,1,2,1,2]))

console.log(singleNumber([1]))
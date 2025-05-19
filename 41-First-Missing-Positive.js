// ---------------------Problem Statement------------------------

// 41. First Missing Positive

// Given an unsorted integer array nums. Return the smallest positive integer that is not present in nums.

// You must implement an algorithm that runs in O(n) time and uses O(1) auxiliary space.


// ---------------------------Solution-------------------------------


const firstMissingPositive = (nums) => {
    let n = nums.length;

    // Step 1: Replace negative numbers, zeros, and numbers larger than n with n+1
    for (let i = 0; i < n; i++) {
        if (nums[i] <= 0 || nums[i] > n) {
            nums[i] = n + 1;
        }
    }

    // Step 2: Mark numbers as negative to indicate presence
    for (let i = 0; i < n; i++) {
        let num = Math.abs(nums[i]);
        if (num <= n) {
            nums[num - 1] = -Math.abs(nums[num - 1]);
        }
    }

    // Step 3: Find the first positive index
    for (let i = 0; i < n; i++) {
        if (nums[i] > 0) {
            return i + 1;
        }
    }

    // If all numbers are present, return n+1
    return n + 1;
};



console.log(firstMissingPositive([1,2,0]))
console.log(firstMissingPositive([3,4,-1,1]))
console.log(firstMissingPositive([7,8,9,11,12]))
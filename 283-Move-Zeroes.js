
// ---------------------Problem Statement------------------------

// Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

// Note that you must do this in-place without making a copy of the array.


// ---------------------------Solution-------------------------------


const moveZeroes = (nums) => {
   for(i=0; i<nums.length-1; i++){
    for(j=i; j<nums.length; j++){
        if(nums[i] ==0 && nums[j] !==0){
            let temp = nums[j]
            nums[j] = nums[i]
            nums[i] = temp
        }
    }
   }
   return nums

};

console.log(moveZeroes([0,1,0,3,12]))
console.log(moveZeroes([0]))

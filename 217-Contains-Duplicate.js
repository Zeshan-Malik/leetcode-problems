// ---------------------Problem Statement------------------------

// Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.


// ---------------------------Solution-------------------------------


const containsDuplicate = (nums) => {
    let data ={}
    let t1 = new Set(nums)
    if(nums.length ==1) return false
    if(t1.size ==1) return true

    for(const n of nums){
        data[n] = (data[n] || 0) +1
    } 

    let temp = new Set(Object.values(data));
    return (temp.size >=2)
};

console.log(containsDuplicate([1,2,3,1]))

console.log(containsDuplicate([1,2,3,4]))

console.log(containsDuplicate([1,1,1,3,3,4,3,2,4,2]))
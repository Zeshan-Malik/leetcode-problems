// ---------------------Problem Statement------------------------

// Given an integer array arr, return true if there are three consecutive odd numbers in the array. Otherwise, return false.



// ---------------------------Solution-------------------------------

var threeConsecutiveOdds = function(arr) {
    if(arr.length<3)return false;

    let check = false;

    for(i=2; i<arr.length; i++){
        if(arr[i]%2 ==1 && arr[i-1]%2 ==1 && arr[i-2]%2 ==1){
            check = true
            break
        }
    }
    return check
};


console.log(threeConsecutiveOdds([2,6,4,1]))
console.log(threeConsecutiveOdds([1,2,34,3,4,5,7,23,12]))
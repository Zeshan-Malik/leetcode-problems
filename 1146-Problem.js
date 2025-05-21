// ---------------------Problem Statement------------------------

// Given an array arr of integers, check if there exist two indices i and j such that :

// i != j
// 0 <= i, j < arr.length
// arr[i] == 2 * arr[j]



// ---------------------------Solution-------------------------------

const checkIfExist = (arr) => {
    let exist = false

    for(const n in arr){
        if(arr[n] ==0 && arr.indexOf(arr[n]) !== arr.lastIndexOf(arr[n]) ){
          exist = true;
            break
        }
        else if(arr[n] && arr.indexOf(2*arr[n]) !==-1){
            console.log("2",arr[n])
            exist = true;
            break
        }
    }
    return exist
};

console.log(checkIfExist([10,2,5,3]))
console.log(checkIfExist([3,1,7,11]))
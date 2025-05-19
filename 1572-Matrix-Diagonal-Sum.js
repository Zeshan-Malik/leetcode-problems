// ---------------------Problem Statement------------------------

// 1572. Matrix Diagonal Sum

// Given a square matrix mat, return the sum of the matrix diagonals.

// Only include the sum of all the elements on the primary diagonal and all the elements on the secondary diagonal that are not part of the primary diagonal.



// ---------------------------Solution-------------------------------


var diagonalSum = function(mat) {
    let sum = 0;

    for(i=0;i<mat.length; i++){
        for(j=0; j<mat.length; j++){
            if(i ==j){
                sum += mat[i][j]
            }
            if(i !==j && (i+j) == (mat.length-1)) sum += mat[i][j]
        }
    }
    return sum
};

console.log(diagonalSum([[1,2,3],[4,5,6],[7,8,9]]))

console.log(diagonalSum([[1,1,1,1],[1,1,1,1],[1,1,1,1],[1,1,1,1]]))

console.log(diagonalSum([[5]]))
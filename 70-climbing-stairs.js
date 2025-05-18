
// ---------------------Problem Statement------------------------

// You are climbing a staircase. It takes n steps to reach the top.

// Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?


// ---------------------------Solution-------------------------------

// Concept
// After dry run we can see that number of possible ways is equal to the nth fibonacci number


const climbStairs = (n) => {
    if(n<=3)return n
    let fibo_Series = [1,2,3]
    for(i=3; i<n; i++){
        let nextValue = fibo_Series[fibo_Series.length-2] + fibo_Series[fibo_Series.length-1]
        fibo_Series.push(nextValue)
    }
    return fibo_Series[n-1]
};

console.log(climbStairs(5))
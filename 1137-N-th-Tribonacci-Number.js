
// ---------------------Problem Statement------------------------

// The Tribonacci sequence Tn is defined as follows: 

// T0 = 0, T1 = 1, T2 = 1, and Tn+3 = Tn + Tn+1 + Tn+2 for n >= 0.

// Given n, return the value of Tn.


const tribonacci = (n)=> {
    if(!n) return 0

    else if(n<=2) return 1
    
    let sum = 0;
    let T0=0
    let T1 = 1
    let T2 = 1

    for(i=3; i<=n; i++){
        sum = T0+T1+T2
        T0 = T1
        T1=T2
        T2=sum
    }

    return sum
};


console.log(tribonacci(4))
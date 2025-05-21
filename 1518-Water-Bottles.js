// ---------------------Problem Statement------------------------

// There are numBottles water bottles that are initially full of water. You can exchange numExchange empty water bottles from the market with one full water bottle.

// The operation of drinking a full water bottle turns it into an empty bottle.

// Given the two integers numBottles and numExchange, return the maximum number of water bottles you can drink.



// ---------------------------Solution-------------------------------


const numWaterBottles = (numBottles, numExchange) => {
    let count = numBottles + Math.floor(numBottles / numExchange);
    let remaining = numBottles % numExchange;
    let refill = Math.floor(numBottles / numExchange) + remaining;
    remaining = 0;
    
    while (refill >= numExchange) {
        count += Math.floor(refill / numExchange);
        remaining = Math.floor(refill / numExchange) + refill % numExchange
        refill = remaining;
        remaining = 0
    }

    return count;
};
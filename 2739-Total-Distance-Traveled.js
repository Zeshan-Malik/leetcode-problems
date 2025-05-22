// ---------------------Problem Statement------------------------

// A truck has two fuel tanks. You are given two integers, mainTank representing the fuel present in the main tank in liters and additionalTank representing the fuel present in the additional tank in liters.

// The truck has a mileage of 10 km per liter. Whenever 5 liters of fuel get used up in the main tank, if the additional tank has at least 1 liters of fuel, 1 liters of fuel will be transferred from the additional tank to the main tank.

// Return the maximum distance which can be traveled.

// Note: Injection from the additional tank is not continuous. It happens suddenly and immediately for every 5 liters consumed.



// ---------------------------Solution-------------------------------


const distanceTraveled = (mainTank, additionalTank) => {
    let miles = 0

    while (mainTank > 0) {
        if (mainTank >= 5) {
            miles += 50;
        } else {
            miles += (mainTank) * 10;
        }
        if (additionalTank > 0) {
            mainTank = mainTank - 4
        } else {
            mainTank = mainTank - 5
        }
        additionalTank--
    }
    return miles

};



console.log(distanceTraveled(5))

console.log(distanceTraveled(1))
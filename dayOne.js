const calculateMass = array => {
    let totalMass = 0;
    array.forEach(item => totalMass += Math.floor(item / 3) - 2);
    return totalMass;
};

const calculateFuel = array => {
    let totalFuel = 0;
    array.forEach(item => {
        let currentValue = item;
        while(Math.floor(currentValue / 3) - 2 > 0) {
            if(Math.floor(currentValue / 3) - 2 > 0){
                totalFuel += Math.floor(currentValue / 3) - 2;
            }
            currentValue = Math.floor(currentValue / 3) - 2;
        }
    })
    return totalFuel;
};

module.exports = {
    calculateMass,
    calculateFuel,
};
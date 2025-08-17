const leapYears = function(year) {
    if (!(year % 100 === 0) && ((year % 4 === 0))) {
        return true
    } else if ((year % 400 === 0)) {
        return true
    }
    return false
};

console.log(leapYears(1))
console.log(leapYears(4))
console.log(leapYears(60))
console.log(leapYears(100))
console.log(leapYears(400))


// Do not edit below this line
module.exports = leapYears;

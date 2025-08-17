const repeatString = function(string, amount) {

    if (amount<0) {
        return "ERROR"
    }

    let repeatedString = "";
    for (i=1; i<= amount; i++) {
        repeatedString += string;
    }
    return repeatedString;
};

// Do not edit below this line
module.exports = repeatString;

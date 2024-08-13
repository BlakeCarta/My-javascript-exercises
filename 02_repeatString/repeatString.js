const repeatString = function(string, num) {
    let fullString = '';
    if (num < 0) {
        return "ERROR";
    }
    
    for (let index = 0; index < num; index++) {
        fullString += string;
    }
    return fullString;
};

// Do not edit below this line
module.exports = repeatString;

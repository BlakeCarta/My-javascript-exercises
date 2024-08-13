const leapYears = function(year) {
    if (year % 400 == 0){
        //Leap
        return true;
    }
    if (year % 100 == 0){
        //not
        return false;
    }
    if (year % 4 == 0){
        //Leap
        return true;
    }
    return false;
};

// Do not edit below this line
module.exports = leapYears;

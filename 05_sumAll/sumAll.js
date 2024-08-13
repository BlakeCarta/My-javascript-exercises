const sumAll = function(begin, end) {
    if (begin < 0 || end < 0) {
        return "ERROR";
    }
    if ((begin%1 != 0) || (end%1 != 0)){
        return "ERROR";
    }
    if ((typeof(begin) != "number") || typeof(end) != "number"){
        return "ERROR";
    }

    let temp1 = 0;
    let temp2 = 0;
    if (end < begin) {
        temp1 = begin;
        temp2 = end;

        begin = temp2;
        end = temp1;
    }
    let sum = 0;
    let i = 0;
    for (i = begin; i <= end; i++) {
        sum = sum + i;
    }
    return sum;
};
sumAll(1,4);
// Do not edit below this line
module.exports = sumAll;

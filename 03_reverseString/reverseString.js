const reverseString = function(string) {
    if (string.length == 0) {
        return '';
    }
    let reversedString = [string.length];
    for (let i=0; i < string.length; i++) {
        reversedString[i] = string[string.length -1 - i];
    }
    return reversedString.join('');
};

// Do not edit below this line
module.exports = reverseString;

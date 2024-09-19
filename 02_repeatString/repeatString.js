const repeatString = function(stringText, amountRepeat) {
    let repeatedString = '';
    if (amountRepeat < 0){
        repeatedString = 'ERROR';
        return repeatedString;
    }
    for (let i = 0; i < amountRepeat; i++) {
        repeatedString += stringText;
    }
    return repeatedString;
};

// Do not edit below this line
module.exports = repeatString;

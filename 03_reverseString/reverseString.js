const reverseString = function(textS) {
    let reverseText = ''
    for(let i = textS.length - 1; i >= 0; i--) {
        reverseText += textS[i];
    }
    return reverseText;
};

// Do not edit below this line
module.exports = reverseString;

const palindromes = function (word) {
    const alfaNum = '0123456789abcdefghijklmnopqrstuvwxyz'

    let cleanedArr = word
    .toLowerCase()
    .split('')
    .filter(word => alfaNum.includes(word))
    .join('');
    
    let reverseArr = cleanedArr.split('').reverse().join('');

    return cleanedArr === reverseArr;
};
// Do not edit below this line
module.exports = palindromes;

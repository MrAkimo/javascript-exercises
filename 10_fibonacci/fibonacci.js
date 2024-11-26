const fibonacci = function( pos) {
    if(pos == 0) return 0
    if(pos < 0) return 'OOPS'
    let arrayFibo = [1,1];
    for (let index = 2; index <= pos; index++) {
        arrayFibo.push(arrayFibo[index - 1] + arrayFibo[index - 2])  
    }
    
    console.table(arrayFibo);
    console.log(arrayFibo[pos])
    return arrayFibo[pos - 1];
};

fibonacci(4)

// Do not edit below this line
module.exports = fibonacci;

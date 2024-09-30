const sumAll = function(initialValue, endValue) {
    let sumTotal = 0;
    if( Number.isInteger(initialValue) && Number.isInteger(endValue)) {
        if(initialValue > 0 && endValue > 0){
            if(initialValue > endValue) {
                for(let i = endValue; i <= initialValue; i++) {
                    sumTotal += i;
                }
                return sumTotal;
            } else {
                for(let i = initialValue; i <= endValue; i++) {
                    sumTotal += i;
                }
                return sumTotal;
            }
        } else return 'ERROR';
    } else {
        return 'ERROR';
    }
};

// Do not edit below this line
module.exports = sumAll;

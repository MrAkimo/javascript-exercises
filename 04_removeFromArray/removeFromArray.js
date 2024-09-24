const removeFromArray = function(arrayData, ...toRemove) {

    for (let x = 0; x < toRemove.length; x++){
        for(let i = 0; i < arrayData.length; i++){
            if (arrayData[i] === toRemove[x]) {
                arrayData.splice(i,1);
                i -=1
            }
        }
    }
    return arrayData
};

// Do not edit below this line
module.exports = removeFromArray;

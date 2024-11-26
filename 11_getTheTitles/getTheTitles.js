const getTheTitles = function(books) {
    return books.reduce((acc, curr) => acc.concat(curr.title), [])
};

// Do not edit below this line
module.exports = getTheTitles;

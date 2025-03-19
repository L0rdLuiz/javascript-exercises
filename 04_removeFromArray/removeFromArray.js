const removeFromArray = function(array, remove) {
    var newArray = [];

    for (var i = 0; i < array.length; i++) {
        if (array[i] !== remove) {
            newArray.push(array[i]);
        }
    }

    return newArray;
};

removeFromArray([1,2,3,4], 3);

// Do not edit below this line
module.exports = removeFromArray;

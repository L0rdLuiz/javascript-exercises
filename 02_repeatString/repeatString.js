const repeatString = function(word, num) {
    if (num < 0) {
        return "ERROR";
    }
    let string = "";
    for (i = 0; i< num; i++) {
        string += word;
    }
    return string;
};

repeatString('hey', 3);

// Do not edit below this line
module.exports = repeatString;

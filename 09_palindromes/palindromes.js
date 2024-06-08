const palindromes = function (str) {
    let altStr = str.replaceAll(" ","").replaceAll(/\W/ig, "").toUpperCase();
    let strArray = altStr.split("");
    let reversedArray = strArray.slice().reverse()

    return JSON.stringify(strArray) === JSON.stringify(reversedArray);
};

// Do not edit below this line
module.exports = palindromes;

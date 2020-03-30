// Create a function that takes in two strings and compares if they have identical character counts.

function strPermutation(str1, str2) {
    if (str1.length !== str2.length) return false;

    const sortedStr1 = str1
        .split("")
        .sort()
        .join("");

    const sortedStr2 = str2
        .split("")
        .sort()
        .join("");

    return sortedStr1 === sortedStr2;
}

module.exports = strPermutation;
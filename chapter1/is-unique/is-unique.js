// Implement a function that checks for all unique characters in a string.
function uniqueChars(str) {
    const uniqueSet = new Set(str);
    const uniqueCharArr = [...uniqueSet];

    return uniqueCharArr.join("");
}

module.exports = uniqueChars;
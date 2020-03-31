function compressStr(str) {
    let newStr = "";
    let charFrequency = 0;

    for (let i = 0; i < str.length; i++) {
        charFrequency++;

        if (i + 1 >= str.length || str.charAt(i) !== str.charAt(i + 1)) {
            newStr += String(str.charAt(i)) + String(charFrequency);
            charFrequency = 0;
        }
    }

    if (newStr.length < str.length) {
        return newStr;
    }

    return str;
}

module.exports = compressStr;
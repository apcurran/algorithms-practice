// Implement a function that replaces all spaces in a string with "%20".

// Method 1 Regex
function urlify(str, strLength) {
    const realStr = str.slice(0, strLength);
    const replacedStrSpaces = realStr.replace(/ /g, "%20");

    return replacedStrSpaces;
}

// Method 2 Loop
function urlify2(str, strLength) {
    let newStr = "";
    const noTrailingSpacesStr = str.trim();

    for (const char of noTrailingSpacesStr) {
        if (char === " ") {
            newStr += "%20";
        } else {
            newStr += char;
        }
    }

    return newStr;
}

console.log(urlify('Mr John Smith    ', 13)) // Mr%20John%20Smith
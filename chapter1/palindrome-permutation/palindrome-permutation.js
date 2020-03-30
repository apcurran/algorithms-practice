// Create a function to check if a given string is a permutation of a palindrome.

function palindromePermutation(str) {
    let charsMap = new Map();
    let charCount = 0;

    for (const char of str) {
        if (char === " ") continue;

        if (charsMap.has(char)) {
            charsMap.delete(char);
        } else {
            charsMap.set(char, true);
        }

        charCount++;
    }

    if (charCount % 2 === 0) {
        return charsMap.size === 0;
    } else {
        return charsMap.size === 1;
    }
}

module.exports = palindromePermutation;
function isStringRotation(str, rotatedStr) {
    if (str.length !== rotatedStr.length) return false;

    return rotatedStr.repeat(2).includes(str);
}

module.exports = isStringRotation;
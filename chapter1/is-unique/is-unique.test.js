const uniqueChars = require("./is-unique");

test("'abc' string contains all unique characters", () => {
    expect(uniqueChars("abc")).toBe("abc");
});

test("'abbcccd' string should only contain unique characters 'abcd'", () => {
    expect(uniqueChars("abbcccd")).toBe("abcd");
});
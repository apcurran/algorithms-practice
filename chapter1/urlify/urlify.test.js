const urlify = require("./urlify");

test("string 'Mr John Smith    ' should become the new string 'Mr%20John%20Smith'", () => {
    expect(urlify("Mr John Smith", 13)).toBe("Mr%20John%20Smith");
});
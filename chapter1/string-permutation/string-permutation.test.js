const strPermutation = require("./string-permutation");

test("string 'aba' is a permutation of the string 'aab'", () => {
    expect(strPermutation("aba", "aab")).toBe(true);
});

test("string 'daK' is a permutation of the string 'Kad'", () => {
    expect(strPermutation("daK", "Kad")).toBe(true);
});

test("string 'pac' is not a permutation of the string 'abc'", () => {
    expect(strPermutation("pac", "abc")).toBe(false);
});
const palindromePermutation = require("./palindrome-permutation");

test("string 'taco cat' is a palindrome permutation", () => {
    expect(palindromePermutation("taco cat")).toBe(true);
});

test("string 'atco tac' is a palindrome permutation", () => {
    expect(palindromePermutation("atco tac")).toBe(true);
});

test("string 'green' is not a palindrome permutation", () => {
    expect(palindromePermutation("jam")).toBe(false);
});
const compressStr = require("./compress-string");

test("string, 'aabbbcccdd', should count the letter occurences with numbers and transform into 'a2b3c3d2'", () => {
    expect(compressStr("aabbbcccdd")).toBe("a2b3c3d2");
});
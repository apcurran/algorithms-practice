const isStringRotation = require("./string-rotation");

test("determines if string2 is a rotation of string1", () => {
    expect(isStringRotation("vegetablegarden", "gardenvegetable")).toBe(true);
});

test("determines if string2 is a rotation of string1", () => {
    expect(isStringRotation("vegetablegarden", "denvegetablegar")).toBe(true);
});
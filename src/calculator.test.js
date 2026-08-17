const calculator = require("./calculator");

test("addition", () => {
    expect(calculator.add(10, 5)).toBe(15);
});

test("subtraction", () => {
    expect(calculator.subtract(10, 5)).toBe(5);
});

test("multiplication", () => {
    expect(calculator.multiply(10, 5)).toBe(50);
});

test("division", () => {
    expect(calculator.divide(10, 5)).toBe(2);
});
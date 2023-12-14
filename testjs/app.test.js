const {sum, printName} = require('./app');

test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
});

test('prints my name', () => {
    expect(printName("Luke")).toBe("Luke is my name");
});
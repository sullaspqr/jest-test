const sum = require('./sum');
describe('Sum komponens', () => {
test(' adjuk össze 1 + 2-t, ami 3', () => {
    expect(sum(1, 2)).toBe(3);
});
});
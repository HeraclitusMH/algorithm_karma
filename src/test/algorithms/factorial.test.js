describe('Factorial', function () {

    it('0 || Recursive Strategy', function () {
        expect(factorial(0)).toBe(1);
    });
    it('1 || Recursive Strategy', function () {
        expect(factorial(1)).toBe(1);
    });
    it('2 || Recursive Strategy', function () {
        expect(factorial(2)).toBe(2);
    });
    it('3 || Recursive Strategy', function () {
        expect(factorial(3)).toBe(6);
    });
    it('4 || Recursive Strategy', function () {
        expect(factorial(4)).toBe(24);
    });
    it('5 || Recursive Strategy', function () {
        expect(factorial(5)).toBe(120);
    });
    it('6 || Recursive Strategy', function () {
        expect(factorial(6)).toBe(720);
    });
    it('7 || Recursive Strategy', function () {
        expect(factorial(7)).toBe(5040);
    });
});
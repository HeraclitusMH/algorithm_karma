describe('Count unique values', function () {
    
    it('all different values || Frequency Counter', function () {
        const arr1 = [1,3,5,6,9,12,16];
        expect(countUniqueValuesFq(arr1)).toBe(7);
    });

    it('couples of same values || Frequency Counter', function () {
        const arr1 = [1,1,5,6,9,9,16];
        expect(countUniqueValuesFq(arr1)).toBe(5);
    });

    it('three same value || Frequency Counter', function () {
        const arr1 = [1,1,1,6,9,9,16,16,16,17,19];
        expect(countUniqueValuesFq(arr1)).toBe(6);
    });

    it('all with same value || Frequency Counter', function () {
        const arr1 = [1,1,1,1,1,1,1,1];
        expect(countUniqueValuesFq(arr1)).toBe(1);
    });

    it('negative values || Frequency Counter', function () {
        const arr1 = [-1,-1,0,1,1,1,2,3,5,7];
        expect(countUniqueValuesFq(arr1)).toBe(7);
    });

    it('no values || Frequency Counter', function () {
        const arr1 = [];
        expect(countUniqueValuesFq(arr1)).toBe(0);
    });

    it('all different values || Multiple Pointers', function () {
        const arr1 = [1,3,5,6,9,12,16];
        expect(countUniqueValuesMp(arr1)).toBe(7);
    });

    it('couples of same values || Multiple Pointers ', function () {
        const arr1 = [1,1,5,6,9,9,16];
        expect(countUniqueValuesMp(arr1)).toBe(5);
    });

    it('three same value || Multiple Pointers', function () {
        const arr1 = [1,1,1,6,9,9,16,16,16,17,19];
        expect(countUniqueValuesMp(arr1)).toBe(6);
    });

    it('all with same value || Multiple Pointers', function () {
        const arr1 = [1,1,1,1,1,1,1,1];
        expect(countUniqueValuesMp(arr1)).toBe(1);
    });

    it('negative values || Multiple Pointers', function () {
        const arr1 = [-1,-1,0,1,1,1,2,3,5,7];
        expect(countUniqueValuesMp(arr1)).toBe(7);
    });

    it('no values || Multiple Pointers', function () {
        const arr1 = [];
        expect(countUniqueValuesMp(arr1)).toBe(0);
    });
});
describe('Same Pow', function () {
    
    it('right arrays', function () {
        const arr1 = [7,3,2,1,7,7,6];
        const arr2 = [49,49,36,1,49,4,9];
        expect(samePow(arr1,arr2)).toBe(true);
    });

    it('wrong arrays', function () {
        const arr1 = [7,3,2,1,7,7,6];
        const arr2 = [7,49,2,5,7,52,6];
        expect(samePow(arr1,arr2)).toBe(false);
    });

    it('wrong arrays with last number correct', function () {
        const arr1 = [7,3,2,1,7,7,6];
        const arr2 = [7,49,2,5,7,52,36];
        expect(samePow(arr1,arr2)).toBe(false);
    });

    it('second array one more element', function () {
        const arr1 = [7,3,2,1,7,7,6];
        const arr2 = [49,49,36,1,49,4,9,36];
        expect(samePow(arr1,arr2)).toBe(false);
    });

    it('first array one more element', function () {
        const arr1 = [7,3,2,1,7,7,6,7];
        const arr2 = [49,49,36,1,49,4,9];
        expect(samePow(arr1,arr2)).toBe(false);
    });

    it('right arrays || first refactoring', function () {
        const arr1 = [7,3,2,1,7,7,6];
        const arr2 = [49,49,36,1,49,4,9];
        expect(samePowRef(arr1,arr2)).toBe(true);
    });

    it('wrong arrays || first refactoring', function () {
        const arr1 = [7,3,2,1,7,7,6];
        const arr2 = [7,49,2,5,7,52,6];
        expect(samePowRef(arr1,arr2)).toBe(false);
    });

    it('second array one more element || first refactoring', function () {
        const arr1 = [7,3,2,1,7,7,6];
        const arr2 = [49,49,36,1,49,4,9,36];
        expect(samePowRef(arr1,arr2)).toBe(false);
    });

    it('first array one more element || first refactoring', function () {
        const arr1 = [7,3,2,1,7,7,6,7];
        const arr2 = [49,49,36,1,49,4,9];
        expect(samePowRef(arr1,arr2)).toBe(false);
    });

    it('right arrays || second refactoring', function () {
        const arr1 = [7,3,2,1,7,7,6];
        const arr2 = [49,49,36,1,49,4,9];
        expect(samePowRef2(arr1,arr2)).toBe(true);
    });

    it('wrong arrays || second refactoring', function () {
        const arr1 = [7,3,2,1,7,7,6];
        const arr2 = [7,49,2,5,7,52,6];
        expect(samePowRef2(arr1,arr2)).toBe(false);
    });

    it('second array one more element || second refactoring', function () {
        const arr1 = [7,3,2,1,7,7,6];
        const arr2 = [49,49,36,1,49,4,9,36];
        expect(samePowRef2(arr1,arr2)).toBe(false);
    });

    it('first array one more element || second refactoring', function () {
        const arr1 = [7,3,2,1,7,7,6,7];
        const arr2 = [49,49,36,1,49,4,9];
        expect(samePowRef2(arr1,arr2)).toBe(false);
    });
});
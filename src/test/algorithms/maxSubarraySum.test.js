describe('Max subarray sum', function () {
    
    it('no values , 2', function () {
        const arr1 = [];
        expect(maxSubarraySum(arr1,2)).toBe(null);
    });

    it('ordered values , 2', function () {
        const arr1 = [1,3,5,6,9,12,16];
        expect(maxSubarraySum(arr1,2)).toBe(28);
    });

    it('unordered values, 2', function () {
        const arr1 = [25,3,22,19,6,20,16];
        expect(maxSubarraySum(arr1,2)).toBe(41);
    });

    it('negative values, 2', function () {
        const arr1 = [-25,-3,-22,-19,-6,-20,-16];
        expect(maxSubarraySum(arr1,2)).toBe(-25);
    });

    it('negative values 2, 2', function () {
        const arr1 = [-25,-1,-22,-19,-6,-20,-16];
        expect(maxSubarraySum(arr1,2)).toBe(-23);
    });

    it('ordered values, 3', function () {
        const arr1 = [1,3,5,6,9,12,16];
        expect(maxSubarraySum(arr1,3)).toBe(37);
    });

    it('unordered values, 3', function () {
        const arr1 = [25,3,22,19,6,20,16];
        expect(maxSubarraySum(arr1,3)).toBe(50);
    });

    it('negative values, 3', function () {
        const arr1 = [-25,-3,-22,-19,-6,-20,-10];
        expect(maxSubarraySum(arr1,3)).toBe(-36);
    });

    it('negative values 2, 3', function () {
        const arr1 = [-25,-1,-22,-19,-6,-20,-16];
        expect(maxSubarraySum(arr1,3)).toBe(-42);
    });


    it('no values , 2 || Sliding Window', function () {
        const arr1 = [];
        expect(maxSubarraySumRef(arr1,2)).toBe(null);
    });

    it('ordered values , 2 || Sliding Window', function () {
        const arr1 = [1,3,5,6,9,12,16];
        expect(maxSubarraySumRef(arr1,2)).toBe(28);
    });

    it('unordered values, 2 || Sliding Window', function () {
        const arr1 = [25,3,22,19,6,20,16];
        expect(maxSubarraySumRef(arr1,2)).toBe(41);
    });

    it('negative values, 2 || Sliding Window', function () {
        const arr1 = [-25,-3,-22,-19,-6,-20,-16];
        expect(maxSubarraySumRef(arr1,2)).toBe(-25);
    });

    it('negative values 2, 2 || Sliding Window', function () {
        const arr1 = [-25,-1,-22,-19,-6,-20,-16];
        expect(maxSubarraySumRef(arr1,2)).toBe(-23);
    });

    it('ordered values, 3 || Sliding Window', function () {
        const arr1 = [1,3,5,6,9,12,16];
        expect(maxSubarraySumRef(arr1,3)).toBe(37);
    });

    it('unordered values, 3 || Sliding Window', function () {
        const arr1 = [25,3,22,19,6,20,16];
        expect(maxSubarraySumRef(arr1,3)).toBe(50);
    });

    it('negative values, 3 || Sliding Window', function () {
        const arr1 = [-25,-3,-22,-19,-6,-20,-10];
        expect(maxSubarraySumRef(arr1,3)).toBe(-36);
    });

    it('negative values 2, 3 || Sliding Window', function () {
        const arr1 = [-25,-1,-22,-19,-6,-20,-16];
        expect(maxSubarraySumRef(arr1,3)).toBe(-42);
    });
});
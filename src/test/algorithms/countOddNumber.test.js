describe('Collect odd numbers', function () {

    it('ordered numbers || Pure recursion', function () {
        let arr = [1,2,3,4,5,6,7];
        expect(collectOddNumbers(arr)).toEqual([1,3,5,7]);
    });

    it('ordered numbers with 0 || Pure recursion', function () {
        let arr = [0,1,2,3,4,5,6,7];
        expect(collectOddNumbers(arr)).toEqual([1,3,5,7]);
    });

    it('unordered numbers || Pure recursion', function () {
        let arr = [0,1,4,3,7,6,5];
        expect(collectOddNumbers(arr)).toEqual([1,3,7,5]);
    });

    it('all even || Pure recursion', function () {
        let arr = [2,4,8,12,16];
        expect(collectOddNumbers(arr)).toEqual([]);
    })

    it('all odds || Pure recursion', function () {
        let arr = [3,47,53,17,21];
        expect(collectOddNumbers(arr)).toEqual([3,47,53,17,21]);
    });
});
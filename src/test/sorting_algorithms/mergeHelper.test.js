describe('Merge Helper', function () {
    
    it('two ordered list same length', function () {
        const arr1 = [1,5,7,9,15,17,44];
        const arr2 = [2,4,6,8,18,19,46]
        expect(mergeHelper(arr1,arr2)).toEqual([1,2,4,5,6,7,8,9,15,17,18,19,44,46]);
    });

    it('two ordered list different length', function () {
        const arr1 = [1,5,7,9,15,17,44];
        const arr2 = [2,4,6,8,18]
        expect(mergeHelper(arr1,arr2)).toEqual([1,2,4,5,6,7,8,9,15,17,18,44]);
    });
    

});
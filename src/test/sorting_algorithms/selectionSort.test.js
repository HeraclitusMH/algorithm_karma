describe('Selection Sort', function () {
    
    it('unordered list', function () {
        const arr = [4,1,6,2,3];
        expect(selectionSort(arr)).toEqual([1,2,3,4,6]);
    });

    it('empty array', function () {
        const arr = [];
        expect(selectionSort(arr)).toEqual([]);
    });

    it('ordered list', function () {
        const arr = [1,5,7,9,15,17,44];
        expect(selectionSort(arr)).toEqual([1,5,7,9,15,17,44]);
    });

    it('one element array', function () {
        const arr = [1];
        expect(selectionSort(arr)).toEqual([1]);
    }); 

    it('negative numbers', function () {
        const arr = [-65,-101,6,3,8,2];
        expect(selectionSort(arr)).toEqual([-101,-65,2,3,6,8]);
    });

});
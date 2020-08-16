describe('Binary search', function () {
    
    it('case second half', function () {
        const arr = [1,4,6,8,15];
        expect(binarySearch(arr,8)).toEqual(3);
    });

    it('case first half', function () {
        const arr = [1,4,6,8,15];
        expect(binarySearch(arr,4)).toEqual(1);
    });

    it('first element', function () {
        const arr = [1,4,6,8,15];
        expect(binarySearch(arr,1)).toEqual(0);
    });

    it('last element', function () {
        const arr = [1,4,6,8,15];
        expect(binarySearch(arr,15)).toEqual(4);
    });

    it('empty vector', function () {
        const arr = [];
        expect(binarySearch(arr,8)).toEqual(-1);
    });

    it('vector with one element that exist', function () {
        const arr = [4];
        expect(binarySearch(arr,4)).toEqual(0);
    });

    it('vector with one element that doesn\'t exist', function () {
        const arr = [4];
        expect(binarySearch(arr,2)).toEqual(-1);
    });

     it('Negative numbers with element that doesn\'t exist', function () {
        const arr = [-7,-3,1,4,6,8,15];
        expect(binarySearch(arr,-2)).toEqual(-1);
    }); 

    it('element that doesn\'t exist', function () {
        const arr = [1,4,6,8,15];
        expect(binarySearch(arr,5)).toEqual(-1);
    });

});
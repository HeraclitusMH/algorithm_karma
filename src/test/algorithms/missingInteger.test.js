describe('PayEver test', function () {


    it('smaller 1 || n(logn)', function () {
        const arr = [6,3,-1,-7,-9,10,2];
        expect(missingInteger(arr)).toEqual(1);
    }); 
    
    it('smaller 2 || n(logn)', function () {
        const arr = [6,3,-1,-7,-9,10,2,1];
        expect(missingInteger(arr)).toEqual(4);
    })

    it('empty array || n(logn)', function () {
        const arr = [];
        expect(missingInteger(arr)).toEqual(1);
    })

    it('all negative numbers || n(logn)', function () {
        const arr = [-7,-13,-100000,-41];
        expect(missingInteger(arr)).toEqual(1);
    })

    it('smaller 1 || O(n)', function () {
        const arr = [6,3,-1,-7,-9,10,2];
        expect(missingIntegerRef(arr)).toEqual(1);
    }); 
    
    it('smaller 2 || O(n)', function () {
        const arr = [6,3,-1,-7,-9,10,2,1];
        expect(missingIntegerRef(arr)).toEqual(4);
    })

    it('empty array || O(n)', function () {
        const arr = [];
        expect(missingIntegerRef(arr)).toEqual(1);
    })

    it('all negative numbers || O(n)', function () {
        const arr = [-7,-13,-100000,-41];
        expect(missingIntegerRef(arr)).toEqual(1);
    })

    it('payever case || O(n)', function () {
        const arr = [1,2,3];
        expect(missingIntegerRef(arr)).toEqual(4);
    })

    it('smaller 1 || O(n) ++', function () {
        const arr = [6,3,-1,-7,-9,10,2];
        expect(missingIntegerRefBetter(arr)).toEqual(1);
    }); 
    
    it('smaller 2 || O(n) ++', function () {
        const arr = [6,3,-1,-7,-9,10,2,1];
        expect(missingIntegerRefBetter(arr)).toEqual(4);
    })

    it('empty array || O(n) ++', function () {
        const arr = [];
        expect(missingIntegerRefBetter(arr)).toEqual(1);
    })

    it('all negative numbers || O(n) ++', function () {
        const arr = [-7,-13,-100000,-41];
        expect(missingIntegerRefBetter(arr)).toEqual(1);
    })

    it('payever case || O(n) ++', function () {
        const arr = [1,2,3];
        expect(missingIntegerRefBetter(arr)).toEqual(4);
    })

});
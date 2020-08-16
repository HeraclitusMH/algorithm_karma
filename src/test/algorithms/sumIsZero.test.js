describe('sumIsZero', function () {

    it('all valid pair', function () {
        const arr = [-3,-2,-1,0,1,2,3] ;
        expect(sumIsZero(arr)).toBe('-3,3;-2,2;-1,1;');
    });

    it('all valid pairs with zero', function () {
        const arr = [-3,-2,-1,0,1,2,3] ;
        expect(sumIsZero(arr)).toBe('-3,3;-2,2;-1,1;');
    });

    it('one valid pair', function () {
        const arr = [-7,-2,-1,0,4,5,7] ;
        expect(sumIsZero(arr)).toBe('-7,7;');
    });

    it('one valid pair 2', function () {
        const arr = [-7,-2,-1,0,1,5,9] ;
        expect(sumIsZero(arr)).toBe('-1,1;');
    });

    it('two valid pair', function () {
        const arr = [-7,-2,-1,0,1,5,7] ;
        expect(sumIsZero(arr)).toBe('-7,7;-1,1;');
    });

    it('all valid pair || refactor', function () {
        const arr = [-3,-2,-1,0,1,2,3] ;
        expect(sumIsZeroRef(arr)).toBe('-3,3;-2,2;-1,1;');
    });

    it('all valid pairs with zero || refactor', function () {
        const arr = [-3,-2,-1,0,1,2,3] ;
        expect(sumIsZeroRef(arr)).toBe('-3,3;-2,2;-1,1;');
    });

    it('one valid pair || refactor', function () {
        const arr = [-7,-2,-1,0,4,5,7] ;
        expect(sumIsZeroRef(arr)).toBe('-7,7;');
    });

    it('one valid pair 2 || refactor', function () {
        const arr = [-7,-2,-1,0,1,5,9] ;
        expect(sumIsZeroRef(arr)).toBe('-1,1;');
    });

    it('two valid pair || refactor', function () {
        const arr = [-7,-2,-1,0,1,5,7] ;
        expect(sumIsZeroRef(arr)).toBe('-7,7;-1,1;');
    });
});
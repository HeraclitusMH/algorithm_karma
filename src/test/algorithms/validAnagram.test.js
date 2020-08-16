describe('Is valid anagram', function () {

    it('valid anagram', function () {
        const word1 = 'karma'
        const word2 = 'marka';
        expect(isValidAnagram(word1,word2)).toBe(true);
    });

    it('valid anagram different caps', function () {
        const word1 = 'Karma'
        const word2 = 'Marka';
        expect(isValidAnagram(word1,word2)).toBe(true);
    });

    it('unvalid anagram one more letter', function () {
        const word1 = 'Karma'
        const word2 = 'Markar';
        expect(isValidAnagram(word1,word2)).toBe(false);
    });

    it('unvalid anagram one less letter', function () {
        const word1 = 'Karma'
        const word2 = 'Mark';
        expect(isValidAnagram(word1,word2)).toBe(false);
    });

    it('unvalid anagram wrong letters', function () {
        const word1 = 'Karma'
        const word2 = 'Parma';
        expect(isValidAnagram(word1,word2)).toBe(false);
    });

    it('valid anagram || Refactor', function () {
        const word1 = 'karma'
        const word2 = 'marka';
        expect(isValidAnagramRef(word1,word2)).toBe(true);
    });

    it('valid anagram different caps|| Refactor', function () {
        const word1 = 'Karma'
        const word2 = 'Marka';
        expect(isValidAnagramRef(word1,word2)).toBe(true);
    });

    it('unvalid anagram one more letter || Refactor', function () {
        const word1 = 'Karma'
        const word2 = 'Markar';
        expect(isValidAnagramRef(word1,word2)).toBe(false);
    });

    it('unvalid anagram one less letter || Refactor', function () {
        const word1 = 'Karma'
        const word2 = 'Mark';
        expect(isValidAnagramRef(word1,word2)).toBe(false);
    });

    it('unvalid anagram wrong letters || Refactor', function () {
        const word1 = 'Karma'
        const word2 = 'Parma';
        expect(isValidAnagramRef(word1,word2)).toBe(false);
    });
});
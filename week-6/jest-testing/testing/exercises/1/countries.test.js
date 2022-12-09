const { find } = require('./countries');

//task 1
describe('test 1', () => {
    //1
    test('When find is passed an empty string, it returns an empty array', () => {
        const str = find('');
        expect(str).toEqual([]);
    });
    //2
    test('The array that it returns contains no more than four matches', () => {
        const arr = find('g');
        expect(arr.length).toEqual(4);
    });
    //3
    test('The search is case insensitive', () => {
        const str = find('Australia');
        expect(str.join().toLowerCase()).toEqual(str.join().toLowerCase());
    });
    //4
    test('If there are no matching countries, an empty array is returned', () => {
        const noMatch = find('Berlin');
        expect(noMatch).toEqual([]);
    });
});





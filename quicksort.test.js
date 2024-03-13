const quickSort = require('./quicksort');

test('quickSort([5, 1, 4, 2, 3]) to equal [1, 2, 3, 4, 5]', () => {
    expect(quickSort([5, 1, 4, 2, 3])).toEqual([1, 2, 3, 4, 5]);
});
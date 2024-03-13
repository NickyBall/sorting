const mergeSort = require('./mergesort');

test('mergeSort([5, 1, 4, 2, 3]) to equal [1, 2, 3, 4, 5]', () => {
    expect(mergeSort([5, 1, 4, 2, 3])).toEqual([1, 2, 3, 4, 5]);
});
import { isArray, isEquivalent, removeAllInPlace, removeInPlace } from './array';

describe('isArray', () => {
    it('should return false when given a non-array value', () => {
        expect(isArray(1)).toBe(false);
        expect(isArray(false)).toBe(false);
        expect(isArray('hello')).toBe(false);
        expect(isArray({})).toBe(false);
    });

    it('should return true when given an empty array value', () => {
        expect(isArray([])).toBe(true);
    });

    it('should return true when given a non-empty array value', () => {
        expect(isArray([1, 2, 3])).toBe(true);
    });
});

describe('isEquivalent', () => {
    it('should return true for two empty arrays', () => {
        expect(isEquivalent([], [])).toBe(true);
    });

    it('should return true for arrays with equivalent primitive values', () => {
        expect(isEquivalent([1, 2, 3], [1, 2, 3])).toBe(true);
        expect(isEquivalent(['a', 'b', 'c'], ['a', 'b', 'c'])).toBe(true);
        expect(isEquivalent([true, false], [true, false])).toBe(true);
    });

    it('should return false for arrays with different lengths', () => {
        expect(isEquivalent([1, 2], [1, 2, 3])).toBe(false);
        expect(isEquivalent([1, 2, 3], [1, 2])).toBe(false);
        expect(isEquivalent([], [1])).toBe(false);
    });

    it('should return false for arrays with different values', () => {
        expect(isEquivalent([1, 2, 3], [1, 2, 4])).toBe(false);
        expect(isEquivalent(['a', 'b'], ['a', 'c'])).toBe(false);
        expect(isEquivalent([true], [false])).toBe(false);
    });

    it('should return true for arrays with equivalent nested arrays', () => {
        expect(isEquivalent([1, [2, 3], 4], [1, [2, 3], 4])).toBe(true);
    });

    it('should return false for arrays with different nested arrays', () => {
        expect(isEquivalent([1, [2, 3], 4], [1, [2, 4], 4])).toBe(false);
    });

    it('should return true for deeply nested arrays', () => {
        expect(isEquivalent([[[1]]], [[[1]]])).toBe(true);
        expect(isEquivalent([1, [2, [3, [4]]]], [1, [2, [3, [4]]]])).toBe(true);
    });

    it('should return false for deeply nested arrays with differences', () => {
        expect(isEquivalent([[[1]]], [[[2]]])).toBe(false);
        expect(isEquivalent([1, [2, [3, [4]]]], [1, [2, [3, [5]]]])).toBe(false);
    });
});

describe('removeAllInPlace', () => {
    it('should remove all occurrences of an item that exists multiple times', () => {
        const arr = [1, 2, 2, 3, 2, 4];
        removeAllInPlace(arr, 2);
        expect(arr).toEqual([1, 3, 4]);
    });

    it('should remove an item that exists once in the array', () => {
        const arr = [1, 2, 3];
        removeAllInPlace(arr, 2);
        expect(arr).toEqual([1, 3]);
    });

    it('should not modify the array if the item does not exist', () => {
        const arr = [1, 2, 3];
        removeAllInPlace(arr, 4);
        expect(arr).toEqual([1, 2, 3]);
    });

    it('should remove all occurrences when all elements are the same', () => {
        const arr = [2, 2, 2, 2];
        removeAllInPlace(arr, 2);
        expect(arr).toEqual([]);
    });

    it('should work with string arrays', () => {
        const arr = ['a', 'b', 'a', 'c', 'a'];
        removeAllInPlace(arr, 'a');
        expect(arr).toEqual(['b', 'c']);
    });

    it('should work with boolean arrays', () => {
        const arr = [true, false, true, true, false];
        removeAllInPlace(arr, true);
        expect(arr).toEqual([false, false]);
    });

    it('should remove all occurrences from the beginning', () => {
        const arr = [1, 1, 1, 2, 3];
        removeAllInPlace(arr, 1);
        expect(arr).toEqual([2, 3]);
    });

    it('should remove all occurrences from the end', () => {
        const arr = [1, 2, 3, 3, 3];
        removeAllInPlace(arr, 3);
        expect(arr).toEqual([1, 2]);
    });

    it('should remove all occurrences from both ends', () => {
        const arr = [1, 1, 2, 3, 1, 1];
        removeAllInPlace(arr, 1);
        expect(arr).toEqual([2, 3]);
    });

    it('should handle empty arrays', () => {
        const arr: number[] = [];
        removeAllInPlace(arr, 1);
        expect(arr).toEqual([]);
    });

    it('should handle arrays with a single element', () => {
        const arr = [1];
        removeAllInPlace(arr, 1);
        expect(arr).toEqual([]);
    });

    it('should handle consecutive occurrences', () => {
        const arr = [1, 2, 2, 2, 3];
        removeAllInPlace(arr, 2);
        expect(arr).toEqual([1, 3]);
    });

    it('should handle non-consecutive occurrences', () => {
        const arr = [1, 2, 3, 2, 4, 2, 5];
        removeAllInPlace(arr, 2);
        expect(arr).toEqual([1, 3, 4, 5]);
    });
});

describe('removeInPlace', () => {
    it('should remove an item that exists in the array', () => {
        const arr = [1, 2, 3];
        removeInPlace(arr, 2);
        expect(arr).toEqual([1, 3]);
    });

    it('should not modify the array if the item does not exist', () => {
        const arr = [1, 2, 3];
        removeInPlace(arr, 4);
        expect(arr).toEqual([1, 2, 3]);
    });

    it('should remove only the first occurrence of the item', () => {
        const arr = [1, 2, 2, 3];
        removeInPlace(arr, 2);
        expect(arr).toEqual([1, 2, 3]);
    });

    it('should work with string arrays', () => {
        const arr = ['a', 'b', 'c'];
        removeInPlace(arr, 'b');
        expect(arr).toEqual(['a', 'c']);
    });

    it('should work with boolean arrays', () => {
        const arr = [true, false, true];
        removeInPlace(arr, true);
        expect(arr).toEqual([false, true]);
    });

    it('should remove the first element', () => {
        const arr = [1, 2, 3];
        removeInPlace(arr, 1);
        expect(arr).toEqual([2, 3]);
    });

    it('should remove the last element', () => {
        const arr = [1, 2, 3];
        removeInPlace(arr, 3);
        expect(arr).toEqual([1, 2]);
    });

    it('should handle empty arrays', () => {
        const arr: number[] = [];
        removeInPlace(arr, 1);
        expect(arr).toEqual([]);
    });

    it('should handle arrays with a single element', () => {
        const arr = [1];
        removeInPlace(arr, 1);
        expect(arr).toEqual([]);
    });
});

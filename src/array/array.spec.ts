import { isArray } from './array';

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

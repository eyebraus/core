import { isNumber } from './number';

describe('isNumber', () => {
    it('should return false when given a non-number value', () => {
        expect(isNumber(false)).toBe(false);
        expect(isNumber('hello')).toBe(false);
        expect(isNumber([1])).toBe(false);
        expect(isNumber([1, 2])).toBe(false);
        expect(isNumber({})).toBe(false);
    });

    it('should return true when given a number value', () => {
        expect(isNumber(1)).toBe(true);
    });
});

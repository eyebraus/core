import { isObject } from './object';

describe('isObject', () => {
    it('should return false when given a non-object value', () => {
        expect(isObject(false)).toBe(false);
        expect(isObject('hello')).toBe(false);
        expect(isObject(1)).toBe(false);
        expect(isObject([1, 2])).toBe(false);
    });

    it('should return false when given null', () => {
        expect(isObject(null)).toBe(false);
    });

    it('should return true when given an empty object', () => {
        expect(isObject({})).toBe(true);
    });

    it('should return true when given a non-empty object', () => {
        expect(isObject({ foo: 'bar' })).toBe(true);
    });
});

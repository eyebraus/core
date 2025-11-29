import { isBlank } from './blank';

describe('isBlank', () => {
    it('should return true when given an empty object value', () => {
        expect(isBlank({})).toBe(true);
    });

    it('should return false when given a non-empty object value', () => {
        expect(isBlank({ foo: 'bar', fuu: 'baz' })).toBe(false);
    });
});

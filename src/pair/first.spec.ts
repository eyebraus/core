import { first, firstColumn } from './first';
import { Pair } from './pair';

describe('first', () => {
    it('should return the first element of a Pair', () => {
        expect(first(Pair('foo', 1))).toBe('foo');
    });
});

describe('firstColumn', () => {
    it('should return an array of the first element from each Pair', () => {
        expect(firstColumn(Pair('foo', 1), Pair('bar', 2), Pair('baz', 3))).toEqual(['foo', 'bar', 'baz']);
    });
});

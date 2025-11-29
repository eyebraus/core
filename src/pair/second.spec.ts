import { Pair } from './pair';
import { second, secondColumn } from './second';

describe('second', () => {
    it('should return the second element of a Pair', () => {
        expect(second(Pair('foo', 1))).toBe(1);
    });
});

describe('secondColumn', () => {
    it('should return an array of the first element from each Pair', () => {
        expect(secondColumn(Pair('foo', 1), Pair('bar', 2), Pair('baz', 3))).toEqual([1, 2, 3]);
    });
});

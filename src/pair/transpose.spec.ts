import { Pair } from './pair';
import { transpose } from './transpose';

describe('transpose', () => {
    it('should transpose a tuple of Pairs into a Pair of tuples', () => {
        const result = transpose(Pair('foo', 1), Pair('bar', 2), Pair('baz', 3));

        expect(result).toEqual([
            ['foo', 'bar', 'baz'],
            [1, 2, 3],
        ]);
    });
});

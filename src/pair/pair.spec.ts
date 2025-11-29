import { isPair, Pair, reposition, repositionFirst, repositionSecond } from './pair';

describe('isPair', () => {
    it('should return false for arrays of lengths different than two', () => {
        expect(isPair([])).toBe(false);
        expect(isPair([1])).toBe(false);
        expect(isPair([1, 2, 3])).toBe(false);
    });

    it('should return true for arrays of length  two', () => {
        // Arrange
        const pair: [string, number] = ['foo', 2];

        // Act / Assert
        expect(isPair(pair)).toBe(true);
    });
});

describe('reposition', () => {
    it('should create a new Pair with the two transposition functions applied', () => {
        // Arrange
        const pair = Pair('foo', 2);

        // Act
        const actual = reposition(
            pair,
            (x) => x.length,
            (y) => `${y}`,
        );

        // Assert
        expect(actual).toEqual(Pair(3, '2'));
        expect(actual).not.toBe(pair);
    });
});

describe('repositionFirst', () => {
    it('should create a new Pair with the transposition function applied to the first element', () => {
        // Arrange
        const pair = Pair('foo', 2);

        // Act
        const actual = repositionFirst(pair, (x) => x.length);

        // Assert
        expect(actual).toEqual(Pair(3, 2));
        expect(actual).not.toBe(pair);
    });
});

describe('repositionSecond', () => {
    it('should create a new Pair with the transposition function applied to the second element', () => {
        // Arrange
        const pair = Pair('foo', 2);

        // Act
        const actual = repositionSecond(pair, (y) => `${y}`);

        // Assert
        expect(actual).toEqual(Pair('foo', '2'));
        expect(actual).not.toBe(pair);
    });
});

import { Pair } from '../pair';
import { unpack } from './fault';

const enum Code {
    BadError = 'BadError',
    WorseError = 'WorseError',
}

describe('unpack', () => {
    it('should return undefined in the second entry when there is not an inner error in the fault', () => {
        expect(unpack(Code.WorseError)).toEqual([Code.WorseError, undefined]);
    });

    it('should return the inner error in the second entry when there is an inner error in the fault', () => {
        // Arrange
        const inner = new Error('uh oh');

        // Act
        const actual = unpack(Pair(Code.BadError, inner));

        // Assert
        expect(actual).toEqual([Code.BadError, inner]);
    });
});

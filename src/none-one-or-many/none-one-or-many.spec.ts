import {
    isMany,
    isNone,
    isOne,
    type Many,
    type None,
    NoneOneOrMany,
    NoneOrOne,
    type One,
    OneOrMany,
    toArray,
} from './none-one-or-many';

describe('isMany', () => {
    it('should return true if Many', () => {
        expect(isMany(['foo', 'bar'])).toBe(true);
    });

    it('should return false if None', () => {
        expect(isMany([])).toBe(false);
    });

    it('should return false if One', () => {
        expect(isMany('foo')).toBe(false);
        expect(isMany(['foo'])).toBe(false);
    });
});

describe('isNone', () => {
    it('should return false if Many', () => {
        expect(isNone(['foo', 'bar'])).toBe(false);
    });

    it('should return true if None', () => {
        expect(isNone([])).toBe(true);
    });

    it('should return false if One', () => {
        expect(isNone('foo')).toBe(false);
        expect(isNone(['foo'])).toBe(false);
    });
});

describe('isOne', () => {
    it('should return false if Many', () => {
        expect(isOne(['foo', 'bar'])).toBe(false);
    });

    it('should return false if None', () => {
        expect(isOne([])).toBe(false);
    });

    it('should return true if One', () => {
        expect(isOne('foo')).toBe(true);
        expect(isOne(['foo'])).toBe(true);
    });
});

describe('NoneOneOrMany', () => {
    it('should return Many if given multiple arguments', () => {
        expect(NoneOneOrMany('foo', 'bar', 'baz')).toEqual(['foo', 'bar', 'baz']);
    });

    it('should return None if given no arguments', () => {
        expect(NoneOneOrMany()).toEqual([]);
    });

    it('should return One if given one argument', () => {
        expect(NoneOneOrMany('foo')).toEqual(['foo']);
    });
});

describe('NoneOrOne', () => {
    it('should return None if given no arguments', () => {
        expect(NoneOrOne()).toEqual([]);
    });

    it('should return One if given one argument', () => {
        expect(NoneOrOne('foo')).toEqual(['foo']);
    });
});

describe('OneOrMany', () => {
    it('should return Many if given multiple arguments', () => {
        expect(OneOrMany('foo', 'bar', 'baz')).toEqual(['foo', 'bar', 'baz']);
    });

    it('should return Many if given two arguments', () => {
        expect(OneOrMany('foo', 'bar')).toEqual(['foo', 'bar']);
    });

    it('should return One if given one argument', () => {
        expect(OneOrMany('foo')).toEqual(['foo']);
    });
});

describe('toArray', () => {
    it('should return a new array when given a Many', () => {
        // Arrange
        const many: Many<string> = ['foo', 'bar', 'baz'];

        // Act
        const actual = toArray(many);

        // Assert
        expect(actual).toEqual(many);
        expect(actual).not.toBe(many);
    });

    it('should return a new None when given a None', () => {
        // Arrange
        const none: None = [];

        // Act
        const actual = toArray(none);

        // Assert
        expect(actual).toEqual(none);
        expect(actual).not.toBe(none);
    });

    it('should return a new singleton array when given a One (object)', () => {
        // Arrange
        const one: One<string> = ['foo'];

        // Act
        const actual = toArray(one);

        // Assert
        expect(actual).toEqual(['foo']);
    });

    it('should return a new singleton array when given a One (array)', () => {
        // Arrange
        const one: One<string> = ['foo'];

        // Act
        const actual = toArray(one);

        // Assert
        expect(actual).toEqual(one);
        expect(actual).not.toBe(one);
    });
});

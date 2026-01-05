import {
    isEmpty,
    isNotEmpty,
    isNotUndefinedOrEmpty,
    isNotUndefinedOrWhiteSpace,
    isNotWhiteSpace,
    isString,
    isUndefinedOrEmpty,
    isUndefinedOrWhiteSpace,
    isWhiteSpace,
    padZero,
} from './string';

describe('isEmpty', () => {
    it('should return true when given an empty string', () => {
        expect(isEmpty('')).toBe(true);
    });

    it('should return false when given a non-empty string', () => {
        expect(isEmpty('\t')).toBe(false);
    });
});

describe('isNotEmpty', () => {
    it('should return false when given an empty string', () => {
        expect(isNotEmpty('')).toBe(false);
    });

    it('should return true when given a non-empty string', () => {
        expect(isNotEmpty('\t')).toBe(true);
    });
});

describe('isNotUndefinedOrEmpty', () => {
    it('should return false when given an empty string', () => {
        expect(isNotUndefinedOrEmpty('')).toBe(false);
    });

    it('should return false when given undefined', () => {
        expect(isNotUndefinedOrEmpty(undefined)).toBe(false);
    });

    it('should return true when given a non-empty string', () => {
        expect(isNotUndefinedOrEmpty('\t')).toBe(true);
    });
});

describe('isNotUndefinedOrWhiteSpace', () => {
    it('should return false when given an empty string', () => {
        expect(isNotUndefinedOrWhiteSpace('')).toBe(false);
    });

    it('should return false when given undefined', () => {
        expect(isNotUndefinedOrWhiteSpace(undefined)).toBe(false);
    });

    it('should return true when given a non-empty string that is only white space', () => {
        expect(isNotUndefinedOrWhiteSpace('\t')).toBe(false);
    });

    it('should return true when given a non-empty string', () => {
        expect(isNotUndefinedOrWhiteSpace('foo')).toBe(true);
    });
});

describe('isNotWhiteSpace', () => {
    it('should return false when given an empty string', () => {
        expect(isNotWhiteSpace('')).toBe(false);
    });

    it('should return true when given a non-empty string that is only white space', () => {
        expect(isNotWhiteSpace('\t')).toBe(false);
    });

    it('should return true when given a non-empty string', () => {
        expect(isNotWhiteSpace('foo')).toBe(true);
    });
});

describe('isString', () => {
    it('should return false when given a non-string value', () => {
        expect(isString(1)).toBe(false);
        expect(isString(false)).toBe(false);
        expect(isString([])).toBe(false);
        expect(isString({})).toBe(false);
    });

    it('should return true when given a string value', () => {
        expect(isString('foo')).toBe(true);
    });
});

describe('isUndefinedOrEmpty', () => {
    it('should return true when given an empty string', () => {
        expect(isUndefinedOrEmpty('')).toBe(true);
    });

    it('should return true when given undefined', () => {
        expect(isUndefinedOrEmpty(undefined)).toBe(true);
    });

    it('should return false when given a non-empty string', () => {
        expect(isUndefinedOrEmpty('\t')).toBe(false);
    });
});

describe('isUndefinedOrWhiteSpace', () => {
    it('should return true when given an empty string', () => {
        expect(isUndefinedOrWhiteSpace('')).toBe(true);
    });

    it('should return true when given undefined', () => {
        expect(isUndefinedOrWhiteSpace(undefined)).toBe(true);
    });

    it('should return true when given a non-empty string that is only white space', () => {
        expect(isUndefinedOrWhiteSpace('\t')).toBe(true);
    });

    it('should return false when given a non-empty string', () => {
        expect(isUndefinedOrWhiteSpace('foo')).toBe(false);
    });
});

describe('isWhiteSpace', () => {
    it('should return true when given an empty string', () => {
        expect(isWhiteSpace('')).toBe(true);
    });

    it('should return true when given a non-empty string that is only white space', () => {
        expect(isWhiteSpace('\t')).toBe(true);
    });

    it('should return false when given a non-empty string', () => {
        expect(isWhiteSpace('foo')).toBe(false);
    });
});

describe('padZero', () => {
    it('should pad a single digit number to the specified length', () => {
        expect(padZero(5, 3)).toBe('005');
    });

    it('should pad a two digit number to the specified length', () => {
        expect(padZero(42, 4)).toBe('0042');
    });

    it('should not pad when the number already has more digits than the length', () => {
        expect(padZero(12345, 3)).toBe('12345');
    });

    it('should not pad when the number has exactly the same number of digits as the length', () => {
        expect(padZero(123, 3)).toBe('123');
    });

    it('should pad zero to the specified length', () => {
        expect(padZero(0, 3)).toBe('000');
    });

    it('should pad zero to length 1', () => {
        expect(padZero(0, 1)).toBe('0');
    });

    it('should handle negative numbers', () => {
        expect(padZero(-5, 3)).toBe('0-5');
    });

    it('should handle large numbers', () => {
        expect(padZero(999, 2)).toBe('999');
        expect(padZero(999, 5)).toBe('00999');
    });

    it('should handle decimal numbers', () => {
        expect(padZero(1.5, 4)).toBe('01.5');
        expect(padZero(1.5, 2)).toBe('1.5');
    });
});

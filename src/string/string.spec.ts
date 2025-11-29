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

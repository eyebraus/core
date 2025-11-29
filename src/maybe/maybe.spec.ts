import {
    compact,
    density,
    isFull,
    isNothing,
    isSomething,
    isVacant,
    Nothing,
    Something,
    sparsity,
    tryToUnwrap,
    tryToUnwrapMany,
    unwrap,
    unwrapMany,
    wrap,
    wrapMany,
} from './maybe';

describe('compact', () => {
    it('should return an empty array when given only Nothings', () => {
        expect(compact([Nothing(), Nothing(), Nothing()])).toEqual([]);
    });

    it('should return an array of the Somethings when given a mix of Nothings and Somethings', () => {
        expect(compact([Nothing(), Something(1), Something(1000)])).toEqual([Something(1), Something(1000)]);
    });
});

describe('density', () => {
    it('should return 0 when given an empty array', () => {
        expect(density([])).toEqual(0);
    });

    it('should return 0 when given only Nothings', () => {
        expect(density([Nothing(), Nothing(), Nothing()])).toEqual(0);
    });

    it('should return the number of Somethings when given a mix of Nothings and Somethings', () => {
        expect(density([Nothing(), Something(1), Something(1000)])).toEqual(2);
    });
});

describe('isFull', () => {
    it('should return false when given an empty array', () => {
        expect(isFull([])).toBe(false);
    });

    it('should return false when array has any amount of Nothings', () => {
        expect(isFull([Nothing(), Something(1), Something(1000)])).toBe(false);
    });

    it('should return true when array has only Somethings', () => {
        expect(isFull([Something(1), Something(1000)])).toBe(true);
    });
});

describe('isNothing', () => {
    it('should return true when given Nothing', () => {
        expect(isNothing(Nothing())).toBe(true);
    });

    it('should return false when given Something', () => {
        expect(isNothing(Something('foo'))).toBe(false);
    });
});

describe('isSomething', () => {
    it('should return false when given Nothing', () => {
        expect(isSomething(Nothing())).toBe(false);
    });

    it('should return true when given Something', () => {
        expect(isSomething(Something('foo'))).toBe(true);
    });
});

describe('isVacant', () => {
    it('should return true when given an empty array', () => {
        expect(isVacant([])).toBe(true);
    });

    it('should return false when array has any amount of Somethings', () => {
        expect(isVacant([Nothing(), Nothing(), Something(1)])).toBe(false);
    });

    it('should return true when array has only Nothings', () => {
        expect(isVacant([Nothing(), Nothing()])).toBe(true);
    });
});

describe('sparsity', () => {
    it('should return 0 when given an empty array', () => {
        expect(sparsity([])).toEqual(0);
    });

    it('should return 0 when given only Somethings', () => {
        expect(sparsity([Something(1), Something(1000)])).toEqual(0);
    });

    it('should return the number of Nothings when given a mix of Nothings and Somethings', () => {
        expect(sparsity([Nothing(), Something(1), Something(1000)])).toEqual(1);
    });
});

describe('tryToUnwrap', () => {
    it('should return undefined when given a Nothing', () => {
        expect(tryToUnwrap(Nothing())).toBeUndefined();
    });

    it('should return the wrapped value when given a Something', () => {
        expect(tryToUnwrap(Something(1))).toBe(1);
    });
});

describe('tryToUnwrapMany', () => {
    it('should return an empty array when given no arguments', () => {
        expect(tryToUnwrapMany()).toEqual([]);
    });

    it('should return an array of unwrapped objects in order when given arguments', () => {
        expect(tryToUnwrapMany(Nothing(), Something(1), Something(1000))).toEqual([undefined, 1, 1000]);
    });
});

describe('unwrap', () => {
    it('should throw given a Nothing', () => {
        expect(() => unwrap(Nothing())).toThrow();
    });

    it('should return the wrapped value when given a Something', () => {
        expect(unwrap(Something(1))).toBe(1);
    });
});

describe('unwrapMany', () => {
    it('should return an empty array when given no arguments', () => {
        expect(unwrapMany()).toEqual([]);
    });

    it('should return an array of unwrapped objects in order when given arguments', () => {
        expect(() => unwrapMany(Nothing(), Something(1), Something(1000))).toThrow();
    });

    it('should return an array of unwrapped objects when given only Somethings', () => {
        expect(unwrapMany(Something(1), Something(1000))).toEqual([1, 1000]);
    });
});

describe('wrap', () => {
    it('should create a Nothing when given no arguments', () => {
        expect(wrap(undefined)).toEqual(Nothing());
    });

    it('should create a Something when given an argument', () => {
        expect(wrap('foo')).toEqual(Something('foo'));
    });
});

describe('wrapMany', () => {
    it('should return an empty array when given no arguments', () => {
        expect(wrapMany()).toEqual([]);
    });

    it('should return an array of wrapped objects when given arguments', () => {
        expect(wrapMany(undefined, 1, 1000)).toEqual([Nothing(), Something(1), Something(1000)]);
    });
});

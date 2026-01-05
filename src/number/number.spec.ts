import { clamp, isNumber, modulo, randomInteger } from './number';

describe('clamp', () => {
    it('should return the value when it is within the range', () => {
        expect(clamp(5, 0, 10)).toBe(5);
        expect(clamp(0, -5, 5)).toBe(0);
        expect(clamp(-2, -5, 5)).toBe(-2);
    });

    it('should return min when value is less than min', () => {
        expect(clamp(2, 5, 10)).toBe(5);
        expect(clamp(-10, -5, 5)).toBe(-5);
        expect(clamp(0, 1, 10)).toBe(1);
    });

    it('should return max when value is greater than max', () => {
        expect(clamp(15, 0, 10)).toBe(10);
        expect(clamp(10, -5, 5)).toBe(5);
        expect(clamp(100, 0, 50)).toBe(50);
    });

    it('should return min when value equals min', () => {
        expect(clamp(0, 0, 10)).toBe(0);
        expect(clamp(-5, -5, 5)).toBe(-5);
    });

    it('should return max when value equals max', () => {
        expect(clamp(10, 0, 10)).toBe(10);
        expect(clamp(5, -5, 5)).toBe(5);
    });

    it('should handle negative ranges', () => {
        expect(clamp(-10, -20, -5)).toBe(-10);
        expect(clamp(-30, -20, -5)).toBe(-20);
        expect(clamp(0, -20, -5)).toBe(-5);
    });

    it('should handle zero as min', () => {
        expect(clamp(-5, 0, 10)).toBe(0);
        expect(clamp(5, 0, 10)).toBe(5);
        expect(clamp(15, 0, 10)).toBe(10);
    });

    it('should handle zero as max', () => {
        expect(clamp(-5, -10, 0)).toBe(-5);
        expect(clamp(5, -10, 0)).toBe(0);
    });
});

describe('isNumber', () => {
    it('should return false when given a non-number value', () => {
        expect(isNumber(false)).toBe(false);
        expect(isNumber('hello')).toBe(false);
        expect(isNumber([1])).toBe(false);
        expect(isNumber([1, 2])).toBe(false);
        expect(isNumber({})).toBe(false);
    });

    it('should return true when given a number value', () => {
        expect(isNumber(1)).toBe(true);
    });
});

describe('modulo', () => {
    it('should return positive result for positive values', () => {
        expect(modulo(10, 3)).toBe(1);
        expect(modulo(15, 4)).toBe(3);
        expect(modulo(7, 5)).toBe(2);
    });

    it('should return positive result for negative values', () => {
        expect(modulo(-10, 3)).toBe(2);
        expect(modulo(-15, 4)).toBe(1);
        expect(modulo(-7, 5)).toBe(3);
    });

    it('should return zero when value is divisible by divisor', () => {
        expect(modulo(10, 5)).toBe(0);
        expect(modulo(15, 3)).toBe(0);
        expect(modulo(-10, 5)).toBe(0);
        expect(modulo(-15, 3)).toBe(0);
    });

    it('should handle zero as value', () => {
        expect(modulo(0, 5)).toBe(0);
        expect(modulo(0, 10)).toBe(0);
    });

    it('should handle large numbers', () => {
        expect(modulo(100, 7)).toBe(2);
        expect(modulo(-100, 7)).toBe(5);
    });

    it('should handle divisor larger than value', () => {
        expect(modulo(3, 10)).toBe(3);
        expect(modulo(-3, 10)).toBe(7);
    });

    it('should always return a value less than divisor', () => {
        expect(modulo(25, 10)).toBe(5);
        expect(modulo(-25, 10)).toBe(5);
        expect(modulo(99, 100)).toBe(99);
        expect(modulo(-99, 100)).toBe(1);
    });
});

describe('randomInteger', () => {
    it('should return a number', () => {
        const result = randomInteger(10);
        expect(typeof result).toBe('number');
    });

    it('should return a value greater than or equal to 0', () => {
        for (let i = 0; i < 100; i++) {
            const result = randomInteger(10);
            expect(result).toBeGreaterThanOrEqual(0);
        }
    });

    it('should return a value less than max', () => {
        for (let i = 0; i < 100; i++) {
            const result = randomInteger(10);
            expect(result).toBeLessThan(10);
        }
    });

    it('should return 0 when max is 1', () => {
        for (let i = 0; i < 100; i++) {
            const result = randomInteger(1);
            expect(result).toBe(0);
        }
    });

    it('should return values within the expected range for different max values', () => {
        for (let i = 0; i < 100; i++) {
            const result = randomInteger(5);
            expect(result).toBeGreaterThanOrEqual(0);
            expect(result).toBeLessThan(5);
        }
    });

    it('should handle large max values', () => {
        for (let i = 0; i < 100; i++) {
            const result = randomInteger(1000);
            expect(result).toBeGreaterThanOrEqual(0);
            expect(result).toBeLessThan(1000);
        }
    });

    it('should produce different values across multiple calls', () => {
        const results = new Set();
        for (let i = 0; i < 100; i++) {
            results.add(randomInteger(100));
        }
        // With 100 calls and max of 100, we should get multiple different values
        expect(results.size).toBeGreaterThan(1);
    });
});

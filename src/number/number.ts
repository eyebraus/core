/**
 * Bounds a given number to a defined range.
 * @param value Value.
 * @param min Minimum value of the range.
 * @param max Maximum value of the range.
 * @returns If the value is less than min, returns min. If the value is greater than max, returns max. Otheriwse,
 * returns the value.
 */
export const clamp = (value: number, min: number, max: number): number => Math.min(Math.max(value, min), max);

/**
 * Type guard which checks whether a given value is a number.
 * @param maybes An unknown value.
 * @returns True if the given value is a number, false otherwise.
 */
export const isNumber = (value: unknown): value is number => typeof value === 'number';

/**
 * Performs a modulo (%) operation whose result is guaranteed to be positive.
 * @param value Value.
 * @param divisor Divisor.
 * @returns Result of the modulo (%) operation whose result is guaranteed to be positive.
 */
export const modulo = (value: number, divisor: number): number => ((value % divisor) + divisor) % divisor;

/**
 * Generates a random integer between 0 and a specified maximum. (Exclusive)
 * @param max Upper bound of random integer range. (Exclusive)
 * @returns A number between 0 and the maximum.
 */
export const randomInteger = (max: number): number => Math.floor(max * Math.random());

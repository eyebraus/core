import { isArray } from '../array';

/**
 * Type guard that checks whether a value is a non-null object.
 * @param value An unknown value.
 * @returns True if given value is a non-null object, false otherwise.
 */
export const isObject = (value: unknown): value is { [key: string]: unknown } =>
    typeof value === 'object' && !isArray(value) && value !== null;

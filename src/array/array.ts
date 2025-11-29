import { type Defined } from '../defined';

/**
 * Type guard that checks whether a value is an array.
 * @param value An unknown value.
 * @returns True if the value is an array, false otherwise.
 */
export const isArray = <TItem extends Defined>(value: unknown): value is TItem[] => Array.isArray(value);

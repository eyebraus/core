import { type Defined } from '../defined';

/**
 * Type guard that checks whether a value is an array.
 * @param value An unknown value.
 * @returns True if the value is an array, false otherwise.
 */
export const isArray = <TItem extends Defined>(value: unknown): value is TItem[] => Array.isArray(value);

/**
 * Checks whether two different arrays have equivalent contents.
 * @param first First array.
 * @param second Second array.
 * @returns True if the two arrays have equivalent contents, false otherwise.
 */
export const isEquivalent = <TItem extends Defined>(first: TItem[], second: TItem[]): boolean => {
    // If lengths are different, we can immediately return false
    if (first.length !== second.length) {
        return false;
    }

    return first.every((value, index) => {
        const other = second[index];

        // Special case: if both elements are arrays, use isEquivalent instead of ===
        return isArray(value) && isArray(other) ? isEquivalent(value, other) : value === other;
    });
};

/**
 * Removes all occurrences of an element from an array in-place.
 * @param value Array.
 * @param item Value to remove from the array.
 */
export const removeAllInPlace = <TItem extends Defined>(value: TItem[], item: TItem): void => {
    let index = value.indexOf(item);

    while (index >= 0) {
        value.splice(index, 1);
        index = value.indexOf(item);
    }
};

/**
 * Removes the first occurrence of an element from an array in-place.
 * @param value Array.
 * @param item Value to remove from the array.
 */
export const removeInPlace = <TItem extends Defined>(value: TItem[], item: TItem): void => {
    const index = value.indexOf(item);

    if (index >= 0) {
        value.splice(index, 1);
    }
};

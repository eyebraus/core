/**
 * A utility type representing an empty object.
 */
export type Blank = { [key: string]: never };

/**
 * Checks whether an object contains no defined items.
 * @param value An object.
 * @returns True if the given object contains no defined items, false otherwise.
 */
export const isBlank = (value: { [key: string]: unknown }): value is Blank =>
    Object.values(value).every((property) => property === undefined);

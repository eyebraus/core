/**
 * Utility type that gets the type of the items in an array.
 */
export type Item<T> = T extends (infer TItem)[] ? TItem : T;

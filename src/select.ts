import { type Defined } from './defined';
import { type KeysOf } from './keys-of';

/**
 * Utility type that creates a parallel tuple of value types from an object given a tuple of its keys.
 */
export type Select<T extends Defined, TKeys extends KeysOf<T>> = {
    [TIndex in keyof TKeys]: T[TKeys[TIndex]];
};

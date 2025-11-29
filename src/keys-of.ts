import { type Defined } from './defined';
import { type KeyOf } from './key-of';

/**
 * Utility type representing an array of one or more keys from the given type.
 */
export type KeysOf<T extends Defined> = [...KeyOf<T>[]];

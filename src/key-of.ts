import { type Defined } from './defined';

/**
 * Less annoying keyof that tosses out general-purpose indexing types.
 */
export type KeyOf<T extends Defined> = Extract<keyof T, string>;

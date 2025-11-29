import { type Defined } from '../defined';
import { isPair, type Pair } from '../pair';

/**
 * Utility type for common error handling cases in which we want an error code and, optionally, an inner error.
 */
export type Fault<TCode extends string> = Pair<TCode, Defined> | TCode;

/**
 * Normalizes the fault into a format that can be consistently destructured, regardless of its runtime type.
 * @param fault A {@link Fault}.
 * @returns A tuple where the first entry is the code associated with the fault. If the fault also contains an inner
 * error, that is returned as the second entry. Otherwise, the second entry is undefined.
 */
export const unpack = <TCode extends string>(fault: Fault<TCode>): [TCode, Defined | undefined] => [
    isPair(fault) ? fault[0] : fault,
    isPair(fault) ? fault[1] : undefined,
];

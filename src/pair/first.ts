import { type Defined } from '../defined';
import { type Pair } from './pair';

/**
 * The type of the first value of a {@link Pair}.
 */
export type First<TPair extends Pair<Defined, Defined>> = TPair extends Pair<infer TFirst, Defined> ? TFirst : never;

/**
 * A tuple containing the first value type of each {@link Pair} in a tuple of {@link Pair}s.
 */
export type FirstColumn<TPairs extends Pair<Defined, Defined>[]> = { [TIndex in keyof TPairs]: TPairs[TIndex][0] };

/**
 * Gets the first value of a {@link Pair}.
 * @param pair A {@link Pair}.
 * @returns The first value of a {@link Pair}.
 */
export const first = <TFirst extends Defined, TSecond extends Defined>(pair: Pair<TFirst, TSecond>): TFirst => pair[0];

/**
 * Gets the first value of each {@link Pair} in a tuple of {@link Pair}s.
 * @param pairs A tuple  of {@link Pair}s.
 * @returns The first value of each {@link Pair} in the tuple.
 */
export const firstColumn = <TPairs extends Pair<Defined, Defined>[]>(...pairs: TPairs): FirstColumn<TPairs> =>
    // Justification: there are unfortunately no clean ways to initialize or infer the mapped type, so we instead must
    // assert that the more general inferred type (Defined[]) is in fact equivalent to FirstColumn at runtime.
    // eslint-disable-next-line @typescript-eslint/no-unsafe-type-assertion
    pairs.map(first) as FirstColumn<TPairs>;

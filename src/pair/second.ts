import { type Defined } from '../defined';
import { type Pair } from './pair';

/**
 * The type of the second value of a {@link Pair}.
 */
export type Second<TPair extends Pair<Defined, Defined>> = TPair extends Pair<Defined, infer TSecond> ? TSecond : never;

/**
 * A tuple containing the second value type of each {@link Pair} in a tuple of {@link Pair}s.
 */
export type SecondColumn<TPairs extends Pair<Defined, Defined>[]> = { [TIndex in keyof TPairs]: TPairs[TIndex][1] };

/**
 * Gets the second value of a {@link Pair}.
 * @param pair A {@link Pair}.
 * @returns The second value of a {@link Pair}.
 */
export const second = <TFirst extends Defined, TSecond extends Defined>(pair: Pair<TFirst, TSecond>): TSecond =>
    pair[1];

/**
 * Gets the second value of each {@link Pair} in a tuple of {@link Pair}s.
 * @param pairs A tuple  of {@link Pair}s.
 * @returns The first value of each {@link Pair} in the tuple.
 */
export const secondColumn = <TPairs extends Pair<Defined, Defined>[]>(...pairs: TPairs): SecondColumn<TPairs> =>
    // Justification: there are unfortunately no clean ways to initialize or infer the mapped type, so we instead must
    // assert that the more general inferred type (Defined[]) is in fact equivalent to SecondColumn at runtime.
    // eslint-disable-next-line @typescript-eslint/no-unsafe-type-assertion
    pairs.map(second) as SecondColumn<TPairs>;

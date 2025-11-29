import { type Defined } from '../defined';
import { firstColumn, type FirstColumn } from './first';
import { Pair } from './pair';
import { secondColumn, type SecondColumn } from './second';

/**
 * Transposes a tuple of {@link Pair}s into a {@link Pair} of tuples. This is analogous to transposing a n x 2 matrix
 * into a 2 x n matrix.
 */
export type Transpose<TPairs extends Pair<Defined, Defined>[]> = Pair<FirstColumn<TPairs>, SecondColumn<TPairs>>;

/**
 * Transposes a tuple of {@link Pair}s into a {@link Pair} of tuples. This is analogous to transposing a n x 2 matrix
 * into a 2 x n matrix.
 * @param pairs Tuple of {@link Pair}s.
 * @returns A {@link Pair} of tuples.
 */
export const transpose = <TPairs extends Pair<Defined, Defined>[]>(...pairs: TPairs): Transpose<TPairs> =>
    Pair(firstColumn(...pairs), secondColumn(...pairs));

import { type Defined } from './defined';
import { type NeededKeysOf } from './needed';

/**
 * Utility type that merges the type definition of two objects together recursively.
 */
export type Merge<TLeft extends Defined, TRight extends Defined> = Omit<TLeft, keyof TLeft & keyof TRight> &
    Omit<TRight, keyof TLeft & keyof TRight> & {
        [key in Exclude<keyof TLeft & keyof TRight, NeededKeysOf<TLeft> & NeededKeysOf<TRight>>]?: TLeft[key] extends
            | undefined
            | {
                  [key: string]: unknown;
              }
            ? TRight[key] extends undefined | { [key: string]: unknown }
                ? Merge<Exclude<TLeft[key], undefined>, Exclude<TRight[key], undefined>>
                : Exclude<TRight[key], undefined>
            : Exclude<TRight[key], undefined>;
    } & {
        [key in NeededKeysOf<TLeft> & NeededKeysOf<TRight>]: TLeft[key] extends { [key: string]: unknown }
            ? TRight[key] extends { [key: string]: unknown }
                ? Merge<TLeft[key], TRight[key]>
                : TRight[key]
            : TRight[key];
    };

import { type Defined } from './defined';
import { type If } from './if';

/**
 * Utility type that marks properties of a type as required.
 */
export type Needed<TValue, TKey extends keyof TValue> = Omit<TValue, TKey> & Required<Pick<TValue, TKey>>;

/**
 * Utility type that extracts the required keys of a type.
 */
export type NeededKeysOf<TValue extends Defined> = Exclude<
    {
        [TKey in keyof TValue]: If<{ [Q in TKey]: TValue[TKey] }, { [Q in TKey]-?: TValue[TKey] }, TKey, never>;
    }[keyof TValue],
    undefined
>;

/**
 * Utility type that includes only the required properties of a type.
 */
export type NeededPropertiesOf<TValue extends Defined> = Pick<TValue, NeededKeysOf<TValue>>;

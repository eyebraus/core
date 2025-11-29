import { type Defined } from './defined';
import { type If } from './if';

/**
 * Utility type that marks properties of a type as not readonly.
 */
export type Mutable<TValue extends Defined, TKeys extends keyof TValue = keyof TValue> = Omit<TValue, TKeys> & {
    -readonly [TKey in keyof Pick<TValue, TKeys>]: TValue[TKey];
};

/**
 * Utility type that extracts the mutable (i.e. not readonly) keys of a type.
 */
export type MutableKeysOf<TValue extends Defined> = {
    [TKey in keyof TValue]: If<{ [Q in TKey]: TValue[TKey] }, { -readonly [Q in TKey]: TValue[TKey] }, TKey, never>;
}[keyof TValue];

/**
 * Utility type that includes only the mutable (i.e. not readonly) properties of a type.
 */
export type MutablePropertiesOf<TValue extends Defined> = Pick<TValue, MutableKeysOf<TValue>>;

import { type Defined } from './defined';
import { type If } from './if';

/**
 * Utility type that marks properties of a type as readonly.
 */
export type Immutable<TValue extends Defined, TKeys extends keyof TValue = keyof TValue> = Omit<TValue, TKeys> & {
    +readonly [TKey in keyof Pick<TValue, TKeys>]: TValue[TKey];
};

/**
 * Utility type that extracts the immutable (i.e. readonly) keys of a type.
 */
export type ImmutableKeysOf<TValue extends Defined> = {
    [TKey in keyof TValue]: If<{ [Q in TKey]: TValue[TKey] }, { +readonly [Q in TKey]: TValue[TKey] }, TKey, never>;
}[keyof TValue];

/**
 * Utility type that includes only the immutable (i.e. readonly) properties of a type.
 */
export type ImmutablePropertiesOf<TValue extends Defined> = Pick<TValue, ImmutableKeysOf<TValue>>;

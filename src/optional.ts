import { type Defined } from './defined';
import { type If } from './if';

/**
 * Utility type that marks properties of a type as optional.
 */
export type Optional<TValue, TKeys extends keyof TValue> = Omit<TValue, TKeys> & Partial<Pick<TValue, TKeys>>;

/**
 * Utility type that extracts the optional keys of a type.
 */
export type OptionalKeysOf<TValue extends Defined> = Exclude<
    {
        [TKey in keyof TValue]: If<{ [Q in TKey]: TValue[TKey] }, { [Q in TKey]?: TValue[TKey] }, TKey, never>;
    }[keyof TValue],
    undefined
>;

/**
 * Utility type that includes only the optional properties of a type.
 */
export type OptionalPropertiesOf<TValue extends Defined> = Pick<TValue, OptionalKeysOf<TValue>>;

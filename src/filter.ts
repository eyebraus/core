import { type Defined } from './defined';
import { type If } from './if';

/**
 * Utility type that extracts the keys of a type that are assignable to another given type.
 */
export type AssignableKeysOf<TType extends Defined, TTest> = {
    [TKey in keyof TType]-?: TType[TKey] extends TTest ? TKey : never;
}[keyof TType];

/**
 * Utility type that picks the properties of an object that match another given type.
 */
export type Filter<TType extends Defined, TTest> = Pick<TType, MatchingKeysOf<TType, TTest>>;

/**
 * Utility type that picks the properties of an object that are assignable to another given type.
 */
export type FilterToAssignable<TType extends Defined, TTest> = Pick<TType, AssignableKeysOf<TType, TTest>>;

/**
 * Utility type that extracts the keys of a type that match another given type.
 */
export type MatchingKeysOf<TType extends Defined, TTest> = {
    [TKey in keyof TType]-?: If<TType[TKey], TTest, TKey, never>;
}[keyof TType];

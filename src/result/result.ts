import { type Defined } from '../defined';
import { type IfVoid } from '../if';

/**
 * Unsuccessful result with optional content.
 */
export type Failure<TContent = void> = IfVoid<TContent, FailureWithoutContent, FailureWithContent<TContent>>;

/**
 * Result of an operation, the outcome of which could be successful or unsuccessful.
 */
export type Result<TOnSuccess = void, TOnFailure = void> = Failure<TOnFailure> | Success<TOnSuccess>;

/**
 * Successful result with optional content.
 */
export type Success<TContent = void> = IfVoid<TContent, SuccessWithoutContent, SuccessWithContent<TContent>>;

type FailureWithContent<TContent> = {
    content: TContent;
    ok: false;
};

type FailureWithoutContent = {
    ok: false;
};

type SuccessWithContent<TContent> = {
    content: TContent;
    ok: true;
};

type SuccessWithoutContent = {
    ok: true;
};

/**
 * Creates a {@link Failure} without content.
 * @returns Failure without content
 */
export function Failure(): FailureWithoutContent;

/**
 * Creates a {@link Failure} with content.
 * @param content Content on the failure
 * @returns Failure with content
 */
export function Failure<TContent extends Defined>(content: TContent): FailureWithContent<TContent>;

/* eslint-disable prefer-arrow/prefer-arrow-functions */
// Justification: needed in this case for function overrides.
export function Failure<TContent extends Defined>(
    content?: TContent,
): FailureWithContent<TContent> | FailureWithoutContent {
    if (content) {
        return { content, ok: false } satisfies FailureWithContent<TContent>;
    }

    return { ok: false };
}
/* eslint-enable prefer-arrow/prefer-arrow-functions */

/**
 * Creates a {@link Success} without content.
 * @returns Success without content
 */
export function Success(): SuccessWithoutContent;

/**
 * Creates a {@link Success} with content.
 * @param content Content on the success
 * @returns Success with content
 */
export function Success<TContent extends Defined>(content: TContent): SuccessWithContent<TContent>;

/* eslint-disable prefer-arrow/prefer-arrow-functions */
// Justification: needed in this case for function overrides.
export function Success<TContent extends Defined>(
    content?: TContent,
): SuccessWithContent<TContent> | SuccessWithoutContent {
    if (content) {
        return { content, ok: true } satisfies SuccessWithContent<TContent>;
    }

    return { ok: true };
}
/* eslint-enable prefer-arrow/prefer-arrow-functions */

/**
 * Gets the content from a {@link Failure} or {@link Success}.
 * @param result Result
 * @returns Content of the result.
 */
export const content = <TContent extends Defined>(result: Failure<TContent> | Success<TContent>): TContent =>
    result.content;

/**
 * Type guard which detects whether a given result is a failure.
 * @param result Result
 * @returns True if {@link Failure}, false otherwise.
 */
export const isFailure = <TOnSuccess = void, TOnFailure = void>(
    result: Result<TOnSuccess, TOnFailure>,
): result is Failure<TOnFailure> => !result.ok;

/**
 * Type guard which detects whether a given result is a success.
 * @param result Result
 * @returns True if {@link Success}, false otherwise.
 */
export const isSuccess = <TOnSuccess = void, TOnFailure = void>(
    result: Result<TOnSuccess, TOnFailure>,
): result is Success<TOnSuccess> => result.ok;

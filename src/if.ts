/**
 * Conditional type that will be {@link TThen} when {@link TType} equals {@link TTest} and {@link TElse} otherwise.
 */
export type If<TType, TTest, TThen, TElse> =
    // Justification: the type parameter is necessary here for a clever assignability hack:
    //      https://github.com/Microsoft/TypeScript/issues/27024#issuecomment-421529650
    // eslint-disable-next-line @typescript-eslint/no-unnecessary-type-parameters
    (<T>() => T extends TType ? true : false) extends <T>() => T extends TTest ? true : false ? TThen : TElse;

/**
 * Conditional type that will be {@link TThen} when {@link TType} extends {@link TTest} and {@link TElse} otherwise.
 */
export type IfExtends<TType, TTest, TThen, TElse> = TType extends TTest ? TThen : TElse;

/**
 * Conditional type that will be {@link TThen} when {@link TType} is void and {@link TElse} otherwise.
 */
export type IfVoid<TType, TThen, TElse> = IfExtends<TType, void, TThen, TElse>;

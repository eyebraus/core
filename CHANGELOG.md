# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/), and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.0.0] - 2025-11-29

### Added

#### Core Type Utilities
- **Defined**: A utility type aliasing the common case for NonNullable, which expresses "I want something non-nullish."
- **Optional**: Utility type that marks properties of a type as optional
- **OptionalKeysOf**: Utility type that extracts the optional keys of a type
- **OptionalPropertiesOf**: Utility type that includes only the optional properties of a type
- **Immutable**: Utility type that marks properties of a type as readonly
- **ImmutableKeysOf**: Utility type that extracts the immutable (i.e. readonly) keys of a type
- **ImmutablePropertiesOf**: Utility type that includes only the immutable (i.e. readonly) properties of a type
- **Mutable**: Utility type that marks properties of a type as not readonly
- **MutableKeysOf**: Utility type that extracts the mutable (i.e. not readonly) keys of a type
- **MutablePropertiesOf**: Utility type that includes only the mutable (i.e. not readonly) properties of a type
- **Ensure**: Provides a default type when a given type is void
- **If**: Conditional type that will be TThen when TType equals TTest and TElse otherwise
- **IfExtends**: Conditional type that will be TThen when TType extends TTest and TElse otherwise
- **IfVoid**: Conditional type that will be TThen when TType is void and TElse otherwise
- **KeyOf**: Less annoying keyof that tosses out general-purpose indexing types
- **KeysOf**: Utility type representing an array of one or more keys from the given type
- **Item**: Utility type that gets the type of the items in an array
- **Select**: Utility type that creates a parallel tuple of value types from an object given a tuple of its keys
- **Needed**: Utility type that marks properties of a type as required
- **NeededKeysOf**: Utility type that extracts the required keys of a type
- **NeededPropertiesOf**: Utility type that includes only the required properties of a type
- **Filter**: Utility type that picks the properties of an object that match another given type
- **FilterToAssignable**: Utility type that picks the properties of an object that are assignable to another given type
- **AssignableKeysOf**: Utility type that extracts the keys of a type that are assignable to another given type
- **MatchingKeysOf**: Utility type that extracts the keys of a type that match another given type
- **Merge**: Utility type that merges the type definition of two objects together recursively

#### Maybe Type
- **Maybe**: A value representing either the presence or absence of a value. This is useful in contexts when you want semantics like ____ | undefined but a given type must be non-nullable
- **Something**: A value representing the presence of a value
- **Nothing**: A value representing the absence of a value
- **Maybe constructor**: Creates a Maybe. A Something if value is given; Nothing otherwise
- **Something constructor**: Creates a Something
- **Nothing constructor**: Creates a Nothing
- **isSomething**: Type guard which detects whether a given Maybe is Something
- **isNothing**: Type guard which detects whether a given Maybe is Nothing
- **unwrap**: Gets the value within the given Maybe or throws if it's Nothing
- **unwrapMany**: Gets the values within the given Maybes or throws if there are any Nothings
- **tryToUnwrap**: Tries to get the value within the given Maybe. Returns the value if Something, undefined otherwise
- **tryToUnwrapMany**: Tries to get the values within the given Maybes. Returns a parallel array where each item is either the corresponding Maybe's value or undefined if Nothing
- **wrap**: Creates a new Maybe from a given value. A Something if value is defined, Nothing otherwise
- **wrapMany**: Creates new Maybes from given values. Returns a parallel array where each item is Something if value is defined, Nothing otherwise
- **compact**: Gets all the Maybes in a given array that were Somethings
- **density**: Gets the number of Somethings in an array of Maybes
- **sparsity**: Gets the number of Nothings in an array of Maybes
- **isFull**: Type guard which detects whether every Maybe in a given array is Something
- **isVacant**: Type guard which detects whether every Maybe in a given array is Nothing

#### Result Type
- **Result**: Result of an operation, the outcome of which could be successful or unsuccessful
- **Success**: Successful result with optional content
- **Failure**: Unsuccessful result with optional content
- **Success constructor**: Creates a Success without content, or with content
- **Failure constructor**: Creates a Failure without content, or with content
- **isSuccess**: Type guard which detects whether a given result is a success
- **isFailure**: Type guard which detects whether a given result is a failure
- **content**: Gets the content from a Failure or Success

#### Fault Type
- **Fault**: Utility type for common error handling cases in which we want an error code and, optionally, an inner error
- **unpack**: Normalizes the fault into a format that can be consistently destructured, regardless of its runtime type. Returns a tuple where the first entry is the code associated with the fault. If the fault also contains an inner error, that is returned as the second entry. Otherwise, the second entry is undefined

#### Pair Type
- **Pair**: A tuple of two defined values
- **Pair constructor**: Creates a Pair from the given values
- **isPair**: Type guard that checks whether a value is a Pair
- **First**: The type of the first value of a Pair
- **Second**: The type of the second value of a Pair
- **FirstColumn**: A tuple containing the first value type of each Pair in a tuple of Pairs
- **SecondColumn**: A tuple containing the second value type of each Pair in a tuple of Pairs
- **first**: Gets the first value of a Pair
- **second**: Gets the second value of a Pair
- **firstColumn**: Gets the first value of each Pair in a tuple of Pairs
- **secondColumn**: Gets the second value of each Pair in a tuple of Pairs
- **reposition**: Creates a new Pair by mapping the first and second values of an existing Pair to new values using two functions
- **repositionFirst**: Creates a new Pair by mapping the first value of an existing Pair to a new value using a function
- **repositionSecond**: Creates a new Pair by mapping the second value of an existing Pair to a new value using a function
- **Transpose**: Transposes a tuple of Pairs into a Pair of tuples. This is analogous to transposing a n x 2 matrix into a 2 x n matrix
- **transpose**: Transposes a tuple of Pairs into a Pair of tuples. This is analogous to transposing a n x 2 matrix into a 2 x n matrix

#### Array Utilities
- **isArray**: Type guard that checks whether a value is an array

#### String Utilities
- **isString**: Checks whether a given value is a string
- **isEmpty**: Checks whether a string value is empty
- **isNotEmpty**: Checks whether a string value is not empty
- **isUndefinedOrEmpty**: Checks whether a string value is undefined or empty
- **isNotUndefinedOrEmpty**: Checks whether a string value is not undefined nor empty
- **isWhiteSpace**: Checks whether a string value is white space
- **isNotWhiteSpace**: Checks whether a string value is not white space
- **isUndefinedOrWhiteSpace**: Checks whether a string value is undefined or white space
- **isNotUndefinedOrWhiteSpace**: Checks whether a string value is not undefined nor white space

#### Number Utilities
- **isNumber**: Type guard which checks whether a given value is a number

#### Boolean Utilities
- **isBoolean**: Type guard which detects whether a given value is boolean

#### Object Utilities
- **isObject**: Type guard that checks whether a value is a non-null object

#### None-One-Or-Many Type
- **NoneOneOrMany**: A value that could be zero, one, or many defined values
- **None**: A value that is an empty array
- **One**: A value that is an array containing a single defined value
- **Many**: A value that is an array that contains more than one defined value
- **NoneOrOne**: A value that could be zero or one defined values
- **OneOrMany**: A value that could be one or more defined values
- **isNone**: Type guard that checks whether a value is None
- **isOne**: Type guard that checks whether a value is One
- **isMany**: Type guard that checks whether a value is Many
- **NoneOneOrMany constructor**: Creates a NoneOneOrMany from zero or more defined values
- **NoneOrOne constructor**: Creates a NoneOrOne from a value
- **OneOrMany constructor**: Creates a OneOrMany from a single defined value and additional defined values
- **toArray**: Converts a NoneOneOrMany into an array. If the NoneOneOrMany was already an array, will return a copy

#### Blank Utilities
- **Blank**: A utility type representing an empty object
- **isBlank**: Checks whether an object contains no defined items

### Infrastructure
- TypeScript compilation with type definitions
- Comprehensive test suite with Jest
- Code coverage reporting with Codecov
- GitHub Actions workflows for CI/CD
- Automated publishing to GitHub Packages
- ESLint configuration for code quality
- Prettier configuration for code formatting


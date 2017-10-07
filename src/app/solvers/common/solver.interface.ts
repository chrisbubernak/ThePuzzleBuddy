export interface Solver {
    /** Add current letter to the solution. */
    add(): void;

    /** Remove the last letter from the solution. */
    remove(): void;

    /** Whether the current letter is valid. */
    valid(): void;
}
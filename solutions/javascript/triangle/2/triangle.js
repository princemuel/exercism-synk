/**
 * Checks if the given value is a positive finite number.
 *
 * @param {unknown} n - The value to check.
 * @returns {n is number} True if `n` is a number, finite, and greater than 0.
 */
const isPosAndFinite = (n) => typeof n === "number" && isFinite(n) && n > 0;

export class Triangle {
    #sides;
    #isValid;

    /**
     * @param {number[]} sides
     */
    constructor(...sides) {
        if (sides.length !== 3)
            throw new Error("Triangle must have exactly 3 sides");
        this.#sides = sides;
        this.#isValid = Triangle.#computeValidity();
    }

    /**
     * @param {number[]} sides
     */
    static #computeValidity(/** @type {unknown[]} */ ...sides) {
        return (
            sides.every(isPosAndFinite) &&
            sides.reduce((a, b) => a + b, 0) > 2 * Math.max(...sides)
        );
    }

    #isValidTriangle() {
        return this.#isValid;
    }

    get isEquilateral() {
        return this.#isValidTriangle() && new Set(this.#sides).size === 1;
    }

    get isIsosceles() {
        return this.#isValidTriangle() && new Set(this.#sides).size < 3;
    }

    get isScalene() {
        return this.#isValidTriangle() && new Set(this.#sides).size === 3;
    }
}

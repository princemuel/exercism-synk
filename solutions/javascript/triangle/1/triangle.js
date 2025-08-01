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
        this.#isValid = this.#computeValidity();
    }

    #computeValidity() {
        return (
            this.#sides.every((s) => s > 0) &&
            this.#sides.reduce((a, b) => a + b, 0) >
                2 * Math.max(...this.#sides)
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

export class Squares {
    constructor(/**  @type {number} n  */ n) {
        this.n = n;
    }

    get sumOfSquares() {
        return (this.n * (this.n + 1) * (2 * this.n + 1)) / 6;
    }

    get squareOfSum() {
        return Math.pow((this.n * (this.n + 1)) / 2, 2);
    }

    get difference() {
        return this.squareOfSum - this.sumOfSquares;
    }
}

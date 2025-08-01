export const steps = (n: number, count: number = 0): number => {
    if (n <= 0 || !Number.isInteger(n))
        throw new TypeError("Only positive integers are allowed");

    if (n === 1) return count;

    const next = n % 2 === 0 ? n / 2 : 3 * n + 1;
    return steps(next, count + 1);
};

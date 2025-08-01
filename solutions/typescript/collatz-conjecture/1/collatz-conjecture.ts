export const steps = (n: number) => {
    if (n <= 0 || !Number.isInteger(n))
        throw new TypeError("Only positive integers are allowed");

    let count = 0;
    while (n !== 1) {
        n = n % 2 ? 3 * n + 1 : n / 2;
        count += 1;
    }

    return count;
};

export function sum(factors: number[], limit: number): number {
    const multiples = factors
        .filter((factor) => factor !== 0)
        .flatMap((factor) => {
            const count = Math.floor((limit - 1) / factor);
            return Array.from(
                { length: count },
                (_, idx) => factor * (idx + 1),
            );
        });

    return [...new Set(multiples)].reduce((a, b) => a + b, 0);
}

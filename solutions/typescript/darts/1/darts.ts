export function score(x: number, y: number): number {
    const point = x ** 2 + y ** 2;
    const scores = new Map([
        [point <= 100, 1],
        [point <= 25, 5],
        [point <= 1, 10],
    ]);
    return scores.get(true) ?? 0;
}

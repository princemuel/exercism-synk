export const eggCount = (displayValue: number): number => {
    let count = 0;
    let n = displayValue;
    while (n !== 0) {
        count += 1;
        n &= n - 1;
    }
    return count;
};

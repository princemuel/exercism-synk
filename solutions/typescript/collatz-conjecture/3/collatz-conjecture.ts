type Thunk<T> = () => T | Thunk<T>;

function trampoline<T>(f: Thunk<T>): T {
    let result: T | Thunk<T> = f;
    while (typeof result === "function") {
        result = result() as Thunk<T>;
    }
    return result;
}

function collatz(n: number, count: number = 0): Thunk<number> {
    if (n <= 0 || !Number.isInteger(n)) {
        throw new TypeError("Only positive integers are allowed");
    }

    if (n === 1) return () => count;

    const next = n % 2 === 0 ? n / 2 : 3 * n + 1;
    return () => collatz(next, count + 1);
}

export const steps = (n: number): number => trampoline(() => collatz(n));

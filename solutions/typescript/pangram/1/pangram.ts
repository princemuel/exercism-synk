export const isPangram = (input: string): boolean =>
    new Set([...input.toLowerCase()].filter((char) => /([a-z])/.test(char)))
        .size === 26;

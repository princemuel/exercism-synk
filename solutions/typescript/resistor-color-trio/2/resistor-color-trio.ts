type Color = (typeof ResistorValues)[number];

const ResistorValues = [
    "black",
    "brown",
    "red",
    "orange",
    "yellow",
    "green",
    "blue",
    "violet",
    "grey",
    "white",
] as const;

const units = [
    [1_000_000_000, "giga"],
    [1_000_000, "mega"],
    [1_000, "kilo"],
] as const;

export function decodedResistorValue(colors: Color[]): string {
    const [tens, ones, zeros] = colors
        .slice(0, 3)
        .map((color) => ResistorValues.indexOf(color));

    const ohms = (tens * 10 + ones) * 10 ** zeros;

    const [divisor, prefix] = units.find(([value]) => ohms >= value) ?? [1, ""];

    return `${ohms / divisor} ${prefix}ohms`;
}

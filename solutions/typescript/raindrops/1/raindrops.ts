export const convert = (num: number): string =>
  Array.from(
    new Map([
      [3, "Pling"],
      [5, "Plang"],
      [7, "Plong"],
    ])
  )
    .filter(([key]) => 0 === num % key)
    .map(([, val]) => val)
    .join("") || String(num);

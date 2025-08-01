// @ts-check

/**
 * Calculates the sum of the two input arrays.
 *
 * @param {number[]} array1
 * @param {number[]} array2
 * @returns {number} sum of the two arrays
 */
export const twoSum = (array1, array2) =>
  Number(array1.join("")) + Number(array2.join(""));

/**
 * Checks whether a number is a palindrome.
 *
 * @param {number} value
 * @returns {boolean} whether the number is a palindrome or not
 */
export const luckyNumber = (value) => {
  let s = String(value).split("");
  return s.join() === s.reverse().join();
};

/**
 * Determines the error message that should be shown to the user
 * for the given input value.
 *
 * @param {string|null|undefined} input
 * @returns {string} error message
 */
export const errorMessage = (input) => {
  if (!input) return "Required field";
  const n = Number(input);
  if (Number.isNaN(n) || 0 === n) return "Must be a number besides 0";
  return "";
};

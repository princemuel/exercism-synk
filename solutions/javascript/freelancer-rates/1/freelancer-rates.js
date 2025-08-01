// @ts-check

/**
 * The day rate, given a rate per hour
 *
 * @param {number} ratePerHour
 * @returns {number} the rate per day
 */
export const dayRate = (ratePerHour) => 8 * ratePerHour;

/**
 * Calculates the number of days in a budget, rounded down
 *
 * @param {number} budget: the total budget
 * @param {number} ratePerHour: the rate per hour
 * @returns {number} the number of days
 */
export const daysInBudget = (budget, ratePerHour) =>
  Math.floor(budget / dayRate(ratePerHour));

/**
 * Calculates the discounted rate for large projects, rounded up
 *
 * @param {number} ratePerHour
 * @param {number} numDays: number of days the project spans
 * @param {number} discount: for example 20% written as 0.2
 * @returns {number} the rounded up discounted rate
 */
export const priceWithMonthlyDiscount = (ratePerHour, numDays, discount) => {
  const days_without_discount = numDays % 22;
  const days_with_discount = numDays - days_without_discount;

  const daysRateAmount = dayRate(ratePerHour) * days_without_discount;

  const discountRateAmount =
    days_with_discount * dayRate(ratePerHour) * discount;

  return Math.ceil(daysRateAmount + discountRateAmount);
};

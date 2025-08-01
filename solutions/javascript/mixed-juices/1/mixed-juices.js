// @ts-check
//
// The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion when
// implementing this exercise.

/**
 * Determines how long it takes to prepare a certain juice.
 *
 * @param {string} name
 * @returns {number} time in minutes
 */
export const timeToMixJuice = (name) => {
    switch (name) {
        case "Pure Strawberry Joy":
            return 0.5;
        case "Energizer":
        case "Green Garden":
            return 1.5;
        case "Tropical Island":
            return 3;
        case "All or Nothing":
            return 5;
        default:
            return 2.5;
    }
};

/**
 * Calculates the number of limes that need to be cut
 * to reach a certain supply.
 *
 * @param {number} wedgesNeeded
 * @param {string[]} limes
 * @returns {number} number of limes cut
 */
export const limesToCut = (wedgesNeeded, limes) => {
    let wedgesCut = 0;
    let limesCut = 0;
    let limesLength = limes.length;

    while (wedgesCut < wedgesNeeded && limesCut < limesLength) {
        const lime = limes[limesCut];
        wedgesCut += getWedgeValue(lime);
        limesCut += 1;
    }

    return limesCut;

    function getWedgeValue(/** @type {string} lime*/ lime) {
        switch (lime) {
            case "small":
                return 6;
            case "medium":
                return 8;
            case "large":
                return 10;
            default:
                return 0;
        }
    }
};

/**
 * Determines which juices still need to be prepared after the end of the shift.
 *
 * @param {number} timeLeft
 * @param {string[]} orders
 * @returns {string[]} remaining orders after the time is up
 */
export const remainingOrders = (timeLeft, orders) => {};

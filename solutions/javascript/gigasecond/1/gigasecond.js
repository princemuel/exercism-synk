//
// This is only a SKELETON file for the 'Gigasecond' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const gigasecond = (/** @type {Date} */ start) => {
    return new Date(start.getTime() + 1_000_000_000 * 1_000);
};

// use time::{Duration, PrimitiveDateTime as DateTime};

// // Returns a DateTime one billion seconds after start.
// pub fn after(start: DateTime) -> DateTime {
//     start + Duration::seconds(GIGA_SEC)
// }

// @ts-check

/**
 * Create an appointment
 *
 * @param {number} days
 * @param {number} [now] (ms since the epoch, or undefined)
 *
 * @returns {Date} the appointment
 */
export const createAppointment = (days, now = undefined) => {
    const date = new Date(now ?? Date.now());
    date.setDate(date.getDate() + days);
    return date;
};

/**
 * Generate the appointment timestamp
 *
 * @param {Date} appointmentDate
 *
 * @returns {string} timestamp
 */
export const getAppointmentTimestamp = (appointmentDate) =>
    appointmentDate.toISOString();

/**
 * Get details of an appointment
 *
 * @param {string} timestamp (ISO 8601)
 *
 * @returns {Record<'year' | 'month' | 'date' | 'hour' | 'minute', number>} the appointment details
 */
export const getAppointmentDetails = (timestamp) => {
    const datetime = new Date(timestamp);
    const year = datetime.getFullYear();
    const month = datetime.getMonth();
    const date = datetime.getDate();
    const hour = datetime.getHours();
    const minute = datetime.getMinutes();
    return { year, month, date, hour, minute };
};

/**
 * Update an appointment with given options
 *
 * @param {string} timestamp (ISO 8601)
 * @param {Partial<Record<'year' | 'month' | 'date' | 'hour' | 'minute', number>>} options
 *
 * @returns {Record<'year' | 'month' | 'date' | 'hour' | 'minute', number>} the appointment details
 */
export const updateAppointment = (timestamp, options) => {
    const datetime = new Date(timestamp);
    const details = {
        year: options.year ?? datetime.getFullYear(),
        month: options.month ?? datetime.getMonth(),
        date: options.date ?? datetime.getDate(),
        hour: options.hour ?? datetime.getHours(),
        minute: options.minute ?? datetime.getMinutes(),
    };

    datetime.setFullYear(details.year);
    datetime.setMonth(details.month);
    datetime.setDate(details.date);
    datetime.setHours(details.hour);
    datetime.setMinutes(details.minute);

    return getAppointmentDetails(datetime.toISOString());
};

/**
 * Get available time in seconds (rounded) between two appointments
 *
 * @param {string} timestampA (ISO 8601)
 * @param {string} timestampB (ISO 8601)
 *
 * @returns {number} amount of seconds (rounded)
 */
export const timeBetween = (timestampA, timestampB) => {
    const difference = Math.abs(
        new Date(timestampB).getTime() - new Date(timestampA).getTime(),
    );
    return Math.round(difference / 1000);
};

/**
 * Get available times between two appointment
 *
 * @param {string} appointmentTimestamp (ISO 8601)
 * @param {string} currentTimestamp (ISO 8601)
 */
export const isValid = (appointmentTimestamp, currentTimestamp) => {
    return new Date(appointmentTimestamp) > new Date(currentTimestamp);
};

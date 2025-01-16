/**
 * Checks if a date is within a specified range, inclusive of boundaries.
 * @param date - The date to check.
 * @param startDate - The start of the range.
 * @param endDate - The end of the range.
 * @returns True if the date is within the range (inclusive), otherwise false.
 */
const normalizeToDate = (date: string | Date): number => {
    const d = new Date(date);
    d.setHours(0, 0, 0, 0); // Reset to midnight
    return d.getTime();
};

export const isDateInRange = (date: string | Date, startDate?: Date, endDate?: Date): boolean => {
    const targetDate = normalizeToDate(date);
    const start = startDate ? normalizeToDate(startDate) : -Infinity;
    const end = endDate ? normalizeToDate(endDate) : Infinity;

    return targetDate >= start && targetDate <= end;
};
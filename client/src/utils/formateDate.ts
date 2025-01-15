/**
 *
 * @param dateInput - A date string or Date object to format.
 * @param locale - Optional locale for formatting (default is 'en-US').
 * @param options - Optional Intl.DateTimeFormat options.
 * @returns A formatted date string.
 */
export function formatDate(
    dateInput: string | Date,
    locale: string = 'en-US',
    options: Intl.DateTimeFormatOptions = {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    }
): string {
    try {
        // Convert string input to a Date object if needed
        const date = typeof dateInput === 'string' ? new Date(dateInput) : dateInput;

        // Check for invalid date
        if (isNaN(date.getTime())) {
            throw new Error('Invalid date');
        }

        // Use Intl.DateTimeFormat for formatting
        return new Intl.DateTimeFormat(locale, options).format(date);
    } catch (error) {
        console.error('Error formatting date:', error);
        return 'Invalid date';
    }
}
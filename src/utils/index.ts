/**
 * Utility functions for Royal Heritage application.
 */

export interface FormattedEventDate {
  formattedDate: string; // e.g. "16 February 2027"
  weekday: string;       // e.g. "Tuesday"
  shortDate: string;     // e.g. "16 Feb 2027"
}

/**
 * Format an ISO date string to a human-readable display string.
 */
export function formatDate(dateString: string, options?: Intl.DateTimeFormatOptions): string {
  const normalized = /^\d{4}-\d{2}-\d{2}$/.test(dateString)
    ? `${dateString}T00:00:00+05:30`
    : dateString;
  const date = new Date(normalized);
  if (isNaN(date.getTime())) {
    return dateString;
  }
  return new Intl.DateTimeFormat('en-IN', {
    timeZone: 'Asia/Kolkata',
    ...(options || {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    }),
  }).format(date);
}

/**
 * Derive formatted display date and weekday from an ISO date string (YYYY-MM-DD).
 * Accurately calculated in India Standard Time (+05:30).
 */
export function deriveEventDate(isoDateString: string): FormattedEventDate {
  const normalized = /^\d{4}-\d{2}-\d{2}$/.test(isoDateString)
    ? `${isoDateString}T00:00:00+05:30`
    : isoDateString;

  const date = new Date(normalized);

  if (isNaN(date.getTime())) {
    return {
      formattedDate: isoDateString,
      weekday: '',
      shortDate: isoDateString,
    };
  }

  const formattedDate = new Intl.DateTimeFormat('en-IN', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    timeZone: 'Asia/Kolkata',
  }).format(date);

  const weekday = new Intl.DateTimeFormat('en-IN', {
    weekday: 'long',
    timeZone: 'Asia/Kolkata',
  }).format(date);

  const shortDate = new Intl.DateTimeFormat('en-IN', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
    timeZone: 'Asia/Kolkata',
  }).format(date);

  return { formattedDate, weekday, shortDate };
}

export * from './invitation';


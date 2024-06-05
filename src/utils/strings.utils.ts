/**
 * Capitalizes the first letter of a string or array.
 * @param s - The string or array to capitalize.
 * @returns The capitalized string.
 */
export const capitalize = (s: string | any[]): string => 
    // Check if s has a length greater than 0, then capitalize the first letter
    (s && s.length > 0) ? s[0].toUpperCase() + s.slice(1) : ""; // If not, return an empty string
  
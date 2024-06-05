/**
 * Converts height from decimetres to centimetres.
 * @param height - The height in decimetres.
 * @returns The height in centimetres.
 */
export const convertHeight = (height: number | undefined): number => (height || 0) * 10;

/**
 * Converts weight from hectograms to kilograms.
 * @param weight - The weight in hectograms.
 * @returns The weight in kilograms.
 */
export const convertWeight = (weight: number | undefined): number => (weight || 0) / 10;

/**
 * Generates an array of numbers from 0 to length - 1.
 * @param length - The length of the array.
 * @returns An array of numbers from 0 to length - 1.
 */
export const generateArrayOfNumbers = (length: number): number[] => Array.from({ length }, (_, i) => i);

/**
 * Generates a random value between min and max (inclusive).
 * @param min - The minimum value.
 * @param max - The maximum value.
 * @returns A random value between min and max.
 */
export const getRandomValue = (min: number, max: number): number => Math.floor(Math.random() * (max - min + 1)) + min;

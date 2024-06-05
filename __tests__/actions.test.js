import { convertHeight, convertWeight, generateArrayOfNumbers, getRandomValue } from '../src/utils/actions.utils';

describe('convertHeight', () => {
  test('converts height from meters to decimeters', () => {
    expect(convertHeight(1.7)).toBe(17);
    expect(convertHeight(0)).toBe(0);
  });

  test('returns 0 if height is undefined', () => {
    expect(convertHeight(undefined)).toBe(0);
  });
});

describe('convertWeight', () => {
  test('converts weight from hectograms to kilograms', () => {
    expect(convertWeight(85)).toBe(8.5);
    expect(convertWeight(0)).toBe(0);
  });

  test('returns 0 if weight is undefined', () => {
    expect(convertWeight(undefined)).toBe(0);
  });
});

describe('generateArrayOfNumbers', () => {
  test('generates an array of numbers with given length', () => {
    expect(generateArrayOfNumbers(5)).toEqual([0, 1, 2, 3, 4]);
    expect(generateArrayOfNumbers(0)).toEqual([]);
  });

  test('generates an empty array when length is 0', () => {
    expect(generateArrayOfNumbers(0)).toEqual([]);
  });
});

describe('getRandomValue', () => {
  test('returns a random value within the given range', () => {
    const min = 1;
    const max = 10;
    const value = getRandomValue(min, max);
    expect(value).toBeGreaterThanOrEqual(min);
    expect(value).toBeLessThanOrEqual(max);
  });

  test('returns the same value when min and max are equal', () => {
    expect(getRandomValue(5, 5)).toBe(5);
  });
});

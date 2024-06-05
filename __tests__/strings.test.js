import { capitalize } from '../src/utils/strings.utils';

describe('capitalize function', () => {
  it('should capitalize the first letter of a string', () => {
    const input = 'pokemon';
    const expectedOutput = 'Pokemon';
    expect(capitalize(input)).toBe(expectedOutput);
  });

  it('should handle an empty string', () => {
    const input = '';
    const expectedOutput = '';
    expect(capitalize(input)).toBe(expectedOutput);
  });

 });

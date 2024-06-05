import React from 'react';
import { render } from 'react-native-testing-library';
import PokemonInfoItem from '../src/components/PokemonInfoItem';

describe('PokemonInfoItem', () => {
  test('renders correctly with single value', () => {
    const title = 'Height';
    const value = '10';
    const { getByText } = render(<PokemonInfoItem title={title} value={value} />);
    const titleElement = getByText(title);
    const valueElement = getByText(value);
    expect(titleElement).toBeTruthy();
    expect(valueElement).toBeTruthy();
  });

  test('renders correctly with multiple values', () => {
    const title = 'Abilities';
    const value = ['Ability 1', 'Ability 2'];
    const { getByText } = render(<PokemonInfoItem title={title} value={value} />);
    const titleElement = getByText(title);
    expect(titleElement).toBeTruthy();
    value.forEach((val) => {
      const valueElement = getByText(val);
      expect(valueElement).toBeTruthy();
    });
  });

  test('renders correctly with unit', () => {
    const title = 'Weight';
    const value = '100';
    const unit = 'kg';
    const { getByText } = render(<PokemonInfoItem title={title} value={value} unit={unit} />);
    const titleElement = getByText(title);
    const valueElement = getByText(`${value} ${unit}`);
    expect(titleElement).toBeTruthy();
    expect(valueElement).toBeTruthy();
  });

  test('renders correctly with no value', () => {
    const title = 'Type';
    const { getByText } = render(<PokemonInfoItem title={title} />);
    const titleElement = getByText(title);
    const valueElement = getByText('N/A');
    expect(titleElement).toBeTruthy();
    expect(valueElement).toBeTruthy();
  });
});

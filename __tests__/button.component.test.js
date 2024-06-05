import React from 'react';
import { render, fireEvent } from 'react-native-testing-library';
import Button from '../src/components/Button';

describe('Button', () => {
  test('renders correctly', () => {
    const { getByText } = render(<Button title="Press Me" onClick={() => {}} />);
    const buttonElement = getByText('Press Me');
    expect(buttonElement).toBeDefined();
  });

  test('calls onClick function when pressed', () => {
    const onClickMock = jest.fn();
    const { getByText } = render(<Button title="Press Me" onClick={onClickMock} />);
    const buttonElement = getByText('Press Me');

    fireEvent.press(buttonElement);

-    expect(onClickMock).toHaveBeenCalledTimes(1);
  });
});

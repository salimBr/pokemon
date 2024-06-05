import React from 'react';
import { render, fireEvent } from 'react-native-testing-library';
import NoDataItem from '../src/components/NoDataItem';
import Strings from '../src/constants/en.constants';

describe('NoDataItem', () => {
  test('renders correctly', () => {
    const onClickMock = jest.fn();

    const { getByText } = render(<NoDataItem onClick={onClickMock} />);

    const imageElement = getByText(Strings['common.emptyListTitle']);
    const buttonElement = getByText(Strings['button.retry']);

    expect(imageElement).toBeTruthy();
    expect(buttonElement).toBeTruthy();
  });

  test('calls onClick function when retry button is clicked', () => {
    const onClickMock = jest.fn();

    const { getByText } = render(<NoDataItem onClick={onClickMock} />);
    const buttonElement = getByText(Strings['button.retry']);
    fireEvent.press(buttonElement);

    expect(onClickMock).toHaveBeenCalledTimes(1);
  });
});

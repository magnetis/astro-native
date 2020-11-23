import React from 'react';
import { fireEvent, render } from '@testing-library/react-native';
import { colors } from '@magnetis/astro-galaxy-tokens';

import IconLinkButton from '../IconLinkButton';

const onPress = jest.fn();

const props = {
  onPress,
  testID: 'IconLinkButton',
};

describe('Outline Icon Label Button', () => {
  it('renders correctly with default props', () => {
    const { getByText, getByTestId } = render(<IconLinkButton text="MyButton" {...props} icon="Alert" />);
    const text = getByText('MyButton');
    const icon = getByTestId('IconLinkButton.Icon');

    expect(text.props.style).toEqual(
      expect.objectContaining({
        color: colors.space100,
        fontFamily: 'Lato-Regular',
        fontSize: 16,
      })
    );

    expect(icon.props.style).toEqual(
      expect.objectContaining({
        marginLeft: 0,
        marginRight: 9,
      })
    );
  });

  it('renders correctly when isDisabled is true', () => {
    const { getByText } = render(<IconLinkButton isDisabled text="MyButton" {...props} icon="Alert" />);
    const text = getByText('MyButton');

    expect(text.props.style).toEqual(
      expect.objectContaining({
        color: colors.moon300,
        fontFamily: 'Lato-Regular',
        fontSize: 16,
      })
    );
  });

  it('renders correctly when iconPosition is right', () => {
    const { getByText, getByTestId } = render(
      <IconLinkButton iconPosition="right" text="MyButton" {...props} icon="Alert" />
    );
    const text = getByText('MyButton');
    const icon = getByTestId('IconLinkButton.Icon');

    expect(text.props.style).toEqual(
      expect.objectContaining({
        color: colors.space100,
        fontFamily: 'Lato-Regular',
        fontSize: 16,
      })
    );

    expect(icon.props.style).toEqual(
      expect.objectContaining({
        marginLeft: 9,
        marginRight: 0,
      })
    );
  });

  it('fires onPress prop when pressed', () => {
    const { getByTestId } = render(<IconLinkButton text="MyButton" {...props} icon="Alert" />);
    const button = getByTestId('IconLinkButton');

    fireEvent.press(button);
  });
});

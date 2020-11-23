import styled from 'styled-components/native';
import { getFontSize, getLineHeight } from './utils';
import { TextProps } from 'react-native';

import { poppinsSemiBold } from '@tokens/fonts';
import { ButtonSize } from './types';

interface BaseTextProps extends TextProps {
  size?: ButtonSize;
  isDisabled?: boolean;
  color: string;
}

const BaseText = styled.Text<BaseTextProps>`
  font-size: ${({ size }) => getFontSize(size as ButtonSize)}px;
  line-height: ${({ size }) => getLineHeight(size as ButtonSize)}px;
  ${({ color }) => color && `color: ${color};`};
  font-family: ${poppinsSemiBold};
  align-items: center;
`;

BaseText.defaultProps = {
  size: 'medium',
};

export default BaseText;
export type { BaseTextProps };

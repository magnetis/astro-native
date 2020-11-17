import React, { ReactElement } from 'react';
import { View, StyleSheet, ActivityIndicator, Pressable, PressableProps } from 'react-native';

import { getBorderRadius, getButtonPadding, getButtonHeight } from './utils';
import { ButtonSize } from './types';

interface BaseButtonProps extends PressableProps {
  children: ReactElement;
  testID?: string;
  accessibilityLabel?: string;
  isLoading?: boolean;
  isDisabled?: boolean;
  activityIndicatorColor: string;
  onPress: () => void;
  ref?: React.Ref<any>;
  backgroundColor: string;
  textColor: string;
  borderColor: string;
  size?: ButtonSize;
  noHorizontalPadding?: boolean;
  fill?: boolean;
}

const styles = StyleSheet.create({
  button: {
    height: 44,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 10,
    alignSelf: 'stretch',
    justifyContent: 'center',
  },
  spinner: {
    alignSelf: 'center',
  },
});

function BaseButton({
  isLoading = false,
  isDisabled = false,
  activityIndicatorColor,
  children,
  size = 'medium',
  noHorizontalPadding = false,
  fill = false,
  ...props
}: BaseButtonProps) {
  const computedStyles: any = {
    ...getButtonPadding(size, noHorizontalPadding),
    backgroundColor: props.backgroundColor,
    borderRadius: getBorderRadius(size),
    borderColor: props.borderColor,
    height: getButtonHeight(size),
    borderWidth: 2,
  };

  if (fill) {
    computedStyles.width = '100%';
  } else {
    computedStyles.alignSelf = 'center';
  }

  const pressableProps = {
    onPress: props.onPress,
    disabled: isDisabled,
    style: [styles.button, computedStyles],
    testID: props.testID,
  };

  return (
    <Pressable accessibilityRole="button" {...props} {...pressableProps}>
      <View style={{ alignItems: 'center', justifyContent: 'center', flex: fill ? 1 : 0 }}>
        <View style={{ opacity: isLoading ? 0 : 1 }}>{children}</View>
        {isLoading && (
          <View style={{ position: 'absolute', width: '100%' }}>
            <ActivityIndicator
              testID="BaseButton.ActivityIndicator"
              animating={true}
              size="small"
              style={styles.spinner}
              color={activityIndicatorColor}
            />
          </View>
        )}
      </View>
    </Pressable>
  );
}

export default BaseButton;
export type { BaseButtonProps };

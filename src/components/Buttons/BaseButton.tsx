import React, { ReactElement } from 'react';
import { View, StyleSheet, ActivityIndicator, Pressable, PressableProps } from 'react-native';

import { getBorderRadius, getButtonPadding } from './utils';
import { ButtonSize } from './types';

interface BaseButtonProps extends PressableProps {
  children: ReactElement;
  testID?: string;
  accessibilityLabel?: string;
  loading?: boolean;
  disabled?: boolean;
  activityIndicatorColor: string;
  onPress: () => void;
  backgroundColor: string;
  textColor: string;
  borderColor: string;
  size?: ButtonSize;
  noHorizontalPadding?: boolean;
  fill?: boolean;
  hasIcon?: boolean;
}

const styles = StyleSheet.create({
  button: {
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
  loading = false,
  disabled = false,
  activityIndicatorColor,
  children,
  size = 'medium',
  noHorizontalPadding = false,
  fill = false,
  hasIcon = false,
  ...props
}: BaseButtonProps) {
  const computedStyles: any = {
    ...getButtonPadding(size, { noHorizontalPadding, hasIcon }),
    backgroundColor: props.backgroundColor,
    borderRadius: getBorderRadius(size, { noHorizontalPadding, hasIcon }),
    borderColor: props.borderColor,
    borderWidth: 2,
  };

  if (fill) {
    computedStyles.width = '100%';
  } else {
    computedStyles.alignSelf = 'center';
  }

  const pressableProps = {
    onPress: props.onPress,
    disabled: disabled,
    style: [styles.button, computedStyles],
    testID: props.testID,
  };

  return (
    <Pressable accessibilityRole="button" {...props} {...pressableProps}>
      <View style={{ alignItems: 'center', justifyContent: 'center', flex: fill ? 1 : 0 }}>
        <View style={{ opacity: loading ? 0 : 1 }}>{children}</View>
        {loading && (
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
import React, { ReactElement, useState } from 'react';
import {
  View,
  StyleSheet,
  ActivityIndicator,
  Pressable,
  PressableProps,
  LayoutChangeEvent,
  Insets,
} from 'react-native';

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

type HitSlop = null | Insets | number;

const MIN_HIT_SLOP = 48;

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
  const [hitSlop, setHitSlop] = useState<HitSlop>({ top: 0, bottom: 0, left: 0, right: 0 });

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
    hitSlop: typeof props.hitSlop !== 'undefined' ? props.hitSlop : hitSlop,
  };

  function adjustHitSlop(event: LayoutChangeEvent) {
    const { width, height } = event.nativeEvent.layout;
    if (width < MIN_HIT_SLOP || height < MIN_HIT_SLOP) {
      const horizontalOffset = width < MIN_HIT_SLOP ? (MIN_HIT_SLOP - width) / 2 : 0;
      const verticalOffset = height < MIN_HIT_SLOP ? (MIN_HIT_SLOP - height) / 2 : 0;
      const newHitSlop = {
        top: verticalOffset,
        bottom: verticalOffset,
        left: horizontalOffset,
        right: horizontalOffset,
      };
      setHitSlop(newHitSlop);
    }
  }

  function onLayoutButton(event: LayoutChangeEvent) {
    if (props.onLayout) {
      props.onLayout(event);
    }
    if (typeof props.hitSlop === 'undefined') {
      adjustHitSlop(event);
    }
  }

  return (
    <Pressable accessibilityRole="button" {...props} {...pressableProps} onLayout={onLayoutButton}>
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

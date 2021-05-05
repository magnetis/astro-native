/* global NodeJS */

import React, { useEffect, useRef, ElementType } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { colors } from '@magnetis/astro-galaxy-tokens';

export interface ToastItemProps {
  onClose: () => void;
  message: string;
  type: 'alert' | 'success' | 'warning' | 'info';
  timeout: number;
  key: string;
  Icon: any;
}

const typecolors = {
  alert: colors.mars400,
  success: colors.earth600,
  warning: colors.sun500,
  info: colors.uranus500,
};

const ToastItem: React.FC<ToastItemProps> = ({ onClose, Icon, message, type, timeout = 5000 }) => {
  const timer = useRef<ReturnType<typeof setTimeout>>();

  useEffect(() => {
    timer.current = setTimeout(() => {
      onClose();
    }, timeout ?? 5000);

    return () => {
      if (timer.current) {
        clearTimeout(timer.current);
      }
    };
  }, []);

  return (
    <TouchableOpacity
      testID={'toast.view'}
      style={{
        paddingHorizontal: 24,
        paddingVertical: 18,
        borderRadius: 4,
        backgroundColor: typecolors[type],
        marginBottom: 10,
        marginHorizontal: 32,
        width: `100%`,
        flexDirection: 'row',
        justifyContent: 'space-between',
      }}
      onPress={onClose}
    >
      <Icon color={colors.space100} width={32} height={32} />
      <Text style={{ color: colors.space100, marginTop: 8 }}>{message}</Text>
    </TouchableOpacity>
  );
};

export default ToastItem;

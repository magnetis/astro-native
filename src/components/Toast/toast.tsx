import React, { Component } from 'react';
import { FlatList, StyleSheet } from 'react-native';
import ToastItem, { ToastItemProps } from './toast-item';
import { ToastHolder } from './toast-service';

type MessageType = 'success' | 'alert' | 'warning' | 'info';

interface ToastState {
  messagesQueue: ToastItemProps[];
}

export interface ToastRef {
  queueNewMessage(message: string, typeVariante: MessageType): void;
  state: ToastState;
}

class ToastComponent extends Component<any, ToastState> implements ToastRef {
  state: ToastState = {
    messagesQueue: [],
  };

  queueNewMessage = (message: string, typeVariante: MessageType = 'alert') => {
    this.setState((state: any) => {
      const key = `${+new Date()}`;

      return {
        messagesQueue: [...state.messagesQueue, { message, key, typeVariante, onClose: this.dequeueMessage(key) }],
      };
    });
  };

  dequeueMessage = (key: string) => {
    return () => {
      this.setState((state) => ({
        messagesQueue: state.messagesQueue.filter((item) => item.key !== key),
      }));
    };
  };

  renderItem = ({ item }: { item: ToastItemProps }) => <ToastItem {...item} />;

  render = () => {
    const { messagesQueue } = this.state;

    return (
      <FlatList
        testID="toast.list"
        style={[
          styles.list,
          {
            top: this.props.insets.top,
          },
        ]}
        data={messagesQueue}
        renderItem={this.renderItem}
      />
    );
  };
}

const styles = StyleSheet.create({
  list: {
    zIndex: 90,
    flex: 1,
    width: '100%',
    position: 'absolute',
    alignSelf: 'center',
  },
});

export default () => {
  return <ToastComponent ref={(ref) => ToastHolder.setToast(ref)} />;
};

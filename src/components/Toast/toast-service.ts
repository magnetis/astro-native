import { ToastRef } from './toast';

export class ToastHolder {
  private static toast: ToastRef;

  static setToast(toast: any) {
    this.toast = toast;
  }

  static alert(message: string) {
    this.toast?.queueNewMessage(message, 'alert');
  }

  static success(message: string) {
    this.toast?.queueNewMessage(message, 'success');
  }

  static getLastMessage() {
    if (this.toast) {
      const { state } = this.toast;
      const length = state.messagesQueue.length;
      return state.messagesQueue[length - 1];
    }
  }
}

export function alert(message: string) {
  ToastHolder.alert(message);
}

export function success(message: string) {
  ToastHolder.success(message);
}

export default ToastHolder;

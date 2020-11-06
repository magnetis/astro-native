/// <reference types="jest" />

declare namespace jest {
  interface Expect {
    exists(received: any): any;
  }
  interface Matchers<R> {
    exists(): R;
  }
}

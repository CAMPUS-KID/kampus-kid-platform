export const wait = (timeout: number = 0) =>
  new Promise<void>(resolve => setTimeout(resolve, timeout));

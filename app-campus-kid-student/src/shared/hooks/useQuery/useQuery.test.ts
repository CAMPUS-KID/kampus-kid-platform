import { renderHook, act } from '@testing-library/react-hooks';

import useQuery from './useQuery';

const resolve = (res: any) => new Promise(r => setTimeout(() => r(res), 100));
const reject = (err: any) => new Promise((_, r) => setTimeout(() => r(err), 100));

describe('useQuery', () => {
  it('should initialize values', () => {
    const { result } = renderHook(() => useQuery(() => new Promise(() => {}), []));
    const [cb, isLoading, error, response] = result.current;
    expect(typeof cb).toEqual('function');
    expect(isLoading).toBeFalsy();
    expect(error).toEqual(undefined);
    expect(response).toEqual(undefined);
  });

  it('should change isLoading to true when callback is executed', () => {
    const { result } = renderHook(() => useQuery(() => new Promise(() => {}), []));
    const [cb] = result.current;
    act(() => {
      cb();
    });
    const [, isLoading] = result.current;
    expect(isLoading).toEqual(true);
  });

  it('should update error value when promise fails', async () => {
    const promiseError = new Error('intentional error');
    const { result } = renderHook(() => useQuery(() => Promise.reject(promiseError), []));
    const [cb] = result.current;
    await act(cb);
    const [, , error] = result.current;
    expect(error).toEqual(promiseError);
  });

  it('should throw rejection when configured when promise fails', async () => {
    const promiseError = new Error('intentional error');
    const { result } = renderHook(() => useQuery(() => Promise.reject(promiseError), [], true));
    const [cb] = result.current;
    try {
      await act(cb);
      expect(true).toBe(false);
    } catch (error) {
      expect(error).toBe(promiseError);
    }
  });

  it('should update result value when promise fails', async () => {
    const promiseRes = 'a result';
    const { result } = renderHook(() => useQuery((r: string) => Promise.resolve(r), []));
    const [cb] = result.current;
    await act(() => cb(promiseRes));
    const [, , , res] = result.current;
    expect(res).toEqual(promiseRes);
  });

  it('should not return new result states when component unmounts', async () => {
    let { result, unmount } = renderHook(() => useQuery(() => resolve('a result'), []));
    let [cb] = result.current;
    await act(async () => {
      cb();
      unmount();
      await resolve(null);
    });
    expect(result.current[3]).toEqual(undefined);
  });

  it('should not return new error states when component unmounts', async () => {
    let { result, unmount } = renderHook(() => useQuery(() => reject('a result'), []));
    let [cb] = result.current;
    await act(async () => {
      cb();
      unmount();
      await resolve(null);
    });
    expect(result.current[2]).toEqual(undefined);
  });
});

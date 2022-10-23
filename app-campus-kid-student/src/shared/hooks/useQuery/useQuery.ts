import { useRef, useEffect, useState, useCallback, DependencyList } from 'react';

export type TIsLoading = boolean;
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export type TCallback<TArgs, TResponse> = (args?: TArgs) => Promise<TResponse>;

const useQuery = <TResponse, TError = any, TArgs = any>(
  callback: TCallback<TArgs, TResponse>,
  deps: DependencyList,
  throwOnRejection: boolean = false
): [TCallback<TArgs, TResponse>, TIsLoading, TError, TResponse] => {
  const isMounted = useRef(true);
  useEffect(
    () => () => {
      isMounted.current = false;
    },
    []
  );
  const [state, setState] = useState<{
    isLoading: TIsLoading;
    error?: TError;
    response?: TResponse;
  }>({ isLoading: undefined, error: undefined, response: undefined });
  const runAsync = useCallback(
    async (args?: TArgs) => {
      try {
        setState(currentState => ({ ...currentState, isLoading: true }));
        const response = await callback(args);
        if (isMounted.current)
          setState(currentState => ({
            ...currentState,
            error: undefined,
            response,
            isLoading: false
          }));
        return response;
      } catch (error) {
        if (isMounted.current) {
          setState(currentState => ({ ...currentState, error: error as TError, isLoading: false }));
          if (throwOnRejection) throw error;
        }
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [isMounted, setState, callback, throwOnRejection, ...deps]
  );
  return [
    runAsync as TCallback<TArgs, TResponse>,
    state.isLoading,
    state.error as TError,
    state.response as TResponse
  ];
};

export default useQuery;

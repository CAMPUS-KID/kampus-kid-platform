import { useMemo, useCallback } from 'react';

const useTesting = (componentId: string) => {
  const getTestingProps = useCallback(
    (id: string) => {
      const testId = `${componentId}-${id}`;
      return { testID: testId, accessibilityLabel: id.split('-').join(' '), accessible: true };
    },
    [componentId]
  );
  return useMemo(() => ({ getTestingProps }), [getTestingProps]);
};

export default useTesting;

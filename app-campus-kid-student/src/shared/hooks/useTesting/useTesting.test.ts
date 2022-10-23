import useTesting from './useTesting';
import { renderHook } from '@testing-library/react-hooks';

describe('useTesting', () => {
  it('should get correct test props', () => {
    const { result } = renderHook(() => useTesting('component'));
    expect(result.current.getTestingProps('child-component')).toEqual({
      testID: 'component-child-component',
      accessibilityLabel: 'child component',
      accessible: true
    });
  });
});

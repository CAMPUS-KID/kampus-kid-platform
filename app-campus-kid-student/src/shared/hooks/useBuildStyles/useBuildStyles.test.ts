import { BaseTheme } from '@theme';
import useBuildStyles from './useBuildStyles';
import { renderHook } from '@testing-library/react-hooks';

describe('useBuildStyles', () => {
  let styleSheet;
  beforeEach(() => {
    styleSheet = jest.fn();
  });
  it('should build the styles with the base theme', () => {
    renderHook(() => useBuildStyles(styleSheet));
    expect(styleSheet).toBeCalledWith(BaseTheme);
  });
});

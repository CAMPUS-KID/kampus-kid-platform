import isAndroid from './isAndroid';

describe('isAndroid', () => {
  it('should return false', () => {
    expect(isAndroid()).toBeTruthy();
  });
});

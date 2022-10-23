import isIOS from './isIOS';

describe('isIOS', () => {
  it('should return true', () => {
    expect(isIOS()).toBeFalsy();
  });
});

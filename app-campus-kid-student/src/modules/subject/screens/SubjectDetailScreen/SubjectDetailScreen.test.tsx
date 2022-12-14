import { wait } from '@test_shared';
import React from 'react';
import { render } from 'react-native-testing-library';
import { act } from 'react-test-renderer';
import SubjectDetailScreen, { Props } from './SubjectDetailScreen';

describe('SubjectDetailScreen', () => {
  let props: Props;
  beforeEach(() => {
    props = {
      route: { params: { movieId: 100 } }
    };
  });
  it('should render', async () => {
    const { toJSON } = render(<SubjectDetailScreen {...props} />);
    await act(() => wait());
    expect(toJSON()).toMatchSnapshot();
  });
});

import { wait } from '@test_shared';
import React from 'react';
import { render } from 'react-native-testing-library';
import { act } from 'react-test-renderer';
import SerieDetailScreen, { Props } from './SerieDetailScreen';

describe('SerieDetailScreen', () => {
  let props: Props;
  beforeEach(() => {
    props = {
      route: { params: { serieId: 100 } }
    };
  });
  it('should render', async () => {
    const { toJSON } = render(<SerieDetailScreen {...props} />);
    await act(() => wait());
    expect(toJSON()).toMatchSnapshot();
  });
});

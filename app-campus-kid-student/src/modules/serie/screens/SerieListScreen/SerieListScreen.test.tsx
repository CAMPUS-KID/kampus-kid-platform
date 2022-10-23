import { wait } from '@test_shared';
import React from 'react';
import { render } from 'react-native-testing-library';
import { act } from 'react-test-renderer';
import SerieListScreen from './SerieListScreen';

describe('SerieListScreen', () => {
  it('should render', async () => {
    const { toJSON } = render(<SerieListScreen />);
    await act(() => wait());
    expect(toJSON()).toMatchSnapshot();
  });
});

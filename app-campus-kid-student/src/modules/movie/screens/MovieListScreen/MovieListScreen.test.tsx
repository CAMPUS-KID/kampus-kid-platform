import { wait } from '@test_shared';
import React from 'react';
import { render } from 'react-native-testing-library';
import { act } from 'react-test-renderer';
import MovieListScreen from './MovieListScreen';

describe('MovieListScreen', () => {
  it('should render', async () => {
    const { toJSON } = render(<MovieListScreen />);
    await act(() => wait());
    expect(toJSON()).toMatchSnapshot();
  });
});

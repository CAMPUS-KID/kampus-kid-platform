import { wait } from '@test_shared';
import React from 'react';
import { render } from 'react-native-testing-library';
import { act } from 'react-test-renderer';
import AccountDetailScreen from './AccountDetailScreen';

describe('AccountDetailScreen', () => {
  it('should render', async () => {
    const { toJSON } = render(<AccountDetailScreen />);
    await act(() => wait());
    expect(toJSON()).toMatchSnapshot();
  });
});

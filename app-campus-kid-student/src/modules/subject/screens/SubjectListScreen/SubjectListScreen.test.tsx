import { wait } from '@test_shared';
import React from 'react';
import { render } from 'react-native-testing-library';
import { act } from 'react-test-renderer';
import SubjectListScreen from './SubjectListScreen';

describe('SubjectListScreen', () => {
  it('should render', async () => {
    const { toJSON } = render(<SubjectListScreen />);
    await act(() => wait());
    expect(toJSON()).toMatchSnapshot();
  });
});

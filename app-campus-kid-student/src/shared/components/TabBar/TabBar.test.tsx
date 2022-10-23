import React from 'react';
import TabBar from './TabBar';
import { render } from 'react-native-testing-library';
import { useStackNavigation } from '@shared_hooks';

// eslint-disable-next-line react-hooks/rules-of-hooks
const navigation = useStackNavigation();

describe('TabBar', () => {
  let props;

  beforeEach(() => {
    props = {
      state: {
        index: 0
      },
      navigation
    };
  });

  it('should render', () => {
    const { toJSON } = render(<TabBar {...props} />);
    expect(toJSON()).toMatchSnapshot();
  });
});

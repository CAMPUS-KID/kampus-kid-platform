import React from 'react';
import TabMenuItem, { Props } from './TabMenuItem';
import { render } from 'react-native-testing-library';
import { IconEnum } from '@shared_enums';

describe('TabBar', () => {
  let props: Props;

  beforeEach(() => {
    props = {
      route: 'Home',
      tabName: 'Home',
      isActive: true,
      icon: IconEnum.MOVIES
    };
  });

  it('should render', () => {
    const { toJSON } = render(<TabMenuItem {...props} />);
    expect(toJSON()).toMatchSnapshot();
  });
});

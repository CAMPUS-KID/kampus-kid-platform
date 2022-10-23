import { mergeDeepRight } from 'ramda';
import BaseTheme from './BaseTheme';
import { Theme } from './types';

const LightTheme: Theme = mergeDeepRight(BaseTheme, {});

export default LightTheme;

import 'react-native-gesture-handler/jestSetup';
import { format } from 'util';
import BaseTheme from './src/theme/BaseTheme';
import {
  mockMovieDetail,
  mockMovieListing,
  mockSerieListing,
  mockSerieDetail
} from './src/test-shared';

global.console.error = function (...args) {
  args[0] = '[Tests failed because of an unsolved warning or error]\n' + args[0];
  throw new Error(format(...args));
};
if (!global.Window) {
  Object.defineProperty(global, 'Window', {
    value: window.constructor,
    writable: true,
    enumerable: true,
    configurable: true
  });
}

// Mock all wrappers

//Mock all services
jest.mock('./src/shared/services/MovieService/MovieService', () => ({
  fetchPopular: jest.fn().mockResolvedValue(mockMovieListing[0]),
  search: jest.fn().mockResolvedValue(mockMovieListing[0]),
  fetchDetail: jest.fn().mockResolvedValue(mockMovieDetail[0])
}));
jest.mock('./src/shared/services/SerieService/SerieService', () => ({
  fetchPopular: jest.fn().mockResolvedValue(mockSerieListing[0]),
  search: jest.fn().mockResolvedValue(mockSerieListing[0]),
  fetchDetail: jest.fn().mockResolvedValue(mockSerieDetail[0])
}));

// Mock libraries
jest.mock('react-i18next', () => ({
  useTranslation: () => ({
    t: str => `translate(${str})`,
    i18n: {
      changeLanguage: jest.fn()
    }
  })
}));
const navigationMock = {
  navigate: jest.fn(),
  goBack: jest.fn(),
  popToTop: jest.fn(),
  replace: jest.fn(),
  pop: jest.fn(),
  push: jest.fn()
};
const reactNavigatioNMock = {
  useNavigation: () => navigationMock
};
jest.mock('@react-navigation/native', () => reactNavigatioNMock);

const emotionMock = {
  useTheme: () => BaseTheme
};

jest.mock('@emotion/react', () => emotionMock);

jest.mock('react-native/Libraries/Utilities/Platform', () => {
  let Platform = jest.requireActual('react-native/Libraries/Utilities/Platform');
  Platform.OS = 'android';
  return Platform;
});

jest.mock('react-native/Libraries/Linking/Linking', () => ({
  openURL: jest.fn()
}));

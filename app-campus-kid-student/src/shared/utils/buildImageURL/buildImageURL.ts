import Config from 'react-native-config';

const buildImageURL = (imagePath: string) => `${Config.IMAGE_BASE_URL}${imagePath}`;
export default buildImageURL;

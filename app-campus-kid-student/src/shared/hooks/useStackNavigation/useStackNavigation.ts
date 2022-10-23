import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

const useStackNavigation = () => useNavigation() as StackNavigationProp<any>;
export default useStackNavigation;

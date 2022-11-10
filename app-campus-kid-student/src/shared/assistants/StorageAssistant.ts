import AsyncStorage from '@react-native-async-storage/async-storage';
import { StorageKeyEnum } from '../enums/StorageKey';

const get = async <T>(key: StorageKeyEnum): Promise<T | undefined> => {
    const value = await AsyncStorage.getItem(key);
    if (!value) return undefined;
    return JSON.parse(value) as T;
}

const set = async <T>(key: StorageKeyEnum, value: T): Promise<void> => {
    await AsyncStorage.setItem(key, JSON.stringify(value));
}

const remove = async (key: StorageKeyEnum): Promise<void> => {
    await AsyncStorage.removeItem(key);
}

export default { get, set, remove }
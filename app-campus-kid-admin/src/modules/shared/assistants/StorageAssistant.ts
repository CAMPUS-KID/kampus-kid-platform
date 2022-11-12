import { StorageKeyEnum } from "../enums";

const setItem = <T>(key: StorageKeyEnum, value: T, isSession?: boolean) => {
  const storage = isSession ? sessionStorage : localStorage;
  return storage.setItem(key, JSON.stringify(value));
};

const getItem = <T>(
  key: StorageKeyEnum,
  isSession?: boolean
): T | undefined => {
  const storage = isSession ? sessionStorage : localStorage;
  const storedValue = storage.getItem(key);
  if (!storedValue) return;
  return JSON.parse(storedValue) as T;
};

const removeItem = (key: StorageKeyEnum, isSession?: boolean) => {
  const storage = isSession ? sessionStorage : localStorage;
  return storage.removeItem(key);
};

const StorageAssistant = { setItem, getItem, removeItem };

export default StorageAssistant;

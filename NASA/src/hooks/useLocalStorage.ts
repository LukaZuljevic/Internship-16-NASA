type UseLocalStorageReturn = {
  setItemToStorage: <T>(dataName: string, data: T) => void;
  getItemFromStorage: <T>(dataName: string) => T;
};

export const useLocalStorage = (): UseLocalStorageReturn => {
  const setItemToStorage = <T>(dataName: string, data: T): void => {
    localStorage.setItem(dataName, JSON.stringify(data));
  };

  const getItemFromStorage = <T>(dataName: string): T => {
    const storageItem = localStorage.getItem(dataName);
    return JSON.parse(storageItem || "[]");
  };

  return { setItemToStorage, getItemFromStorage };
};

import {useCallback, useState} from "react";

import {loadFromLs, saveToLs, tasksLsKey} from "../services";


const isSupportStorage = (): boolean => {
		//check if we have local storage in browser
		try {
				return "localStorage" in window && window["localStorage"] !== null;
		} catch (e) {
				return false;
		}
};

export const useLocalStorageState = <T>(initValue: T, key: string = tasksLsKey): [storedValue: T, (value: T) => void] => {

		const [storedValue, setStoredValue] = useState<T>(() => {

				if (!isSupportStorage()) {
						return initValue;
				}

				const lsTasks: T | undefined = loadFromLs(key);
				return lsTasks || initValue;
		});

		const setValue = useCallback((value: T) => {
				setStoredValue(value);

				if (isSupportStorage()) {
						saveToLs(value);
				}
		}, []);


		return [storedValue, setValue];
};

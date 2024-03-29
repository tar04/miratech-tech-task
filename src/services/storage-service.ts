import {ErrorNotification} from "../components/elements";


const tasksLsKey = "tasks";

const saveToLs = (value: any, key: string = tasksLsKey): void => {
		try {
				const serializedState = JSON.stringify(value);
				localStorage.setItem(key, serializedState);
		} catch (error: any) {
				ErrorNotification("Something went wrong while saving your data");
		}
};

const loadFromLs = (key: string = tasksLsKey): any => {
		try {
				const serializedState = localStorage.getItem(key);

				return serializedState === null ? undefined : JSON.parse(serializedState);
		} catch (error: any) {
				ErrorNotification("Something went wrong while loading your data");

				return undefined;
		}
};

export {
		saveToLs,
		loadFromLs,
		tasksLsKey,
};
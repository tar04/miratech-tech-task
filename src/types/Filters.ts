export enum StatusFilters {
		ALL_TASKS = "All Tasks",
		COMPLETED = "Completed",
		UNCOMPLETED = "Uncompleted",
}

export type FilterType = {
		searchString: string;
		status: StatusFilters
}

export const emptyFilter: FilterType = {
		searchString: "",
		status: StatusFilters.ALL_TASKS,
};
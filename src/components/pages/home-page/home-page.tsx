import {FC, useEffect, useState} from "react";

import {AddTaskForm, Header, Tasks} from "../../elements";
import {useLocalStorageState} from "../../../hooks";
import {emptyFilter, FilterType, StatusFilters, TTask} from "../../../types";
import {Divider, PageWrapper} from "./home-page.styled";


interface Props {
}

export const HomePage: FC<Props> = ({}) => {

		const [tasks, setTasks] = useLocalStorageState<TTask[]>([]);

		const [filteredTasks, setFilteredTasks] = useState<TTask[]>([]);

		const [filter, setFilter] = useState<FilterType>({...emptyFilter});

		useEffect(() => {

				setFilteredTasks(() => {
						const newTasks = filter.searchString ?
								tasks.filter(task => task.title.includes(filter.searchString) || task.description?.includes(filter.searchString))
								: tasks;

						switch (filter.status) {
								case StatusFilters.ALL_TASKS:
										return newTasks;
								case StatusFilters.COMPLETED:
										return newTasks.filter(task => task.completed);
								case StatusFilters.UNCOMPLETED:
										return newTasks.filter(task => !task.completed);
								default:
										return newTasks;
						}
				});

		}, [filter, tasks]);


		return <PageWrapper>
				<Header filter={filter} setFilter={setFilter}/>
				<Divider/>

				<Tasks tasks={tasks} filteredTasks={filteredTasks} setTasks={setTasks}/>
				<Divider/>

				<AddTaskForm setTasks={setTasks} tasks={tasks}/>
		</PageWrapper>;
};

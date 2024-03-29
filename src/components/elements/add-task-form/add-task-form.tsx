import {ChangeEvent, FC, useCallback, useState} from "react";
import {v4 as uuid} from "uuid";
import {Input} from "antd";
import {useEventListener} from "usehooks-ts";

import {SuccessNotification} from "../notifications";
import {Hint} from "../hint";
import {TTask} from "../../../types";
import {StyledForm} from "./add-task-form.styled";


const {TextArea} = Input;

interface Props {
		tasks: TTask[];
		setTasks: (newTasks: TTask[]) => void;
}

const emptyTask: TTask = {
		id: "",
		title: "",
		description: null,
		completed: false,
};

export const AddTaskForm: FC<Props> = ({tasks, setTasks}) => {

		const [newTask, setNewTask] = useState<TTask>({...emptyTask, id: uuid()});

		const canAddTask = !!(newTask.title.trim() && newTask.description?.trim());

		const addTask = useCallback(() => {
				setTasks([...tasks, newTask]);

				setNewTask({...emptyTask, id: uuid()});

				SuccessNotification("Task was added successfully");
		}, [tasks, newTask]);

		const setDescription = useCallback((e: ChangeEvent<HTMLTextAreaElement>) => setNewTask({
				...newTask,
				description: e.target.value,
		}), [newTask]);

		const setTitle = useCallback((event: ChangeEvent<HTMLInputElement>) => setNewTask({
				...newTask,
				title: event.target.value,
		}), [newTask]);

		useEventListener("keydown", (event) => {
				if (event.key === "Enter" && canAddTask) {
						addTask();
				}
		});


		return <StyledForm>
				<div className="form">
						<Input placeholder="Add your new task"
									 size="large"
									 value={newTask.title}
									 onChange={setTitle}/>

						<TextArea placeholder="Write description for your task..."
											value={newTask.description || ""}
											size="large"
											onChange={setDescription}
											autoSize={{minRows: 3, maxRows: 3}}
						/>
				</div>

				<Hint title="You should fill all of the fields to add task" showHint={!canAddTask}>
						<button className="add-task-btn" disabled={!canAddTask} onClick={addTask}>Add Task</button>
				</Hint>
		</StyledForm>;
};

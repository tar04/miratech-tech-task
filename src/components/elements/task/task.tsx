import {FC, useCallback} from "react";
import {Checkbox} from "antd";
import {CloseCircleOutlined} from "@ant-design/icons";

import {SuccessNotification} from "../notifications";
import {TTask} from "../../../types";
import {StyledTask} from "./task.styled";


interface Props {
		task: TTask;
		tasks: TTask[];
		setTasks: (newTasks: TTask[]) => void;
}

export const Task: FC<Props> = ({task: {id, completed, description, title}, tasks, setTasks}) => {

		const updateTaskStatus = useCallback((completed: boolean) => setTasks(tasks.reduce((acc: TTask[], t) => t.id === id ? [...acc, {
				...t,
				completed,
		}] : [...acc, t], [])), [tasks, id]);

		const deleteTask = useCallback(() => {
				setTasks(tasks.filter(t => t.id !== id));

				SuccessNotification("Task was deleted successfully!");
		}, [tasks, id]);


		return <StyledTask>
				<Checkbox className="checkbox" checked={completed} onChange={e => updateTaskStatus(e.target.checked)}/>

				<div className="info">
						<h3>{title}</h3>
						<p>{description}</p>
				</div>

				<CloseCircleOutlined style={{height:"fit-content"}} className="delete-task-btn" onClick={deleteTask}/>
		</StyledTask>;
};

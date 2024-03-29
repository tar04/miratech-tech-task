import {FC} from "react";

import {Task} from "../task";
import {TTask} from "../../../types";
import {StyledTasks} from "./tasks.styled";


interface Props {
		tasks: TTask[];
		filteredTasks: TTask[];
		setTasks: (newTasks: TTask[]) => void;
}

export const Tasks: FC<Props> = ({tasks, filteredTasks, setTasks}) => {

		return <StyledTasks>
				{filteredTasks.length ?
						filteredTasks.map(task => <Task key={task.id}
																						task={task}
																						tasks={tasks}
																						setTasks={setTasks}/>) :
						<p className="no-tasks">Your list is empty</p>}
		</StyledTasks>;
};

import {Dispatch, FC, SetStateAction} from "react";
import {Select} from "antd";
import debounce from "lodash.debounce";
import {FilterOutlined} from "@ant-design/icons";


import {FilterType, StatusFilters} from "../../../types";
import {StyledHeader, StyledSearch} from "./header.styled";


interface Props {
		filter: FilterType;
		setFilter: Dispatch<SetStateAction<FilterType>>;
}

export const Header: FC<Props> = ({filter, setFilter}) => {

		const performSearchDebounce = debounce(e => {
				performSearch(e.target.value);
		}, 1000);

		const performSearch = (value: string) => {
				setFilter(prev => ({...prev, searchString: value.trim()}));

				//need to cancel debounce if i click on search button
				performSearchDebounce.cancel();
		};


		return <StyledHeader>
				<div className="logo">My To-do List</div>

				<div className="filters">
						<StyledSearch placeholder="Start searching by title or description"
													onChange={performSearchDebounce}
													size="large"
													onSearch={(value: string) => performSearch(value)}
						/>

						<Select value={filter.status}
										size="large"
										suffixIcon={<FilterOutlined/>}
										popupMatchSelectWidth={false}
										onChange={(status) => setFilter(prev => ({...prev, status}))}
										placeholder="Filter">

								{Object.values(StatusFilters).map(option => <Select.Option key={option} value={option}>
										{option}
								</Select.Option>)}

						</Select>
				</div>

		</StyledHeader>;
};

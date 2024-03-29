import {FC} from "react";
import {Tooltip} from "antd";
import {TooltipProps} from "antd/lib/tooltip";


type Props = TooltipProps & {
		showHint?: boolean;
}

export const Hint: FC<Props> = ({title, placement, children, showHint = true}) => {


		if (!showHint) {
				return <>{children}</>;
		}

		return <Tooltip title={title}
										placement={placement}
										overlayInnerStyle={{color: "gray"}}
										color="white"
										overlayStyle={{filter: "dropShadow(0 2px 8px rgba(0, 0, 0, 0.15))"}}>
				{children}
		</Tooltip>;
};

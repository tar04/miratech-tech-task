import {notification} from "antd";


export const SuccessNotification = (message: string) => {
		notification.success({
				message,
				placement: "topRight",
				duration: 5,
				className: "notification",
		});
};


export const ErrorNotification = (message: string) => {
		notification.error({
				message,
				placement: "topRight",
				duration: 10,
				className: "notification",
		});
};

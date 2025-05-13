import { message } from "antd";

const [messageApi] = message.useMessage();

const showError = (message: string) => {
    messageApi.open({
        type: 'error',
        content: message,
    });
};

export default showError
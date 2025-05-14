import {App, Button, DatePicker} from "antd";
import {useState} from "react";

function AntdComponent() {
    const [count, setCount] = useState(0)
    const { message } = App.useApp();

    const showMessage = () => {
        message.success('Success!');
    };

    return (
        <div className={'w-full'}>
            <h1 className={'text-red'}>antd components demo</h1>
            <Button type="primary" onClick={showMessage}>
                Open message
            </Button>
            <DatePicker />
            <div>
                <button onClick={() => setCount((count) => count + 1)}>
                    count is {count}
                </button>
                <p>
                    Edit <code>src/App.tsx</code> and save to test HMR
                </p>
            </div>
        </div>
    )
}

export default AntdComponent
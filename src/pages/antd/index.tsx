import { Button, DatePicker, message } from "antd";
import { useState } from "react";

function AntdComponent() {
  const [count, setCount] = useState(0);
  const [messageApi, contextHolder] = message.useMessage();

  const showMessage = () => {
    messageApi.success("Success!");
  };

  return (
    <>
      {contextHolder}

      <div className={"w-full"}>
        <h1 className={"text-red"}>antd components demo</h1>
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
    </>
  );
}

export default AntdComponent;

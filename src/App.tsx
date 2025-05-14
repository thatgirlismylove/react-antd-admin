import {ConfigProvider,} from "antd";

import AppLayout from "./layout/index.tsx";

import 'antd/dist/reset.css';
import "./App.css";

function App() {
    return (
        <ConfigProvider
            theme={{
                token: {
                    // Seed Token，影响范围大
                    colorPrimary: '#00b96b',
                    borderRadius: 2,

                    // 派生变量，影响范围小
                    colorBgContainer: '#f6ffed',
                },
            }}
        >
            <AppLayout></AppLayout>
        </ConfigProvider>
    );
}

export default App;

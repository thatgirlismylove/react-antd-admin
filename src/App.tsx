import './App.css'
import {App, ConfigProvider} from "antd";

import Layout from './layout/index.tsx'

function MyApp() {
    return (
        <ConfigProvider theme={{
            token: {
                colorPrimary: '#00b96b',
                colorBgContainer: '#f6ffed',
            }
        }}>
            <App>
                <Layout></Layout>
            </App>
        </ConfigProvider>
    )
}

export default MyApp

import React from 'react';
import {Layout, theme} from 'antd';
import AntdComponent from "../pages/antd";
import SideBar from "./side-bar";
import MyHeader from "./header";

const {Content} = Layout;

const App: React.FC = () => {
    const {
        token: {colorBgContainer, borderRadiusLG},
    } = theme.useToken();

    return (
        <Layout className={'w-full h-100vh'}>
            <SideBar></SideBar>
            <Layout>
                <MyHeader></MyHeader>
                <Content
                    style={{
                        margin: '24px 16px',
                        padding: 24,
                        minHeight: 280,
                        background: colorBgContainer,
                        borderRadius: borderRadiusLG,
                    }}
                >
                    {/* antd 组件使用演示 */}
                    <AntdComponent></AntdComponent>
                </Content>
            </Layout>
        </Layout>
    );
};

export default App;
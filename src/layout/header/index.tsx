import {Button, Layout, theme} from "antd";
import {MenuFoldOutlined, MenuUnfoldOutlined} from "@ant-design/icons";
import React from "react";
import {useAtom} from 'jotai';
import {appCollapsed} from "@/store";
import MyBreadcrumb from "@/layout/breadcrumb";

const {Header} = Layout;

const MyHeader: React.FC = () => {
    const [collapsed, setCollapsed] = useAtom(appCollapsed);

    const {
        token: {colorBgContainer},
    } = theme.useToken();

    return (
        <>
            <Header style={{padding: 0, background: colorBgContainer}}>
                <div className={'flex items-center'}>
                    <Button
                        type="text"
                        icon={collapsed ? <MenuUnfoldOutlined/> : <MenuFoldOutlined/>}
                        onClick={() => setCollapsed(!collapsed)}
                        style={{
                            fontSize: '16px',
                            width: 64,
                            height: 64,
                        }}
                    />

                    <MyBreadcrumb></MyBreadcrumb>
                </div>
            </Header>
        </>
    )
}

export default MyHeader
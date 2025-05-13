import {Layout, Menu} from "antd";
import {UploadOutlined, UserOutlined, VideoCameraOutlined} from "@ant-design/icons";
import React from "react";
import {appCollapsed} from "@/store";
import { useAtom } from 'jotai';

const {Sider} = Layout;

const SideBar:React.FC = ()=>  {

    const [collapsed] = useAtom(appCollapsed);

    return (
        <Sider trigger={null} collapsible collapsed={collapsed}>
            <div className="demo-logo-vertical"/>
            <Menu
                mode="inline"
                defaultSelectedKeys={['1']}
                items={[
                    {
                        key: '1',
                        icon: <UserOutlined/>,
                        label: 'nav 1',
                    },
                    {
                        key: '2',
                        icon: <VideoCameraOutlined/>,
                        label: 'nav 2',
                    },
                    {
                        key: '3',
                        icon: <UploadOutlined/>,
                        label: 'nav 3',
                    },
                ]}
            />
        </Sider>
    )
}

export default SideBar
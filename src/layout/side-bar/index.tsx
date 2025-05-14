import {Layout, Menu, type MenuProps} from "antd";
import {UploadOutlined, UserOutlined, VideoCameraOutlined} from "@ant-design/icons";
import React, {useState} from "react";
import {appCollapsed} from "@/store";
import {useAtom} from 'jotai';
import {useNavigate} from "react-router";

const {Sider} = Layout;

const SideBar: React.FC = () => {

    const navigate = useNavigate()

    const [collapsed] = useAtom(appCollapsed);
    const [current, setCurrent] = useState('mail');
    const handleClick: MenuProps['onClick'] = (e) => {
        setCurrent(e.key)
        navigate(e.key)
    }

    return (
        <Sider trigger={null} collapsible collapsed={collapsed}>
            <div className="demo-logo-vertical"/>
            <Menu
                mode="inline"
                selectedKeys={[current]}
                onClick={handleClick}
                items={[
                    {
                        key: '/',
                        icon: <UserOutlined/>,
                        label: 'Home',
                    },
                    {
                        key: '/antd',
                        icon: <VideoCameraOutlined/>,
                        label: 'Antd Components',
                    },
                    {
                        key: '/orderList',
                        icon: <UploadOutlined/>,
                        label: 'Order List',
                    },
                ]}
            />
        </Sider>
    )
}

export default SideBar
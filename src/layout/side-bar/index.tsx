import { Layout, Menu, type MenuProps } from "antd";
import {
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import React from "react";
import { appCollapsed } from "@/store";
import { useAtom } from "jotai";
import { useLocation, useMatches, useNavigate } from "react-router";

const { Sider } = Layout;

const SideBar: React.FC = () => {
  const { pathname  } = useLocation();
  const matches = useMatches()
  const navigate = useNavigate();

  const openKeys = matches.map(match => match.pathname);  

  const [collapsed] = useAtom(appCollapsed);

  const items = [
    {
      key: "/",
      icon: <UserOutlined />,
      label: "Home",
    },
    {
      key: "/antd",
      icon: <VideoCameraOutlined />,
      label: "Antd Components",
    },
    {
      key: "/orderList",
      icon: <UploadOutlined />,
      label: "Order List",
    },
  ];

  const handleClick: MenuProps["onClick"] = (e) => {
    navigate(e.key);
  };

  return (
    <Sider trigger={null} collapsible collapsed={collapsed}>
      <div className="demo-logo-vertical" />
      <Menu
        mode="inline"
        selectedKeys={[pathname]}   
        openKeys={openKeys}
        onClick={handleClick}
        items={items}
      />
    </Sider>
  );
};

export default SideBar;

import { Button, Layout, Space, theme } from "antd";
import { DownOutlined, MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import React from "react";
import { useAtom } from "jotai";
import { appCollapsed } from "@/store";
import MyBreadcrumb from "@/layout/breadcrumb";
import Dropdown from "antd/es/dropdown/dropdown";
import { Link } from "react-router";

const { Header } = Layout;

const MyHeader: React.FC = () => {
  const [collapsed, setCollapsed] = useAtom(appCollapsed);

  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const items = [
    {
        key: '1',
        label: (
            <Link to={'/login'}>Login Out</Link>
        )
    }
  ]

  return (
    <>
      <Header style={{ padding: 0, background: colorBgContainer }}>
        <div className="flex items-center justify-between pr-24px">
          <div className={"flex items-center"}>
            <Button
              type="text"
              icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
              onClick={() => setCollapsed(!collapsed)}
              style={{
                fontSize: "16px",
                width: 64,
                height: 64,
              }}
            />
            <MyBreadcrumb></MyBreadcrumb>
          </div>

          <Dropdown menu={{ items }}>
            <a onClick={(e) => e.preventDefault()}>
              <Space>
                User Name
                <DownOutlined />
              </Space>
            </a>
          </Dropdown>
        </div>
      </Header>
    </>
  );
};

export default MyHeader;

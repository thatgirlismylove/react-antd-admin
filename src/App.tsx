import { useNavigate } from "react-router";
import { setNavigator } from "./router/navigate.ts";
import { useEffect } from "react";
import { App, ConfigProvider } from "antd";

import Layout from "./layout/index.tsx";
import "./App.css";

function MyApp() {
  const navigate = useNavigate();
  
  useEffect(() => {
    setNavigator(navigate);
  }, [navigate]);

  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#00b96b",
          colorBgContainer: "#f6ffed",
        },
      }}
    >
      <App>
        <Layout></Layout>
      </App>
    </ConfigProvider>
  );
}

export default MyApp;

import { createBrowserRouter, redirect } from "react-router";
import orderList from "@/pages/order/index.tsx";
import { getToken } from "@/utils/storage.ts";
import Login from "@/pages/login/index.tsx";
import Dashboard from "@/pages/dashboard";
import layout from "@/layout";

// 路由权限校验
export function authLoader() {
  const token = getToken();
  if (!token) {
    return redirect("/login");
  }
  return null;
}

const router = createBrowserRouter([
  {
    path: "/",
    Component: layout,
    handle: {
      title: "Home",
    },
    children: [
      {
        index: true,
        Component: Dashboard,
        handle: {
            title: 'Dashboard'
        }
      },
      {
        path: "/antd",
        // 路由懒加载
        lazy: async () => {
          const module = await import("@/pages/antd");
          return { Component: module.default };
        },
        handle: {
          title: "Antd Components",
        },
      },
      {
        path: "/orderList",
        handle: {
          // 定义路由信息
          title: "Order List",
          // some props
        },
        loader: authLoader,
        Component: orderList,
      },
    ],
  },
  {
    path: "/login",
    Component: Login,
  },
]);

export default router;

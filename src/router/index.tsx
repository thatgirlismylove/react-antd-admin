import { createBrowserRouter, redirect } from "react-router";
import App from "../App.tsx";
import orderList from "@/pages/order/index.tsx";
import { getToken } from "@/utils/storage.ts";
import Login from "@/pages/login/index.tsx";

// 路由权限校验
export function authLoader() {
  const token = getToken()
  if (!token) {
    return redirect('/login');
  }
  return null;
}

const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
  },
  {
    path: '/login',
    Component: Login
  },
  {
    path: "/orderList",
    handle: {
      // 定义路由信息
      meta: {
        title: 'Order List'
        // some props
      }
    },
    loader: authLoader,
    Component: orderList,
  },
]);

export default router;

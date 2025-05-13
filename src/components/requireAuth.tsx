import {Navigate, useLocation} from "react-router";
import React, {type ReactElement} from "react";

function RequireAuth(children: ReactElement | React.FC) {
    const whiteList = ["/", "/about"]

    const { pathname } = useLocation();

    // 不需要权限的页面
    const notRequiredAuth = whiteList.includes(pathname);

    const hasToken = localStorage.getItem('token')

    // 访问的页面在白名单里，或者用户拥有权限 hasToken，直接跳转。否则重定向到到 login
    return (hasToken || notRequiredAuth ? children : <Navigate to="/login" replace state={pathname} />)
}

export default RequireAuth
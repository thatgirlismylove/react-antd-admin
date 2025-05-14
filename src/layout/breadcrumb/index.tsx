import { Breadcrumb } from "antd";
import { Link, useMatches } from "react-router";

function itemRender(currentRoute, items) {
  const isLast = currentRoute?.path === items[items.length - 1]?.path;

  return isLast ? (
    <span>{currentRoute.title}</span>
  ) : (
    <Link to={currentRoute.path}>{currentRoute.title}</Link>
  );
}

function MyBreadcrumb() {
  const matches = useMatches();
  
  const items = matches.map((item) => {
    return {
      title: item.handle?.title,
      path: item.pathname,
    };
  });

  return <Breadcrumb items={items} itemRender={itemRender} />;
}

export default MyBreadcrumb;

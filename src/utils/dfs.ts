// 树的深度优先遍历,并处理回调函数的逻辑
export const dfs = (root, fn) => {
  fn(root)
  if (root?.children && Array.isArray(root.children)) {
    root.children.forEach((child: any) => dfs(child, fn))
  }
}
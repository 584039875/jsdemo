# 简单 Node.js 示例

这是一个最小的 Node.js 示例项目，包含两个主要文件：

- [app.js](app.js#L1): 启动脚本，调用 `hello` 模块。
- [hello.js](hello.js#L1): 导出 `greet()` 函数并打印问候。

运行方式：

```bash
# 直接运行
node app.js

# 或使用 npm 脚本
npm start
```

说明：`package.json` 中包含 `start` 和 `dev` 脚本（`dev` 使用 `nodemon`，需自行安装）。

# 2022 年 02 月 11 日

- 更新了 devtools 的插件
- 升级依赖

# 2021 年 11 月 30 日

- 分离窗口配置信息
- 完善热更新行为
- 修正平台文件名大小写导致 build 失败
- 修正自动更新未注册事件导致无事件回流

# 2021 年 11 月 19 日

- 补充遗漏的依赖
- 更新依赖
- 渲染进程添加 jsx 支持

# 2021 年 11 月 17 日

- 修改创建子窗口时传输数据的代码示例

# 2021 年 11 月 13 日

- 更新依赖
- 修正打开子窗口时，没有正确响应是否使用系统标题栏
- 解耦合 updater

# 2021 年 11 月 05 日

- 修复 `无边框逻辑出错` 问题
- 默认设置为 `无边框模式`

# 2021 年 11 月 04 日

- 去除 `vuex` 模块
- 使用 `pinia` 替代 `vuex`
- 修复 `创建子窗口数据传输丢失` 问题

# 2021 年 10 月 09 日

- 更新依赖
  - vue 3.2.12 -> 3.2.20
  - vite 2.5.8 -> 2.6.5
  - electron 13.1.9 -> 15.1.2 (有了中文控制台好耶！)

# 2021 年 08 月 16 日

- 将 builder 的配置剥离出来，不再和 package 混合在一起
- 更新 vue 版本到 3.2.3，vite 版本到 2.5.0

# 2021 年 08 月 15 日

- 设置渲染进程编译目标为 chrome91，**请注意，此次设置是为了解决顶层 await 无法正常编译的问题，但是也带来了直接放弃 chrome91 版本以下的，web 端请谨慎**
- 添加主进程在开发环境时对 static 文件夹的访问，`process.env.__static`

# 2021 年 08 月 11 日

- 新增 `i18n` 支持
- 新增 `i18n` 对 `element-plus` 的支持

# 2021 年 08 月 06 日

- master
  - 更新依赖，并添加 glob 依赖，解决部分人出现`glob is undefined`的错误，暂时将`semver`添加为外部依赖，清除部分循环引入的问题。
- strict
  - 合并 preload 和 main 的 rollup 配置文件，并且在开发环境时，不会开启代码混淆。

# 2021 年 07 月 20 日

- 更新依赖
- `__static`静态目录现在将不会补全`/`，例如开发环境时是：`http://localhost:9080`，生产环境则是`软件所在目录/resources/app/dist/electron/renderer`，需要注意的是，在生产环境中，不一定是`/`，路径分隔符是由当前操作系统决定，请自行拼接。
- 调整依赖结构，降低 node_module 包内包含的内容。
- 开启主进程代码混淆。

# 2021 年 07 月 15 日

- 修正在渲染进程中无法使用`__static`静态目录的问题，同时，在生产环境时，若要访问`__lib`文件夹，请使用`process.env.__lib`，可以通过`process.env`对象得到的静态目录还有`__static`，`__updateFolder`。
- 修正部分单词拼写错误。
- 更新依赖
- 主进程添加代码混淆但暂不启用

# 2021 年 06 月 10 日

- 更新依赖

# 2021 年 06 月 08 日

- 渲染进程组件实现全 `setup` 化

## 如何使用 `setup`？

#### vscode 环境

- 禁用 `vetor` 或 `voter` 扩展
- 安装并启用扩展 `volor`

> 更多 `setup` 语法糖问题请访问 [New script setup](https://github.com/vuejs/rfcs/pull/227)

# 2021 年 02 月 26 日

- 项目创建。
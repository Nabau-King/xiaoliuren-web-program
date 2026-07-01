# 小六壬掌诀排盘

一个可直接部署到 GitHub Pages 的纯静态小六壬网页应用。

## 运行方式

直接打开 `index.html` 即可使用，不需要构建工具、后端服务或第三方 CDN。

## GitHub Pages 部署

1. 将本目录提交到 GitHub 仓库。
2. 在仓库 `Settings -> Pages` 中选择部署分支。
3. Source 选择 `Deploy from a branch`，目录选择仓库根目录。
4. 保存后访问 GitHub Pages 提供的地址。

## 文件结构

- `index.html`：应用主页面，包含样式与交互逻辑。
- `assets/palm-left-generated.png`：通过 imagegen 生成的左手掌主视觉。
- `assets/left-hand-palm.jpg`：早期参考底图，当前页面不依赖。

## 当前功能

- 实时显示公历时间、时区、阴历年月日、当时时辰。
- 支持当前时间与指定时间排盘。
- 按阴历月、日、时辰计算六神结果。
- 左手掌图上标注六个掌诀节点。
- 支持播放、单步查看、清除计算轨迹。
- 输出生活、工作、财运、感情四个方向解析。
- 支持复制当前排盘结果。


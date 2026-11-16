# MySeek 宣传页

这是开源项目 [MySeek](https://gitee.com/wu6789/my-seek) 的官方宣传页面，纯静态站点，可直接托管在 Gitee Pages。

## 本地预览

```bash
python -m http.server 8000
# 或
npx serve .
```

然后访问 `http://localhost:8000`。

## 部署到 Gitee Pages

1. 将本仓库推送到 `https://gitee.com/wu6789/my-seek-page.git`
2. 进入仓库页面 → **服务** → **Gitee Pages**
3. 选择部署分支 `master`，目录留空（根目录），点击启动
4. 访问 `https://wu6789.gitee.io/my-seek-page`

## 文件结构

```
├── index.html        # 页面结构
├── styles.css        # 样式（深色渐变风格）
├── script.js         # 滚动动画与导航效果
└── assets/
    └── image.png     # 聊天界面截图
```
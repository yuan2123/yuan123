# 星火财商官网最新完整源码

本包对应已完成的 v7 完整版本，包含源码、图片、依赖锁文件、Prisma 模型及迁移文件。此次只整理打包，没有修改页面。

1. 解压，将 package.json、app、components、public、prisma 等文件和文件夹上传至 GitHub 仓库根目录。不要上传压缩包本身。
2. Vercel 导入该仓库，框架选 Next.js，Root Directory 使用仓库根目录。
3. 在部署平台配置 DATABASE_URL、ADMIN_USERNAME、ADMIN_PASSWORD、ADMIN_SESSION_SECRET。数据库使用 PostgreSQL；沿用现有数据库时填写原连接，不需要换库。
4. 已包含 vercel.json，构建命令使用 npm run vercel-build。该命令会执行已有 Prisma 迁移，再构建网站；需要有效数据库连接。本次打包未连接数据库、未执行迁移或部署。
5. 部署后检查首页、课程、文章、联系我们及后台。表单实际保存情况需要在部署环境验证。

GitHub 用于保存代码；本项目包含后端接口，需要 Vercel 或支持 Node.js 的服务器运行，不能直接使用 GitHub Pages。

未包含数据库数据、真实环境变量、node_modules 或 .next；依赖在部署时安装。
尚未实施你刚提出的隐藏导师导航和新金色配图要求。

# 星火财商项目：电脑与手机公开访问上线清单

## 当前目标
把本地 Next.js 项目部署到公网，使电脑和手机通过同一个 HTTPS 地址访问，并让报名表数据进入云数据库、后台可登录查看。

## 已清理
- 已移除 `node_modules`（不应上传到 GitHub 或部署平台）
- 已移除包含真实密码的 `.env`
- 已保留 `.env.example`
- 已将 `package-lock.json` 内部安装源改为公共 npm 源
- 已新增 `.npmrc`
- 已将测试报名页接口从 `http://localhost:3000` 改为当前网站域名

## 上线前必须完成
1. 将 Prisma 数据库从 SQLite 改为云端 PostgreSQL。
2. 创建并执行初始数据库迁移。
3. 在部署平台配置环境变量：
   - DATABASE_URL
   - ADMIN_USERNAME
   - ADMIN_PASSWORD
   - ADMIN_SESSION_SECRET
   - ALLOWED_ORIGINS
   - REGISTRATION_DUPLICATE_WINDOW_MS
4. 数据库准备好后，在本地或受控环境中执行 `npm run db:deploy`。数据库迁移不再绑定网页构建，避免数据库尚未配置时阻止网站部署。
5. 部署后测试：
   - 首页和所有栏目
   - `/registration-form.html` 报名提交
   - `/admin/login` 后台登录
   - `/admin` 报名列表、状态修改、CSV 导出
6. 绑定正式域名并保持 HTTPS。
7. 更换所有曾经放入 `.env` 的管理员密码和会话密钥。

## 不要提交到代码仓库
- `.env`
- `node_modules`
- 本地数据库文件（如 `prisma/dev.db`）

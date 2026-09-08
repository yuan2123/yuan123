# 星火财商 Spark Wealth Academy

白金高端财商教育品牌官网，包含：首页、关于我们、课程体系、财商学院、学习资源、导师团队、联系我们，以及课程报名后端。

## 网站结构

- `/` 首页
- `/about` 关于我们
- `/courses` 课程体系
- `/academy` 财商学院
- `/resources` 学习资源
- `/mentors` 导师团队
- `/contact` 联系我们
- `/register` 课程报名
- `/admin` 报名管理后台（需登录）
- `/admin/login` 后台登录页

## 本地运行

```bash
npm install
npm run db:migrate
npm run dev
```

访问：http://localhost:3000

## 课程报名 API

### 提交报名（公开，支持 CORS）

`POST /api/registrations`

```json
{
  "name": "张三",
  "phone": "13800138000",
  "age": 30,
  "gender": "男",
  "attendedBefore": false,
  "consent": true,
  "source": "官网",
  "remark": "想了解课程安排"
}
```

### 管理接口（需登录）

- `GET /api/registrations` — 报名列表（支持 `keyword`、`status` 查询）
- `GET /api/registrations/:id` — 单条详情
- `PATCH /api/registrations/:id` — 修改状态
- `DELETE /api/registrations/:id` — 删除记录
- `POST /api/admin/login` — 管理员登录
- `POST /api/admin/logout` — 退出登录

## 数据库配置

1. 复制 `.env.example` 为 `.env`
2. 使用 PostgreSQL：由 Vercel Marketplace 的 Prisma Postgres 自动提供 `DATABASE_URL`。
3. 首次部署会通过 `prisma migrate deploy` 自动创建数据表

常用命令：

```bash
npm run db:migrate
npm run db:generate
npm run db:studio
```

## 跨域报名测试

可用静态页面 `public/registration-form.html` 测试跨域提交。

## 后台管理

- 地址：http://localhost:3000/admin
- 默认账号：见 `.env` 中 `ADMIN_USERNAME` / `ADMIN_PASSWORD`
- 功能：列表、搜索、状态筛选、修改状态、查看提交时间、导出 CSV

## 生产构建

```bash
npm run build
npm run start
```

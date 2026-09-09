# 星火财商 UI 改版交付

## 1. 技术栈识别
- Next.js 16.2.10 App Router、React / React DOM 19.2.0、TypeScript。
- 原生全局 CSS；已有 Tailwind CSS 4 / PostCSS 配置，无额外 UI / 动画依赖。
- Prisma 6（package.json 范围 ^6.12.0）、PostgreSQL。
- 入口 app/layout.tsx、app/page.tsx；首页组件 components/academy-home-page.tsx。
- app 下文件系统路由：about、academy、courses、mentors、resources、contact、register、admin、admin/login；API 在 app/api。
- 页面组件在 components，静态内容在 data/site.ts；业务与鉴权封装在 lib，权限入口 proxy.ts。
- 表单通过 fetch 调用 /api/contact、/api/registrations 等；React 本地状态处理加载、成功、失败。服务端通过 Prisma 访问数据库。

## 2. UI 改版说明
本轮恢复原版奶油白、暖金渐变与深黑，保留改版结构。首页统一标题、间距、圆角、边框、按钮与卡片样式；降低大面积金色及高频动效。
成长地图保留原五阶段与四业务节点，轨道圆点替换为修长火种与四角星内芯 SVG；符号路径集中定义，呼应品牌 Logo 向上的轮廓。外轨道96秒一周、内轨道132秒反向一周，火种反向补偿保持直立，并以5秒周期做±3度、2px以内的轻微摇曳。手机保留业务标签火种摇曳。保留原金色 Logo，业务名称和链接不变。
学院服务标准改为更清楚的标题、细分隔线和舒适行高；“教育先于销售”改为“认知先于销售”。
共享导航及页脚原抽象星形替换为项目已有的同款金色透明 Logo（public/images/xhcs-logo-gold.png）；避免新增白底 JPEG 在导航上形成白块。

## 3. 主要修改文件
- components/academy-home-page.tsx：可读的多行首页模板、复用 SVG、指定文案、菜单初始无障碍属性；原 useEffect 事件处理逐字保留。
- app/globals.css：移除原首页专属旧样式段，合并完整首页样式；增加共享 Logo 尺寸规则。其余原样式保留。
- components/logo.tsx：使用同款透明金色 Logo，保留首页链接和品牌文字。

## 4. 新增文件
- UI-DELIVERY.md：本交付说明。

## 5. 新增依赖
无。package.json、package-lock.json 均未修改。

## 6. 业务逻辑保护检查
原始压缩包逐文件对比：API、lib、prisma、proxy.ts、data、表单组件、路由页面和依赖配置均未修改。
首页链接顺序和目标不变；useEffect 菜单/滚动处理不变；文本归一化对比仅指定“教育→认知”和装饰勾号替换有差异。Logo 组件仍链接 /。
生产构建（包含 TypeScript）和 ESLint 通过。首页、关于我们、学院、课程、导师、联系、报名、资源、后台登录页面 HTTP 200。
未连接真实数据库验证报名写入、联系写入或管理员认证结果；不宣称这些端到端检查通过。

## 7. 响应式检查
桌面：双栏首屏、环形成长地图；平板：单栏内容、完整可展开导航；手机：地图重组为卡片与四业务节点，五阶段详情纵向排列。移动按钮至少 44px，正文保留可读字号。
遵守 prefers-reduced-motion，开启减少动态效果时停止环绕和摇曳；中央卡片、标签位置保持稳定。
已做断点与源码检查。当前环境浏览器下载超时，未完成桌面/平板/手机浏览器截图、实际横向溢出和点击交互验收。

## 8. 运行
解压完整项目，进入 xhcsdemo-deploy-ready 目录：

```bash
npm ci
npm run build
npm start
```

本地开发可用 npm run dev。保留原环境变量配置；需数据库的功能仍按原项目 .env.example 配置。没有新环境变量。
压缩包含所有原始源码、资源、迁移文件和文档，不含 node_modules、.next 等可再生成产物。

## 本轮部署兼容整理
首页样式已合并到原有 app/globals.css，不再引用新增 CSS 文件。暖金配色与火种动画保留。
此前 npm run build 与 Vercel 的完整命令不同：Vercel 执行 prisma generate、prisma migrate deploy、next build。未提供失败日志，无法确认实际失败原因；本次不擅自删除数据库迁移步骤。
更新请上传本包内 app 和 components 文件夹到原仓库根目录，同次提交。无需新建 Vercel 项目或变更数据库配置。旧仓库即使仍有 academy-home.css 也不会被引用。

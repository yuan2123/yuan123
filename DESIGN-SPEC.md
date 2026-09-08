# 星火财商官方网站设计与开发规范

## 1. 网站信息架构（Site Map）

- 首页 `/`
  - Hero Banner
  - 关于星火财商
  - 为什么学习财商
  - 财商课程体系
  - 学习成长路径
  - 导师团队
  - 学员案例预留
  - 免费学习资源
  - 财商知识中心
  - 联系我们
- 关于我们 `/about`
  - 品牌理念
  - 使命、愿景、价值观
  - 教育原则
  - 合规边界
- 课程体系 `/courses`
  - 八大课程模块
  - 四阶段成长路线
  - 课程交付形式
  - 未来在线课程接口
- 财商学院 `/academy`
  - 最新文章
  - 分类与搜索
  - 热门内容
  - CMS 内容接口预留
- 学习资源 `/resources`
  - 电子书
  - 试听课
  - 工具表
  - 清单与测评
  - 会员资源中心预留
- 导师团队 `/mentors`
  - 导师列表
  - 专业背景
  - 擅长领域
  - 资质与详情页预留
- 联系我们 `/contact`
  - 电话、邮箱、地址
  - 微信二维码
  - 留言表单
  - CRM / 企业微信接口预留

未来扩展：会员中心、在线课程、在线报名、支付、AI 财商顾问、学员后台、企业内训专题页。

## 2. 页面流程图

```text
搜索引擎 / 微信 / 社群 / 品牌传播
              ↓
            首页
  ┌───────────┼───────────┐
  ↓           ↓           ↓
了解品牌     浏览课程     免费资源
  ↓           ↓           ↓
导师与原则   学习路径     文章/工具/试听
  └───────────┼───────────┘
              ↓
          建立品牌信任
              ↓
        联系咨询 / 微信沟通
              ↓
       后续报名与课程转化
```

## 3. 每个页面详细布局

### 首页
1. 粘性导航：Logo、7 个主导航、预约咨询按钮、移动端菜单。
2. Hero：品牌 Slogan、品牌介绍、双 CTA、数据信任点、家庭财富插画、大量但克制的金币/金条/人民币符号。
3. 关于品牌：品牌主张和“不制造焦虑、不鼓励投机、不承诺收益”的原则。
4. 学习必要性：4 个家庭财富痛点卡片。
5. 课程体系：8 个模块卡片。
6. 成长路径：4 阶段横向时间轴，移动端变纵向。
7. 导师团队：3 张导师占位卡。
8. 学员案例：合规预留模块。
9. 免费资源：电子书、试听课、工具表。
10. 知识中心：3 篇文章预览。
11. 联系区：联系方式、二维码、留言表单。
12. 页脚：导航、课程方向、联系方式、合规提示。

### 关于我们
品牌目的 → 使命/愿景/价值观 → 六项教育原则。

### 课程体系
课程总览 → 八大模块 → 四阶段成长路线 → 线下、线上、企业内训、家庭共学。

### 财商学院
页面主视觉 → 内容说明 → 搜索框 → 文章卡片列表 → CMS 扩展提示。

### 学习资源
资源主视觉 → 六类资源卡片 → 会员资源中心扩展模块。

### 导师团队
团队理念 → 导师卡片 → 专业背景和资质占位 → 导师内容标准。

### 联系我们
联系信息 → 微信二维码 → 留言表单 → 后端、CRM、企业微信扩展接口。

## 4. UI 设计规范

- 设计关键词：白金、克制、专业、温暖、国际化、长期主义。
- 栅格：桌面端最大宽度 1180px；平板双列；手机单列。
- 基础间距：8px 系统，常用 16 / 24 / 32 / 48 / 72 / 112px。
- 圆角：按钮 999px；输入框 12px；卡片 18–24px；重点面板 28–34px。
- 阴影：低对比暖色阴影，避免强烈黑色投影。
- 留白：内容区上下 78–112px，保持高端阅读节奏。

## 5. 色彩规范

| 用途 | 色值 |
|---|---|
| 铂金白背景 | `#FBFAF7` |
| 纯白卡片 | `#FFFFFF` |
| 暖米白分区 | `#F5F1E8` |
| 品牌主金 | `#B58A35` |
| 香槟金 | `#D7B56D` |
| 浅金高光 | `#F1DFAD` |
| 石墨黑 | `#1B1A17` |
| 深色品牌区 | `#171713` |
| 正文灰 | `#6E695F` |
| 边框米金 | `#E8DFCE` |

金色只用于品牌重点、CTA、财富符号和层级强调，不用于大面积正文。

## 6. 字体规范

- 中文标题：`Noto Sans SC / PingFang SC / Microsoft YaHei`，字重 650–750。
- 英文标题与正文：`Inter / system-ui`。
- 数字与财富符号：局部使用 `Georgia`，营造经典金融质感。
- H1：39–78px；H2：34–52px；H3：18–24px；正文：14–18px；辅助文字：10–12px。
- 正文行高：1.65–1.9，中文段落宽度控制在 700px 左右。

## 7. 图标规范

- 优先使用 1.5–1.8px 线性图标。
- 圆角端点，避免强科技感和证券交易感。
- 财富元素：金币、金条、钱币符号、资产层级、现金流轨迹、家庭目标。
- 禁止：红绿 K 线、暴涨箭头、赌场筹码、夸张现金雨。
- 当前项目核心图标采用内联 SVG 和字符图形，后续可替换为 Lucide Icons 或自有图标库。

## 8. 组件规范

### Buttons
- Primary：金色渐变、白字、52px 高、胶囊圆角。
- Secondary：白色/半透明、深色字、米金边框。
- Hover：上移 2px，阴影增强；Focus 必须有可见焦点。

### Cards
- 白底、1px 米金边框、18–24px 圆角。
- Hover 仅轻微上浮和阴影，不做夸张缩放。
- 课程卡、文章卡、资源卡和导师卡共享视觉语法。

### Forms
- 标签置于输入框上方。
- 输入高度约 48px；圆角 12px；聚焦时金色描边。
- 手机号、微信、邮箱等字段上线时需加入隐私授权说明。

### Navigation
- 桌面端水平导航，当前页显示短金线。
- 移动端折叠菜单，触控区域至少 42px。

### Feedback
- 表单提交采用状态提示；正式接入后增加 loading、success、error 和重复提交保护。

## 9. 动效建议

- 首屏金币符号：8–12 秒缓慢漂浮，不旋转过快。
- 卡片进入：透明度 0→1、Y 轴 16px→0，持续 500–700ms。
- 时间轴：滚动进入后金线由左至右展开。
- 按钮：上浮 2px，箭头平移 4px。
- 页面切换：淡入即可，避免复杂转场。
- 遵循 `prefers-reduced-motion`，用户减少动态时关闭非必要动画。

## 10. SEO 建议

- 每页独立 title、description、canonical。
- 已提供 `sitemap.xml` 和 `robots.txt`。
- 使用语义化 H1–H3，首页仅一个 H1。
- 文章未来采用 Article Schema；课程页采用 Course Schema；机构信息采用 Organization Schema。
- 图片使用 WebP/AVIF、明确尺寸和中文 alt。
- 建立关键词集：财商教育、家庭资产配置、现金流管理、风险管理、保险认知、财富传承等。
- 文章需要作者、发布日期、更新时间、参考来源和风险提示。
- 正式域名上线后接入百度搜索资源平台、Google Search Console 和 Bing Webmaster Tools。

## 11. 网站开发建议

- 第一版采用静态生成，提高速度、稳定性与搜索引擎抓取效率。
- 联系表单正式上线时通过 Route Handler 或 Server Action 提交，加入验证码、限流、隐私授权和数据加密。
- 内容与代码分离，第二阶段接入 Headless CMS。
- 图片使用 Next Image；视频走对象存储和 CDN。
- 全站部署 CDN，开启压缩、缓存、图片自适应和安全响应头。
- 敏感信息不写入前端环境变量，支付与会员权限必须由服务端校验。
- AI 财商顾问必须明确教育属性、风险边界、知识来源、人工转接和免责声明。

## 12. 推荐技术栈

- 前端：Next.js 16 App Router + React 19 + TypeScript。
- 样式：Tailwind CSS 4 + CSS Variables。
- 内容：Sanity / Strapi / Contentful，或自建 CMS。
- 数据库：PostgreSQL + Prisma。
- 登录：Auth.js / 企业微信 OAuth。
- 表单与校验：React Hook Form + Zod。
- 部署：Vercel、Cloudflare、阿里云或腾讯云。
- 监控：Sentry + Web Analytics。
- 测试：Vitest + Playwright。

## 13. 文件目录结构

```text
spark-wealth-academy/
├─ app/
│  ├─ about/page.tsx
│  ├─ academy/page.tsx
│  ├─ contact/page.tsx
│  ├─ courses/page.tsx
│  ├─ mentors/page.tsx
│  ├─ resources/page.tsx
│  ├─ globals.css
│  ├─ layout.tsx
│  ├─ page.tsx
│  ├─ robots.ts
│  └─ sitemap.ts
├─ components/
│  ├─ article-search.tsx
│  ├─ contact-form.tsx
│  ├─ footer.tsx
│  ├─ header.tsx
│  ├─ icons.tsx
│  ├─ logo.tsx
│  ├─ ui.tsx
│  └─ wealth-visual.tsx
├─ data/site.ts
├─ public/
├─ DESIGN-SPEC.md
├─ README.md
├─ package.json
├─ package-lock.json
├─ next.config.ts
├─ postcss.config.mjs
└─ tsconfig.json
```

## 运行命令

```bash
npm install
npm run dev
```

生产校验：

```bash
npm run lint
npm run build
npm run start
```

# 星火财商 · 暖金星芒版

## 本轮设计
- 背景采用暖奶油白，局部清透香槟金光晕，中央卡片为明亮乳白。减少灰褐与整片黄色，保留暖意。
- 删除细长火焰，改用饱满四角星芒。地图共三颗星，一颗沿外轨道110秒缓慢环绕，其余静止。取消摇曳、闪烁与标签上的装饰图标。
- 中央卡片收紧纵向间距；副标题使用均衡换行，降低出现末尾短行的可能；数字采用淡金底、深金字。
- 深色服务标准继续保留，文案仍为“认知先于销售，不用焦虑推动决策。”，装饰符号统一为星芒。
- 手机重组为地图卡片及业务标签，不显示环形装饰。减少动态效果设置下全部动画停止。

## 技术与变更
Next.js 16.2.10、React 19.2、TypeScript、原生CSS（已有Tailwind 4）、Prisma/PostgreSQL。
本轮仅修改 app/globals.css 和 components/academy-home-page.tsx，另更新本说明。
没有新增依赖或新的样式引用。现有Logo、五阶段、业务名称、原链接均保留。
接口、权限、表单、状态处理、数据库结构、迁移与部署配置均未修改。

## 检查范围
npm run build（含TypeScript）和 npm run lint 均通过。
静态对比通过：href顺序/目标、首页事件处理、全部业务文本保持一致，地图节点为3颗星芒。
浏览器截图与实际三端视觉验收未完成；当前环境没有可用浏览器。真实数据库写入不在本轮验证范围内。

## 更新现有GitHub仓库
本次只需覆盖两个文件。不要把 app 内的 api、about 等子目录上传到仓库最外层。
1. 在GitHub打开 app 文件夹，点 Add file → Upload files，上传解压项目 app/globals.css，同名覆盖并提交。
2. 回到仓库最外层，再打开 components 文件夹，上传解压项目 components/academy-home-page.tsx，同名覆盖并提交。
3. 等待第二次提交对应的Vercel部署成功，再打开网站检查。
根目录不要新增独立 api 文件夹；正确接口位置为 app/api。

## 完整源码运行
保留原来的环境变量配置。在项目目录执行 npm ci、npm run build、npm start。
Vercel沿用原有 prisma generate && prisma migrate deploy && next build。
压缩包不含 node_modules、.next 等生成产物。

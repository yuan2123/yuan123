import { PageHero, SectionHeading } from "@/components/ui";
import { resources } from "@/data/site";

export const metadata = { title: "学习资源", description: "免费下载星火财商电子书、工具表与课程试听资源。" };

export default function ResourcesPage() {
  return <><PageHero eyebrow="FREE RESOURCES" title="免费资源，让学习从第一步开始" desc="通过手册、工具表和试听课程，快速建立家庭财务盘点与规划意识。"/><section className="section"><div className="container"><SectionHeading eyebrow="RESOURCE LIBRARY" title="学习资源库"/><div className="resource-grid resource-grid-page">{resources.concat([{type:'清单',title:'家庭风险识别清单',desc:'快速识别收入中断、重大支出与家庭责任风险。',badge:'PDF · 清单'},{type:'文章合集',title:'财商入门精选 10 讲',desc:'覆盖财富观、现金流、风险、配置与长期主义。',badge:'文章 · 合集'},{type:'测评',title:'家庭财务健康自测',desc:'从流动性、负债、保障与目标四个维度自我评估。',badge:'在线 · 预留'}]).map((item,index)=><article className="resource-card" key={item.title}><div className={`resource-cover cover-${(index%3)+1}`}><span>{item.type}</span><div className="resource-symbol">{index%3===0?'¥':index%3===1?'✦':'▦'}</div><i>SPARK</i></div><div className="resource-body"><small>{item.badge}</small><h3>{item.title}</h3><p>{item.desc}</p><span className="fake-link">免费获取 →</span></div></article>)}</div></div></section><section className="section section-soft"><div className="container"><div className="future-module"><span>FUTURE MODULE</span><h2>未来可扩展：会员资源中心</h2><p>登录、收藏、学习记录、资料下载权限、课程试听与个性化推荐均已在信息架构中预留。</p></div></div></section></>;
}

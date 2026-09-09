import { PageHero, SectionHeading } from "@/components/ui";
import { CheckIcon } from "@/components/icons";

export const metadata = { title: "关于我们", description: "了解星火财商的品牌使命、愿景、价值观与教育原则。" };

export default function AboutPage() {
  return <><PageHero eyebrow="ABOUT US" title="以正确财富观，点亮每个家庭的长期未来" desc="我们不贩卖焦虑，不鼓励投机。星火财商通过系统教育，帮助家庭理解金钱、管理风险、规划目标。"/>
  <section className="section"><div className="container split-grid"><div><SectionHeading eyebrow="OUR PURPOSE" title="让财富服务人生，而不是让人生被数字绑架。" desc="我们关注的不是短期的财富口号，而是一个家庭能否形成清晰的共同目标、稳健的财务结构和持续的行动能力。"/></div><div className="statement-card"><span>使命</span><h3>普及科学财商教育</h3><p>帮助普通家庭、职场人士与创业者建立理性、稳健、长期的财富决策能力。</p></div></div></section>
  <section className="section section-soft"><div className="container"><SectionHeading align="center" eyebrow="MISSION · VISION · VALUES" title="品牌核心"/><div className="value-grid"><article><span>MISSION</span><h3>使命</h3><p>让更多人看懂财富逻辑，掌握家庭财富规划的基本方法。</p></article><article><span>VISION</span><h3>愿景</h3><p>成为值得家庭长期信赖的财商教育品牌。</p></article><article><span>VALUE</span><h3>价值观</h3><p>专业、长期、克制、诚信、以人为本。</p></article></div></div></section>
  <section className="section"><div className="container"><SectionHeading eyebrow="EDUCATION PRINCIPLES" title="我们的教育原则"/><div className="principles-grid">{['先目标，后工具','先风险，后收益','先理解，后行动','重结构，不追热点','重陪伴，不做承诺','重合规，尊重边界'].map((item, i)=><div key={item}><span>0{i+1}</span><CheckIcon/><b>{item}</b></div>)}</div></div></section></>;
}

import { PageHero, SectionHeading } from "@/components/ui";
import { CheckIcon } from "@/components/icons";

export const metadata = { title: "关于我们", description: "了解星火财商的品牌使命、愿景、价值观与教育原则。" };

export default function AboutPage() {
  return <><PageHero eyebrow="ABOUT US" title="以专业规划，陪伴家庭走过财富生命周期" desc="星火财商专注中产及高净值家庭一站式财富管理，深耕财商教育、资产配置与专属理财规划。"/>
  <section className="section"><div className="container split-grid"><div><SectionHeading eyebrow="OUR PURPOSE" title="让财富守护家庭，也让选择更从容。" desc="我们从家庭真实目标出发，把财商教育、风险管理和长期规划放在同一套框架里，陪伴客户理解财富、管理责任并持续复盘。"/></div><div className="statement-card"><span>服务定位</span><h3>财富与人生共同规划</h3><p>围绕创富、防风险，保富、稳增值，传富、做保全三个阶段，为家庭提供清晰、可理解、可持续的规划支持。</p></div></div></section>
  <section className="section section-soft"><div className="container"><SectionHeading align="center" eyebrow="THREE LIFE STAGES" title="三大财富生命周期" desc="不同家庭阶段关注的问题不同，规划始终围绕目标、责任和真实承受能力展开。"/><div className="value-grid"><article><span>01 · CREATE</span><h3>创富防风险</h3><p>建立财富认知与风险意识，让收入积累拥有更稳固的家庭基础。</p></article><article><span>02 · PRESERVE</span><h3>保富稳增值</h3><p>梳理现金流和资产结构，在风险边界内安排家庭长期目标。</p></article><article><span>03 · PASS ON</span><h3>传富做保全</h3><p>从家庭意愿、责任与治理出发，理解有序传承的规划逻辑。</p></article></div></div></section>
  <section className="section"><div className="container"><SectionHeading align="center" eyebrow="FOUR CORE SERVICES" title="四大基础服务"/><div className="service-foundation-grid"><article><span>01</span><h3>财务诊断</h3><p>梳理家庭目标、收支、资产、负债与风险现状。</p></article><article><span>02</span><h3>方案定制</h3><p>结合家庭阶段与责任边界，形成清晰的规划思路。</p></article><article><span>03</span><h3>落地执行</h3><p>把规划转化为行动顺序，并在家庭变化时持续检视。</p></article><article><span>04</span><h3>财商授课</h3><p>通过成人和少儿课程、沙盘及复盘活动提升判断能力。</p></article></div></div></section>
  <section className="section"><div className="container"><SectionHeading eyebrow="EDUCATION PRINCIPLES" title="我们的教育原则"/><div className="principles-grid">{['先目标，后工具','先风险，后收益','先理解，后行动','重结构，不追热点','重陪伴，不做承诺','重合规，尊重边界'].map((item, i)=><div key={item}><span>0{i+1}</span><CheckIcon/><b>{item}</b></div>)}</div></div></section></>;
}

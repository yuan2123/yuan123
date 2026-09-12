import { SectionHeading } from "@/components/ui";
import { CheckIcon } from "@/components/icons";

export const metadata = { title: "关于我们", description: "了解星火财商的品牌使命、服务体系、财富生命周期与教育原则。" };

const lifeStages = [
  { no: "01", en: "CREATE", title: "创富防风险", desc: "建立财富认知与风险意识，让收入积累拥有更稳固的家庭基础。" },
  { no: "02", en: "PRESERVE", title: "保富稳增值", desc: "梳理现金流和资产结构，在风险边界内安排家庭长期目标。" },
  { no: "03", en: "PASS ON", title: "传富做保全", desc: "从家庭意愿、责任与治理出发，理解有序传承的规划逻辑。" },
];

const services = [
  ["01", "财务诊断", "梳理家庭目标、收支、资产、负债与风险现状。"],
  ["02", "方案定制", "结合家庭阶段与责任边界，形成清晰的规划思路。"],
  ["03", "落地执行", "把规划转化为行动顺序，并在家庭变化时持续检视。"],
  ["04", "财商授课", "通过成人和少儿课程、沙盘及复盘活动提升判断能力。"],
];

export default function AboutPage() {
  return <main className="about-page">
    <section className="about-hero">
      <div className="container about-hero-grid">
        <div className="about-hero-copy">
          <span className="eyebrow">ABOUT US</span>
          <h1>以专业规划，<br />陪伴家庭走过<br /><em>财富生命周期</em></h1>
          <p>星火财商专注中产及高净值家庭一站式财富管理，深耕财商教育、资产配置与专属理财规划。</p>
          <div className="about-hero-tags"><span>家庭视角</span><span>长期规划</span><span>持续陪伴</span></div>
        </div>
        <div className="about-cycle" aria-label="创富、保富、传富三大财富生命周期">
          <div className="about-cycle-ring ring-one" aria-hidden="true" />
          <div className="about-cycle-ring ring-two" aria-hidden="true" />
          <span className="cycle-spark spark-one" aria-hidden="true">✦</span>
          <span className="cycle-spark spark-two" aria-hidden="true">✦</span>
          <div className="cycle-core"><small>SPARK WEALTH</small><strong>财富与人生<br />共同规划</strong><span>星火财商</span></div>
          <article className="cycle-node node-create"><b>01</b><div><small>CREATE</small><strong>创富防风险</strong></div></article>
          <article className="cycle-node node-preserve"><b>02</b><div><small>PRESERVE</small><strong>保富稳增值</strong></div></article>
          <article className="cycle-node node-legacy"><b>03</b><div><small>PASS ON</small><strong>传富做保全</strong></div></article>
        </div>
      </div>
    </section>

    <section className="section about-purpose">
      <div className="container about-purpose-grid">
        <div className="about-purpose-copy">
          <SectionHeading eyebrow="OUR PURPOSE" title="让财富守护家庭，也让选择更从容。" desc="我们从家庭真实目标出发，把财商教育、风险管理和长期规划放在同一套框架里，陪伴客户理解财富、管理责任并持续复盘。" />
          <blockquote>先看见家庭真正需要什么，再讨论工具如何服务目标。</blockquote>
        </div>
        <div className="about-service-map">
          <header><span>服务定位</span><h2>从理解家庭，到陪伴行动</h2><p>不是一次性的方案，而是一套可以持续检视的服务路径。</p></header>
          <div className="service-map-list">
            {services.map(([no, title, desc]) => <article key={no}><span>{no}</span><div><h3>{title}</h3><p>{desc}</p></div></article>)}
          </div>
          <div className="service-map-note"><span>持续检视</span><p>跟随家庭阶段与责任变化，及时复盘和调整行动顺序。</p></div>
        </div>
      </div>
    </section>

    <section className="section about-stages">
      <div className="container">
        <SectionHeading align="center" eyebrow="THREE LIFE STAGES" title="三大财富生命周期" desc="不同家庭阶段关注的问题不同，规划始终围绕目标、责任和真实承受能力展开。" />
        <div className="about-stage-track">
          {lifeStages.map((stage) => <article key={stage.no}><span>{stage.no}</span><small>{stage.en}</small><h3>{stage.title}</h3><p>{stage.desc}</p></article>)}
        </div>
      </div>
    </section>

    <section className="section about-principles">
      <div className="container about-principles-grid">
        <SectionHeading eyebrow="EDUCATION PRINCIPLES" title="清晰、克制，并尊重每个家庭的边界" desc="财商教育的价值，不是替家庭作出选择，而是帮助家庭建立能够长期使用的判断框架。" />
        <div className="principles-grid">{['先目标，后工具','先风险，后收益','先理解，后行动','重结构，不追热点','重陪伴，不做承诺','重合规，尊重边界'].map((item, i)=><div key={item}><span>0{i+1}</span><CheckIcon/><b>{item}</b></div>)}</div>
      </div>
    </section>
  </main>;
}

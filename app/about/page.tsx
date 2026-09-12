import Link from "next/link";
import { PageHero } from "@/components/ui";

export const metadata = { title: "关于我们", description: "以财商教育点燃判断力，以长期规划陪伴家庭。了解星火财商的品牌理念与服务原则。" };

const approach = [
  ["理解", "先听见家庭的真实目标", "从家庭阶段、责任与生活愿望出发，梳理收支、资产与风险。"],
  ["学习", "让知识成为自己的判断", "通过成人、少儿课程与财富流沙盘，把复杂知识变成可以讨论的体验。"],
  ["规划", "把目标放进行动顺序", "结合保障需求、现金流与资产结构，形成符合家庭边界的规划思路。"],
  ["陪伴", "跟随生活变化持续检视", "通过复盘与沟通调整行动，让规划持续服务于真实生活。"],
];

export default function AboutPage() {
  return <main className="about-renewed">
    <PageHero eyebrow="ABOUT SPARK WEALTH" title="点燃的不只是财富，更是家庭的选择力。" desc="我们是星火财商。专注财商教育、家庭资产配置与长期规划，陪伴中产及高净值家庭理解财富，也理解财富背后的责任与生活。" />
    <section className="brand-purpose">
      <div className="container brand-purpose-grid"><div><span className="eyebrow">WHY WE DO IT</span><h2>财富的意义，<br />最终要回到生活。</h2></div><div><p className="brand-lead">我们相信，真正的财富规划，是让家庭拥有长期选择的能力。</p><p>家庭需要的不只是更多工具，更是清晰的认知、稳固的底盘，以及面对教育、健康、养老与传承时的从容。</p><p>因此，我们把教育放在选择之前，把家庭目标放在工具之前。让每一次决定，都有理解作为起点。</p></div></div>
    </section>
    <section className="brand-approach"><div className="container"><span className="eyebrow">HOW WE ACCOMPANY</span><div className="brand-section-heading"><h2>不替你决定，<br />陪你把选择看清楚。</h2><p>从认知到行动，从当下到长期。<br />我们与家庭一起学习、规划与复盘。</p></div><div className="brand-approach-grid">{approach.map(([word, title, desc]) => <article key={word}><span>{word}</span><h3>{title}</h3><p>{desc}</p></article>)}</div></div></section>
    <section className="brand-values"><div className="container"><span className="eyebrow">WHAT WE BELIEVE</span><h2>专业，也有边界。</h2><div className="brand-values-grid"><article><small>CLARITY</small><h3>清晰</h3><p>先目标，后工具。<br />先理解，后行动。</p></article><article><small>RESTRAINT</small><h3>克制</h3><p>先风险，后收益。<br />重结构，不追热点。</p></article><article><small>LONG TERM</small><h3>长期</h3><p>重陪伴，不做收益承诺。<br />重合规，尊重家庭边界。</p></article></div></div></section>
    <section className="brand-ending"><div className="container"><span className="eyebrow">SPARK WEALTH ACADEMY</span><h2>创造富而喜悦的人生。</h2><p>让财富守护所爱，让学习照亮未来。</p><Link className="button" href="/contact">与我们聊聊家庭目标 →</Link></div></section>
  </main>;
}

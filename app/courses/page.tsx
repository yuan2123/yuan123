import { PageHero, SectionHeading } from "@/components/ui";
import Link from "next/link";
import { coursePrograms, courses } from "@/data/site";

export const metadata = { title: "课程体系", description: "星火财商成人与少儿课程、八大核心模块与体验式学习方式。" };

const moduleChapters = [
  { no: "01", title: "看见家庭", en: "UNDERSTAND", desc: "先理解金钱关系与家庭收支，建立所有决策的共同底稿。", modules: [courses[0], courses[5]] },
  { no: "02", title: "守住底线", en: "PROTECT", desc: "识别不能承受的风险，再理解保障工具的作用与边界。", modules: [courses[2], courses[3]] },
  { no: "03", title: "安排增长", en: "GROW", desc: "让资金用途、目标期限与承受能力彼此匹配。", modules: [courses[1], courses[4]] },
  { no: "04", title: "延续价值", en: "LEGACY", desc: "处理企业与家庭责任边界，为长期安排与有序传承打基础。", modules: [courses[6], courses[7]] },
];

export default function CoursesPage() {
  return <>
    <PageHero eyebrow="CURRICULUM" title="从成人到少儿，建立可实践的财商能力" desc="课程围绕真实家庭情境展开，通过主题授课、财富流沙盘、案例讨论和复盘，把财富知识转化为判断与行动。"/>
    <section className="section"><div className="container">
      <SectionHeading eyebrow="NOW ENROLLING" title="当前课程" desc="成人与少儿课程均开放招生咨询。具体时间、地点与费用将在沟通后根据当期安排确认。"/>
      <div className="program-grid">{coursePrograms.map((program)=><article className="program-card" key={program.name}><div className="program-card-head"><span>{program.code}</span><small>{program.status}</small></div><h2>{program.name}</h2><p className="program-audience">{program.audience}</p><p>{program.summary}</p><div className="program-format">{program.format}</div><ul>{program.highlights.map((item)=><li key={item}>{item}</li>)}</ul><Link className="button button-sm" href="/register">提交课程咨询</Link></article>)}</div>
    </div></section>
    <section className="section module-system"><div className="container module-system-layout">
      <header className="module-system-intro"><span className="eyebrow">8 CORE MODULES</span><strong aria-hidden="true">08</strong><h2>一套由认知走向行动的课程地图</h2><p>八大模块并非八门彼此割裂的课，而是沿着“看见—守住—增长—延续”的路径，根据成人、少儿与家庭需求灵活组合。</p></header>
      <div className="module-atlas">{moduleChapters.map((chapter)=><section className="module-chapter" key={chapter.no}>
        <div className="module-chapter-head"><span>{chapter.no}</span><small>{chapter.en}</small><h3>{chapter.title}</h3><p>{chapter.desc}</p></div>
        {chapter.modules.map((course)=><article className="module-entry" key={course.title}><div className="module-entry-title"><span aria-hidden="true">{course.icon}</span><div><h3>{course.title}</h3><em>{course.en}</em></div></div><p>{course.desc}</p><ul>{course.points.map((point)=><li key={point}>{point}</li>)}</ul></article>)}
      </section>)}</div>
    </div></section>
    <section className="section section-dark"><div className="container"><SectionHeading eyebrow="LEARNING EXPERIENCE" title="让知识进入体验，也进入家庭讨论"/><div className="level-grid">{[['01','主题授课','用清晰语言讲解财富、风险、现金流与家庭目标'],['02','财富流沙盘','在模拟决策中观察选择、结果与行为模式'],['03','绘画心理体验','从表达与互动中理解自己和家庭的真实需求'],['04','复盘沙龙','把课堂收获带回现实，在交流中持续校准行动']].map(([n,t,d])=><article key={n}><span>{n}</span><h3>{t}</h3><p>{d}</p></article>)}</div></div></section>
  </>;
}

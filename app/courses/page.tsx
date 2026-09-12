import { PageHero, SectionHeading } from "@/components/ui";
import Link from "next/link";
import { coursePrograms, courses } from "@/data/site";

export const metadata = { title: "课程体系", description: "星火财商八大课程模块与四阶段学习成长路径。" };

export default function CoursesPage() {
  return <><PageHero eyebrow="CURRICULUM" title="从成人到少儿，建立可实践的财商能力" desc="课程围绕真实家庭情境展开，通过主题授课、沙盘体验和复盘讨论，把财富知识转化为判断与行动。"/>
  <section className="section"><div className="container"><SectionHeading eyebrow="NOW ENROLLING" title="当前课程" desc="课程均开放招生咨询。具体时间、地点与费用将在沟通后根据当期安排确认。"/><div className="program-grid">{coursePrograms.map((program)=><article className="program-card" key={program.name}><div className="program-card-head"><span>{program.code}</span><small>{program.status}</small></div><h2>{program.name}</h2><p className="program-audience">{program.audience}</p><p>{program.summary}</p><div className="program-format">{program.format}</div><ul>{program.highlights.map((item)=><li key={item}>{item}</li>)}</ul><Link className="button button-sm" href="/register">提交课程咨询</Link></article>)}</div></div></section>
  <section className="section section-soft"><div className="container"><SectionHeading eyebrow="8 CORE MODULES" title="八大核心模块" desc="八大模块是星火财商的知识体系，会根据不同课程、年龄和家庭需求进行组合。"/><div className="course-grid course-grid-page">{courses.map((course,index)=><article className="course-card" key={course.title}><div className="course-top"><span className="course-icon">{course.icon}</span><small>0{index+1}</small></div><h3>{course.title}</h3><em>{course.en}</em><p>{course.desc}</p><ul>{course.points.map((point)=><li key={point}>{point}</li>)}</ul></article>)}</div></div></section>
  <section className="section section-dark"><div className="container"><SectionHeading eyebrow="LEARNING EXPERIENCE" title="让知识进入体验，也进入家庭讨论"/><div className="level-grid">{[['01','主题授课','用清晰语言讲解财富、风险、现金流与家庭目标'],['02','财富流沙盘','在模拟决策中观察选择、结果与行为模式'],['03','绘画心理体验','从表达与互动中理解自己和家庭的真实需求'],['04','复盘沙龙','把课堂收获带回现实，在交流中持续校准行动']].map(([n,t,d])=><article key={n}><span>{n}</span><h3>{t}</h3><p>{d}</p></article>)}</div></div></section></>;
}

import { PageHero, SectionHeading } from "@/components/ui";
import { courses } from "@/data/site";

export const metadata = { title: "课程体系", description: "星火财商八大课程模块与四阶段学习成长路径。" };

export default function CoursesPage() {
  return <><PageHero eyebrow="CURRICULUM" title="覆盖家庭全生命周期的财商课程体系" desc="从认知建立到家庭盘点、结构规划和财富传承，让复杂知识成为可执行的方法。"/>
  <section className="section"><div className="container"><SectionHeading eyebrow="8 CORE MODULES" title="八大核心模块"/><div className="course-grid course-grid-page">{courses.map((course,index)=><article className="course-card" key={course.title}><div className="course-top"><span className="course-icon">{course.icon}</span><small>0{index+1}</small></div><h3>{course.title}</h3><em>{course.en}</em><p>{course.desc}</p><ul><li>核心概念与常见误区</li><li>家庭场景与案例拆解</li><li>可执行工具与课后练习</li></ul></article>)}</div></div></section>
  <section className="section section-dark"><div className="container"><SectionHeading eyebrow="LEARNING LEVELS" title="四阶段学习成长路线" desc="每个阶段都有明确目标、核心内容与学习成果。"/><div className="level-grid">{[['L1','财商启蒙','建立资产负债、现金流与风险的基础认知'],['L2','家庭盘点','完成家庭目标、收支、负债与保障盘点'],['L3','结构规划','形成适合家庭的财富结构与行动优先级'],['L4','进阶规划','理解企业主规划、养老与财富传承逻辑']].map(([n,t,d])=><article key={n}><span>{n}</span><h3>{t}</h3><p>{d}</p></article>)}</div></div></section>
  <section className="section"><div className="container"><SectionHeading align="center" eyebrow="COURSE FORMAT" title="可扩展的课程交付方式"/><div className="format-grid"><div><b>线下工作坊</b><p>小班互动、案例演练与现场工具实践。</p></div><div><b>线上系统课</b><p>未来可接入会员、进度、作业和直播功能。</p></div><div><b>企业内训</b><p>面向企业员工、管理层和创业者定制主题。</p></div><div><b>家庭共学</b><p>帮助家庭成员形成财富语言和目标共识。</p></div></div></div></section></>;
}

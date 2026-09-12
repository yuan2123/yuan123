import { PageHero, SectionHeading } from "@/components/ui";
import { mentors } from "@/data/site";

export const metadata = { title: "导师团队", description: "认识星火财商导师团队及其专业背景与擅长领域。" };

export default function MentorsPage() {
  return <><PageHero eyebrow="MENTOR TEAM" title="专业知识，也需要被清楚、负责任地表达" desc="导师团队从家庭真实需求出发，把财富规划、风险管理和传承认知转化为学员能够理解、讨论和实践的方法。"/><section className="section"><div className="container"><SectionHeading eyebrow="OUR MENTORS" title="导师阵容" desc="三位导师分别从财富认知、风险管理与长期传承角度，为家庭提供课程与规划支持。"/><div className="mentor-grid mentor-grid-page">{mentors.map((mentor,index)=><article className="mentor-card mentor-card-large" key={mentor.name}><div className={`mentor-avatar mentor-photo ${mentor.photoClass}`} style={{backgroundImage:`url(${mentor.photo})`}} role="img" aria-label={`${mentor.name}，${mentor.title}`}><i>0{index+1}</i></div><div className="mentor-content"><small>{mentor.role}</small><h3>{mentor.name}</h3><strong className="mentor-title">{mentor.title}</strong><p>{mentor.bio}</p><div className="tag-row">{mentor.tags.map(tag=><span key={tag}>{tag}</span>)}</div><div className="mentor-credentials"><b>专业背景</b><span>{mentor.credentials}</span></div></div></article>)}</div></div></section><section className="section section-dark"><div className="container"><SectionHeading eyebrow="MENTOR STANDARD" title="导师内容标准"/><div className="standard-row"><span>事实准确</span><span>表达克制</span><span>案例合规</span><span>尊重差异</span><span>不承诺收益</span></div></div></section></>;
}

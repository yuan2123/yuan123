import { PageHero, SectionHeading } from "@/components/ui";
import { mentors } from "@/data/site";

export const metadata = { title: "导师团队", description: "认识星火财商导师团队及其专业背景与擅长领域。" };

export default function MentorsPage() {
  return <><PageHero eyebrow="MENTOR TEAM" title="专业知识，更需要负责任的表达" desc="我们的导师坚持教育边界与合规原则，把专业内容转化为学员真正能理解和应用的方法。"/><section className="section"><div className="container"><SectionHeading eyebrow="OUR MENTORS" title="导师阵容（第一版占位）" desc="后续可替换为真实照片、专业资质、授课经历与个人详情页。"/><div className="mentor-grid mentor-grid-page">{mentors.map((mentor,index)=><article className="mentor-card mentor-card-large" key={mentor.name}><div className="mentor-avatar"><span>{mentor.initials}</span><i>0{index+1}</i></div><div className="mentor-content"><small>{mentor.role}</small><h3>{mentor.name}</h3><p>{mentor.bio}</p><div className="tag-row">{mentor.tags.map(tag=><span key={tag}>{tag}</span>)}</div><div className="mentor-credentials"><b>专业背景占位</b><span>相关专业认证 / 课程研发经验 / 家庭服务经验</span></div></div></article>)}</div></div></section><section className="section section-dark"><div className="container"><SectionHeading eyebrow="MENTOR STANDARD" title="导师内容标准"/><div className="standard-row"><span>事实准确</span><span>表达克制</span><span>案例合规</span><span>尊重差异</span><span>不承诺收益</span></div></div></section></>;
}

import { ArticleSearch } from "@/components/article-search";
import { PageHero, SectionHeading } from "@/components/ui";

export const metadata = { title: "财商学院", description: "星火财商知识中心：家庭财富、现金流、风险管理与长期投资思维文章。" };

export default function AcademyPage() {
  return <><PageHero eyebrow="WEALTH ACADEMY" title="把复杂财富知识，讲成清晰的人生语言" desc="文章、案例与工具持续更新，帮助你在真实生活中作出更稳健的财务决策。"/><section className="section"><div className="container"><SectionHeading eyebrow="KNOWLEDGE CENTER" title="最新内容" desc="围绕家庭财富、现金流与风险管理，提供清晰、克制、可实践的财商知识。"/><ArticleSearch/></div></section></>;
}

import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { posts } from "@/data/site";

type ArticlePageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: ArticlePageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = posts.find((item) => item.slug === slug);
  return post
    ? { title: post.title, description: post.excerpt }
    : { title: "文章未找到" };
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { slug } = await params;
  const post = posts.find((item) => item.slug === slug);
  if (!post) notFound();

  return (
    <main>
      <section className="page-hero page-hero-small">
        <div className="container">
          <span className="eyebrow">{post.category}</span>
          <h1>{post.title}</h1>
          <p>{post.excerpt}</p>
          <div className="article-meta"><span>{post.date}</span><span>{post.read}</span></div>
        </div>
      </section>
      <section className="section">
        <div className="container article-detail">
          <p>{post.excerpt}</p>
          <p>这篇内容正在持续完善中。星火财商将从家庭目标、现金流、风险边界与长期规划出发，帮助家庭建立清晰、可执行的财富决策框架。</p>
          <Link className="text-link" href="/academy">← 返回财商学院</Link>
        </div>
      </section>
    </main>
  );
}

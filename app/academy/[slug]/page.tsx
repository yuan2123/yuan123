import { academyTopics, topicHref } from "@/data/academy-topics";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { posts } from "@/data/academy-articles";

import { ArticleContent } from "@/components/article-content";

type ArticlePageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: ArticlePageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = posts.find((item) => item.slug === slug);
  if (!post) return {};
  return { title: post.title, description: post.excerpt, alternates: { canonical: `/academy/${post.slug}` } };
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { slug } = await params;
  const post = posts.find((item) => item.slug === slug);
  if (!post) notFound();
  const topic = academyTopics.find((item) => item.id === post.topic);

  return (
    <article className="knowledge-article">
      <header className="article-hero">
        <div className="container article-hero-inner">
          <nav className="article-breadcrumb" aria-label="面包屑导航">
            <Link href="/academy">财商学院</Link><span aria-hidden="true">/</span>{topic ? <Link href={topicHref(topic.id)}>{topic.label}</Link> : <span>{post.category}</span>}
          </nav>
          <div className="article-kicker">✦ {post.category}</div>
          <h1>{post.title}</h1>
          <p>{post.excerpt}</p>
          <div className="article-meta article-hero-meta"><time dateTime={post.date}>{post.date}</time><span>{post.read}</span><span>星火财商学院 · 编辑内容</span></div>
        </div>
      </header>

      <figure className={`container article-feature${post.coverKind === "diagram" ? " article-feature-diagram" : ""}`}><Image src={post.cover} alt={post.alt} width={1200} height={800} sizes="(max-width: 780px) 100vw, 1100px" priority /><figcaption>{post.coverKind === "diagram" ? "图解根据本文情境绘制；算例不代表实际收益、费用或待遇。" : "图像生成插画，仅用于主题示意，非真实客户或就医记录。"}</figcaption></figure>

      <div className="container article-layout">
        <div className="article-content">
          <ArticleContent blocks={post.blocks} />
          <p className="article-disclaimer">{post.topic === "medical" ? "本文提供家庭就医准备与资料整理思路，不用于诊断或治疗。具体就医、医保与商业保险事项，请分别向接诊机构、参保地经办机构和保险公司核实。" : "本文用于家庭财商教育，假设算例不代表真实客户或收益承诺。具体金融、保险、法律与税务事项，需结合实际情况核实。"}</p>

          <Link className="article-back" href={topic ? topicHref(topic.id) : "/academy"}>← 返回{topic ? `${topic.label}板块` : "财商学院"}</Link>
        </div>
        <aside className="article-aside">
          <div><span>从家庭问题开始</span><p>先梳理目标、现金流和责任，再讨论适合的工具。你可以带着问题预约一次家庭规划咨询。</p></div>
          <Link href="/contact">预约家庭规划咨询 →</Link>
        </aside>
      </div>
    </article>
  );
}

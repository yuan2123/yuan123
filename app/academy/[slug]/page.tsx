import type { Metadata } from "next";
import Image from "next/image";
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
  if (!post) return {};
  return { title: post.title, description: post.excerpt, alternates: { canonical: `/academy/${post.slug}` } };
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { slug } = await params;
  const post = posts.find((item) => item.slug === slug);
  if (!post) notFound();

  return (
    <article className="knowledge-article">
      <header className="article-hero">
        <div className="container article-hero-inner">
          <nav className="article-breadcrumb" aria-label="面包屑导航">
            <Link href="/academy">财商学院</Link><span aria-hidden="true">/</span><span>{post.category}</span>
          </nav>
          <div className="article-kicker">✦ {post.category}</div>
          <h1>{post.title}</h1>
          <p>{post.excerpt}</p>
          <div className="article-meta article-hero-meta"><span>{post.date}</span><span>{post.read}</span><span>星火财商学院</span></div>
        </div>
      </header>

      {"cover" in post && post.cover && <div className="container article-feature"><Image src={post.cover} alt="" width={1440} height={960} priority /></div>}

      <div className="container article-layout">
        <div className="article-content">
          <p className="article-lead">{post.lead}</p>
          {post.sections.map((section) => (
            <section key={section.heading}>
              <h2>{section.heading}</h2>
              {section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            </section>
          ))}

          <section className="article-checklist">
            <span>家庭行动清单</span>
            <h2>从今天可以开始的五件事</h2>
            <ol>{post.checklist.map((item) => <li key={item}>{item}</li>)}</ol>
          </section>

          <p className="article-disclaimer">本文用于财商知识普及，不构成针对个人的投资、保险、法律或税务建议。具体安排应结合家庭实际情况，并在需要时咨询具备相应资质的专业人士。</p>

          {post.sources.length > 0 && <section className="article-sources">
            <h2>参考资料</h2>
            <ul>{post.sources.map((source) => <li key={source.href}><a href={source.href} target="_blank" rel="noreferrer">{source.label}</a></li>)}</ul>
          </section>}

          <Link className="article-back" href="/academy">← 返回财商学院</Link>
        </div>
        <aside className="article-aside">
          <div><span>星火观点</span><p>先建立判断，再选择工具。让每一次财富决策都围绕家庭真实目标展开。</p></div>
          <Link href="/contact">预约咨询 →</Link>
        </aside>
      </div>
    </article>
  );
}

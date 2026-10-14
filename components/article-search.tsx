"use client";

import Link from "next/link";
import Image from "next/image";
import { useMemo, useState } from "react";
import { academyTopics, topicHref, type AcademyTopic } from "@/data/academy-topics";
import type { ArticleSummary } from "@/data/academy-articles";
import { SearchIcon } from "@/components/icons";

export function ArticleSearch({ topic, posts }: { topic?: AcademyTopic; posts: ArticleSummary[] }) {
  const [query, setQuery] = useState("");
  const filtered = useMemo(() => posts.filter((post) => (!topic || post.topic === topic) && `${post.title}${post.category}${post.excerpt}`.toLowerCase().includes(query.trim().toLowerCase())), [query, topic, posts]);
  return (
    <div>
      <nav className="academy-topics" aria-label="文章板块">
        <Link href="/academy#articles" aria-current={!topic ? "page" : undefined}>全部文章</Link>
        {academyTopics.map((item) => <Link key={item.id} href={topicHref(item.id)} aria-current={topic === item.id ? "page" : undefined}>{item.label}</Link>)}
      </nav>
      <p className="topic-description">{academyTopics.find((item) => item.id === topic)?.description ?? "从五个方向出发，找到适合你当前阶段的知识。"}</p>
      <label className="search-box"><SearchIcon /><span className="sr-only">搜索文章</span><input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="搜索文章、主题或关键词" /></label>
      <p role="status" className="sr-only">{filtered.length ? "文章列表已更新" : "没有找到相关文章"}</p>
      <div className="article-grid article-grid-wide">
        {filtered.map((post) => <article className="article-card" key={post.slug}><Link className="article-card-link" href={`/academy/${post.slug}`}><div className={`article-cover${"cover" in post ? " article-cover-image" : ""}${post.coverKind === "diagram" ? " article-cover-diagram" : ""}`}>{"cover" in post && post.cover ? <Image src={post.cover} alt={post.alt} fill sizes="(max-width: 780px) 100vw, (max-width: 1100px) 50vw, 33vw" /> : <><b>✦</b><i>¥</i></>}</div><div className="article-body"><h3>{post.title}</h3><p>{post.excerpt}</p><span className="fake-link">阅读文章 →</span></div></Link></article>)}
      </div>
      {!filtered.length && <div className="empty-state">{"暂未找到相关内容，请尝试其他关键词或板块。"}</div>}
    </div>
  );
}

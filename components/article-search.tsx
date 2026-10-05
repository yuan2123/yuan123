"use client";

import Link from "next/link";
import Image from "next/image";
import { useMemo, useState } from "react";
import { academyTopics, getPostTopic, topicHref, type AcademyTopic } from "@/data/academy-topics";
import { posts } from "@/data/site";
import { SearchIcon } from "@/components/icons";

export function ArticleSearch({ topic }: { topic?: AcademyTopic }) {
  const [query, setQuery] = useState("");
  const filtered = useMemo(() => posts.filter((post) => (!topic || getPostTopic(post.slug) === topic) && `${post.title}${post.category}${post.excerpt}`.toLowerCase().includes(query.trim().toLowerCase())), [query, topic]);
  return (
    <div>
      <nav className="academy-topics" aria-label="文章板块">
        <Link href="/academy#articles" aria-current={!topic ? "page" : undefined}>全部文章<span>{posts.length}</span></Link>
        {academyTopics.map((item) => <Link key={item.id} href={topicHref(item.id)} aria-current={topic === item.id ? "page" : undefined}>{item.label}<span>{posts.filter((post) => getPostTopic(post.slug) === item.id).length}</span></Link>)}
      </nav>
      <p className="topic-description">{academyTopics.find((item) => item.id === topic)?.description ?? "从五个方向出发，找到适合你当前阶段的知识。"}</p>
      <label className="search-box"><SearchIcon /><span className="sr-only">搜索文章</span><input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="搜索文章、主题或关键词" /></label>
      <p role="status" className="article-result-count">共 {filtered.length} 篇文章</p>
      <div className="article-grid article-grid-wide">
        {filtered.map((post) => <article className="article-card" key={post.slug}><Link className="article-card-link" href={`/academy/${post.slug}`}><div className={`article-cover${"cover" in post ? " article-cover-image" : ""}`}>{"cover" in post && post.cover ? <Image src={post.cover} alt="" fill sizes="(max-width: 780px) 100vw, (max-width: 1100px) 50vw, 33vw" /> : <><b>✦</b><i>¥</i></>}<span>{post.category}</span></div><div className="article-body"><div className="article-meta"><span>{post.date}</span><span>{post.read}</span></div><h3>{post.title}</h3><p>{post.excerpt}</p><span className="fake-link">阅读文章 →</span></div></Link></article>)}
      </div>
      {!filtered.length && <div className="empty-state">{topic === "medical" && !query.trim() ? "医疗板块文章正在整理中，欢迎先阅读其他板块。" : "暂未找到相关内容，请尝试其他关键词或板块。"}</div>}
    </div>
  );
}

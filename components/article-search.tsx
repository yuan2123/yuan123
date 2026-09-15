"use client";

import Link from "next/link";
import Image from "next/image";
import { useMemo, useState } from "react";
import { posts } from "@/data/site";
import { SearchIcon } from "@/components/icons";

export function ArticleSearch() {
  const [query, setQuery] = useState("");
  const filtered = useMemo(() => posts.filter((post) => `${post.title}${post.category}${post.excerpt}`.toLowerCase().includes(query.toLowerCase())), [query]);
  return (
    <div>
      <label className="search-box"><SearchIcon /><span className="sr-only">搜索文章</span><input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="搜索文章、主题或关键词" /></label>
      <div className="article-grid article-grid-wide">
        {filtered.map((post) => <article className="article-card" key={post.slug}><Link className="article-card-link" href={`/academy/${post.slug}`}><div className={`article-cover${"cover" in post ? " article-cover-image" : ""}`}>{"cover" in post && post.cover ? <Image src={post.cover} alt="" fill sizes="(max-width: 780px) 100vw, (max-width: 1100px) 50vw, 33vw" /> : <><b>✦</b><i>¥</i></>}<span>{post.category}</span></div><div className="article-body"><div className="article-meta"><span>{post.date}</span><span>{post.read}</span></div><h3>{post.title}</h3><p>{post.excerpt}</p><span className="fake-link">阅读文章 →</span></div></Link></article>)}
      </div>
      {!filtered.length && <div className="empty-state">暂未找到相关内容，请尝试其他关键词。</div>}
    </div>
  );
}

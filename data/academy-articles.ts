import articleData from "./academy-posts.json";
import type { AcademyTopic } from "./academy-topics";
export type ArticleBlock = { type: "heading" | "paragraph"; text: string } | { type: "table"; rows: string[][] };
export type Article = {
  id: string; slug: string; title: string; topic: AcademyTopic; category: string;
  excerpt: string; cover: string; coverKind: "diagram" | "illustration"; alt: string; date: string; read: string; blocks: ArticleBlock[];
};
export type ArticleSummary = Omit<Article, "blocks">;
export const posts = articleData as Article[];
export const articleSummaries: ArticleSummary[] = posts.map(({ id, slug, title, topic, category, excerpt, cover, coverKind, alt, date, read }) => ({ id, slug, title, topic, category, excerpt, cover, coverKind, alt, date, read }));

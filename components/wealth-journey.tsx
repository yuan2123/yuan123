"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { academyTopics, topicHref } from "@/data/academy-topics";
import { LOGO_JOURNEY_ART } from "@/components/logo-journey-art";

export function WealthJourney() {
  const root = useRef<HTMLDivElement>(null);
  const [paused, setPaused] = useState(false);
  const track = useRef<HTMLDivElement>(null);
  const phase = useRef(0);
  const [hovered, setHovered] = useState(false);
  const [active, setActive] = useState<string | null>(null);
  useEffect(() => {
    const element = track.current;
    if (!element) return;
    const stars = Array.from(element.querySelectorAll<HTMLElement>(".wealth-orbit-star"));
    const staticMotion = window.matchMedia("(max-width: 600px), (hover: none), (prefers-reduced-motion: reduce)");
    let width = element.clientWidth;
    let height = element.clientHeight;
    let inView = false;
    let frame = 0;
    let previous = 0;
    const paint = () => stars.forEach((star, index) => {
      const origin = index * Math.PI * 2 / 5 - Math.PI / 2;
      const angle = origin + phase.current;
      const dx = (Math.cos(angle) - Math.cos(origin)) * width * .42;
      const dy = (Math.sin(angle) - Math.sin(origin)) * height * .35;
      star.style.transform = `translate(-50%, -50%) translate(${dx}px, ${dy}px)`;
    });
    const animate = (now: number) => {
      if (previous) phase.current = (phase.current + Math.min(now - previous, 50) / 75000 * Math.PI * 2) % (Math.PI * 2);
      previous = now;
      paint();
      frame = requestAnimationFrame(animate);
    };
    const sync = () => {
      cancelAnimationFrame(frame);
      previous = 0;
      if (staticMotion.matches) { phase.current = 0; paint(); }
      if (!paused && !hovered && !active && inView && !document.hidden && !staticMotion.matches) frame = requestAnimationFrame(animate);
    };
    const resize = new ResizeObserver(([entry]) => {
      width = entry.contentRect.width;
      height = entry.contentRect.height;
      paint();
    });
    resize.observe(element);
    const observer = new IntersectionObserver(([entry]) => { inView = entry.isIntersecting; sync(); });
    observer.observe(element);
    staticMotion.addEventListener("change", sync);
    document.addEventListener("visibilitychange", sync);
    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
      resize.disconnect();
      staticMotion.removeEventListener("change", sync);
      document.removeEventListener("visibilitychange", sync);
    };
  }, [paused, hovered, active]);
  const selected = academyTopics.find((topic) => topic.id === active);
  return <div ref={root} className="wealth-journey" data-paused={paused || hovered || !!active}>
    <div ref={track} onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)} className="wealth-orbit" aria-label="财商学院五大板块">
      <div className="wealth-orbit-art" aria-hidden="true" dangerouslySetInnerHTML={{ __html: LOGO_JOURNEY_ART }} />
      <div className="wealth-orbit-line" aria-hidden="true" />
      {academyTopics.map((topic, index) => <Link key={topic.id} href={topicHref(topic.id)} className="wealth-orbit-star"
        style={{ left: `${50 + Math.cos(index * Math.PI * 2 / 5 - Math.PI / 2) * 42}%`, top: `${50 + Math.sin(index * Math.PI * 2 / 5 - Math.PI / 2) * 35}%` }}
        onMouseEnter={() => setActive(topic.id)} onMouseLeave={() => setActive(null)} onFocus={() => setActive(topic.id)} onBlur={() => setActive(null)}
        aria-label={`进入财商学院 · ${topic.label}板块`}>
        <svg viewBox="0 0 100 100" aria-hidden="true"><defs><linearGradient id={`orbit-gold-${topic.id}`} x2="0.8" y2="1"><stop stopColor="#fff5cf"/><stop offset="1" stopColor="#c49338"/></linearGradient></defs><path d="M50 4 62 35 96 38 70 60 79 94 50 75 21 94 30 60 4 38 38 35Z" fill={`url(#orbit-gold-${topic.id})`} stroke="#a87929" strokeWidth="1.5"/><text x="50" y="56" textAnchor="middle" fill="#513a16" fontSize="20" fontWeight="600">{topic.label}</text></svg>
      </Link>)}
    </div>
    <div className="wealth-orbit-caption">
      <span>五个方向 · 一起成长</span>
      <h3>{selected ? `${selected.label} · 财商学院` : "从认知，到长期陪伴"}</h3>
      <p>{selected ? selected.description : "点击星星，探索对应板块的文章与知识。"}</p>
      <button type="button" className="orbit-pause" aria-pressed={paused} onClick={() => setPaused(!paused)}>{paused ? "继续轨道动画" : "暂停轨道动画"}</button>
    </div>
  </div>;
}

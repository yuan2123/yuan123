import Link from "next/link";
import type { ReactNode } from "react";
import { ArrowRightIcon } from "@/components/icons";

export function Eyebrow({ children }: { children: ReactNode }) {
  return <div className="eyebrow"><span>✦</span>{children}</div>;
}

export function SectionHeading({ eyebrow, title, desc, align = "left" }: { eyebrow: string; title: string; desc?: string; align?: "left" | "center" }) {
  return <div className={`section-heading ${align === "center" ? "center" : ""}`}><Eyebrow>{eyebrow}</Eyebrow><h2>{title}</h2>{desc && <p>{desc}</p>}</div>;
}

export function TextLink({ href, children }: { href: string; children: ReactNode }) {
  return <Link className="text-link" href={href}>{children}<ArrowRightIcon /></Link>;
}

export function PageHero({ eyebrow, title, desc }: { eyebrow: string; title: string; desc: string }) {
  return <section className="page-hero"><div className="money-specks" aria-hidden="true"><i>¥</i><i>●</i><i>✦</i><i>$</i><i>●</i></div><div className="container"><Eyebrow>{eyebrow}</Eyebrow><h1>{title}</h1><p>{desc}</p></div></section>;
}

import Link from "next/link";

export function Logo() {
  return (
    <Link href="/" className="brand" aria-label="星火财商首页">
      <span className="brand-mark" aria-hidden="true">
        <span className="brand-star">✦</span>
        <span className="brand-ring" />
      </span>
      <span className="brand-copy">
        <strong>星火财商</strong>
        <small>SPARK WEALTH ACADEMY</small>
      </span>
    </Link>
  );
}

import Link from "next/link";
import Image from "next/image";

export function Logo() {
  return (
    <Link href="/" className="brand" aria-label="星火财商首页">
      <Image className="brand-logo-image" src="/images/xhcs-logo-gold.png" alt="" width={48} height={54} />
      <span className="brand-copy">
        <strong>星火财商</strong>
        <small>SPARK WEALTH ACADEMY</small>
      </span>
    </Link>
  );
}

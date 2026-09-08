"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { navItems } from "@/data/site";
import { CloseIcon, MenuIcon } from "@/components/icons";
import { Logo } from "@/components/logo";

export function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();


  return (
    <header className="site-header">
      <div className="container nav-wrap">
        <Logo />
        <nav className="desktop-nav" aria-label="主导航">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className={pathname === item.href ? "active" : ""}>{item.label}</Link>
          ))}
        </nav>
        <Link href="/register" className="button button-sm desktop-contact">课程报名</Link>
        <button className="mobile-menu-button" type="button" aria-label={open ? "关闭菜单" : "打开菜单"} aria-expanded={open} onClick={() => setOpen(!open)}>
          {open ? <CloseIcon /> : <MenuIcon />}
        </button>
      </div>
      {open && (
        <nav className="mobile-nav" aria-label="移动端导航">
          <div className="container">
            {navItems.map((item) => <Link key={item.href} href={item.href} onClick={() => setOpen(false)}>{item.label}</Link>)}
            <Link href="/register" className="button" onClick={() => setOpen(false)}>课程报名</Link>
          </div>
        </nav>
      )}
    </header>
  );
}

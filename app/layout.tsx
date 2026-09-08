import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { getSiteUrl } from "@/lib/site-url";

export const metadata: Metadata = {
  metadataBase: new URL(getSiteUrl()),
  title: { default: "星火财商学院｜星火点亮未来，财商成就人生", template: "%s｜星火财商学院" },
  description: "星火财商学院以财商教育为入口，连接家庭保障、医疗资源与长期陪伴，帮助家庭建立清晰、稳健的财富决策能力。",
  keywords: ["财商教育", "家庭资产配置", "财富管理", "风险管理", "现金流管理", "财富传承"],
  openGraph: { title: "星火财商学院 Spark Wealth Academy", description: "星火点亮未来，财商成就人生。", type: "website", locale: "zh_CN" },
  alternates: { canonical: "/" },
  icons: {
    icon: [{ url: "/favicon.ico" }, { url: "/icon.png", type: "image/png" }],
    apple: [{ url: "/apple-icon.png" }],
  },
};

export const viewport: Viewport = { width: "device-width", initialScale: 1, themeColor: "#fbfaf7" };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="zh-CN"><body><a className="skip-link" href="#main">跳转到主要内容</a><Header /><main id="main">{children}</main><Footer /></body></html>;
}

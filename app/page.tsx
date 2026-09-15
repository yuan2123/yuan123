import type { Metadata } from "next";
import { AcademyHomePage } from "@/components/academy-home-page";

export const metadata: Metadata = {
  title: "星火财商学院｜星火点亮未来，财商成就人生",
  description: "星火财商专注中产及高净值家庭一站式财富管理，深耕财商教育、资产配置与专属理财规划。",
  alternates: { canonical: "/" },
  openGraph: {
    title: "星火财商学院｜星火点亮未来，财商成就人生",
    description: "围绕家庭财富生命周期，提供财务诊断、方案定制、落地执行与财商授课服务。",
    type: "website",
    locale: "zh_CN",
    siteName: "星火财商学院",
  },
};

export default function HomePage() {
  return <AcademyHomePage />;
}

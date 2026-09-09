import type { Metadata } from "next";
import { AcademyHomePage } from "@/components/academy-home-page";

export const metadata: Metadata = {
  title: "星火财商学院｜星火点亮未来，财商成就人生",
  description: "星火财商学院以财商教育为入口，以家庭保障与医疗资源为核心能力，以长期陪伴帮助家庭建立财富判断力与财富安全系统。",
  alternates: { canonical: "/" },
  openGraph: {
    title: "星火财商学院｜星火点亮未来，财商成就人生",
    description: "陪家庭学习财富认知、规划家庭保障、理解医疗决策，并在长期成长中持续同行。",
    type: "website",
    locale: "zh_CN",
    siteName: "星火财商学院",
  },
};

export default function HomePage() {
  return <AcademyHomePage />;
}

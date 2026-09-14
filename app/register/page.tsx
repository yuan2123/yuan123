import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { RegistrationForm } from "@/components/registration-form";
import { RegistrationShareButton } from "@/components/registration-share-button";

export const metadata: Metadata = {
  title: "财富认知基础课报名",
  description: "2分钟填写星火财商课程报名表，了解家庭现金流、资产配置、风险管理与财富传承。",
  alternates: { canonical: "/register" },
  openGraph: {
    title: "星火财商｜财富认知基础课报名",
    description: "看懂家庭财务，建立正确财富观。2分钟填写，开启财富认知升级之旅。",
    url: "/register",
    siteName: "星火财商",
    locale: "zh_CN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "星火财商｜财富认知基础课报名",
    description: "看懂家庭财务，建立正确财富观。2分钟完成报名。",
  },
};

const learningPoints = [
  ["01", "看懂家庭财务现状"],
  ["02", "建立风险管理意识"],
  ["03", "优化现金流与资产结构"],
  ["04", "形成长期财富思维"],
];

export default function RegisterPage() {
  return (
    <div className="registration-app">
      <header className="register-app-header">
        <Link className="register-mini-brand" href="/" aria-label="返回星火财商官网">
          <span className="register-mini-logo">
            <Image src="/images/xhcs-logo-gold.png" alt="星火财商 Logo" width={38} height={43} priority />
          </span>
          <span><b>星火财商学院</b><small>SPARK WEALTH ACADEMY</small></span>
        </Link>
        <RegistrationShareButton />
      </header>

      <section className="register-app-hero">
        <div className="register-hero-orbit orbit-one" />
        <div className="register-hero-orbit orbit-two" />
        <div className="register-coin register-coin-one">¥</div>
        <div className="register-coin register-coin-two">¥</div>
        <div className="register-hero-brand-lockup">
          <span className="register-hero-logo-plate">
            <Image src="/images/xhcs-logo-gold.png" alt="星火财商学院" width={78} height={88} priority />
          </span>
          <span><b>星火财商学院</b><small>SPARK WEALTH ACADEMY</small></span>
        </div>
        <span className="register-kicker">点燃财富 · IGNITE WEALTH</span>
        <h1 className="register-home-echo-title">
          <span><em>星火</em>点亮未来</span>
          <span><em>财商</em>成就人生</span>
        </h1>
        <div className="register-course-badge">财富认知基础课报名</div>
        <p>从学习开始，看懂家庭财务、理解风险边界，建立更清晰的财富判断与更从容的家庭选择。</p>
        <div className="register-hero-tags"><span>约 2 分钟填写</span><span>专属顾问联系</span><span>信息安全保护</span></div>
        <div className="register-wealth-visual" aria-hidden="true">
          <div className="register-wealth-family"><i /><i /><i /></div>
          <div className="register-wealth-stacks"><span /><span /><span /></div>
          <b>财富认知 · 家庭规划 · 长期成长</b>
        </div>
      </section>

      <main className="register-app-main">
        <section className="register-intro-card">
          <span className="register-kicker">WHY LEARN</span>
          <h2>财商不是追逐收益，<br />而是提升每一次财富选择的质量。</h2>
          <div className="register-learning-grid">
            {learningPoints.map(([number, text]) => <div key={number}><span>{number}</span><b>{text}</b></div>)}
          </div>
        </section>

        <section className="register-form-card">
          <div className="register-form-card-head">
            <div className="register-form-brand-row">
              <Image src="/images/xhcs-logo-gold.png" alt="星火财商" width={52} height={59} />
              <div><span className="register-kicker">APPLICATION FORM</span><small>星火财商学院课程报名</small></div>
            </div>
            <h2>填写报名信息</h2>
            <p>本表用于了解您的基本情况和学习需求，提交报名不代表缴费或录取。</p>
          </div>
          <RegistrationForm />
        </section>

        <footer className="register-app-footer">
          <Image className="register-footer-logo" src="/images/xhcs-logo-gold.png" alt="星火财商" width={58} height={66} />
          <b>星火财商学院</b>
          <p>星火点亮未来 · 财商成就人生</p>
          <small>教育内容不构成投资建议，市场有风险，决策需谨慎。</small>
        </footer>
      </main>
    </div>
  );
}

import Link from "next/link";
import { navItems } from "@/data/site";
import { Logo } from "@/components/logo";

export function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <Logo />
          <p>以教育提升认知，以规划创造从容。帮助更多家庭建立理性、稳健、长期的财富观。</p>
          <div className="compliance-note">教育内容不构成投资建议，市场有风险，决策需谨慎。</div>
        </div>
        <div>
          <h3>网站导航</h3>
          <div className="footer-links">{navItems.slice(0, 6).map((item) => <Link key={item.href} href={item.href}>{item.label}</Link>)}</div>
        </div>
        <div>
          <h3>课程方向</h3>
          <div className="footer-links"><Link href="/courses">家庭资产配置</Link><Link href="/courses">风险管理</Link><Link href="/courses">现金流管理</Link><Link href="/courses">财富传承</Link></div>
        </div>
        <div>
          <h3>联系我们</h3>
          <div className="footer-contact"><span>电话：400-XXX-XXXX</span><span>邮箱：hello@sparkwealth.example</span><span>地址：中国 · 广东（占位）</span><span>服务时间：09:00–18:00</span></div>
        </div>
      </div>
      <div className="container footer-bottom"><span>© 2026 星火财商 Spark Wealth Academy</span><span>隐私政策 · 使用条款 · 合规声明</span></div>
    </footer>
  );
}

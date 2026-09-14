import { ContactForm } from "@/components/contact-form";
import { PageHero, SectionHeading } from "@/components/ui";

export const metadata = { title: "联系我们", description: "联系星火财商，咨询课程、企业内训、家庭财商学习与内容合作。" };

export default function ContactPage() {
  return <><PageHero eyebrow="CONTACT" title="欢迎与星火财商建立联系" desc="课程咨询、企业内训、品牌合作与学习资源需求，均可通过以下方式联系我们。"/><section className="section"><div className="container contact-grid contact-page-grid"><div><SectionHeading eyebrow="CONTACT DETAILS" title="联系方式"/><div className="contact-cards"><article><span>电话</span><b>400-XXX-XXXX</b><p>工作日 09:00–18:00</p></article><article><span>邮箱</span><b>hello@sparkwealth.example</b><p>品牌合作与课程咨询</p></article><article><span>地址</span><b>中国 · 广东（占位）</b><p>线下活动地址待更新</p></article></div><div className="wechat-panel"><div className="qr-placeholder"><div className="qr-grid"/></div><div><b>微信咨询</b><p>替换为企业微信或课程顾问二维码。</p></div></div></div><div><SectionHeading eyebrow="LEAVE A MESSAGE" title="提交咨询"/><ContactForm/></div></div></section></>;
}

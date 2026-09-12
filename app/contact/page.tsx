import { ContactForm } from "@/components/contact-form";
import { PageHero, SectionHeading } from "@/components/ui";
import Image from "next/image";

export const metadata = { title: "联系我们", description: "联系星火财商，咨询课程、企业内训、家庭财商学习与内容合作。" };

export default function ContactPage() {
  return <><PageHero eyebrow="CONTACT" title="欢迎与星火财商建立联系" desc="课程咨询、活动报名、品牌合作与家庭财商学习需求，可通过电话、微信或在线表单与我们联系。"/><section className="section"><div className="container contact-grid contact-page-grid"><div><SectionHeading eyebrow="CONTACT DETAILS" title="联系方式"/><div className="contact-methods"><article className="phone-contact"><span>电话咨询</span><a href="tel:15322014972">153 2201 4972</a><p>如需了解课程与活动安排，欢迎来电咨询。</p></article><article className="wechat-contact"><div><span>微信咨询</span><b>扫码添加微信</b><p>添加时可备注“课程咨询”，方便我们及时了解您的需求。</p></div><Image src="/images/contact/wechat-qr.jpg" alt="星火财商微信咨询二维码" width={220} height={220} priority /></article></div></div><div><SectionHeading eyebrow="LEAVE A MESSAGE" title="提交咨询"/><ContactForm/></div></div></section></>;
}

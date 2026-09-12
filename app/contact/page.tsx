import { ContactForm } from "@/components/contact-form";
import { PageHero, SectionHeading } from "@/components/ui";

export const metadata = { title: "联系我们", description: "联系星火财商，咨询课程、企业内训、家庭财商学习与内容合作。" };

export default function ContactPage() {
  return <><PageHero eyebrow="CONTACT" title="欢迎与星火财商建立联系" desc="课程咨询、活动报名、品牌合作与家庭财商学习需求，均可通过在线表单提交。"/><section className="section"><div className="container contact-grid contact-page-grid"><div><SectionHeading eyebrow="COURSE INFORMATION" title="咨询说明"/><div className="contact-cards"><article><span>招生状态</span><b>课程开放咨询</b><p>成人与少儿财商课程均可提交学习需求。</p></article><article><span>课程安排</span><b>以当期沟通为准</b><p>时间、地点和费用暂不在官网公开。</p></article><article><span>联系方式</span><b>正在完善</b><p>联系电话与微信二维码确认后将在此更新。</p></article></div></div><div><SectionHeading eyebrow="LEAVE A MESSAGE" title="提交咨询"/><ContactForm/></div></div></section></>;
}

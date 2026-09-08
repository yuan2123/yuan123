"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";

const interestOptions = [
  "正确财富观建立",
  "家庭现金流管理",
  "家庭资产配置",
  "风险管理",
  "保险认知",
  "投资思维",
  "企业财税",
  "财富传承",
];

const concernOptions = [
  "收入不错，但总是存不下钱",
  "不清楚家庭资产应该如何配置",
  "担心家庭风险保障不足",
  "对保险和金融工具缺乏系统认知",
  "有投资需求，但缺少判断框架",
  "企业财务与家庭财务混在一起",
  "希望规划养老与财富传承",
  "希望系统提升财商认知",
];

type FormStatus = "idle" | "loading" | "success" | "error";

export function RegistrationForm() {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [feedback, setFeedback] = useState("");

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");
    setFeedback("");

    const form = event.currentTarget;
    const formData = new FormData(form);
    const interests = formData.getAll("interests").map(String);

    if (interests.length === 0) {
      setStatus("error");
      setFeedback("请至少选择一个您关注的财商方向");
      return;
    }

    const occupation = String(formData.get("occupation") ?? "");
    const primaryConcern = String(formData.get("primaryConcern") ?? "");
    const contactTime = String(formData.get("contactTime") ?? "");
    const expectation = String(formData.get("expectation") ?? "").trim();
    const remark = [
      `身份：${occupation}`,
      `主要问题：${primaryConcern}`,
      `方便联系：${contactTime}`,
      expectation ? `课程期待：${expectation}` : "",
    ]
      .filter(Boolean)
      .join("\n")
      .slice(0, 500);

    try {
      const response = await fetch("/api/registrations", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.get("name"),
          phone: formData.get("phone"),
          age: Number(formData.get("age")),
          gender: formData.get("gender"),
          attendedBefore: formData.get("attendedBefore") === "是",
          consent: formData.get("consent") === "on",
          source: `财商基础课｜${interests.join("、")}`.slice(0, 100),
          remark,
        }),
      });

      const result = (await response.json()) as { message?: string; error?: string };

      if (!response.ok) {
        setStatus("error");
        setFeedback(result.error ?? "报名提交失败，请稍后重试");
        return;
      }

      setStatus("success");
      setFeedback(result.message ?? "报名成功，我们会尽快与您联系。");
      form.reset();
      window.scrollTo({ top: 0, behavior: "smooth" });
    } catch {
      setStatus("error");
      setFeedback("网络异常，请检查连接后重试");
    }
  }

  if (status === "success") {
    return (
      <section className="register-success-card" aria-live="polite">
        <div className="register-success-icon" aria-hidden="true">✓</div>
        <span className="register-kicker">SUBMITTED</span>
        <h2>报名提交成功</h2>
        <p>{feedback}</p>
        <p className="register-success-note">课程顾问将在 1—2 个工作日内与您联系，请留意电话或微信消息。</p>
        <div className="register-success-actions">
          <Link className="button" href="/">返回星火财商官网</Link>
          <button className="button button-secondary" type="button" onClick={() => setStatus("idle")}>再提交一份</button>
        </div>
        <div className="register-success-slogan">创造富而喜悦的人生</div>
      </section>
    );
  }

  return (
    <form className="registration-app-form" onSubmit={submit}>
      <section className="register-form-section">
        <div className="register-section-heading"><span>01</span><div><h2>基本信息</h2><p>请填写真实信息，方便课程顾问与您联系。</p></div></div>
        <div className="register-field-grid">
          <label className="register-field">
            <span>您的姓名 <b>*</b></span>
            <input name="name" autoComplete="name" placeholder="请输入真实姓名" minLength={2} required disabled={status === "loading"} />
          </label>
          <label className="register-field">
            <span>联系手机号 <b>*</b></span>
            <input name="phone" type="tel" inputMode="numeric" autoComplete="tel" pattern="1[3-9][0-9]{9}" maxLength={11} placeholder="请输入11位手机号" required disabled={status === "loading"} />
          </label>
          <label className="register-field">
            <span>您的年龄 <b>*</b></span>
            <input name="age" type="number" inputMode="numeric" min={12} max={100} placeholder="请输入实际年龄" required disabled={status === "loading"} />
          </label>
          <label className="register-field">
            <span>您的性别 <b>*</b></span>
            <select name="gender" defaultValue="" required disabled={status === "loading"}>
              <option value="" disabled>请选择</option>
              <option value="男">男</option>
              <option value="女">女</option>
              <option value="其他">其他</option>
            </select>
          </label>
        </div>
      </section>

      <section className="register-form-section">
        <div className="register-section-heading"><span>02</span><div><h2>学习背景</h2><p>帮助我们更准确地了解您的学习阶段。</p></div></div>
        <fieldset className="register-choice-group">
          <legend>您之前是否参加过星火财商课程？</legend>
          <div className="register-choice-grid two-columns">
            <label><input type="radio" name="attendedBefore" value="否" defaultChecked /><span>从未参加过</span></label>
            <label><input type="radio" name="attendedBefore" value="是" /><span>参加过体验课或正式课程</span></label>
          </div>
        </fieldset>

        <label className="register-field register-field-full">
          <span>您目前的身份更接近哪一种？ <b>*</b></span>
          <select name="occupation" defaultValue="" required disabled={status === "loading"}>
            <option value="" disabled>请选择您的身份</option>
            <option value="职场人士">职场人士</option>
            <option value="企业经营者／创业者">企业经营者／创业者</option>
            <option value="保险／金融从业者">保险／金融从业者</option>
            <option value="全职家庭管理者">全职家庭管理者</option>
            <option value="自由职业者">自由职业者</option>
            <option value="其他">其他</option>
          </select>
        </label>
      </section>

      <section className="register-form-section">
        <div className="register-section-heading"><span>03</span><div><h2>财商学习需求</h2><p>可多选，我们会据此安排更适合的沟通内容。</p></div></div>
        <fieldset className="register-choice-group">
          <legend>您最关注哪些财商方向？ <b>*</b></legend>
          <div className="register-choice-grid interests-grid">
            {interestOptions.map((interest) => (
              <label key={interest}>
                <input type="checkbox" name="interests" value={interest} disabled={status === "loading"} />
                <span>{interest}</span>
              </label>
            ))}
          </div>
        </fieldset>

        <label className="register-field register-field-full">
          <span>您当前最希望解决的问题是？ <b>*</b></span>
          <select name="primaryConcern" defaultValue="" required disabled={status === "loading"}>
            <option value="" disabled>请选择最符合您现状的一项</option>
            {concernOptions.map((concern) => <option key={concern} value={concern}>{concern}</option>)}
          </select>
        </label>

        <label className="register-field register-field-full">
          <span>您对本次课程还有哪些期待？</span>
          <textarea name="expectation" rows={4} maxLength={260} placeholder="请简单描述您最希望通过课程获得的帮助（选填）" disabled={status === "loading"} />
        </label>
      </section>

      <section className="register-form-section">
        <div className="register-section-heading"><span>04</span><div><h2>联系安排</h2><p>选择更方便的沟通方式，减少对您的打扰。</p></div></div>
        <fieldset className="register-choice-group">
          <legend>您方便接听课程咨询的时间 <b>*</b></legend>
          <div className="register-choice-grid two-columns">
            {[
              "上午 9:00—12:00",
              "下午 14:00—18:00",
              "晚上 18:00—21:00",
              "微信联系更方便",
            ].map((time, index) => (
              <label key={time}>
                <input type="radio" name="contactTime" value={time} required={index === 0} />
                <span>{time}</span>
              </label>
            ))}
          </div>
        </fieldset>

        <label className="register-consent">
          <input name="consent" type="checkbox" required disabled={status === "loading"} />
          <span>我已阅读并同意隐私说明。所填信息仅用于星火财商课程联系、学习需求沟通与课程服务安排，不会在网站公开展示。</span>
        </label>
      </section>

      {feedback && <p className="register-feedback-error" role="alert">{feedback}</p>}

      <div className="register-submit-bar">
        <div><small>预计填写时间</small><strong>约 2 分钟</strong></div>
        <button className="register-submit-button" type="submit" disabled={status === "loading"}>
          {status === "loading" ? "提交中…" : "确认提交报名"}
        </button>
      </div>
    </form>
  );
}

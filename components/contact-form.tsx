"use client";

import { FormEvent, useState } from "react";

type FormStatus = "idle" | "loading" | "success" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [feedback, setFeedback] = useState("");

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");
    setFeedback("");

    const form = event.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.get("name"),
          phone: formData.get("phone"),
          interest: formData.get("interest"),
          message: formData.get("message"),
        }),
      });

      const result = (await response.json()) as { message?: string; error?: string };

      if (!response.ok) {
        setStatus("error");
        setFeedback(result.error ?? "提交失败，请稍后重试");
        return;
      }

      setStatus("success");
      setFeedback(result.message ?? "咨询已提交，我们会尽快与您联系。");
      form.reset();
    } catch {
      setStatus("error");
      setFeedback("网络异常，请检查连接后重试");
    }
  }

  return (
    <form className="contact-form" onSubmit={submit}>
      <div className="field-row">
        <label>
          姓名
          <input name="name" placeholder="请输入您的姓名" required disabled={status === "loading"} />
        </label>
        <label>
          联系方式
          <input name="phone" placeholder="手机或微信" required disabled={status === "loading"} />
        </label>
      </div>
      <label>
        您关注的方向
        <select name="interest" defaultValue="" disabled={status === "loading"}>
          <option value="" disabled>
            请选择
          </option>
          <option>家庭资产配置</option>
          <option>现金流管理</option>
          <option>风险与保障</option>
          <option>企业主财富规划</option>
          <option>财富传承</option>
        </select>
      </label>
      <label>
        留言
        <textarea
          name="message"
          placeholder="请简单描述您的学习需求"
          rows={4}
          disabled={status === "loading"}
        />
      </label>
      <button className="button" type="submit" disabled={status === "loading"}>
        {status === "loading" ? "提交中..." : "提交咨询"}
      </button>
      {feedback && (
        <p
          className={status === "error" ? "form-error" : "form-success"}
          role="status"
        >
          {feedback}
        </p>
      )}
    </form>
  );
}

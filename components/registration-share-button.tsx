"use client";

import { useState } from "react";

export function RegistrationShareButton() {
  const [copied, setCopied] = useState(false);

  async function share() {
    const url = window.location.href.split("?")[0];
    const shareData = {
      title: "星火财商｜课程咨询登记",
      text: "2分钟填写，开启你的财富认知升级之旅。",
      url,
    };

    try {
      if (navigator.share) {
        await navigator.share(shareData);
        return;
      }

      await navigator.clipboard.writeText(url);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2200);
    } catch (error) {
      if ((error as Error).name !== "AbortError") {
        try {
          await navigator.clipboard.writeText(url);
          setCopied(true);
          window.setTimeout(() => setCopied(false), 2200);
        } catch {
          setCopied(false);
        }
      }
    }
  }

  return (
    <button className="register-share-button" type="button" onClick={share}>
      <span aria-hidden="true">↗</span>
      {copied ? "链接已复制" : "分享报名表"}
    </button>
  );
}

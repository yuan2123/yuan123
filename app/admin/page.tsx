"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";

type AdminTab = "registrations" | "contacts";

type RegistrationItem = {
  id: string;
  name: string;
  phone: string;
  age: number;
  gender: string;
  attendedBefore: boolean;
  consent: boolean;
  source: string | null;
  remark: string | null;
  status: string;
  createdAt: string;
  updatedAt: string;
};

type ContactInquiryItem = {
  id: string;
  name: string;
  phone: string;
  interest: string | null;
  message: string | null;
  status: string;
  createdAt: string;
  updatedAt: string;
};

const REGISTRATION_STATUS_LABELS: Record<string, string> = {
  pending: "待处理",
  reviewing: "审核中",
  confirmed: "已确认",
  cancelled: "已取消",
};

const CONTACT_STATUS_LABELS: Record<string, string> = {
  pending: "待联系",
  contacted: "已联系",
  resolved: "已完成",
  invalid: "无效咨询",
};

function formatDate(value: string) {
  return new Date(value).toLocaleString("zh-CN", { hour12: false });
}

function csvEscape(value: string) {
  return `"${value.replace(/"/g, '""')}"`;
}

function rowsToCsv(rows: string[][]) {
  return rows.map((row) => row.map(csvEscape).join(",")).join("\n");
}

function registrationCsv(rows: RegistrationItem[]) {
  const headers = [
    "ID",
    "姓名",
    "手机号",
    "年龄",
    "性别",
    "是否参加过",
    "来源",
    "备注",
    "状态",
    "提交时间",
  ];

  const lines = rows.map((row) => [
    row.id,
    row.name,
    row.phone,
    String(row.age),
    row.gender,
    row.attendedBefore ? "是" : "否",
    row.source ?? "",
    row.remark ?? "",
    REGISTRATION_STATUS_LABELS[row.status] ?? row.status,
    formatDate(row.createdAt),
  ]);

  return rowsToCsv([headers, ...lines]);
}

function contactCsv(rows: ContactInquiryItem[]) {
  const headers = ["ID", "姓名", "联系方式", "关注方向", "留言", "状态", "提交时间"];
  const lines = rows.map((row) => [
    row.id,
    row.name,
    row.phone,
    row.interest ?? "",
    row.message ?? "",
    CONTACT_STATUS_LABELS[row.status] ?? row.status,
    formatDate(row.createdAt),
  ]);

  return rowsToCsv([headers, ...lines]);
}

function downloadCsv(content: string, filename: string) {
  const blob = new Blob([`\uFEFF${content}`], { type: "text/csv;charset=utf-8;" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
}

export default function AdminDashboardPage() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<AdminTab>("registrations");

  const [registrations, setRegistrations] = useState<RegistrationItem[]>([]);
  const [registrationKeyword, setRegistrationKeyword] = useState("");
  const [registrationStatus, setRegistrationStatus] = useState("");
  const [registrationLoading, setRegistrationLoading] = useState(true);

  const [contacts, setContacts] = useState<ContactInquiryItem[]>([]);
  const [contactKeyword, setContactKeyword] = useState("");
  const [contactStatus, setContactStatus] = useState("");
  const [contactLoading, setContactLoading] = useState(false);

  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const registrationQuery = useMemo(() => {
    const params = new URLSearchParams();
    if (registrationKeyword.trim()) params.set("keyword", registrationKeyword.trim());
    if (registrationStatus) params.set("status", registrationStatus);
    return params.toString();
  }, [registrationKeyword, registrationStatus]);

  const contactQuery = useMemo(() => {
    const params = new URLSearchParams();
    if (contactKeyword.trim()) params.set("keyword", contactKeyword.trim());
    if (contactStatus) params.set("status", contactStatus);
    return params.toString();
  }, [contactKeyword, contactStatus]);

  const handleUnauthorized = useCallback(() => {
    router.replace("/admin/login");
    router.refresh();
  }, [router]);

  const loadRegistrations = useCallback(async () => {
    setRegistrationLoading(true);
    setError("");

    try {
      const url = registrationQuery
        ? `/api/registrations?${registrationQuery}`
        : "/api/registrations";
      const response = await fetch(url, { cache: "no-store" });
      const result = (await response.json()) as {
        data?: RegistrationItem[];
        error?: string;
      };

      if (!response.ok) {
        if (response.status === 401) {
          handleUnauthorized();
          return;
        }
        setError(result.error ?? "报名数据加载失败");
        return;
      }

      setRegistrations(result.data ?? []);
    } catch {
      setError("网络异常，请稍后重试");
    } finally {
      setRegistrationLoading(false);
    }
  }, [handleUnauthorized, registrationQuery]);

  const loadContacts = useCallback(async () => {
    setContactLoading(true);
    setError("");

    try {
      const url = contactQuery ? `/api/contact?${contactQuery}` : "/api/contact";
      const response = await fetch(url, { cache: "no-store" });
      const result = (await response.json()) as {
        data?: ContactInquiryItem[];
        error?: string;
      };

      if (!response.ok) {
        if (response.status === 401) {
          handleUnauthorized();
          return;
        }
        setError(result.error ?? "咨询数据加载失败");
        return;
      }

      setContacts(result.data ?? []);
    } catch {
      setError("网络异常，请稍后重试");
    } finally {
      setContactLoading(false);
    }
  }, [contactQuery, handleUnauthorized]);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      if (activeTab === "registrations") {
        void loadRegistrations();
      } else {
        void loadContacts();
      }
    }, 180);

    return () => window.clearTimeout(timer);
  }, [activeTab, loadContacts, loadRegistrations]);

  function switchTab(tab: AdminTab) {
    setActiveTab(tab);
    setMessage("");
    setError("");
  }

  async function updateRegistrationStatus(id: string, nextStatus: string) {
    setMessage("");
    setError("");

    try {
      const response = await fetch(`/api/registrations/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status: nextStatus }),
      });
      const result = (await response.json()) as { error?: string; message?: string };

      if (!response.ok) {
        if (response.status === 401) {
          handleUnauthorized();
          return;
        }
        setError(result.error ?? "报名状态更新失败");
        return;
      }

      setMessage(result.message ?? "报名状态已更新");
      await loadRegistrations();
    } catch {
      setError("网络异常，请稍后重试");
    }
  }

  async function updateContactStatus(id: string, nextStatus: string) {
    setMessage("");
    setError("");

    try {
      const response = await fetch(`/api/contact/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status: nextStatus }),
      });
      const result = (await response.json()) as { error?: string; message?: string };

      if (!response.ok) {
        if (response.status === 401) {
          handleUnauthorized();
          return;
        }
        setError(result.error ?? "咨询状态更新失败");
        return;
      }

      setMessage(result.message ?? "咨询状态已更新");
      await loadContacts();
    } catch {
      setError("网络异常，请稍后重试");
    }
  }

  async function removeRegistration(id: string) {
    if (!window.confirm("确认删除这条课程报名记录吗？删除后无法恢复。")) return;

    setMessage("");
    setError("");

    try {
      const response = await fetch(`/api/registrations/${id}`, { method: "DELETE" });
      const result = (await response.json()) as { error?: string; message?: string };

      if (!response.ok) {
        if (response.status === 401) {
          handleUnauthorized();
          return;
        }
        setError(result.error ?? "删除失败");
        return;
      }

      setMessage(result.message ?? "报名记录已删除");
      await loadRegistrations();
    } catch {
      setError("网络异常，请稍后重试");
    }
  }

  async function removeContact(id: string) {
    if (!window.confirm("确认删除这条咨询留言吗？删除后无法恢复。")) return;

    setMessage("");
    setError("");

    try {
      const response = await fetch(`/api/contact/${id}`, { method: "DELETE" });
      const result = (await response.json()) as { error?: string; message?: string };

      if (!response.ok) {
        if (response.status === 401) {
          handleUnauthorized();
          return;
        }
        setError(result.error ?? "删除失败");
        return;
      }

      setMessage(result.message ?? "咨询记录已删除");
      await loadContacts();
    } catch {
      setError("网络异常，请稍后重试");
    }
  }

  async function handleLogout() {
    await fetch("/api/admin/logout", { method: "POST" });
    router.replace("/admin/login");
    router.refresh();
  }

  function exportRegistrations() {
    if (!registrations.length) {
      setError("当前没有可导出的课程报名数据");
      return;
    }

    downloadCsv(
      registrationCsv(registrations),
      `registrations-${new Date().toISOString().slice(0, 10)}.csv`,
    );
    setMessage("课程报名 CSV 导出成功");
  }

  function exportContacts() {
    if (!contacts.length) {
      setError("当前没有可导出的咨询留言数据");
      return;
    }

    downloadCsv(
      contactCsv(contacts),
      `contact-inquiries-${new Date().toISOString().slice(0, 10)}.csv`,
    );
    setMessage("咨询留言 CSV 导出成功");
  }

  const isRegistrationTab = activeTab === "registrations";

  return (
    <div className="admin-dashboard">
      <header className="admin-dashboard-header">
        <div>
          <span className="admin-login-eyebrow">ADMIN CONSOLE</span>
          <h1>学员与咨询管理</h1>
          <p>统一查看课程报名和官网咨询，跟进状态并导出业务数据。</p>
        </div>
        <button className="button button-secondary" type="button" onClick={handleLogout}>
          退出登录
        </button>
      </header>

      <div className="admin-tabs" role="tablist" aria-label="后台业务模块">
        <button
          className={`admin-tab${isRegistrationTab ? " active" : ""}`}
          type="button"
          role="tab"
          aria-selected={isRegistrationTab}
          onClick={() => switchTab("registrations")}
        >
          <span>课程报名</span>
          <small>{registrations.length} 条</small>
        </button>
        <button
          className={`admin-tab${!isRegistrationTab ? " active" : ""}`}
          type="button"
          role="tab"
          aria-selected={!isRegistrationTab}
          onClick={() => switchTab("contacts")}
        >
          <span>咨询留言</span>
          <small>{contacts.length} 条</small>
        </button>
      </div>

      {isRegistrationTab ? (
        <section className="admin-toolbar" aria-label="课程报名筛选">
          <label>
            搜索姓名/手机号
            <input
              value={registrationKeyword}
              onChange={(event) => setRegistrationKeyword(event.target.value)}
              placeholder="输入姓名或手机号"
            />
          </label>
          <label>
            报名状态
            <select
              value={registrationStatus}
              onChange={(event) => setRegistrationStatus(event.target.value)}
            >
              <option value="">全部状态</option>
              <option value="pending">待处理</option>
              <option value="reviewing">审核中</option>
              <option value="confirmed">已确认</option>
              <option value="cancelled">已取消</option>
            </select>
          </label>
          <button className="button" type="button" onClick={() => void loadRegistrations()}>
            刷新列表
          </button>
          <button className="button button-secondary" type="button" onClick={exportRegistrations}>
            导出 CSV
          </button>
        </section>
      ) : (
        <section className="admin-toolbar" aria-label="咨询留言筛选">
          <label>
            搜索咨询内容
            <input
              value={contactKeyword}
              onChange={(event) => setContactKeyword(event.target.value)}
              placeholder="姓名、联系方式、方向或留言"
            />
          </label>
          <label>
            跟进状态
            <select value={contactStatus} onChange={(event) => setContactStatus(event.target.value)}>
              <option value="">全部状态</option>
              <option value="pending">待联系</option>
              <option value="contacted">已联系</option>
              <option value="resolved">已完成</option>
              <option value="invalid">无效咨询</option>
            </select>
          </label>
          <button className="button" type="button" onClick={() => void loadContacts()}>
            刷新列表
          </button>
          <button className="button button-secondary" type="button" onClick={exportContacts}>
            导出 CSV
          </button>
        </section>
      )}

      {message && <p className="form-success admin-message">{message}</p>}
      {error && <p className="form-error admin-message">{error}</p>}

      <div className="admin-table-wrap">
        {isRegistrationTab ? (
          registrationLoading ? (
            <p className="admin-empty">加载中...</p>
          ) : registrations.length === 0 ? (
            <p className="admin-empty">暂无课程报名记录</p>
          ) : (
            <table className="admin-table">
              <thead>
                <tr>
                  <th>姓名</th>
                  <th>手机号</th>
                  <th>年龄</th>
                  <th>性别</th>
                  <th>参加过</th>
                  <th>来源</th>
                  <th>备注</th>
                  <th>状态</th>
                  <th>提交时间</th>
                  <th>操作</th>
                </tr>
              </thead>
              <tbody>
                {registrations.map((item) => (
                  <tr key={item.id}>
                    <td>{item.name}</td>
                    <td>{item.phone}</td>
                    <td>{item.age}</td>
                    <td>{item.gender}</td>
                    <td>{item.attendedBefore ? "是" : "否"}</td>
                    <td>{item.source ?? "-"}</td>
                    <td className="admin-remark">{item.remark ?? "-"}</td>
                    <td>
                      <select
                        value={item.status}
                        aria-label={`修改 ${item.name} 的报名状态`}
                        onChange={(event) =>
                          void updateRegistrationStatus(item.id, event.target.value)
                        }
                      >
                        <option value="pending">待处理</option>
                        <option value="reviewing">审核中</option>
                        <option value="confirmed">已确认</option>
                        <option value="cancelled">已取消</option>
                      </select>
                    </td>
                    <td>{formatDate(item.createdAt)}</td>
                    <td>
                      <button
                        className="admin-link-button"
                        type="button"
                        onClick={() => void removeRegistration(item.id)}
                      >
                        删除
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )
        ) : contactLoading ? (
          <p className="admin-empty">加载中...</p>
        ) : contacts.length === 0 ? (
          <p className="admin-empty">暂无咨询留言</p>
        ) : (
          <table className="admin-table admin-contact-table">
            <thead>
              <tr>
                <th>姓名</th>
                <th>联系方式</th>
                <th>关注方向</th>
                <th>留言</th>
                <th>跟进状态</th>
                <th>提交时间</th>
                <th>操作</th>
              </tr>
            </thead>
            <tbody>
              {contacts.map((item) => (
                <tr key={item.id}>
                  <td>{item.name}</td>
                  <td>{item.phone}</td>
                  <td className="admin-contact-interest">{item.interest ?? "-"}</td>
                  <td className="admin-contact-message-cell">{item.message ?? "-"}</td>
                  <td>
                    <select
                      value={item.status}
                      aria-label={`修改 ${item.name} 的咨询状态`}
                      onChange={(event) => void updateContactStatus(item.id, event.target.value)}
                    >
                      <option value="pending">待联系</option>
                      <option value="contacted">已联系</option>
                      <option value="resolved">已完成</option>
                      <option value="invalid">无效咨询</option>
                    </select>
                  </td>
                  <td>{formatDate(item.createdAt)}</td>
                  <td>
                    <button
                      className="admin-link-button"
                      type="button"
                      onClick={() => void removeContact(item.id)}
                    >
                      删除
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}

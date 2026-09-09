import { Suspense } from "react";
import AdminLoginForm from "@/components/admin-login-form";

export const metadata = {
  title: "后台登录",
  robots: { index: false, follow: false },
};

export default function AdminLoginPage() {
  return (
    <Suspense fallback={<div className="admin-login-page">加载中...</div>}>
      <AdminLoginForm />
    </Suspense>
  );
}

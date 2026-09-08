import { NextRequest } from "next/server";
import {
  adminSessionCookieName,
  adminSessionMaxAge,
  createSessionToken,
  verifyAdminCredentials,
} from "@/lib/auth";
import { corsJson } from "@/lib/cors";

export async function POST(request: NextRequest) {
  try {
    const body = (await request.json()) as { username?: string; password?: string };
    const username = body.username?.trim() ?? "";
    const password = body.password ?? "";

    if (!verifyAdminCredentials(username, password)) {
      return corsJson(request, { error: "用户名或密码错误" }, { status: 401 });
    }

    const token = createSessionToken(username);
    const response = corsJson(request, { success: true, message: "登录成功" });

    response.cookies.set({
      name: adminSessionCookieName,
      value: token,
      httpOnly: true,
      sameSite: "lax",
      secure: process.env.NODE_ENV === "production",
      path: "/",
      maxAge: adminSessionMaxAge,
    });

    return response;
  } catch (error) {
    console.error("管理员登录失败:", error);
    return corsJson(request, { error: "登录失败，请稍后重试" }, { status: 500 });
  }
}

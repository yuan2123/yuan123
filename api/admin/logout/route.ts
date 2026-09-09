import { NextRequest } from "next/server";
import { adminSessionCookieName } from "@/lib/auth";
import { corsJson } from "@/lib/cors";

export async function POST(request: NextRequest) {
  const response = corsJson(request, { success: true, message: "已退出登录" });
  response.cookies.set({
    name: adminSessionCookieName,
    value: "",
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: 0,
  });
  return response;
}

import { NextRequest } from "next/server";
import { isAdminAuthorized } from "@/lib/auth";
import { corsJson } from "@/lib/cors";
import { prisma } from "@/lib/prisma";
import { isValidStatus } from "@/lib/registration";

type RouteContext = {
  params: Promise<{ id: string }>;
};

export async function OPTIONS(request: NextRequest) {
  const { corsOptions } = await import("@/lib/cors");
  return corsOptions(request);
}

export async function GET(request: NextRequest, context: RouteContext) {
  if (!isAdminAuthorized(request)) {
    return corsJson(request, { error: "未授权访问" }, { status: 401 });
  }

  try {
    const { id } = await context.params;
    const registration = await prisma.registration.findUnique({ where: { id } });

    if (!registration) {
      return corsJson(request, { error: "报名记录不存在" }, { status: 404 });
    }

    return corsJson(request, { data: registration });
  } catch (error) {
    console.error("查询报名详情失败:", error);
    return corsJson(request, { error: "查询失败，请稍后重试" }, { status: 500 });
  }
}

export async function PATCH(request: NextRequest, context: RouteContext) {
  if (!isAdminAuthorized(request)) {
    return corsJson(request, { error: "未授权访问" }, { status: 401 });
  }

  try {
    const { id } = await context.params;
    const body = (await request.json()) as { status?: string };
    const status = body.status?.trim();

    if (!status || !isValidStatus(status)) {
      return corsJson(request, { error: "请提供有效的报名状态" }, { status: 400 });
    }

    const existing = await prisma.registration.findUnique({ where: { id } });
    if (!existing) {
      return corsJson(request, { error: "报名记录不存在" }, { status: 404 });
    }

    const registration = await prisma.registration.update({
      where: { id },
      data: { status },
    });

    return corsJson(request, {
      success: true,
      message: "状态更新成功",
      data: registration,
    });
  } catch (error) {
    console.error("更新报名状态失败:", error);
    return corsJson(request, { error: "更新失败，请稍后重试" }, { status: 500 });
  }
}

export async function DELETE(request: NextRequest, context: RouteContext) {
  if (!isAdminAuthorized(request)) {
    return corsJson(request, { error: "未授权访问" }, { status: 401 });
  }

  try {
    const { id } = await context.params;
    const existing = await prisma.registration.findUnique({ where: { id } });
    if (!existing) {
      return corsJson(request, { error: "报名记录不存在" }, { status: 404 });
    }

    await prisma.registration.delete({ where: { id } });

    return corsJson(request, { success: true, message: "删除成功" });
  } catch (error) {
    console.error("删除报名记录失败:", error);
    return corsJson(request, { error: "删除失败，请稍后重试" }, { status: 500 });
  }
}

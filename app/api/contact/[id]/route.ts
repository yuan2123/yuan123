import { NextRequest } from "next/server";
import { isAdminAuthorized } from "@/lib/auth";
import { isValidContactInquiryStatus } from "@/lib/contact-inquiry";
import { corsJson, corsOptions } from "@/lib/cors";
import { prisma } from "@/lib/prisma";

type RouteContext = {
  params: Promise<{ id: string }>;
};

export async function OPTIONS(request: NextRequest) {
  return corsOptions(request);
}

export async function GET(request: NextRequest, context: RouteContext) {
  if (!isAdminAuthorized(request)) {
    return corsJson(request, { error: "未授权访问" }, { status: 401 });
  }

  try {
    const { id } = await context.params;
    const inquiry = await prisma.contactInquiry.findUnique({ where: { id } });

    if (!inquiry) {
      return corsJson(request, { error: "咨询记录不存在" }, { status: 404 });
    }

    return corsJson(request, { data: inquiry });
  } catch (error) {
    console.error("查询咨询详情失败:", error);
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
    const status = body.status?.trim() ?? "";

    if (!status || !isValidContactInquiryStatus(status)) {
      return corsJson(request, { error: "请提供有效的咨询状态" }, { status: 400 });
    }

    const existing = await prisma.contactInquiry.findUnique({ where: { id } });
    if (!existing) {
      return corsJson(request, { error: "咨询记录不存在" }, { status: 404 });
    }

    const inquiry = await prisma.contactInquiry.update({
      where: { id },
      data: { status },
    });

    return corsJson(request, {
      success: true,
      message: "咨询状态更新成功",
      data: inquiry,
    });
  } catch (error) {
    console.error("更新咨询状态失败:", error);
    return corsJson(request, { error: "更新失败，请稍后重试" }, { status: 500 });
  }
}

export async function DELETE(request: NextRequest, context: RouteContext) {
  if (!isAdminAuthorized(request)) {
    return corsJson(request, { error: "未授权访问" }, { status: 401 });
  }

  try {
    const { id } = await context.params;
    const existing = await prisma.contactInquiry.findUnique({ where: { id } });

    if (!existing) {
      return corsJson(request, { error: "咨询记录不存在" }, { status: 404 });
    }

    await prisma.contactInquiry.delete({ where: { id } });

    return corsJson(request, { success: true, message: "咨询记录已删除" });
  } catch (error) {
    console.error("删除咨询记录失败:", error);
    return corsJson(request, { error: "删除失败，请稍后重试" }, { status: 500 });
  }
}

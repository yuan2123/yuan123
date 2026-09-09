import { NextRequest } from "next/server";
import { isAdminAuthorized } from "@/lib/auth";
import { isValidContactInquiryStatus } from "@/lib/contact-inquiry";
import { corsJson, corsOptions } from "@/lib/cors";
import { prisma } from "@/lib/prisma";

const INTEREST_OPTIONS = [
  "家庭资产配置",
  "现金流管理",
  "风险与保障",
  "企业主财富规划",
  "财富传承",
] as const;

type ContactPayload = {
  name?: string;
  phone?: string;
  interest?: string;
  message?: string;
};

function normalizeText(value: unknown, maxLength: number): string {
  if (typeof value !== "string") return "";
  return value.trim().slice(0, maxLength);
}

export async function OPTIONS(request: NextRequest) {
  return corsOptions(request);
}

export async function POST(request: NextRequest) {
  try {
    const body = (await request.json()) as ContactPayload;
    const name = normalizeText(body.name, 50);
    const phone = normalizeText(body.phone, 30);
    const interest = normalizeText(body.interest, 50);
    const message = normalizeText(body.message, 1000);

    if (!name) {
      return corsJson(request, { error: "请填写姓名" }, { status: 400 });
    }

    if (!phone) {
      return corsJson(request, { error: "请填写联系方式" }, { status: 400 });
    }

    if (
      interest &&
      !INTEREST_OPTIONS.includes(interest as (typeof INTEREST_OPTIONS)[number])
    ) {
      return corsJson(request, { error: "请选择有效的关注方向" }, { status: 400 });
    }

    const inquiry = await prisma.contactInquiry.create({
      data: {
        name,
        phone,
        interest: interest || null,
        message: message || null,
      },
    });

    return corsJson(
      request,
      {
        success: true,
        message: "咨询已提交，我们会尽快与您联系。",
        id: inquiry.id,
      },
      { status: 201 },
    );
  } catch (error) {
    console.error("保存咨询记录失败:", error);
    return corsJson(request, { error: "提交失败，请稍后重试" }, { status: 500 });
  }
}

export async function GET(request: NextRequest) {
  if (!isAdminAuthorized(request)) {
    return corsJson(request, { error: "未授权访问" }, { status: 401 });
  }

  try {
    const { searchParams } = new URL(request.url);
    const keyword = searchParams.get("keyword")?.trim() ?? "";
    const status = searchParams.get("status")?.trim() ?? "";

    if (status && !isValidContactInquiryStatus(status)) {
      return corsJson(request, { error: "无效的咨询状态" }, { status: 400 });
    }

    const where = {
      ...(status ? { status } : {}),
      ...(keyword
        ? {
            OR: [
              { name: { contains: keyword } },
              { phone: { contains: keyword } },
              { interest: { contains: keyword } },
              { message: { contains: keyword } },
            ],
          }
        : {}),
    };

    const inquiries = await prisma.contactInquiry.findMany({
      where,
      orderBy: { createdAt: "desc" },
    });

    return corsJson(request, { data: inquiries, total: inquiries.length });
  } catch (error) {
    console.error("查询咨询列表失败:", error);
    return corsJson(request, { error: "查询失败，请稍后重试" }, { status: 500 });
  }
}

import { NextRequest } from "next/server";
import { isAdminAuthorized } from "@/lib/auth";
import { corsJson } from "@/lib/cors";
import { prisma } from "@/lib/prisma";
import {
  getDuplicateWindowMs,
  isValidStatus,
  validateRegistrationInput,
} from "@/lib/registration";

export async function OPTIONS(request: NextRequest) {
  const { corsOptions } = await import("@/lib/cors");
  return corsOptions(request);
}

export async function POST(request: NextRequest) {
  try {
    const body = (await request.json()) as Record<string, unknown>;
    const parsed = validateRegistrationInput(body);

    if (!parsed.data) {
      return corsJson(request, { error: parsed.error }, { status: 400 });
    }

    const duplicateWindow = getDuplicateWindowMs();
    const recent = await prisma.registration.findFirst({
      where: {
        phone: parsed.data.phone,
        createdAt: {
          gte: new Date(Date.now() - duplicateWindow),
        },
      },
      orderBy: { createdAt: "desc" },
    });

    if (recent) {
      return corsJson(
        request,
        { error: "请勿重复快速提交，请稍后再试" },
        { status: 429 },
      );
    }

    const registration = await prisma.registration.create({
      data: parsed.data,
    });

    return corsJson(
      request,
      {
        success: true,
        message: "报名提交成功，我们会尽快与您联系。",
        id: registration.id,
      },
      { status: 201 },
    );
  } catch (error) {
    console.error("保存报名记录失败:", error);
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

    const where: {
      status?: string;
      OR?: Array<{ name: { contains: string } } | { phone: { contains: string } }>;
    } = {};

    if (status && isValidStatus(status)) {
      where.status = status;
    }

    if (keyword) {
      where.OR = [
        { name: { contains: keyword } },
        { phone: { contains: keyword } },
      ];
    }

    const registrations = await prisma.registration.findMany({
      where,
      orderBy: { createdAt: "desc" },
    });

    return corsJson(request, { data: registrations, total: registrations.length });
  } catch (error) {
    console.error("查询报名列表失败:", error);
    return corsJson(request, { error: "查询失败，请稍后重试" }, { status: 500 });
  }
}

import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
  try {
    await prisma.registration.count();
    return NextResponse.json({ ok: true, database: "connected" });
  } catch (error) {
    console.error("健康检查失败:", error);
    return NextResponse.json({ ok: false, database: "disconnected" }, { status: 503 });
  }
}

import { NextRequest, NextResponse } from "next/server";

const DEFAULT_ORIGINS = ["http://localhost:3000", "http://127.0.0.1:3000"];

function getAllowedOrigins(): string[] {
  const raw = process.env.ALLOWED_ORIGINS?.trim();
  if (!raw || raw === "*") return ["*"];
  return raw.split(",").map((item) => item.trim()).filter(Boolean);
}

function resolveOrigin(request: NextRequest): string {
  const allowed = getAllowedOrigins();
  const requestOrigin = request.headers.get("origin");

  if (allowed.includes("*")) {
    return requestOrigin ?? "*";
  }

  if (requestOrigin && allowed.includes(requestOrigin)) {
    return requestOrigin;
  }

  return allowed[0] ?? DEFAULT_ORIGINS[0];
}

export function withCors(request: NextRequest, response: NextResponse): NextResponse {
  const origin = resolveOrigin(request);
  response.headers.set("Access-Control-Allow-Origin", origin);
  response.headers.set("Access-Control-Allow-Methods", "GET, POST, PATCH, DELETE, OPTIONS");
  response.headers.set("Access-Control-Allow-Headers", "Content-Type, Authorization, X-Admin-Token");
  response.headers.set("Access-Control-Max-Age", "86400");
  response.headers.set("Vary", "Origin");
  return response;
}

export function corsJson(
  request: NextRequest,
  body: unknown,
  init?: ResponseInit,
): NextResponse {
  const response = NextResponse.json(body, init);
  return withCors(request, response);
}

export function corsOptions(request: NextRequest): NextResponse {
  return withCors(request, new NextResponse(null, { status: 204 }));
}

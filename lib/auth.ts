import { createHmac, timingSafeEqual } from "crypto";
import { cookies } from "next/headers";
import { NextRequest } from "next/server";

const SESSION_COOKIE = "admin_session";
const SESSION_TTL_MS = 8 * 60 * 60 * 1000;

type SessionPayload = {
  username: string;
  exp: number;
};

function getSessionSecret(): string | null {
  const configured = process.env.ADMIN_SESSION_SECRET?.trim();
  if (configured) return configured;
  return process.env.NODE_ENV === "production" ? null : "spark-wealth-dev-secret";
}

function signPayload(payload: string): string | null {
  const secret = getSessionSecret();
  if (!secret) return null;
  return createHmac("sha256", secret).update(payload).digest("hex");
}

export function createSessionToken(username: string): string {
  const payload: SessionPayload = {
    username,
    exp: Date.now() + SESSION_TTL_MS,
  };
  const encoded = Buffer.from(JSON.stringify(payload)).toString("base64url");
  const signature = signPayload(encoded);
  if (!signature) {
    throw new Error("ADMIN_SESSION_SECRET 未配置");
  }
  return `${encoded}.${signature}`;
}

export function verifySessionToken(token?: string | null): SessionPayload | null {
  if (!token) return null;

  const [encoded, signature] = token.split(".");
  if (!encoded || !signature) return null;

  const expected = signPayload(encoded);
  if (!expected) return null;
  const actualBuffer = Buffer.from(signature);
  const expectedBuffer = Buffer.from(expected);

  if (actualBuffer.length !== expectedBuffer.length) return null;
  if (!timingSafeEqual(actualBuffer, expectedBuffer)) return null;

  try {
    const payload = JSON.parse(
      Buffer.from(encoded, "base64url").toString("utf8"),
    ) as SessionPayload;

    if (!payload.username || !payload.exp || payload.exp < Date.now()) {
      return null;
    }

    return payload;
  } catch {
    return null;
  }
}

export function verifyAdminCredentials(username: string, password: string): boolean {
  const expectedUser = process.env.ADMIN_USERNAME?.trim();
  const expectedPassword = process.env.ADMIN_PASSWORD;
  if (!expectedUser || !expectedPassword) return false;
  return username === expectedUser && password === expectedPassword;
}

export async function getAdminSessionFromCookies(): Promise<SessionPayload | null> {
  const cookieStore = await cookies();
  const token = cookieStore.get(SESSION_COOKIE)?.value;
  return verifySessionToken(token);
}

export function getAdminSessionFromRequest(request: NextRequest): SessionPayload | null {
  const cookieToken = request.cookies.get(SESSION_COOKIE)?.value;
  const headerToken = request.headers.get("x-admin-token");
  return verifySessionToken(cookieToken ?? headerToken);
}

export function isAdminAuthorized(request: NextRequest): boolean {
  return getAdminSessionFromRequest(request) !== null;
}

export const adminSessionCookieName = SESSION_COOKIE;
export const adminSessionMaxAge = SESSION_TTL_MS / 1000;

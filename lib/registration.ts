export const REGISTRATION_STATUSES = ["pending", "reviewing", "confirmed", "cancelled"] as const;
export const GENDER_OPTIONS = ["男", "女", "其他"] as const;

export type RegistrationStatus = (typeof REGISTRATION_STATUSES)[number];
export type GenderOption = (typeof GENDER_OPTIONS)[number];

export type RegistrationInput = {
  name?: unknown;
  phone?: unknown;
  age?: unknown;
  gender?: unknown;
  attendedBefore?: unknown;
  consent?: unknown;
  source?: unknown;
  remark?: unknown;
};

export type ParsedRegistration = {
  name: string;
  phone: string;
  age: number;
  gender: GenderOption;
  attendedBefore: boolean;
  consent: boolean;
  source: string | null;
  remark: string | null;
};

const PHONE_PATTERN = /^1[3-9]\d{9}$/;
const DUPLICATE_WINDOW_MS = Number(process.env.REGISTRATION_DUPLICATE_WINDOW_MS ?? 60_000);

export function normalizeText(value: unknown, maxLength: number): string {
  if (typeof value !== "string") return "";
  return value.trim().slice(0, maxLength);
}

export function parseBoolean(value: unknown): boolean {
  if (typeof value === "boolean") return value;
  if (typeof value === "string") {
    const normalized = value.trim().toLowerCase();
    return normalized === "true" || normalized === "1" || normalized === "yes";
  }
  if (typeof value === "number") return value === 1;
  return false;
}

export function validatePhone(phone: string): boolean {
  return PHONE_PATTERN.test(phone);
}

export function validateRegistrationInput(input: RegistrationInput): {
  data?: ParsedRegistration;
  error?: string;
} {
  const name = normalizeText(input.name, 50);
  const phone = normalizeText(input.phone, 11);
  const gender = normalizeText(input.gender, 10);
  const source = normalizeText(input.source, 100);
  const remark = normalizeText(input.remark, 500);
  const attendedBefore = parseBoolean(input.attendedBefore);
  const consent = parseBoolean(input.consent);

  if (!name || name.length < 2) {
    return { error: "请填写有效的姓名（至少 2 个字符）" };
  }

  if (!phone) {
    return { error: "请填写手机号" };
  }

  if (!validatePhone(phone)) {
    return { error: "手机号格式不正确，请输入 11 位中国大陆手机号" };
  }

  const ageValue = Number(input.age);
  if (!Number.isInteger(ageValue) || ageValue < 1 || ageValue > 120) {
    return { error: "请填写有效的年龄（1-120）" };
  }

  if (!GENDER_OPTIONS.includes(gender as GenderOption)) {
    return { error: "请选择有效的性别" };
  }

  if (!consent) {
    return { error: "请勾选隐私授权同意" };
  }

  return {
    data: {
      name,
      phone,
      age: ageValue,
      gender: gender as GenderOption,
      attendedBefore,
      consent,
      source: source || null,
      remark: remark || null,
    },
  };
}

export function isValidStatus(status: string): status is RegistrationStatus {
  return REGISTRATION_STATUSES.includes(status as RegistrationStatus);
}

export function getDuplicateWindowMs(): number {
  return Number.isFinite(DUPLICATE_WINDOW_MS) && DUPLICATE_WINDOW_MS > 0
    ? DUPLICATE_WINDOW_MS
    : 60_000;
}

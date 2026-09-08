export const CONTACT_INQUIRY_STATUSES = [
  "pending",
  "contacted",
  "resolved",
  "invalid",
] as const;

export type ContactInquiryStatus = (typeof CONTACT_INQUIRY_STATUSES)[number];

export function isValidContactInquiryStatus(
  status: string,
): status is ContactInquiryStatus {
  return CONTACT_INQUIRY_STATUSES.includes(status as ContactInquiryStatus);
}

export const academyTopics = [
  { id: "knowledge", label: "认知", description: "建立财商基础，看懂家庭财富与金钱选择。" },
  { id: "companionship", label: "陪伴", description: "围绕家庭目标，在沟通与复盘中持续前行。" },
  { id: "growth", label: "成长", description: "通过学习与实践，让判断力随人生一起成长。" },
  { id: "protection", label: "保障", description: "识别风险与责任，建立家庭的安全底盘。" },
  { id: "medical", label: "医疗", description: "关注健康责任、医疗资源与家庭就医准备。" },
] as const;

export type AcademyTopic = typeof academyTopics[number]["id"];

const postTopics: Record<string, AcademyTopic> = {
  "family-asset-allocation": "knowledge",
  "high-income-cash-flow-security": "protection",
  "risk-before-return": "protection",
  "family-goals-before-products": "companionship",
  "needs-and-wants-for-children": "growth",
  "family-emergency-reserve": "protection",
  "inflation-and-compounding": "growth",
  "business-and-family-money-boundary": "knowledge",
  "wealth-legacy-starts-with-consensus": "companionship",
};

export const getPostTopic = (slug: string) => postTopics[slug];
export const topicHref = (id: AcademyTopic) => `/academy?topic=${id}#articles`;

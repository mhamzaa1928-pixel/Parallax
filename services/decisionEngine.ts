import { NormalizedRecord } from "./normalizer";

export type RecommendationPriority =
  | "critical"
  | "high"
  | "medium"
  | "low";

export type RecommendationCategory =
  | "campaign"
  | "keyword"
  | "inventory"
  | "listing"
  | "sales";

export interface AIRecommendation {
  id: string;
  title: string;
  description: string;
  action: string;
  priority: RecommendationPriority;
  confidence: number;
  financialImpact: number;
  category: RecommendationCategory;
  data: NormalizedRecord;
}

export function runDecisionEngine(
  records: NormalizedRecord[]
): AIRecommendation[] {
  const recommendations: AIRecommendation[] = [];

  for (const record of records) {
    // ==========================
    // Pause Campaign
    // ==========================

    if (
      (record.spend ?? 0) > 200 &&
      (record.orders ?? 0) === 0
    ) {
      recommendations.push({
        id: crypto.randomUUID(),
        title: "Pause Campaign",
        description: `${
          record.campaign ?? "Campaign"
        } has spent ${record.spend} with zero orders.`,
        action: "Pause this campaign immediately.",
        priority: "critical",
        confidence: 98,
        financialImpact: record.spend ?? 0,
        category: "campaign",
        data: record,
      });
    }

    // ==========================
    // Increase Budget
    // ==========================

    if (
      (record.acos ?? 100) < 18 &&
      (record.sales ?? 0) > 1000
    ) {
      recommendations.push({
        id: crypto.randomUUID(),
        title: "Increase Budget",
        description: `${
          record.campaign ?? "Campaign"
        } is generating profitable sales.`,
        action: "Increase campaign budget by 20-30%.",
        priority: "high",
        confidence: 95,
        financialImpact: (record.sales ?? 0) * 0.3,
        category: "campaign",
        data: record,
      });
    }

    // ==========================
    // Bleeding Campaign
    // ==========================

    if (
      (record.spend ?? 0) >
      (record.sales ?? 0)
    ) {
      recommendations.push({
        id: crypto.randomUUID(),
        title: "Bleeding Campaign",
        description: `${
          record.campaign ?? "Campaign"
        } is spending more than it earns.`,
        action: "Reduce bids or pause campaign.",
        priority: "critical",
        confidence: 99,
        financialImpact:
          (record.spend ?? 0) -
          (record.sales ?? 0),
        category: "campaign",
        data: record,
      });
    }

    // ==========================
    // Low Inventory
    // ==========================

    if (
      record.availableInventory !== undefined &&
      record.availableInventory < 20
    ) {
      recommendations.push({
        id: crypto.randomUUID(),
        title: "Low Inventory",
        description: `ASIN ${
          record.asin ?? "-"
        } has low inventory.`,
        action: "Create replenishment shipment.",
        priority: "high",
        confidence: 94,
        financialImpact: 0,
        category: "inventory",
        data: record,
      });
    }

    // ==========================
    // Poor Conversion
    // ==========================

    if (
      (record.clicks ?? 0) > 80 &&
      (record.orders ?? 0) < 2
    ) {
      recommendations.push({
        id: crypto.randomUUID(),
        title: "Poor Conversion",
        description: `${
          record.campaign ?? "Campaign"
        } receives many clicks but very few orders.`,
        action: "Improve listing quality or reduce bids.",
        priority: "medium",
        confidence: 91,
        financialImpact: record.spend ?? 0,
        category: "campaign",
        data: record,
      });
    }
  }

  return recommendations.sort(
    (a, b) => {
      if (a.priority === b.priority) {
        return b.confidence - a.confidence;
      }

      const order = {
        critical: 4,
        high: 3,
        medium: 2,
        low: 1,
      };

      return (
        order[b.priority] -
        order[a.priority]
      );
    }
  );
}
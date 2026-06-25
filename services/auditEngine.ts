import {
  AIRecommendation,
  runDecisionEngine,
} from "./decisionEngine";
import { NormalizedRecord } from "./normalizer";

export interface AuditSummary {
  generatedAt: string;
  totalRecords: number;
  totalRecommendations: number;
  critical: number;
  high: number;
  medium: number;
  low: number;
  estimatedMonthlySavings: number;
}

export interface AuditResult {
  summary: AuditSummary;
  recommendations: AIRecommendation[];
}

export function generateAudit(
  records: NormalizedRecord[]
): AuditResult {
  const recommendations = runDecisionEngine(records);

  const summary: AuditSummary = {
    generatedAt: new Date().toISOString(),
    totalRecords: records.length,
    totalRecommendations: recommendations.length,

    critical: recommendations.filter(
      (r) => r.priority === "critical"
    ).length,

    high: recommendations.filter(
      (r) => r.priority === "high"
    ).length,

    medium: recommendations.filter(
      (r) => r.priority === "medium"
    ).length,

    low: recommendations.filter(
      (r) => r.priority === "low"
    ).length,

    estimatedMonthlySavings: recommendations.reduce(
      (sum, recommendation) =>
        sum +
        Math.max(
          recommendation.financialImpact,
          0
        ),
      0
    ),
  };

  return {
    summary,
    recommendations,
  };
}
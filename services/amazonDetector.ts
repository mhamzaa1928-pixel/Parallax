export type AmazonReportType =
  | "business_report"
  | "campaign_report"
  | "search_term_report"
  | "inventory_report"
  | "placement_report"
  | "unknown";

type DetectResult = {
  reportType: AmazonReportType;
  confidence: number;
  matchedColumns: string[];
};

const normalizeColumn = (column: string) =>
  column.toLowerCase().trim().replace(/\s+/g, " ");

const reportSignatures: Record<AmazonReportType, string[]> = {
  business_report: [
    "sessions",
    "units ordered",
    "ordered product sales",
    "total order items",
    "buy box percentage",
  ],
  campaign_report: [
    "campaign name",
    "impressions",
    "clicks",
    "spend",
    "sales",
    "acos",
    "roas",
  ],
  search_term_report: [
    "customer search term",
    "search term",
    "keyword",
    "clicks",
    "spend",
    "sales",
    "orders",
  ],
  inventory_report: [
    "asin",
    "sku",
    "available",
    "inbound",
    "reserved",
    "fulfillable",
  ],
  placement_report: [
    "placement",
    "top of search",
    "rest of search",
    "product pages",
    "campaign name",
    "spend",
  ],
  unknown: [],
};

export function detectAmazonReport(headers: string[]): DetectResult {
  const normalizedHeaders = headers.map(normalizeColumn);

  let bestMatch: DetectResult = {
    reportType: "unknown",
    confidence: 0,
    matchedColumns: [],
  };

  Object.entries(reportSignatures).forEach(([type, signatureColumns]) => {
    if (type === "unknown") return;

    const matchedColumns = signatureColumns.filter((column) =>
      normalizedHeaders.some((header) => header.includes(column)),
    );

    const confidence = Math.round(
      (matchedColumns.length / signatureColumns.length) * 100,
    );

    if (confidence > bestMatch.confidence) {
      bestMatch = {
        reportType: type as AmazonReportType,
        confidence,
        matchedColumns,
      };
    }
  });

  if (bestMatch.confidence < 35) {
    return {
      reportType: "unknown",
      confidence: bestMatch.confidence,
      matchedColumns: bestMatch.matchedColumns,
    };
  }

  return bestMatch;
}
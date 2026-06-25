import { ParsedAmazonFile } from "./csvParser";

export interface NormalizedRecord {
  reportType: string;

  date?: string;

  marketplace?: string;

  campaign?: string;

  adGroup?: string;

  keyword?: string;

  searchTerm?: string;

  asin?: string;

  sku?: string;

  impressions?: number;

  clicks?: number;

  ctr?: number;

  cpc?: number;

  spend?: number;

  orders?: number;

  units?: number;

  sales?: number;

  acos?: number;

  roas?: number;

  conversionRate?: number;

  availableInventory?: number;

  raw: Record<string, unknown>;
}

function numberValue(value: unknown): number {
  if (value === undefined || value === null) return 0;

  return Number(
    String(value)
      .replace(/[$,%]/g, "")
      .replace(/,/g, "")
      .trim()
  );
}

export function normalizeAmazonData(
  parsed: ParsedAmazonFile
): NormalizedRecord[] {
  return parsed.rows.map((row) => ({
    reportType: parsed.reportType,

    date:
      row["Date"] ??
      row["date"],

    marketplace:
      row["Marketplace"],

    campaign:
      row["Campaign Name"],

    adGroup:
      row["Ad Group Name"],

    keyword:
      row["Keyword"],

    searchTerm:
      row["Customer Search Term"] ??
      row["Search Term"],

    asin:
      row["ASIN"],

    sku:
      row["SKU"],

    impressions: numberValue(
      row["Impressions"]
    ),

    clicks: numberValue(
      row["Clicks"]
    ),

    ctr: numberValue(
      row["CTR"]
    ),

    cpc: numberValue(
      row["CPC"]
    ),

    spend: numberValue(
      row["Spend"]
    ),

    orders: numberValue(
      row["Orders"]
    ),

    units: numberValue(
      row["Units Ordered"]
    ),

    sales: numberValue(
      row["Sales"] ??
      row["Ordered Product Sales"]
    ),

    acos: numberValue(
      row["ACOS"]
    ),

    roas: numberValue(
      row["ROAS"]
    ),

    conversionRate: numberValue(
      row["Unit Session Percentage"]
    ),

    availableInventory: numberValue(
      row["Available"]
    ),

    raw: row,
  }));
}
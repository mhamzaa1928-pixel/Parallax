import { parseAmazonCSV } from "./csvParser";
import { normalizeAmazonData } from "./normalizer";
import { generateAudit } from "./auditEngine";

export async function processAmazonReport(file: File) {
  const parsed = await parseAmazonCSV(file);

  const normalized = normalizeAmazonData(parsed);

  const audit = generateAudit(normalized);

  return {
    parsed,
    normalized,
    audit,
  };
}
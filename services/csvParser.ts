import Papa from "papaparse";
import {
  AmazonReportType,
  detectAmazonReport,
} from "./amazonDetector";

export interface ParsedAmazonFile {
  reportType: AmazonReportType;
  confidence: number;
  headers: string[];
  rows: Record<string, string>[];
  totalRows: number;
}

export async function parseAmazonCSV(
  file: File
): Promise<ParsedAmazonFile> {
  return new Promise((resolve, reject) => {
    Papa.parse<Record<string, string>>(file, {
      header: true,
      skipEmptyLines: true,
      transformHeader: (header) => header.trim(),

      complete(results) {
        if (results.errors.length > 0) {
          reject(results.errors[0]);
          return;
        }

        const headers =
          results.meta.fields ?? [];

        const detection =
          detectAmazonReport(headers);

        resolve({
          reportType: detection.reportType,
          confidence: detection.confidence,
          headers,
          rows: results.data,
          totalRows: results.data.length,
        });
      },

      error(error) {
        reject(error);
      },
    });
  });
}
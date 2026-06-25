"use client";

import { useState } from "react";
import { parseAmazonCSV } from "@/services/csvParser";
import { uploadAmazonReport } from "@/services/uploadService";
import { generateAudit } from "@/services/auditEngine";
import { normalizeAmazonData } from "@/services/normalizer";

export interface UploadResult {
  reportType: string;
  confidence: number;
  totalRows: number;
  audit: ReturnType<typeof generateAudit>;
}

export function useUpload() {
  const [uploading, setUploading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [result, setResult] =
    useState<UploadResult | null>(null);

  async function upload(
    file: File,
    clientId: string,
    accountId: string
  ) {
    try {
      setUploading(true);
      setProgress(10);

      const parsed =
        await parseAmazonCSV(file);

      setProgress(35);

      const normalized =
        normalizeAmazonData(parsed);

      setProgress(60);

      const audit =
        generateAudit(normalized);

      setProgress(80);

      await uploadAmazonReport(
        file,
        clientId,
        accountId
      );

      setProgress(100);

      setResult({
        reportType: parsed.reportType,
        confidence: parsed.confidence,
        totalRows: parsed.totalRows,
        audit,
      });

      return true;
    } finally {
      setUploading(false);
    }
  }

  return {
    upload,
    uploading,
    progress,
    result,
  };
}
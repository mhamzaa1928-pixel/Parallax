"use client";

import { useRef, useState } from "react";
import {
  Upload,
  FileSpreadsheet,
  CheckCircle2,
  AlertCircle,
} from "lucide-react";
import { useUpload } from "@/hooks/useUpload";

export default function UploadDropzone() {
  const inputRef = useRef<HTMLInputElement>(null);

  const {
    upload,
    uploading,
    progress,
    result,
  } = useUpload();

  const [dragging, setDragging] = useState(false);
  const [error, setError] = useState("");

  async function handleFile(file: File) {
    setError("");

    if (!file.name.toLowerCase().endsWith(".csv")) {
      setError("Only CSV files are supported.");
      return;
    }

    if (file.size > 50 * 1024 * 1024) {
      setError("Maximum file size is 50MB.");
      return;
    }

    try {
      await upload(
        file,
        "demo-client",
        "demo-account"
      );
    } catch (e) {
      console.error(e);
      setError("Upload failed.");
    }
  }

  return (
    <div className="space-y-6">
      <div
        onDragOver={(e) => {
          e.preventDefault();
          setDragging(true);
        }}
        onDragLeave={() => setDragging(false)}
        onDrop={(e) => {
          e.preventDefault();
          setDragging(false);

          const file =
            e.dataTransfer.files[0];

          if (file) {
            handleFile(file);
          }
        }}
        className={`rounded-[36px] border-2 border-dashed p-14 transition-all

        ${
          dragging
            ? "border-blue-600 bg-blue-50"
            : "border-neutral-300 bg-white"
        }`}
      >
        <div className="flex flex-col items-center">
          <div className="flex h-20 w-20 items-center justify-center rounded-full bg-blue-600 text-white">
            <Upload size={34} />
          </div>

          <h2 className="mt-8 text-3xl font-bold">
            Amazon Upload Center
          </h2>

          <p className="mt-4 max-w-xl text-center text-neutral-500">
            Drag & Drop your Amazon reports
            here or browse your computer.
          </p>

          <button
            onClick={() =>
              inputRef.current?.click()
            }
            className="mt-8 rounded-2xl bg-blue-600 px-8 py-4 font-semibold text-white transition hover:bg-blue-700"
          >
            Browse Files
          </button>

          <input
            ref={inputRef}
            hidden
            type="file"
            accept=".csv"
            onChange={(e) => {
              const file =
                e.target.files?.[0];

              if (file) {
                handleFile(file);
              }
            }}
          />
        </div>
      </div>

      {uploading && (
        <div className="rounded-3xl border bg-white p-6">
          <div className="mb-3 flex justify-between">
            <span className="font-semibold">
              Upload Progress
            </span>

            <span>{progress}%</span>
          </div>

          <div className="h-3 overflow-hidden rounded-full bg-neutral-200">
            <div
              style={{
                width: `${progress}%`,
              }}
              className="h-full rounded-full bg-blue-600 transition-all"
            />
          </div>
        </div>
      )}

      {error && (
        <div className="flex items-center gap-3 rounded-2xl border border-red-200 bg-red-50 p-5 text-red-600">
          <AlertCircle size={20} />

          {error}
        </div>
      )}

      {result && (
        <div className="rounded-3xl border border-green-200 bg-green-50 p-6">
          <div className="flex items-center gap-3">
            <CheckCircle2
              className="text-green-600"
              size={24}
            />

            <h3 className="text-xl font-bold">
              Upload Successful
            </h3>
          </div>

          <div className="mt-6 grid gap-5 md:grid-cols-4">
            <div>
              <p className="text-sm text-neutral-500">
                Report
              </p>

              <p className="font-bold">
                {result.reportType}
              </p>
            </div>

            <div>
              <p className="text-sm text-neutral-500">
                Confidence
              </p>

              <p className="font-bold">
                {result.confidence}%
              </p>
            </div>

            <div>
              <p className="text-sm text-neutral-500">
                Rows
              </p>

              <p className="font-bold">
                {result.totalRows}
              </p>
            </div>

            <div>
              <p className="text-sm text-neutral-500">
                AI Findings
              </p>

              <p className="font-bold">
                {
                  result.audit.summary
                    .totalRecommendations
                }
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
"use client";

import UploadDropzone from "@/components/upload/UploadDropzone";

export default function UploadsPage() {
  return (
    <div className="space-y-8">
      <div>
        <span className="rounded-full bg-blue-100 px-4 py-1 text-sm font-semibold text-blue-700">
          Amazon Intelligence
        </span>

        <h1 className="mt-4 text-5xl font-bold tracking-tight text-neutral-900">
          Upload Center
        </h1>

        <p className="mt-4 max-w-3xl text-lg leading-8 text-neutral-500">
          Upload Amazon Business Reports, Campaign Reports,
          Search Term Reports, Inventory Reports and Brand
          Analytics. Parallax will automatically detect the
          report type, parse the data and generate AI-powered
          recommendations.
        </p>
      </div>

      <UploadDropzone />

      <div className="grid gap-6 xl:grid-cols-3">
        <div className="rounded-[30px] border border-neutral-200 bg-white p-6 shadow-sm">
          <h2 className="text-xl font-bold">
            Supported Reports
          </h2>

          <ul className="mt-5 space-y-3 text-neutral-600">
            <li>• Business Report</li>
            <li>• Campaign Report</li>
            <li>• Search Term Report</li>
            <li>• Placement Report</li>
            <li>• Inventory Report</li>
            <li>• Brand Analytics</li>
          </ul>
        </div>

        <div className="rounded-[30px] border border-neutral-200 bg-white p-6 shadow-sm">
          <h2 className="text-xl font-bold">
            AI Processing
          </h2>

          <ul className="mt-5 space-y-3 text-neutral-600">
            <li>✓ Auto Report Detection</li>
            <li>✓ CSV Validation</li>
            <li>✓ Data Normalization</li>
            <li>✓ AI Audit</li>
            <li>✓ Campaign Analysis</li>
            <li>✓ Recommendations</li>
          </ul>
        </div>

        <div className="rounded-[30px] border border-neutral-200 bg-white p-6 shadow-sm">
          <h2 className="text-xl font-bold">
            Output
          </h2>

          <ul className="mt-5 space-y-3 text-neutral-600">
            <li>📊 Dashboard</li>
            <li>📄 Executive PDF</li>
            <li>📈 Weekly Report</li>
            <li>📉 PPC Report</li>
            <li>📦 Inventory Report</li>
            <li>🤖 AI Insights</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
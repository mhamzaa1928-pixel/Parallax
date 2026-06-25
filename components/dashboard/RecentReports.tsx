import { Download, FileText } from "lucide-react";

const reports = [
  "Weekly Sales Report",
  "Weekly PPC Report",
  "Monthly Business Report",
  "Campaign Intelligence",
];

export default function RecentReports() {
  return (
    <section className="rounded-[30px] border border-neutral-200 bg-white p-6 shadow-sm">
      <h2 className="text-xl font-bold">
        Reports
      </h2>

      <div className="mt-6 space-y-4">
        {reports.map((report) => (
          <button
            key={report}
            className="flex w-full items-center justify-between rounded-2xl border border-neutral-200 p-4 transition hover:border-blue-500"
          >
            <div className="flex items-center gap-4">
              <FileText
                size={20}
                className="text-blue-600"
              />

              <span className="font-semibold">
                {report}
              </span>
            </div>

            <Download
              size={18}
              className="text-neutral-500"
            />
          </button>
        ))}
      </div>
    </section>
  );
}
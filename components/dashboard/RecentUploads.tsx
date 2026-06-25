import { FileSpreadsheet } from "lucide-react";

const uploads = [
  "Business_Report_US.csv",
  "Campaign_Report_US.csv",
  "Search_Term_Report.csv",
  "Inventory_Report.csv",
];

export default function RecentUploads() {
  return (
    <section className="rounded-[30px] border border-neutral-200 bg-white p-6 shadow-sm">
      <h2 className="text-xl font-bold">
        Recent Uploads
      </h2>

      <div className="mt-6 space-y-4">
        {uploads.map((file) => (
          <div
            key={file}
            className="flex items-center justify-between rounded-2xl border border-neutral-200 p-4"
          >
            <div className="flex items-center gap-4">
              <FileSpreadsheet
                className="text-green-600"
                size={22}
              />

              <div>
                <p className="font-semibold">
                  {file}
                </p>

                <p className="text-sm text-neutral-500">
                  Uploaded successfully
                </p>
              </div>
            </div>

            <span className="rounded-full bg-green-50 px-3 py-1 text-xs font-semibold text-green-600">
              Processed
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
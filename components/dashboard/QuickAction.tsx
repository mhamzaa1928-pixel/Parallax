import {
  Bot,
  FileText,
  UploadCloud,
  Zap,
} from "lucide-react";

const actions = [
  {
    title: "Upload Amazon Files",
    icon: UploadCloud,
  },
  {
    title: "Run AI Audit",
    icon: Zap,
  },
  {
    title: "Generate Report",
    icon: FileText,
  },
  {
    title: "Ask AI",
    icon: Bot,
  },
];

export default function QuickActions() {
  return (
    <section className="rounded-[30px] border border-neutral-200 bg-white p-6 shadow-sm">
      <h2 className="text-xl font-bold">
        Quick Actions
      </h2>

      <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {actions.map((action) => {
          const Icon = action.icon;

          return (
            <button
              key={action.title}
              className="group rounded-3xl border border-neutral-200 bg-neutral-50 p-6 text-left transition-all duration-300 hover:-translate-y-1 hover:border-blue-500 hover:bg-white hover:shadow-lg"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-600 text-white">
                <Icon size={24} />
              </div>

              <h3 className="mt-6 text-lg font-bold">
                {action.title}
              </h3>

              <p className="mt-2 text-sm leading-6 text-neutral-500">
                Click to continue
              </p>
            </button>
          );
        })}
      </div>
    </section>
  );
}
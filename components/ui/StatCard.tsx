import { LucideIcon } from "lucide-react";

type StatCardProps = {
  title: string;
  value: string;
  change: string;
  positive?: boolean;
  icon: LucideIcon;
};

export default function StatCard({
  title,
  value,
  change,
  positive = true,
  icon: Icon,
}: StatCardProps) {
  return (
    <div className="rounded-[30px] border border-neutral-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">
      <div className="mb-6 flex items-center justify-between">
        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-neutral-100">
          <Icon size={24} />
        </div>

        <span
          className={`rounded-full px-3 py-1 text-xs font-bold ${
            positive
              ? "bg-green-50 text-green-600"
              : "bg-red-50 text-red-600"
          }`}
        >
          {change}
        </span>
      </div>

      <p className="text-sm text-neutral-500">{title}</p>

      <h2 className="mt-2 text-4xl font-bold tracking-tight">
        {value}
      </h2>
    </div>
  );
}
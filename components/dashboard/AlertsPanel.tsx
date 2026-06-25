import {
  AlertTriangle,
  ArrowUpRight,
  PauseCircle,
} from "lucide-react";

export default function AlertsPanel() {
  return (
    <section className="rounded-[30px] border border-neutral-200 bg-white p-6 shadow-sm">
      <h2 className="text-xl font-bold">
        AI Priority Center
      </h2>

      <div className="mt-6 space-y-5">
        <div className="rounded-3xl border border-red-200 bg-red-50 p-5">
          <div className="flex items-center gap-3 font-bold text-red-600">
            <AlertTriangle size={20} />
            Pause Immediately
          </div>

          <p className="mt-3 text-sm text-neutral-600">
            Campaign "Auto-US-01" has spent
            $640 with zero sales.
          </p>
        </div>

        <div className="rounded-3xl border border-amber-200 bg-amber-50 p-5">
          <div className="flex items-center gap-3 font-bold text-amber-700">
            <PauseCircle size={20} />
            Budget Optimization
          </div>

          <p className="mt-3 text-sm text-neutral-600">
            Reduce spend on 6 bleeding campaigns.
          </p>
        </div>

        <div className="rounded-3xl border border-green-200 bg-green-50 p-5">
          <div className="flex items-center gap-3 font-bold text-green-700">
            <ArrowUpRight size={20} />
            Scale Opportunity
          </div>

          <p className="mt-3 text-sm text-neutral-600">
            Increase budget on 4 profitable campaigns.
          </p>
        </div>
      </div>
    </section>
  );
}
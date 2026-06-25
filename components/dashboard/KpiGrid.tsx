import {
  Activity,
  CircleDollarSign,
  ShieldCheck,
  WalletCards,
} from "lucide-react";
import StatCard from "@/components/ui/StatCard";

export default function KpiGrid() {
  return (
    <section className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
      <StatCard
        title="Total Revenue"
        value="$152,980"
        change="+18.6%"
        icon={CircleDollarSign}
      />

      <StatCard
        title="Net Profit"
        value="$41,850"
        change="+22.3%"
        icon={WalletCards}
      />

      <StatCard
        title="ACOS"
        value="24.35%"
        change="-3.4%"
        positive={false}
        icon={Activity}
      />

      <StatCard
        title="Account Health"
        value="92 / 100"
        change="Excellent"
        icon={ShieldCheck}
      />
    </section>
  );
}
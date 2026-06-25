import {
  Activity,
  AlertTriangle,
  ArrowUpRight,
  BarChart3,
  Bot,
  BriefcaseBusiness,
  CalendarDays,
  CheckCircle2,
  ChevronDown,
  CircleDollarSign,
  Download,
  FileText,
  Gauge,
  Layers3,
  LineChart,
  PackageCheck,
  PauseCircle,
  Search,
  Settings,
  Sparkles,
  UploadCloud,
  Users,
  WalletCards,
  Zap,
} from "lucide-react";

const navItems = [
  { label: "Dashboard", icon: Gauge, active: true },
  { label: "Clients", icon: Users },
  { label: "Amazon Upload", icon: UploadCloud },
  { label: "AI Audit", icon: Sparkles },
  { label: "Campaign Intelligence", icon: BarChart3 },
  { label: "Reports", icon: FileText },
  { label: "Inventory", icon: PackageCheck },
  { label: "AI Assistant", icon: Bot },
  { label: "Settings", icon: Settings },
];

const kpis = [
  {
    label: "Total Revenue",
    value: "$152,980",
    change: "+18.6%",
    icon: CircleDollarSign,
    tone: "blue",
  },
  {
    label: "Net Profit",
    value: "$41,850",
    change: "+22.3%",
    icon: WalletCards,
    tone: "green",
  },
  {
    label: "ACOS",
    value: "24.35%",
    change: "-3.4%",
    icon: Activity,
    tone: "amber",
  },
  {
    label: "Account Health",
    value: "92/100",
    change: "Excellent",
    icon: CheckCircle2,
    tone: "green",
  },
];

const campaignActions = [
  {
    title: "Pause Campaign",
    campaign: "Auto | Leather Wallets",
    reason: "47 clicks, $318 spend, 0 sales",
    impact: "Save $650/mo",
    type: "Critical",
  },
  {
    title: "Increase Budget",
    campaign: "Exact | Premium Wallet",
    reason: "ACOS 14.2%, ROAS 7.1, limited by budget",
    impact: "+$4,200 sales",
    type: "Scale",
  },
  {
    title: "Reduce Bid",
    campaign: "Broad | Men Accessories",
    reason: "Good sales but bleeding margin",
    impact: "Save $390/mo",
    type: "Optimize",
  },
];

const reports = [
  "AI Account Audit Report",
  "Campaign Performance Report",
  "Weekly Sales Report",
  "Weekly PPC Report",
  "Monthly Business Report",
];

export default function Home() {
  return (
    <main className="min-h-screen text-[#111827]">
      <div className="flex min-h-screen">
        <aside className="fixed left-0 top-0 hidden h-screen w-[280px] border-r border-[#e7dfd1] bg-white/75 p-5 backdrop-blur-xl lg:block">
          <div className="mb-8 flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#111827] text-white shadow-lg">
              <Layers3 size={22} />
            </div>
            <div>
              <h1 className="text-xl font-bold tracking-tight">Parallax</h1>
              <p className="text-xs text-[#6b7280]">Amazon Intelligence</p>
            </div>
          </div>

          <nav className="space-y-1">
            {navItems.map((item) => (
              <button
                key={item.label}
                className={`flex w-full items-center gap-3 rounded-2xl px-4 py-3 text-sm font-medium transition ${
                  item.active
                    ? "bg-[#111827] text-white shadow-xl shadow-black/10"
                    : "text-[#4b5563] hover:bg-[#f7f3ea] hover:text-[#111827]"
                }`}
              >
                <item.icon size={18} />
                {item.label}
              </button>
            ))}
          </nav>

          <div className="absolute bottom-5 left-5 right-5 rounded-3xl border border-[#e7dfd1] bg-[#f8fafc] p-4">
            <div className="mb-3 flex items-center gap-2 text-sm font-semibold">
              <Sparkles size={16} />
              Premium AI Engine
            </div>
            <p className="mb-4 text-xs leading-5 text-[#6b7280]">
              Audit accounts, detect bleeding campaigns, and generate client-ready reports.
            </p>
            <button className="w-full rounded-2xl bg-[#2563eb] px-4 py-3 text-sm font-semibold text-white">
              Upgrade Intelligence
            </button>
          </div>
        </aside>

        <section className="w-full lg:pl-[280px]">
          <header className="sticky top-0 z-20 border-b border-[#e7dfd1] bg-[#f7f3ea]/80 px-5 py-4 backdrop-blur-xl lg:px-8">
            <div className="flex items-center justify-between gap-4">
              <div className="hidden w-[420px] items-center gap-3 rounded-2xl border border-[#e7dfd1] bg-white px-4 py-3 shadow-sm md:flex">
                <Search size={18} className="text-[#6b7280]" />
                <input
                  className="w-full border-0 bg-transparent text-sm outline-none"
                  placeholder="Search clients, campaigns, reports..."
                />
              </div>

              <div className="flex items-center gap-3">
                <button className="rounded-2xl border border-[#e7dfd1] bg-white px-4 py-3 text-sm font-semibold shadow-sm">
                  <span className="flex items-center gap-2">
                    <CalendarDays size={16} />
                    Jun 2026
                    <ChevronDown size={16} />
                  </span>
                </button>

                <button className="rounded-2xl bg-[#111827] px-4 py-3 text-sm font-semibold text-white shadow-lg">
                  <span className="flex items-center gap-2">
                    <Bot size={16} />
                    AI Assistant
                  </span>
                </button>
              </div>
            </div>
          </header>

          <div className="px-5 py-7 lg:px-8">
            <div className="mb-7 flex flex-col justify-between gap-4 xl:flex-row xl:items-end">
              <div>
                <p className="mb-2 text-sm font-semibold text-[#2563eb]">
                  Parallax Command Center
                </p>
                <h2 className="text-4xl font-bold tracking-[-0.04em]">
                  Welcome back, Hamza 👋
                </h2>
                <p className="mt-2 max-w-2xl text-sm leading-6 text-[#6b7280]">
                  Multi-client Amazon audit, campaign decisions, PPC intelligence,
                  downloadable reports, and AI-powered recommendations in one place.
                </p>
              </div>

              <button className="flex w-fit items-center gap-2 rounded-2xl bg-[#2563eb] px-5 py-3 text-sm font-bold text-white shadow-xl shadow-blue-600/20">
                <UploadCloud size={18} />
                Upload Amazon Files
              </button>
            </div>

            <div className="mb-7 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
              {kpis.map((kpi) => (
                <div
                  key={kpi.label}
                  className="rounded-[28px] border border-[#e7dfd1] bg-white p-5 shadow-sm"
                >
                  <div className="mb-5 flex items-center justify-between">
                    <div className="rounded-2xl bg-[#f7f3ea] p-3">
                      <kpi.icon size={20} />
                    </div>
                    <span className="rounded-full bg-[#ecfdf5] px-3 py-1 text-xs font-bold text-[#16a34a]">
                      {kpi.change}
                    </span>
                  </div>
                  <p className="text-sm text-[#6b7280]">{kpi.label}</p>
                  <h3 className="mt-2 text-3xl font-bold tracking-[-0.04em]">
                    {kpi.value}
                  </h3>
                </div>
              ))}
            </div>

            <div className="grid gap-5 xl:grid-cols-[1.4fr_0.9fr]">
              <section className="rounded-[32px] border border-[#e7dfd1] bg-white p-6 shadow-sm">
                <div className="mb-6 flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-bold">Revenue & PPC Overview</h3>
                    <p className="text-sm text-[#6b7280]">
                      Sales, spend, profit and campaign trend.
                    </p>
                  </div>
                  <LineChart size={22} className="text-[#2563eb]" />
                </div>

                <div className="flex h-[320px] items-end gap-3 rounded-[24px] bg-[#f8fafc] p-5">
                  {[35, 48, 42, 60, 72, 58, 80, 75, 92, 84, 98, 88].map(
                    (height, index) => (
                      <div
                        key={index}
                        className="flex flex-1 items-end rounded-full bg-gradient-to-t from-[#2563eb] to-[#93c5fd]"
                        style={{ height: `${height}%` }}
                      />
                    ),
                  )}
                </div>
              </section>

              <section className="rounded-[32px] border border-[#e7dfd1] bg-white p-6 shadow-sm">
                <div className="mb-6 flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-bold">AI Recommendations</h3>
                    <p className="text-sm text-[#6b7280]">
                      Decisions Parallax recommends today.
                    </p>
                  </div>
                  <Zap size={22} className="text-[#d97706]" />
                </div>

                <div className="space-y-4">
                  {campaignActions.map((item) => (
                    <div
                      key={item.campaign}
                      className="rounded-3xl border border-[#e7dfd1] bg-[#f8fafc] p-4"
                    >
                      <div className="mb-2 flex items-center justify-between">
                        <h4 className="font-bold">{item.title}</h4>
                        <span
                          className={`rounded-full px-3 py-1 text-xs font-bold ${
                            item.type === "Critical"
                              ? "bg-red-50 text-[#dc2626]"
                              : item.type === "Scale"
                                ? "bg-green-50 text-[#16a34a]"
                                : "bg-amber-50 text-[#d97706]"
                          }`}
                        >
                          {item.type}
                        </span>
                      </div>
                      <p className="text-sm font-semibold">{item.campaign}</p>
                      <p className="mt-1 text-sm leading-5 text-[#6b7280]">
                        {item.reason}
                      </p>
                      <p className="mt-3 text-sm font-bold text-[#2563eb]">
                        Impact: {item.impact}
                      </p>
                    </div>
                  ))}
                </div>
              </section>
            </div>

            <div className="mt-5 grid gap-5 xl:grid-cols-3">
              <section className="rounded-[32px] border border-[#e7dfd1] bg-white p-6 shadow-sm">
                <h3 className="mb-5 text-lg font-bold">Client Accounts</h3>

                {["AMZ Uplift - USA", "Seller Brand - UK", "Private Label - DE"].map(
                  (client) => (
                    <div
                      key={client}
                      className="mb-3 flex items-center justify-between rounded-3xl bg-[#f8fafc] p-4"
                    >
                      <div>
                        <p className="font-bold">{client}</p>
                        <p className="text-sm text-[#6b7280]">Healthy account</p>
                      </div>
                      <span className="rounded-full bg-green-50 px-3 py-1 text-xs font-bold text-[#16a34a]">
                        92
                      </span>
                    </div>
                  ),
                )}
              </section>

              <section className="rounded-[32px] border border-[#e7dfd1] bg-white p-6 shadow-sm">
                <h3 className="mb-5 text-lg font-bold">Download Reports</h3>

                <div className="space-y-3">
                  {reports.map((report) => (
                    <button
                      key={report}
                      className="flex w-full items-center justify-between rounded-3xl bg-[#f8fafc] p-4 text-left"
                    >
                      <span className="flex items-center gap-3 text-sm font-bold">
                        <FileText size={18} />
                        {report}
                      </span>
                      <Download size={17} className="text-[#2563eb]" />
                    </button>
                  ))}
                </div>
              </section>

              <section className="rounded-[32px] border border-[#e7dfd1] bg-white p-6 shadow-sm">
                <h3 className="mb-5 text-lg font-bold">Account Alerts</h3>

                <div className="space-y-4">
                  <div className="rounded-3xl bg-red-50 p-4">
                    <div className="mb-2 flex items-center gap-2 font-bold text-[#dc2626]">
                      <AlertTriangle size={18} />
                      High ACOS Alert
                    </div>
                    <p className="text-sm text-[#6b7280]">
                      7 campaigns have ACOS above 40%.
                    </p>
                  </div>

                  <div className="rounded-3xl bg-amber-50 p-4">
                    <div className="mb-2 flex items-center gap-2 font-bold text-[#d97706]">
                      <PauseCircle size={18} />
                      Bleeding Campaigns
                    </div>
                    <p className="text-sm text-[#6b7280]">
                      $1,420 wasted spend detected this month.
                    </p>
                  </div>

                  <div className="rounded-3xl bg-blue-50 p-4">
                    <div className="mb-2 flex items-center gap-2 font-bold text-[#2563eb]">
                      <ArrowUpRight size={18} />
                      Scale Opportunity
                    </div>
                    <p className="text-sm text-[#6b7280]">
                      4 campaigns are profitable and budget limited.
                    </p>
                  </div>
                </div>
              </section>
            </div>

            <div className="mt-5 rounded-[32px] border border-[#e7dfd1] bg-[#111827] p-6 text-white shadow-xl">
              <div className="flex flex-col justify-between gap-5 lg:flex-row lg:items-center">
                <div>
                  <h3 className="text-xl font-bold">Next Build Modules</h3>
                  <p className="mt-2 text-sm leading-6 text-white/70">
                    Audit, Campaign Intelligence, Reports, Upload Center, AI Assistant,
                    and Client CRM will be separated into premium dedicated pages.
                  </p>
                </div>
                <button className="rounded-2xl bg-white px-5 py-3 text-sm font-bold text-[#111827]">
                  Continue Building
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
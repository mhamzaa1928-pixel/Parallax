export default function DashboardPage() {
  return (
    <div className="space-y-8">
      <div>
        <p className="text-sm font-semibold text-blue-600">
          Welcome Back
        </p>

        <h1 className="mt-2 text-5xl font-bold tracking-tight">
          Amazon Intelligence Platform
        </h1>

        <p className="mt-4 max-w-3xl text-lg leading-8 text-neutral-500">
          Manage clients, upload Amazon reports,
          generate AI audits, optimize campaigns,
          download executive reports and monitor
          every marketplace from one place.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {[1, 2, 3, 4].map((item) => (
          <div
            key={item}
            className="rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm"
          >
            <p className="text-sm text-neutral-500">
              KPI {item}
            </p>

            <h2 className="mt-3 text-4xl font-bold">
              --
            </h2>

            <p className="mt-3 text-sm text-neutral-400">
              Data coming soon...
            </p>
          </div>
        ))}
      </div>

      <div className="rounded-3xl border border-neutral-200 bg-white p-8 shadow-sm">
        <h2 className="text-2xl font-bold">
          Dashboard v1 Foundation
        </h2>

        <p className="mt-4 max-w-4xl leading-8 text-neutral-500">
          This area will contain Revenue Charts,
          AI Recommendations, Client Health,
          Campaign Intelligence, Upload History,
          Alerts, Tasks, Reports and AI Insights.
        </p>
      </div>
    </div>
  );
}
"use client";

import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const data = [
  { month: "Jan", revenue: 18000 },
  { month: "Feb", revenue: 22000 },
  { month: "Mar", revenue: 26000 },
  { month: "Apr", revenue: 24000 },
  { month: "May", revenue: 31000 },
  { month: "Jun", revenue: 36000 },
];

export default function RevenueChart() {
  return (
    <section className="rounded-[30px] border border-neutral-200 bg-white p-6 shadow-sm">
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h2 className="text-xl font-bold">
            Revenue Overview
          </h2>

          <p className="mt-2 text-sm text-neutral-500">
            Monthly revenue trend
          </p>
        </div>

        <span className="rounded-full bg-green-50 px-3 py-1 text-sm font-semibold text-green-600">
          +18.6%
        </span>
      </div>

      <div className="h-[340px]">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data}>
            <defs>
              <linearGradient
                id="colorRevenue"
                x1="0"
                y1="0"
                x2="0"
                y2="1"
              >
                <stop
                  offset="0%"
                  stopColor="#2563EB"
                  stopOpacity={0.35}
                />

                <stop
                  offset="100%"
                  stopColor="#2563EB"
                  stopOpacity={0}
                />
              </linearGradient>
            </defs>

            <CartesianGrid stroke="#ECECEC" />

            <XAxis dataKey="month" />

            <YAxis />

            <Tooltip />

            <Area
              type="monotone"
              dataKey="revenue"
              stroke="#2563EB"
              strokeWidth={4}
              fill="url(#colorRevenue)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </section>
  );
}
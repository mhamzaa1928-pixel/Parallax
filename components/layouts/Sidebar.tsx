"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Users,
  Upload,
  ShieldCheck,
  BarChart3,
  FileText,
  Package,
  Search,
  Bot,
  Settings,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { useState } from "react";

type NavItem = {
  title: string;
  href: string;
  icon: React.ElementType;
};

const navigation: NavItem[] = [
  {
    title: "Dashboard",
    href: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    title: "Clients",
    href: "/clients",
    icon: Users,
  },
  {
    title: "Amazon Upload",
    href: "/uploads",
    icon: Upload,
  },
  {
    title: "AI Audit",
    href: "/audit",
    icon: ShieldCheck,
  },
  {
    title: "Campaigns",
    href: "/campaigns",
    icon: BarChart3,
  },
  {
    title: "Reports",
    href: "/reports",
    icon: FileText,
  },
  {
    title: "Inventory",
    href: "/inventory",
    icon: Package,
  },
  {
    title: "Keywords",
    href: "/keywords",
    icon: Search,
  },
  {
    title: "AI Assistant",
    href: "/ai",
    icon: Bot,
  },
  {
    title: "Settings",
    href: "/settings",
    icon: Settings,
  },
];

export default function Sidebar() {
  const pathname = usePathname();
  const [collapsed, setCollapsed] = useState(false);

  return (
    <aside
      className={`fixed left-0 top-0 z-50 h-screen border-r border-neutral-200 bg-white transition-all duration-300 ${
        collapsed ? "w-24" : "w-72"
      }`}
    >
      {/* Logo */}

      <div className="flex h-20 items-center justify-between border-b border-neutral-200 px-6">
        {!collapsed && (
          <div>
            <h1 className="text-2xl font-bold tracking-tight">
              Parallax
            </h1>

            <p className="text-xs text-neutral-500">
              Amazon Intelligence
            </p>
          </div>
        )}

        <button
          onClick={() => setCollapsed(!collapsed)}
          className="rounded-xl border p-2 hover:bg-neutral-100"
        >
          {collapsed ? (
            <ChevronRight size={18} />
          ) : (
            <ChevronLeft size={18} />
          )}
        </button>
      </div>

      {/* Navigation */}

      <nav className="space-y-2 p-4">
        {navigation.map((item) => {
          const active =
            pathname === item.href;

          const Icon = item.icon;

          return (
            <Link
              key={item.title}
              href={item.href}
              className={`flex items-center gap-4 rounded-2xl px-4 py-3 transition-all

              ${
                active
                  ? "bg-blue-600 text-white shadow-lg"
                  : "text-neutral-600 hover:bg-neutral-100"
              }
              `}
            >
              <Icon size={20} />

              {!collapsed && (
                <span className="font-medium">
                  {item.title}
                </span>
              )}
            </Link>
          );
        })}
      </nav>

      {/* Bottom Card */}

      {!collapsed && (
        <div className="absolute bottom-5 left-5 right-5 rounded-3xl bg-neutral-900 p-5 text-white">
          <p className="text-sm font-semibold">
            AI Intelligence
          </p>

          <p className="mt-2 text-xs leading-5 text-neutral-300">
            Upload Amazon reports and let AI
            automatically audit campaigns,
            keywords, inventory and profit.
          </p>

          <button className="mt-5 w-full rounded-xl bg-white py-3 text-sm font-semibold text-black transition hover:bg-neutral-200">
            Upgrade
          </button>
        </div>
      )}
    </aside>
  );
}
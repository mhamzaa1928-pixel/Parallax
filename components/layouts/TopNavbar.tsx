"use client";

import {
  Bell,
  Bot,
  ChevronDown,
  Globe,
  Plus,
  Search,
} from "lucide-react";

export default function TopNavbar() {
  return (
    <header className="sticky top-0 z-40 flex h-20 items-center justify-between border-b border-neutral-200 bg-[#F8F6F2]/80 px-8 backdrop-blur-xl">
      {/* Left */}

      <div className="flex items-center gap-4">
        {/* Search */}

        <div className="flex h-12 w-[420px] items-center gap-3 rounded-2xl border border-neutral-200 bg-white px-4 shadow-sm">
          <Search size={18} className="text-neutral-500" />

          <input
            type="text"
            placeholder="Search clients, campaigns, ASIN, keywords..."
            className="w-full bg-transparent text-sm outline-none placeholder:text-neutral-400"
          />
        </div>

        {/* Client */}

        <button className="flex h-12 items-center gap-3 rounded-2xl border border-neutral-200 bg-white px-4 shadow-sm transition hover:border-blue-500">
          <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-blue-600 font-bold text-white">
            A
          </div>

          <div className="text-left">
            <p className="text-sm font-semibold">
              AMZ Uplift
            </p>

            <p className="text-xs text-neutral-500">
              Active Client
            </p>
          </div>

          <ChevronDown size={16} />
        </button>

        {/* Marketplace */}

        <button className="flex h-12 items-center gap-2 rounded-2xl border border-neutral-200 bg-white px-4 shadow-sm transition hover:border-blue-500">
          <Globe size={18} />

          <span className="text-sm font-semibold">
            USA
          </span>

          <ChevronDown size={16} />
        </button>
      </div>

      {/* Right */}

      <div className="flex items-center gap-3">
        {/* New */}

        <button className="flex h-12 items-center gap-2 rounded-2xl bg-blue-600 px-5 font-semibold text-white shadow-lg transition hover:bg-blue-700">
          <Plus size={18} />

          New
        </button>

        {/* AI */}

        <button className="flex h-12 items-center gap-2 rounded-2xl border border-neutral-200 bg-white px-5 font-semibold shadow-sm transition hover:border-blue-500">
          <Bot size={18} />

          AI Assistant
        </button>

        {/* Notification */}

        <button className="relative flex h-12 w-12 items-center justify-center rounded-2xl border border-neutral-200 bg-white shadow-sm transition hover:border-blue-500">
          <Bell size={18} />

          <span className="absolute right-3 top-3 h-2.5 w-2.5 rounded-full bg-red-500"></span>
        </button>

        {/* User */}

        <button className="flex h-12 items-center gap-3 rounded-2xl border border-neutral-200 bg-white px-4 shadow-sm transition hover:border-blue-500">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-neutral-900 font-bold text-white">
            H
          </div>

          <div className="text-left">
            <p className="text-sm font-semibold">
              Hamza
            </p>

            <p className="text-xs text-neutral-500">
              Super Admin
            </p>
          </div>

          <ChevronDown size={16} />
        </button>
      </div>
    </header>
  );
}
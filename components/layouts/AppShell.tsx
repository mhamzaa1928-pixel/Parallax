"use client";

import { ReactNode } from "react";
import Sidebar from "./Sidebar";
import TopNavbar from "./TopNavbar";

type AppShellProps = {
  children: ReactNode;
};

export default function AppShell({
  children,
}: AppShellProps) {
  return (
    <div className="min-h-screen bg-[#F8F6F2]">
      {/* Sidebar */}

      <Sidebar />

      {/* Main Area */}

      <div className="ml-72 flex min-h-screen flex-col transition-all duration-300">
        {/* Top Navigation */}

        <TopNavbar />

        {/* Main Content */}

        <main className="flex-1 p-8">
          {children}
        </main>
      </div>
    </div>
  );
}
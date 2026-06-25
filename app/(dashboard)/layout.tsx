import { ReactNode } from "react";
import AppShell from "@/components/layouts/AppShell";

type DashboardLayoutProps = {
  children: ReactNode;
};

export default function DashboardLayout({
  children,
}: DashboardLayoutProps) {
  return (
    <AppShell>
      {children}
    </AppShell>
  );
}
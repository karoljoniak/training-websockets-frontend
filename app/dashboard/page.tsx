import type { Metadata } from "next"

import { DashboardPageShell } from "@/components/dashboard/dashboard-page-shell/DashboardPageShell"

export const metadata: Metadata = {
  title: "Dashboard",
  description: "Panel główny po zalogowaniu",
}

export default function DashboardPage() {
  return <DashboardPageShell />
}

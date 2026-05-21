import { DashboardColumn } from "@/components/dashboard/dashboard-column/DashboardColumn"
import { DashboardWebSocketDemo } from "@/components/dashboard/dashboard-websocket-demo/DashboardWebSocketDemo"

export function DashboardPageShell() {
  return (
    <div className="flex min-h-svh flex-col items-center p-6 pt-12 md:pt-16">
      <div className="flex w-full max-w-2xl flex-col gap-6">
        <DashboardColumn />
        <DashboardWebSocketDemo />
      </div>
    </div>
  )
}

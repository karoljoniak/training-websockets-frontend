import { DashboardToolbarLoginLink } from "@/components/dashboard/dashboard-toolbar-login-link/DashboardToolbarLoginLink"
import { DashboardToolbarTitles } from "@/components/dashboard/dashboard-toolbar-titles/DashboardToolbarTitles"

export function DashboardToolbar() {
  return (
    <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
      <DashboardToolbarTitles />
      <DashboardToolbarLoginLink />
    </div>
  )
}

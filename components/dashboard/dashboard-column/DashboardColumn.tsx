import { DashboardNextStepsCard } from "@/components/dashboard/dashboard-next-steps-card/DashboardNextStepsCard"
import { DashboardToolbar } from "@/components/dashboard/dashboard-toolbar/DashboardToolbar"
import { DashboardWelcomeCard } from "@/components/dashboard/dashboard-welcome-card/DashboardWelcomeCard"

export function DashboardColumn() {
  return (
    <div className="flex w-full max-w-2xl flex-col gap-6">
      <DashboardToolbar />
      <DashboardWelcomeCard />
      <DashboardNextStepsCard />
    </div>
  )
}

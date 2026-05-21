import { Card } from "@/components/ui/card"

import { DashboardNextStepsCardBody } from "@/components/dashboard/dashboard-next-steps-card-body/DashboardNextStepsCardBody"
import { DashboardNextStepsCardHeader } from "@/components/dashboard/dashboard-next-steps-card-header/DashboardNextStepsCardHeader"

export function DashboardNextStepsCard() {
  return (
    <Card>
      <DashboardNextStepsCardHeader />
      <DashboardNextStepsCardBody />
    </Card>
  )
}

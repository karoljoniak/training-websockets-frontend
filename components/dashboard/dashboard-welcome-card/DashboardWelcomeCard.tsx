import { Card } from "@/components/ui/card"

import { DashboardWelcomeCardBody } from "@/components/dashboard/dashboard-welcome-card-body/DashboardWelcomeCardBody"
import { DashboardWelcomeCardHeader } from "@/components/dashboard/dashboard-welcome-card-header/DashboardWelcomeCardHeader"

export function DashboardWelcomeCard() {
  return (
    <Card>
      <DashboardWelcomeCardHeader />
      <DashboardWelcomeCardBody />
    </Card>
  )
}

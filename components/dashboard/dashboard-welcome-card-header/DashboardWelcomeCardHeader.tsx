import {
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export function DashboardWelcomeCardHeader() {
  return (
    <CardHeader>
      <CardTitle>Witamy</CardTitle>
      <CardDescription>
        Po udanym logowaniu lub rejestracji trafiasz tutaj automatycznie.
      </CardDescription>
    </CardHeader>
  )
}

import { Button } from "@/components/ui/button"
import { CardFooter } from "@/components/ui/card"

export function LoginFormActions() {
  return (
    <CardFooter className="border-t pt-4">
      <Button type="submit" className="w-full">
        Zaloguj się
      </Button>
    </CardFooter>
  )
}

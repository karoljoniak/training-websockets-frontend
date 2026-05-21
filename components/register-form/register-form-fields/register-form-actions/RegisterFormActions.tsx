import { Button } from "@/components/ui/button"
import { CardFooter } from "@/components/ui/card"

export function RegisterFormActions() {
  return (
    <CardFooter className="border-t pt-4">
      <Button type="submit" className="w-full">
        Zarejestruj się
      </Button>
    </CardFooter>
  )
}

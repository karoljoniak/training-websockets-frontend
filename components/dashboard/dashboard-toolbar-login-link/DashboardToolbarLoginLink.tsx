import Link from "next/link"

import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export function DashboardToolbarLoginLink() {
  return (
    <Link
      href="/"
      className={cn(buttonVariants({ variant: "outline", size: "sm" }), "shrink-0")}
    >
      Strona logowania
    </Link>
  )
}

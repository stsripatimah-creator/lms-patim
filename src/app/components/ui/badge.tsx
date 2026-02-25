import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import {cn} from "../../lib/utils"

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-[#4F46E5] text-white hover:bg-[#4F46E5]/80",
        secondary:
          "border-transparent bg-[#0EA5E9] text-white hover:bg-[#0EA5E9]/80",
        destructive:
          "border-transparent bg-red-500 text-white hover:bg-red-500/80",
        outline: "text-slate-100 border-slate-700",
        accent: "border-transparent bg-[#22C55E] text-white hover:bg-[#22C55E]/80",
        warning: "border-transparent bg-yellow-500 text-white hover:bg-yellow-500/80",
        basic: "border-transparent bg-slate-700 text-slate-100",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  )
}

export { Badge, badgeVariants }

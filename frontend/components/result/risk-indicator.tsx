import { CheckCircle2, AlertTriangle, XCircle } from "lucide-react"
import { cn } from "@/lib/utils"

type RiskLevel = "green" | "yellow" | "red"

const config: Record<
  RiskLevel,
  {
    label: string
    description: string
    icon: typeof CheckCircle2
    bgClass: string
    textClass: string
    ringClass: string
    dotClass: string
  }
> = {
  green: {
    label: "Healthy",
    description: "No significant dental issues were detected in your scan.",
    icon: CheckCircle2,
    bgClass: "bg-emerald-50",
    textClass: "text-emerald-700",
    ringClass: "ring-emerald-200",
    dotClass: "bg-emerald-500",
  },
  yellow: {
    label: "Early Signs Detected",
    description:
      "Some early indicators were found that may need monitoring or attention.",
    icon: AlertTriangle,
    bgClass: "bg-amber-50",
    textClass: "text-amber-700",
    ringClass: "ring-amber-200",
    dotClass: "bg-amber-500",
  },
  red: {
    label: "Immediate Attention Required",
    description:
      "Significant findings detected. We recommend consulting a dentist promptly.",
    icon: XCircle,
    bgClass: "bg-red-50",
    textClass: "text-red-700",
    ringClass: "ring-red-200",
    dotClass: "bg-red-500",
  },
}

export function RiskIndicator({ level }: { level: RiskLevel }) {
  const c = config[level]
  const Icon = c.icon

  return (
    <div
      className={cn(
        "flex flex-col items-center gap-4 rounded-xl p-8 ring-1 sm:flex-row sm:gap-6",
        c.bgClass,
        c.ringClass
      )}
      role="status"
      aria-label={`Risk level: ${c.label}`}
    >
      {/* Traffic light indicator */}
      <div className="flex gap-2 sm:flex-col" aria-hidden="true">
        <span
          className={cn(
            "h-6 w-6 rounded-full ring-2 ring-offset-2",
            level === "green"
              ? "bg-emerald-500 ring-emerald-300"
              : "bg-muted ring-muted"
          )}
        />
        <span
          className={cn(
            "h-6 w-6 rounded-full ring-2 ring-offset-2",
            level === "yellow"
              ? "bg-amber-500 ring-amber-300"
              : "bg-muted ring-muted"
          )}
        />
        <span
          className={cn(
            "h-6 w-6 rounded-full ring-2 ring-offset-2",
            level === "red"
              ? "bg-red-500 ring-red-300"
              : "bg-muted ring-muted"
          )}
        />
      </div>

      {/* Details */}
      <div className="flex flex-1 flex-col items-center gap-2 text-center sm:items-start sm:text-left">
        <div className={cn("flex items-center gap-2 text-xl font-bold", c.textClass)}>
          <Icon className="h-6 w-6" aria-hidden="true" />
          {c.label}
        </div>
        <p className={cn("text-sm leading-relaxed", c.textClass, "opacity-80")}>
          {c.description}
        </p>
      </div>
    </div>
  )
}

import { ClipboardList, Calendar, Droplets, AlertTriangle, Stethoscope } from "lucide-react"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

const steps = [
  {
    icon: Calendar,
    text: "Schedule a dental consultation within 1-2 weeks to address the detected caries and evaluate crowding.",
  },
  {
    icon: Droplets,
    text: "Maintain excellent oral hygiene: brush twice daily with fluoride toothpaste and floss regularly, especially in crowded areas.",
  },
  {
    icon: AlertTriangle,
    text: "Do not delay treatment for the caries. Early intervention prevents more complex and costly procedures later.",
  },
  {
    icon: Stethoscope,
    text: "Consider an orthodontic evaluation to discuss options for correcting the lower tooth crowding.",
  },
]

export function NextSteps() {
  return (
    <Card>
      <CardHeader>
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10 text-primary">
            <ClipboardList className="h-5 w-5" aria-hidden="true" />
          </div>
          <CardTitle className="text-lg">Recommended Next Steps</CardTitle>
        </div>
      </CardHeader>
      <CardContent>
        <ol className="flex flex-col gap-4">
          {steps.map((step, i) => (
            <li key={i} className="flex gap-4">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-secondary text-primary">
                <step.icon className="h-4 w-4" aria-hidden="true" />
              </div>
              <p className="text-sm leading-relaxed text-foreground">{step.text}</p>
            </li>
          ))}
        </ol>
      </CardContent>
    </Card>
  )
}

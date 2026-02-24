import { FileText } from "lucide-react"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export function StatusSummary() {
  return (
    <Card>
      <CardHeader>
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10 text-primary">
            <FileText className="h-5 w-5" aria-hidden="true" />
          </div>
          <CardTitle className="text-lg">Dental Status Summary</CardTitle>
        </div>
      </CardHeader>
      <CardContent className="flex flex-col gap-4">
        <p className="text-base leading-relaxed text-foreground">
          Your dental analysis shows early signs of <strong>crowding in the lower teeth</strong>.
          Crowding occurs when there is insufficient space for teeth to align properly. This may
          make cleaning difficult and can increase the risk of tooth decay or gum problems over
          time.
        </p>
        <p className="text-base leading-relaxed text-foreground">
          Additionally, the analysis has detected signs of <strong>moderate dental caries
          (tooth decay)</strong> on the upper left molar region. Caries develop when bacteria
          break down tooth enamel, leading to cavities. If untreated, this may cause pain,
          infection, or damage to the inner tooth structure.
        </p>
        <div className="rounded-lg border bg-secondary/30 p-4">
          <p className="text-sm font-medium text-foreground">Conditions Identified:</p>
          <ul className="mt-2 flex flex-col gap-1.5">
            <li className="flex items-center gap-2 text-sm text-muted-foreground">
              <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-amber-500" aria-hidden="true" />
              Lower dental crowding (mild to moderate)
            </li>
            <li className="flex items-center gap-2 text-sm text-muted-foreground">
              <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-amber-500" aria-hidden="true" />
              Dental caries on upper left molar
            </li>
            <li className="flex items-center gap-2 text-sm text-muted-foreground">
              <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-500" aria-hidden="true" />
              Gum health appears normal
            </li>
            <li className="flex items-center gap-2 text-sm text-muted-foreground">
              <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-500" aria-hidden="true" />
              Bite alignment within acceptable range
            </li>
          </ul>
        </div>
      </CardContent>
    </Card>
  )
}

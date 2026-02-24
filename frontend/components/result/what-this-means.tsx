import { HelpCircle } from "lucide-react"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

const points = [
  {
    title: "Why this happens",
    text: "Crowding is often caused by genetics, jaw size, or early loss of baby teeth. Dental caries are caused by bacteria that feed on sugars and produce acid that weakens enamel.",
  },
  {
    title: "Possible long-term effects",
    text: "Untreated crowding can lead to difficulty cleaning between teeth, increasing the risk of decay and gum disease. Caries can progress to deeper tooth layers, potentially causing infection or tooth loss.",
  },
  {
    title: "Is it urgent?",
    text: "The crowding is not an emergency, but should be evaluated within the next few weeks. The detected caries should be addressed soon to prevent further progression.",
  },
  {
    title: "Pain or complications",
    text: "You may not feel pain right now, but untreated caries can become painful as they progress. Crowding may cause discomfort if teeth shift further over time.",
  },
]

export function WhatThisMeans() {
  return (
    <Card>
      <CardHeader>
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10 text-primary">
            <HelpCircle className="h-5 w-5" aria-hidden="true" />
          </div>
          <CardTitle className="text-lg">What This Means for You</CardTitle>
        </div>
      </CardHeader>
      <CardContent>
        <ul className="flex flex-col gap-4">
          {points.map((point) => (
            <li key={point.title} className="flex gap-3">
              <span
                className="mt-2 h-2 w-2 shrink-0 rounded-full bg-primary"
                aria-hidden="true"
              />
              <div>
                <p className="font-medium text-foreground">{point.title}</p>
                <p className="mt-0.5 text-sm leading-relaxed text-muted-foreground">
                  {point.text}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  )
}

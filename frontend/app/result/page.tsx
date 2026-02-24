import Link from "next/link"
import {
  MapPin,
  Download,
  RefreshCw,
  AlertTriangle,
  Calendar,
  ShieldCheck,
  Droplets,
  Clock,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { RiskIndicator } from "@/components/result/risk-indicator"
import { StatusSummary } from "@/components/result/status-summary"
import { WhatThisMeans } from "@/components/result/what-this-means"
import { NextSteps } from "@/components/result/next-steps"

export default function ResultPage() {
  // In a real app these values come from the AI analysis
  const riskLevel: "yellow" = "yellow"

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <SiteHeader />
      <main className="flex-1 px-4 py-12 sm:px-6 sm:py-16">
        <div className="mx-auto flex max-w-3xl flex-col gap-8">
          {/* Page heading */}
          <div className="text-center">
            <h1 className="text-2xl font-bold text-foreground sm:text-3xl">
              Your Dental Screening Report
            </h1>
            <p className="mt-2 text-muted-foreground">
              Report generated on {new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
            </p>
          </div>

          {/* Risk Indicator */}
          <RiskIndicator level={riskLevel} />

          {/* A. Dental Status Summary */}
          <StatusSummary />

          {/* B. What This Means for You */}
          <WhatThisMeans />

          {/* C. Recommended Next Steps */}
          <NextSteps />

          {/* D. Action Buttons */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">What would you like to do next?</CardTitle>
              <CardDescription>
                Choose an action below to continue your dental health journey.
              </CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col gap-3 sm:flex-row">
              <Button size="lg" className="flex-1 text-base">
                <MapPin className="mr-2 h-5 w-5" aria-hidden="true" />
                Find Nearby Specialist
              </Button>
              <Button variant="outline" size="lg" className="flex-1 text-base">
                <Download className="mr-2 h-5 w-5" aria-hidden="true" />
                Download Report (PDF)
              </Button>
              <Button variant="outline" size="lg" className="flex-1 text-base" asChild>
                <Link href="/scan">
                  <RefreshCw className="mr-2 h-5 w-5" aria-hidden="true" />
                  Retake Scan
                </Link>
              </Button>
            </CardContent>
          </Card>

          {/* Disclaimer */}
          <div className="flex items-start gap-3 rounded-lg border bg-secondary/30 p-4">
            <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
            <p className="text-sm leading-relaxed text-muted-foreground">
              <strong className="text-foreground">Important:</strong> This AI screening is for
              informational purposes only and does not constitute a medical diagnosis. Please
              consult a licensed dental professional for a comprehensive examination and
              treatment plan.
            </p>
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  )
}

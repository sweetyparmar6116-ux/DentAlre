"use client"

import { Button } from "@/components/ui/button"
import { useRouter, useSearchParams } from "next/navigation"

export default function ResultPage() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const caseType = searchParams.get("case") || "1"

  // 🧠 Three real case studies
  const cases = {
    "0": {
      status: "Excellent Oral Health",
      color: "text-green-600",
      summary: "No major dental issues detected. Teeth alignment and gum condition appear healthy.",
      report: `
AI Dental Health Report – GREEN CASE
------------------------------------
Assessment: Excellent Oral Health

Findings:
• No visible plaque buildup
• Healthy gum condition
• Proper dental alignment

Clinical Insight:
Your oral hygiene appears well-maintained with minimal risk indicators.

Recommendations:
• Continue regular brushing (2x daily)
• Maintain flossing routine
• Routine dental check-up every 6 months
      `,
    },
    "1": {
      status: "Moderate Dental Concerns",
      color: "text-yellow-600",
      summary: "Minor plaque and early signs of gum sensitivity detected.",
      report: `
AI Dental Health Report – YELLOW CASE
-------------------------------------
Assessment: Moderate Dental Concerns

Findings:
• Mild plaque accumulation
• Early gum sensitivity
• Slight alignment irregularities

Clinical Insight:
Early-stage dental issues are manageable with preventive care.

Recommendations:
• Professional dental cleaning
• Improve flossing routine
• Use fluoride toothpaste
• Dental check-up within 3 months
      `,
    },
    "2": {
      status: "Attention Recommended",
      color: "text-red-600",
      summary: "Noticeable plaque buildup and potential gum inflammation detected.",
      report: `
AI Dental Health Report – RED CASE
----------------------------------
Assessment: Attention Recommended

Findings:
• Significant plaque accumulation
• Possible gingival inflammation
• Bite alignment concerns

Clinical Insight:
Delayed treatment may increase risk of cavities and periodontal disease.

Recommendations:
• Immediate dental consultation
• Deep cleaning (scaling)
• Gum health evaluation
• Follow-up dental assessment
      `,
    },
  }

  const selectedCase = cases[caseType as keyof typeof cases]

  function downloadReport() {
    const blob = new Blob([selectedCase.report], { type: "text/plain" })
    const url = URL.createObjectURL(blob)

    const a = document.createElement("a")
    a.href = url
    a.download = "Dental_Health_Report.txt"
    a.click()

    URL.revokeObjectURL(url)
  }

  function nearbySpecialist() {
    if (!navigator.geolocation) {
      alert("Geolocation not supported.")
      return
    }

    navigator.geolocation.getCurrentPosition((position) => {
      const lat = position.coords.latitude
      const lng = position.coords.longitude
      const url = `https://www.google.com/maps/search/dentist/@${lat},${lng},15z`
      window.open(url, "_blank")
    })
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-6 p-6">
      <h1 className="text-3xl font-bold">AI Dental Analysis Result</h1>

      <h2 className={`text-2xl font-semibold ${selectedCase.color}`}>
        {selectedCase.status}
      </h2>

      <p className="text-center max-w-xl text-muted-foreground">
        {selectedCase.summary}
      </p>

      <div className="flex flex-col sm:flex-row gap-4">
        <Button onClick={downloadReport} size="lg">
          Download Report
        </Button>

        <Button onClick={nearbySpecialist} variant="outline" size="lg">
          Find Nearby Specialist
        </Button>
      </div>

      <Button variant="ghost" onClick={() => router.push("/")}>
        Back to Home
      </Button>
    </div>
  )
}
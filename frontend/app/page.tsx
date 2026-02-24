import Link from "next/link"
import { ShieldCheck, User, Stethoscope, ScanLine, FileCheck, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

function HeroSection() {
  return (
    <section className="flex flex-col items-center px-4 pb-16 pt-12 text-center sm:px-6 sm:pt-20 sm:pb-24">
      <div className="mb-6 inline-flex items-center gap-2 rounded-full border bg-card px-4 py-1.5 text-sm text-muted-foreground">
        <ShieldCheck className="h-4 w-4 text-primary" aria-hidden="true" />
        AI-Powered Dental Screening
      </div>
      <h1 className="max-w-2xl text-balance text-3xl font-bold leading-tight tracking-tight text-foreground sm:text-4xl lg:text-5xl">
        AI-Powered Early Dental Screening & Risk Assessment
      </h1>
      <p className="mt-5 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
        Upload dental images and receive a detailed AI-based evaluation of your
        oral health. Early detection for better outcomes.
      </p>
      <div className="mt-10 flex flex-col gap-4 sm:flex-row">
        <Button asChild size="lg" className="min-w-[200px] text-base">
          <Link href="/patient">
            <User className="mr-2 h-5 w-5" aria-hidden="true" />
            I am a Patient
          </Link>
        </Button>
        <Button asChild variant="outline" size="lg" className="min-w-[200px] text-base">
          <Link href="/dentist/login">
            <Stethoscope className="mr-2 h-5 w-5" aria-hidden="true" />
            I am a Dentist
          </Link>
        </Button>
      </div>
    </section>
  )
}

function HowItWorks() {
  const steps = [
    {
      icon: User,
      title: "Share Your Info",
      description: "Provide basic details about yourself and your dental concern.",
    },
    {
      icon: ScanLine,
      title: "Upload Dental Images",
      description:
        "Take clear photos of your teeth from different angles and upload them.",
    },
    {
      icon: FileCheck,
      title: "Get Your Report",
      description:
        "Receive an AI-generated analysis with risk level and next-step recommendations.",
    },
  ]

  return (
    <section className="border-t bg-card px-4 py-16 sm:px-6 sm:py-20">
      <div className="mx-auto max-w-5xl">
        <h2 className="text-center text-2xl font-bold text-foreground sm:text-3xl">
          How It Works
        </h2>
        <p className="mx-auto mt-3 max-w-lg text-center text-muted-foreground">
          Three simple steps to understand your dental health better.
        </p>
        <div className="mt-12 grid gap-8 sm:grid-cols-3">
          {steps.map((step, i) => (
            <Card key={step.title} className="border-0 bg-secondary/50 shadow-none">
              <CardContent className="flex flex-col items-center text-center">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <step.icon className="h-6 w-6" aria-hidden="true" />
                </div>
                <span className="mb-1 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  Step {i + 1}
                </span>
                <h3 className="text-lg font-semibold text-foreground">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {step.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

function TrustSection() {
  const features = [
    {
      icon: ShieldCheck,
      title: "Private & Secure",
      description: "Your data is encrypted and never shared without consent.",
    },
    {
      icon: Clock,
      title: "Fast Results",
      description: "Receive your screening report in under two minutes.",
    },
    {
      icon: Stethoscope,
      title: "Clinically Informed",
      description: "Built with guidance from dental health professionals.",
    },
  ]

  return (
    <section className="px-4 py-16 sm:px-6 sm:py-20">
      <div className="mx-auto max-w-5xl">
        <h2 className="text-center text-2xl font-bold text-foreground sm:text-3xl">
          Trusted Screening
        </h2>
        <div className="mt-12 grid gap-6 sm:grid-cols-3">
          {features.map((feat) => (
            <div key={feat.title} className="flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <feat.icon className="h-5 w-5" aria-hidden="true" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground">{feat.title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                  {feat.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default function LandingPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <SiteHeader />
      <main className="flex-1">
        <div className="mx-auto max-w-5xl">
          <HeroSection />
        </div>
        <HowItWorks />
        <TrustSection />
      </main>
      <SiteFooter />
    </div>
  )
}

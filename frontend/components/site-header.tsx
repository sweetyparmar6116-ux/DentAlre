import Link from "next/link"
import { ShieldCheck } from "lucide-react"

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/80">
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-4 sm:px-6">
        <Link href="/" className="flex items-center gap-2">
          <ShieldCheck className="h-7 w-7 text-primary" aria-hidden="true" />
          <span className="text-xl font-bold tracking-tight text-foreground">
            DentAIre
          </span>
        </Link>
        <nav className="flex items-center gap-4" aria-label="Main navigation">
          <Link
            href="/dentist/login"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            Dentist Portal
          </Link>
        </nav>
      </div>
    </header>
  )
}

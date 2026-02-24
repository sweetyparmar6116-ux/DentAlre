import Link from "next/link"
import {
  Stethoscope,
  Eye,
  Users,
  AlertTriangle,
  CheckCircle2,
  XCircle,
  LogOut,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { SiteFooter } from "@/components/site-footer"
import { ShieldCheck } from "lucide-react"

type RiskLevel = "green" | "yellow" | "red"

const patients: {
  id: string
  name: string
  age: number
  date: string
  complaint: string
  risk: RiskLevel
}[] = [
  {
    id: "P-1042",
    name: "Ananya Sharma",
    age: 28,
    date: "2026-02-22",
    complaint: "Tooth sensitivity",
    risk: "green",
  },
  {
    id: "P-1043",
    name: "Rajesh Patel",
    age: 45,
    date: "2026-02-22",
    complaint: "Bleeding gums",
    risk: "yellow",
  },
  {
    id: "P-1044",
    name: "Meera Iyer",
    age: 62,
    date: "2026-02-21",
    complaint: "Severe toothache",
    risk: "red",
  },
  {
    id: "P-1045",
    name: "Vikram Singh",
    age: 34,
    date: "2026-02-21",
    complaint: "Crooked teeth",
    risk: "yellow",
  },
  {
    id: "P-1046",
    name: "Priya Nair",
    age: 19,
    date: "2026-02-20",
    complaint: "Routine checkup",
    risk: "green",
  },
  {
    id: "P-1047",
    name: "Arun Mehta",
    age: 55,
    date: "2026-02-20",
    complaint: "Loose tooth",
    risk: "red",
  },
]

function RiskBadge({ level }: { level: RiskLevel }) {
  switch (level) {
    case "green":
      return (
        <Badge
          variant="outline"
          className="border-emerald-200 bg-emerald-50 text-emerald-700"
        >
          <CheckCircle2 className="mr-1 h-3 w-3" aria-hidden="true" />
          Healthy
        </Badge>
      )
    case "yellow":
      return (
        <Badge
          variant="outline"
          className="border-amber-200 bg-amber-50 text-amber-700"
        >
          <AlertTriangle className="mr-1 h-3 w-3" aria-hidden="true" />
          Attention
        </Badge>
      )
    case "red":
      return (
        <Badge
          variant="outline"
          className="border-red-200 bg-red-50 text-red-700"
        >
          <XCircle className="mr-1 h-3 w-3" aria-hidden="true" />
          Urgent
        </Badge>
      )
  }
}

function StatCard({
  icon: Icon,
  label,
  value,
  className,
}: {
  icon: typeof Users
  label: string
  value: string
  className?: string
}) {
  return (
    <Card className="border-0 bg-secondary/50 shadow-none">
      <CardContent className="flex items-center gap-4 py-4">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
          <Icon className="h-5 w-5" aria-hidden="true" />
        </div>
        <div>
          <p className="text-2xl font-bold text-foreground">{value}</p>
          <p className="text-sm text-muted-foreground">{label}</p>
        </div>
      </CardContent>
    </Card>
  )
}

export default function DentistDashboard() {
  const greenCount = patients.filter((p) => p.risk === "green").length
  const yellowCount = patients.filter((p) => p.risk === "yellow").length
  const redCount = patients.filter((p) => p.risk === "red").length

  return (
    <div className="flex min-h-screen flex-col bg-background">
      {/* Dashboard-specific header */}
      <header className="sticky top-0 z-50 w-full border-b bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/80">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
          <Link href="/" className="flex items-center gap-2">
            <ShieldCheck className="h-7 w-7 text-primary" aria-hidden="true" />
            <span className="text-xl font-bold tracking-tight text-foreground">
              DentAIre
            </span>
          </Link>
          <div className="flex items-center gap-4">
            <span className="hidden text-sm text-muted-foreground sm:block">
              Dr. Priya Kapoor
            </span>
            <Button variant="outline" size="sm" asChild>
              <Link href="/">
                <LogOut className="mr-2 h-4 w-4" aria-hidden="true" />
                Sign Out
              </Link>
            </Button>
          </div>
        </div>
      </header>

      <main className="flex-1 px-4 py-8 sm:px-6 sm:py-12">
        <div className="mx-auto max-w-6xl">
          {/* Page heading */}
          <div className="mb-8">
            <h1 className="text-2xl font-bold text-foreground sm:text-3xl">
              Patient Dashboard
            </h1>
            <p className="mt-1 text-muted-foreground">
              Overview of recent patient screenings and risk assessments.
            </p>
          </div>

          {/* Stats */}
          <div className="mb-8 grid gap-4 sm:grid-cols-3">
            <StatCard icon={Users} label="Total Patients" value={String(patients.length)} />
            <StatCard icon={AlertTriangle} label="Need Attention" value={String(yellowCount + redCount)} />
            <StatCard icon={CheckCircle2} label="Healthy" value={String(greenCount)} />
          </div>

          {/* Patient Table */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Recent Screenings</CardTitle>
              <CardDescription>
                All AI-generated screening reports for your review.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Patient ID</TableHead>
                    <TableHead>Name</TableHead>
                    <TableHead className="hidden sm:table-cell">Age</TableHead>
                    <TableHead className="hidden md:table-cell">Date</TableHead>
                    <TableHead className="hidden lg:table-cell">Chief Complaint</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead className="text-right">Action</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {patients.map((patient) => (
                    <TableRow key={patient.id}>
                      <TableCell className="font-medium">{patient.id}</TableCell>
                      <TableCell>{patient.name}</TableCell>
                      <TableCell className="hidden sm:table-cell">{patient.age}</TableCell>
                      <TableCell className="hidden md:table-cell">{patient.date}</TableCell>
                      <TableCell className="hidden lg:table-cell">
                        {patient.complaint}
                      </TableCell>
                      <TableCell>
                        <RiskBadge level={patient.risk} />
                      </TableCell>
                      <TableCell className="text-right">
                        <Button variant="outline" size="sm" asChild>
                          <Link href="/result">
                            <Eye className="mr-1.5 h-3.5 w-3.5" aria-hidden="true" />
                            View Report
                          </Link>
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </div>
      </main>
      <SiteFooter />
    </div>
  )
}

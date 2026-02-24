"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { User, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

export default function PatientPage() {
  const router = useRouter()
  const [name, setName] = useState("")
  const [age, setAge] = useState("")
  const [gender, setGender] = useState("")
  const [complaint, setComplaint] = useState("")

  const isValid = name.trim() && age.trim() && gender && complaint.trim()

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!isValid) return
    router.push("/scan")
  }

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <SiteHeader />
      <main className="flex flex-1 items-start justify-center px-4 py-12 sm:px-6 sm:py-20">
        <Card className="w-full max-w-lg">
          <CardHeader className="text-center">
            <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
              <User className="h-6 w-6" aria-hidden="true" />
            </div>
            <CardTitle className="text-2xl">Patient Information</CardTitle>
            <CardDescription>
              Please fill in your details so we can personalize your screening.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              <div className="flex flex-col gap-2">
                <Label htmlFor="fullName" className="text-base">
                  Full Name
                </Label>
                <Input
                  id="fullName"
                  placeholder="Enter your full name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="h-12 text-base"
                />
                <p className="text-xs text-muted-foreground">
                  As it appears on your identification.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col gap-2">
                  <Label htmlFor="age" className="text-base">
                    Age
                  </Label>
                  <Input
                    id="age"
                    type="number"
                    min={1}
                    max={120}
                    placeholder="e.g. 35"
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                    required
                    className="h-12 text-base"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <Label htmlFor="gender" className="text-base">
                    Gender
                  </Label>
                  <Select value={gender} onValueChange={setGender} required>
                    <SelectTrigger id="gender" className="h-12 text-base">
                      <SelectValue placeholder="Select" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="male">Male</SelectItem>
                      <SelectItem value="female">Female</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                      <SelectItem value="prefer-not">Prefer not to say</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <Label htmlFor="complaint" className="text-base">
                  Chief Complaint
                </Label>
                <Textarea
                  id="complaint"
                  placeholder="Describe your dental concern, e.g. tooth pain, bleeding gums, sensitivity..."
                  value={complaint}
                  onChange={(e) => setComplaint(e.target.value)}
                  required
                  rows={4}
                  className="text-base"
                />
                <p className="text-xs text-muted-foreground">
                  Briefly describe the main issue you would like screened.
                </p>
              </div>

              <Button
                type="submit"
                size="lg"
                disabled={!isValid}
                className="mt-2 w-full text-base"
              >
                Continue to Dental Scan
                <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
              </Button>
            </form>
          </CardContent>
        </Card>
      </main>
      <SiteFooter />
    </div>
  )
}

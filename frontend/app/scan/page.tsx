"use client"

import { useState, useCallback } from "react"
import { useRouter } from "next/navigation"
import {
  Upload,
  Camera,
  X,
  CheckCircle2,
  ScanLine,
  AlertCircle,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

const REQUIRED_VIEWS = [
  { id: "frontal", label: "Frontal Smile", description: "Smile showing all front teeth" },
  { id: "side", label: "Side Profile", description: "Left or right side view of teeth" },
  { id: "upper", label: "Upper Teeth", description: "Open mouth showing upper arch" },
  { id: "lower", label: "Lower Teeth", description: "Open mouth showing lower arch" },
  { id: "bite", label: "Bite Alignment", description: "Teeth closed in natural bite" },
]

type UploadedFile = {
  id: string
  name: string
  preview: string
}

function DropZone({
  viewId,
  label,
  description,
  file,
  onUpload,
  onRemove,
}: {
  viewId: string
  label: string
  description: string
  file: UploadedFile | undefined
  onUpload: (viewId: string, file: File) => void
  onRemove: (viewId: string) => void
}) {
  const [isDragOver, setIsDragOver] = useState(false)

  const handleDrop = useCallback(
    (e: React.DragEvent) => {
      e.preventDefault()
      setIsDragOver(false)
      const dropped = e.dataTransfer.files[0]
      if (dropped && dropped.type.startsWith("image/")) {
        onUpload(viewId, dropped)
      }
    },
    [viewId, onUpload]
  )

  const handleFileChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const selected = e.target.files?.[0]
      if (selected) {
        onUpload(viewId, selected)
      }
    },
    [viewId, onUpload]
  )

  if (file) {
    return (
      <div className="relative flex items-center gap-3 rounded-lg border bg-secondary/40 p-3">
        <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-md bg-muted">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={file.preview}
            alt={`Uploaded ${label}`}
            className="h-full w-full object-cover"
          />
        </div>
        <div className="min-w-0 flex-1">
          <p className="truncate text-sm font-medium text-foreground">{label}</p>
          <p className="flex items-center gap-1 text-xs text-success">
            <CheckCircle2 className="h-3 w-3" aria-hidden="true" />
            Uploaded
          </p>
        </div>
        <button
          type="button"
          onClick={() => onRemove(viewId)}
          className="shrink-0 rounded-md p-1.5 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
          aria-label={`Remove ${label} image`}
        >
          <X className="h-4 w-4" />
        </button>
      </div>
    )
  }

  return (
    <label
      htmlFor={`upload-${viewId}`}
      onDragOver={(e) => {
        e.preventDefault()
        setIsDragOver(true)
      }}
      onDragLeave={() => setIsDragOver(false)}
      onDrop={handleDrop}
      className={`flex cursor-pointer flex-col items-center gap-2 rounded-lg border-2 border-dashed p-4 text-center transition-colors ${
        isDragOver
          ? "border-primary bg-primary/5"
          : "border-border hover:border-primary/50 hover:bg-secondary/30"
      }`}
    >
      <Camera className="h-6 w-6 text-muted-foreground" aria-hidden="true" />
      <div>
        <p className="text-sm font-medium text-foreground">{label}</p>
        <p className="text-xs text-muted-foreground">{description}</p>
      </div>
      <input
        id={`upload-${viewId}`}
        type="file"
        accept="image/*"
        className="sr-only"
        onChange={handleFileChange}
      />
    </label>
  )
}

export default function ScanPage() {
  const router = useRouter()
  const [files, setFiles] = useState<Record<string, UploadedFile>>({})
  const [isAnalyzing, setIsAnalyzing] = useState(false)
  const [progress, setProgress] = useState(0)

  const uploadedCount = Object.keys(files).length
  const totalRequired = REQUIRED_VIEWS.length

  const handleUpload = useCallback((viewId: string, file: File) => {
    const preview = URL.createObjectURL(file)
    setFiles((prev) => ({
      ...prev,
      [viewId]: { id: viewId, name: file.name, preview },
    }))
  }, [])

  const handleRemove = useCallback((viewId: string) => {
    setFiles((prev) => {
      const updated = { ...prev }
      if (updated[viewId]) {
        URL.revokeObjectURL(updated[viewId].preview)
        delete updated[viewId]
      }
      return updated
    })
  }, [])

  function handleAnalyze() {
    setIsAnalyzing(true)
    setProgress(0)
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval)
          router.push("/result")
          return 100
        }
        return prev + 4
      })
    }, 80)
  }

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <SiteHeader />
      <main className="flex flex-1 justify-center px-4 py-12 sm:px-6 sm:py-20">
        <Card className="w-full max-w-2xl">
          <CardHeader className="text-center">
            <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
              <ScanLine className="h-6 w-6" aria-hidden="true" />
            </div>
            <CardTitle className="text-2xl">Upload Dental Images</CardTitle>
            <CardDescription className="text-base">
              Please upload clear images of your teeth for accurate analysis.
            </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col gap-6">
            <div className="flex items-start gap-3 rounded-lg border bg-secondary/30 p-4">
              <AlertCircle className="mt-0.5 h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
              <div className="text-sm leading-relaxed text-muted-foreground">
                <p className="font-medium text-foreground">Tips for best results:</p>
                <ul className="mt-1 list-inside list-disc">
                  <li>Use good lighting and avoid shadows</li>
                  <li>Hold the camera steady and close to your mouth</li>
                  <li>Upload one image for each view below</li>
                </ul>
              </div>
            </div>

            <div>
              <div className="mb-3 flex items-center justify-between">
                <p className="text-sm font-medium text-foreground">Required Views</p>
                <p className="text-sm text-muted-foreground">
                  {uploadedCount} of {totalRequired} uploaded
                </p>
              </div>
              <div className="grid gap-3 sm:grid-cols-2">
                {REQUIRED_VIEWS.map((view) => (
                  <DropZone
                    key={view.id}
                    viewId={view.id}
                    label={view.label}
                    description={view.description}
                    file={files[view.id]}
                    onUpload={handleUpload}
                    onRemove={handleRemove}
                  />
                ))}
              </div>
            </div>

            {isAnalyzing && (
              <div className="flex flex-col gap-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-foreground">Analyzing your dental images...</span>
                  <span className="text-muted-foreground">{progress}%</span>
                </div>
                <Progress value={progress} className="h-2" />
              </div>
            )}

            <Button
              size="lg"
              onClick={handleAnalyze}
              disabled={uploadedCount === 0 || isAnalyzing}
              className="w-full text-base"
            >
              <Upload className="mr-2 h-5 w-5" aria-hidden="true" />
              {isAnalyzing ? "Analyzing..." : "Analyze My Dental Health"}
            </Button>
          </CardContent>
        </Card>
      </main>
      <SiteFooter />
    </div>
  )
}

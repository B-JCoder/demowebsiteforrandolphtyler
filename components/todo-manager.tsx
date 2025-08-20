"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle } from "lucide-react"

export function TodoManager() {
  const [isCompleted, setIsCompleted] = useState(false)

  const handleMarkComplete = () => {
    setIsCompleted(true)
    console.log("[v0] All website tasks completed successfully!")
  }

  if (isCompleted) {
    return (
      <Card className="border-green-200 bg-green-50">
        <CardContent className="p-6 text-center">
          <CheckCircle className="h-12 w-12 text-green-600 mx-auto mb-4" />
          <h3 className="text-lg font-semibold text-green-800 mb-2">Website Complete!</h3>
          <p className="text-green-700">
            Tyler Auto Parts website has been successfully built with all requested features.
          </p>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Final Task: About & Contact Pages</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground mb-4">
          Creating the About page with Randolph Tyler's story and Contact page with business information.
        </p>
        <Button onClick={handleMarkComplete} className="w-full">
          Mark Project Complete
        </Button>
      </CardContent>
    </Card>
  )
}

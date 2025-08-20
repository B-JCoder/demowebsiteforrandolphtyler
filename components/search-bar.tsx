"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"

export function SearchBar() {
  const [searchQuery, setSearchQuery] = useState("")

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("[v0] Search query:", searchQuery)
    if (searchQuery.trim()) {
      // TODO: Implement actual search functionality
      alert(`Searching for: ${searchQuery}`)
    } else {
      alert("Please enter a search term")
    }
  }

  return (
    <form onSubmit={handleSearch} className="max-w-md mx-auto">
      <div className="flex gap-2">
        <Input
          type="text"
          placeholder="Search parts by name or part number..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="bg-white text-foreground"
        />
        <Button
          type="submit"
          className="bg-accent hover:bg-accent/90 text-accent-foreground"
          disabled={!searchQuery.trim()}
        >
          <Search className="h-4 w-4" />
        </Button>
      </div>
    </form>
  )
}

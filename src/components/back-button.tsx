"use client"

import Link from "next/link"
import { ChevronLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface BackButtonProps {
  href: string
  label: string
  className?: string
}

export function BackButton({ href, label, className }: BackButtonProps) {
  return (
    <Button
      variant="ghost"
      size="sm"
      asChild
      className={cn("-ml-2 text-muted-foreground hover:text-foreground transition-colors", className)}
    >
      <Link href={href}>
        <ChevronLeft className="h-4 w-4" />
        <span>{label}</span>
      </Link>
    </Button>
  )
}

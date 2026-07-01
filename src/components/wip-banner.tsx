import { AlertTriangle } from "lucide-react"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

export function WipBanner() {
  return (
    <Alert className="mb-8 border-amber-200 bg-amber-50 text-amber-900 dark:border-amber-900 dark:bg-amber-950 dark:text-amber-50 sm:mb-10">
      <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0 sm:h-5 sm:w-5" />
      <div className="space-y-1">
        <AlertTitle>作成途中</AlertTitle>
        <AlertDescription>
          この記事はまだ作成途中です。内容が不完全または誤っている可能性があります。
        </AlertDescription>
      </div>
    </Alert>
  )
}

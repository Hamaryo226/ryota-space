import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen w-full overflow-x-hidden">
      <main className="mx-auto w-full max-w-screen-md px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          <div className="mx-auto mb-6 h-20 w-20 rounded-full border flex items-center justify-center">
            <svg className="h-10 w-10 text-muted-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h1 className="text-2xl sm:text-3xl font-bold tracking-tight">ページが見つかりません</h1>
          <p className="mt-2 text-sm sm:text-base text-muted-foreground">
            お探しのプロジェクトは存在しないか、URLが変更された可能性があります。
          </p>
          <div className="mt-6">
            <Link href="/" className="inline-flex items-center gap-2 border rounded-md px-4 py-2 text-sm">
              <svg aria-hidden className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              戻る
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}

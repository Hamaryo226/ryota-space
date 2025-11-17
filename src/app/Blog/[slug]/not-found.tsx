import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen w-full overflow-x-hidden flex items-center justify-center">
      <div className="text-center px-4">
        <svg
          className="mx-auto h-12 w-12 text-muted-foreground mb-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        <h1 className="text-2xl font-bold mb-2">ブログが見つかりません</h1>
        <p className="text-muted-foreground mb-6">
          お探しのブログは存在しないか、削除された可能性があります。
        </p>
        <Link
          href="/Blog"
          className="inline-flex items-center gap-2 border rounded-md px-4 py-2"
        >
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          ブログ一覧に戻る
        </Link>
      </div>
    </div>
  );
}

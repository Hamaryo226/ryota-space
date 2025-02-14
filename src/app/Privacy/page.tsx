import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function PrivacyPolicy() {
  return (
    <div className="container mx-auto py-8 px-4">
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl font-bold">
            プライバシーポリシー
          </CardTitle>
        </CardHeader>
        <CardContent className="prose dark:prose-invert max-w-none">
          <p>
            本プライバシーポリシーは、当ポートフォリオサイト（以下、「当サイト」）の運営者（以下、「運営者」）が、
            当サイトの閲覧者（以下、「ユーザー」）のプライバシーをどのように保護するかを説明するものです。
          </p>

          <h2 className="text-xl font-semibold mt-6 mb-3">1. 収集する情報</h2>
          <p>当サイトでは、以下の情報を自動的に収集する場合があります：</p>
          <ul>
            <li>IPアドレス</li>
            <li>ブラウザの種類</li>
            <li>言語設定</li>
            <li>アクセス日時</li>
            <li>参照元ページのURL</li>
          </ul>

          <h2 className="text-xl font-semibold mt-6 mb-3">2. 情報の利用目的</h2>
          <p>収集した情報は、以下の目的でのみ利用されます：</p>
          <ul>
            <li>サイトの利用状況の分析</li>
            <li>サイトの改善や新機能の開発</li>
            <li>不正アクセスの防止</li>
          </ul>

          <h2 className="text-xl font-semibold mt-6 mb-3">3. 情報の保護</h2>
          <p>
            運営者は、収集した情報の安全管理のために適切な措置を講じます。
            ただし、インターネット上のデータ送信に関して完全な安全性を保証することはできません。
          </p>

          <h2 className="text-xl font-semibold mt-6 mb-3">4. 第三者への提供</h2>
          <p>
            運営者は、法令に基づく場合を除き、収集した情報を第三者に提供することはありません。
          </p>

          <h2 className="text-xl font-semibold mt-6 mb-3">5. Cookieの使用</h2>
          <p>
            当サイトでは、ユーザーエクスペリエンスの向上やサイトの利用状況の分析のために、
            Cookieを使用する場合があります。ブラウザの設定でCookieを無効にすることも可能です。
          </p>

          <h2 className="text-xl font-semibold mt-6 mb-3">
            6. プライバシーポリシーの変更
          </h2>
          <p>
            運営者は、必要に応じて本プライバシーポリシーを変更することがあります。
            変更後のプライバシーポリシーは、当サイトに掲載した時点で効力を生じるものとします。
          </p>

          <h2 className="text-xl font-semibold mt-6 mb-3">7. お問い合わせ</h2>
          <p>
            本プライバシーポリシーに関するお問い合わせは、運営者のSNSアカウントまたは公開されている連絡先までご連絡ください。
          </p>
        </CardContent>
      </Card>
      <div className="mt-6 flex justify-between">
        <Button asChild>
          <Link href="/">ホームに戻る</Link>
        </Button>
        <Button asChild>
          <Link href="/terms-of-use">利用規約</Link>
        </Button>
      </div>
    </div>
  );
}

"use client";

import { useEffect, useRef } from "react";
import { Separator } from "@/components/ui/separator";
import {
  Shield,
  Eye,
  Target,
  Lock,
  Share2,
  Cookie,
  FileText,
  MessageCircle,
} from "lucide-react";

function PolicySection({
  title,
  children,
  icon: Icon,
}: {
  title: string;
  children: React.ReactNode;
  icon: React.ElementType;
  index: number;
}) {
  const ref = useRef(null);
  return (
    <section ref={ref} className="mb-12">
      <div className="flex items-center gap-3 mb-4">
        <div className="bg-primary/10 p-2 rounded-full">
          <Icon className="h-6 w-6 text-primary" />
        </div>
        <h2 className="text-xl font-bold">{title}</h2>
      </div>
      <div className="ml-12 pl-6 border-l border-primary/20">{children}</div>
    </section>
  );
}

export default function PrivacyPolicy() {
  useEffect(() => {
    document.title = "プライバシーポリシー | ryota-space";
  }, []);

  return (
    <div className="container max-w-4xl mx-auto p-4">
      <div className="bg-card/50 backdrop-blur-sm rounded-xl shadow-lg p-4 mb-6">
        <div className="flex flex-col sm:flex-row items-center justify-center mb-6 text-center sm:text-left">
          <Shield className="h-12 w-12 text-primary mb-2 sm:mb-0 sm:mr-4" />
          <h1 className="text-3xl sm:text-4xl font-bold">
            プライバシーポリシー
          </h1>
        </div>

        <p className="text-lg text-center text-muted-foreground mb-6">
          本プライバシーポリシーは、当ポートフォリオサイト（以下、「当サイト」）の運営者が、
          当サイトの閲覧者のプライバシーをどのように保護するかを説明するものです。
        </p>

        <Separator className="my-6" />

        <div className="grid grid-cols-3 sm:grid-cols-3 gap-4 text-center">
          <div className="p-4">
            <Eye className="h-8 w-8 mx-auto mb-2 text-primary/70" />
            <p className="text-sm">透明性</p>
          </div>
          <div className="p-4">
            <Lock className="h-8 w-8 mx-auto mb-2 text-primary/70" />
            <p className="text-sm">データの安全</p>
          </div>
          <div className="p-4">
            <Shield className="h-8 w-8 mx-auto mb-2 text-primary/70" />
            <p className="text-sm">プライバシー</p>
          </div>
        </div>
      </div>

      <div className="space-y-6">
        <PolicySection title="1. 収集する情報" icon={Eye} index={0}>
          <p className="mb-4">
            当サイトでは、以下の情報を自動的に収集する場合があります：
          </p>
          <ul className="space-y-2 list-disc pl-6">
            <li>IPアドレス</li>
            <li>ブラウザの種類</li>
            <li>言語設定</li>
            <li>アクセス日時</li>
            <li>参照元ページのURL</li>
          </ul>
        </PolicySection>

        <PolicySection title="2. 情報の利用目的" icon={Target} index={1}>
          <p className="mb-4">収集した情報は、以下の目的でのみ利用されます：</p>
          <ul className="space-y-2 list-disc pl-6">
            <li>サイトの利用状況の分析</li>
            <li>サイトの改善や新機能の開発</li>
            <li>不正アクセスの防止</li>
          </ul>
        </PolicySection>

        <PolicySection title="3. 情報の保護" icon={Lock} index={2}>
          <p>
            運営者は、収集した情報の安全管理のために適切な措置を講じます。
            ただし、インターネット上のデータ送信に関して完全な安全性を保証することはできません。
          </p>
        </PolicySection>

        <PolicySection title="4. 第三者への提供" icon={Share2} index={3}>
          <p>
            運営者は、法令に基づく場合を除き、収集した情報を第三者に提供することはありません。
          </p>
        </PolicySection>

        <PolicySection title="5. Cookieの使用" icon={Cookie} index={4}>
          <p>
            当サイトでは、ユーザーエクスペリエンスの向上やサイトの利用状況の分析のために、
            Cookieを使用する場合があります。ブラウザの設定でCookieを無効にすることも可能です。
          </p>
        </PolicySection>

        <PolicySection
          title="6. プライバシーポリシーの変更"
          icon={FileText}
          index={5}
        >
          <p>
            運営者は、必要に応じて本プライバシーポリシーを変更することがあります。
            変更後のプライバシーポリシーは、当サイトに掲載した時点で効力を生じるものとします。
          </p>
        </PolicySection>

        <PolicySection title="7. お問い合わせ" icon={MessageCircle} index={6}>
          <p>
            本プライバシーポリシーに関するお問い合わせは、運営者のSNSアカウントまたは公開されている連絡先までご連絡ください。
          </p>
        </PolicySection>
      </div>

      <div className="mt-16 text-center text-sm text-muted-foreground">
        <p>最終更新日: 2025年4月1日</p>
      </div>
    </div>
  );
}

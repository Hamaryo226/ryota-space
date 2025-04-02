"use client";

import { useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Separator } from "@/components/ui/separator";
import {
  ChevronLeft,
  Shield,
  Eye,
  Target,
  Lock,
  Share2,
  Cookie,
  FileText,
  MessageCircle,
} from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const sectionVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

function PolicySection({
  title,
  children,
  icon: Icon,
  index,
}: {
  title: string;
  children: React.ReactNode;
  icon: React.ElementType;
  index: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.section
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={sectionVariants}
      transition={{ delay: index * 0.1 }}
      className="mb-12"
    >
      <div className="flex items-center gap-3 mb-4">
        <div className="bg-primary/10 p-2 rounded-full">
          <Icon className="h-6 w-6 text-primary" />
        </div>
        <h2 className="text-xl font-bold">{title}</h2>
      </div>
      <div className="ml-12 pl-6 border-l border-primary/20">{children}</div>
    </motion.section>
  );
}

export default function PrivacyPolicy() {
  useEffect(() => {
    document.title = "プライバシーポリシー | ryota-space";
  }, []);

  return (
    <div className="container max-w-4xl mx-auto py-12 px-4">
      <div className="flex flex-row items-center justify-between mb-8">
        <Link href="/">
          <Button variant="outline" size="icon">
            <ChevronLeft className="h-4 w-4" />
          </Button>
        </Link>
      </div>

      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="bg-card/50 backdrop-blur-sm rounded-xl shadow-lg p-8 mb-12"
      >
        <div className="flex items-center justify-center mb-6">
          <Shield className="h-12 w-12 text-primary mr-4" />
          <h1 className="text-4xl font-bold">プライバシーポリシー</h1>
        </div>

        <p className="text-lg text-center text-muted-foreground mb-6">
          本プライバシーポリシーは、当ポートフォリオサイト（以下、「当サイト」）の運営者が、
          当サイトの閲覧者のプライバシーをどのように保護するかを説明するものです。
        </p>

        <Separator className="my-6" />

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
          <div className="p-4">
            <Eye className="h-8 w-8 mx-auto mb-2 text-primary/70" />
            <p className="text-sm">透明性を大切に</p>
          </div>
          <div className="p-4">
            <Lock className="h-8 w-8 mx-auto mb-2 text-primary/70" />
            <p className="text-sm">データの安全を確保</p>
          </div>
          <div className="p-4">
            <Shield className="h-8 w-8 mx-auto mb-2 text-primary/70" />
            <p className="text-sm">プライバシーを尊重</p>
          </div>
        </div>
      </motion.div>

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

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="mt-16 text-center text-sm text-muted-foreground"
      >
        <p>最終更新日: 2025年4月1日</p>
      </motion.div>
    </div>
  );
}

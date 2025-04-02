"use client";

import { useRef, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import {
  ChevronLeft,
  Scale,
  BookOpen,
  Target,
  AlertTriangle,
  Shield,
  FileEdit,
  RefreshCw,
  Gavel,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

const sectionVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

function TermsSection({
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
      <div className="ml-12 pl-6 border-l border-primary/20 prose-sm dark:prose-invert max-w-none">
        {children}
      </div>
    </motion.section>
  );
}

export default function TermsOfUse() {
  useEffect(() => {
    document.title = "利用規約 | ryota-space";
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
        className="rounded-xl border-none border-border/40 p-8 mb-12"
      >
        <div className="flex items-center justify-center mb-6">
          <BookOpen className="h-12 w-12 text-primary mr-4" />
          <h1 className="text-4xl font-bold">利用規約</h1>
        </div>

        <p className="text-lg text-center text-muted-foreground mb-6">
          この利用規約（以下、「本規約」）は、当ポートフォリオサイト（以下、「当サイト」）の利用条件を定めるものです。
          閲覧者の皆さま（以下、「ユーザー」）には、本規約に従って、当サイトをご利用いただきます。
        </p>

        <Separator className="my-6" />

        <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 text-center">
          <div className="p-3">
            <Scale className="h-7 w-7 mx-auto mb-2 text-primary/70" />
            <p className="text-xs">公正な利用</p>
          </div>
          <div className="p-3">
            <AlertTriangle className="h-7 w-7 mx-auto mb-2 text-primary/70" />
            <p className="text-xs">禁止事項の遵守</p>
          </div>
          <div className="p-3">
            <Shield className="h-7 w-7 mx-auto mb-2 text-primary/70" />
            <p className="text-xs">責任の範囲</p>
          </div>
          <div className="p-3">
            <Gavel className="h-7 w-7 mx-auto mb-2 text-primary/70" />
            <p className="text-xs">法的枠組み</p>
          </div>
        </div>
      </motion.div>

      <div className="space-y-6">
        <TermsSection title="1. 適用" icon={Scale} index={0}>
          <p>
            本規約は、ユーザーと当サイトの運営者（以下、「運営者」）との間の当サイトの利用に関わる一切の関係に適用されるものとします。
          </p>
        </TermsSection>

        <TermsSection title="2. 利用目的" icon={Target} index={1}>
          <p>
            当サイトは、運営者のポートフォリオを公開し、運営者のスキルや実績を紹介することを目的としています。
            ユーザーは、この目的に沿って当サイトを利用するものとします。
          </p>
        </TermsSection>

        <TermsSection title="3. 禁止事項" icon={AlertTriangle} index={2}>
          <p>
            ユーザーは、当サイトの利用にあたり、以下の行為をしてはなりません：
          </p>
          <ul className="pl-6 space-y-1 mb-4">
            <li>法令または公序良俗に違反する行為</li>
            <li>犯罪行為に関連する行為</li>
            <li>
              運営者、他のユーザー、またはその他第三者の知的財産権を侵害する行為
            </li>
            <li>
              運営者、他のユーザー、またはその他第三者の財産、プライバシーを侵害する行為
            </li>
            <li>
              運営者、他のユーザー、またはその他第三者に不利益、損害を与える行為
            </li>
            <li>
              当サイトのサーバーやネットワークの機能を破壊したり、妨害したりする行為
            </li>
            <li>当サイトのサービスの運営を妨害するおそれのある行為</li>
            <li>不正アクセスをし、またはこれを試みる行為</li>
            <li>他のユーザーに関する個人情報等を収集または蓄積する行為</li>
            <li>当サイトのコンテンツを無断で複製、転載、または改変する行為</li>
            <li>その他、運営者が不適切と判断する行為</li>
          </ul>
        </TermsSection>

        <TermsSection
          title="4. 当サイトの提供の停止等"
          icon={RefreshCw}
          index={3}
        >
          <p>
            運営者は、以下のいずれかの事由があると判断した場合、ユーザーに事前に通知することなく当サイトの全部または一部の提供を停止または中断することができるものとします：
          </p>
          <ul className="pl-6 space-y-1 mb-4">
            <li>
              当サイトにかかるコンピュータシステムの保守点検または更新を行う場合
            </li>
            <li>
              地震、落雷、火災、停電または天災などの不可抗力により、当サイトの提供が困難となった場合
            </li>
            <li>コンピュータまたは通信回線等が事故により停止した場合</li>
            <li>その他、運営者が当サイトの提供が困難と判断した場合</li>
          </ul>
        </TermsSection>

        <TermsSection title="5. 免責事項" icon={Shield} index={4}>
          <p>
            運営者は、当サイトに掲載されている情報の正確性、適切性、有用性等について、いかなる保証も行いません。
            ユーザーは、自己の責任において当サイトを利用するものとし、当サイトの利用によって生じた損害について、運営者は一切の責任を負いません。
          </p>
        </TermsSection>

        <TermsSection title="6. サイト内容の変更等" icon={FileEdit} index={5}>
          <p>
            運営者は、ユーザーに通知することなく、当サイトの内容を変更しまたは当サイトの提供を中止することができるものとし、これによってユーザーに生じた損害について一切の責任を負いません。
          </p>
        </TermsSection>

        <TermsSection title="7. 利用規約の変更" icon={RefreshCw} index={6}>
          <p>
            運営者は、必要と判断した場合には、ユーザーに通知することなくいつでも本規約を変更することができるものとします。
            なお、本規約の変更後、当サイトの利用を開始した場合には、当該ユーザーは変更後の規約に同意したものとみなします。
          </p>
        </TermsSection>

        <TermsSection title="8. 準拠法・裁判管轄" icon={Gavel} index={7}>
          <p>
            本規約の解釈にあたっては、日本法を準拠法とします。
            当サイトに関して紛争が生じた場合には、運営者の所在地を管轄する裁判所を専属的合意管轄とします。
          </p>
        </TermsSection>
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

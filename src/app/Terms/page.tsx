import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function TermsOfUse() {
  return (
    <div className="container mx-auto py-8 px-4">
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl font-bold">利用規約</CardTitle>
        </CardHeader>
        <CardContent className="prose dark:prose-invert max-w-none">
          <p>
            この利用規約（以下、「本規約」）は、当ポートフォリオサイト（以下、「当サイト」）の利用条件を定めるものです。
            閲覧者の皆さま（以下、「ユーザー」）には、本規約に従って、当サイトをご利用いただきます。
          </p>

          <h2 className="text-xl font-semibold mt-6 mb-3">1. 適用</h2>
          <p>
            本規約は、ユーザーと当サイトの運営者（以下、「運営者」）との間の当サイトの利用に関わる一切の関係に適用されるものとします。
          </p>

          <h2 className="text-xl font-semibold mt-6 mb-3">2. 利用目的</h2>
          <p>
            当サイトは、運営者のポートフォリオを公開し、運営者のスキルや実績を紹介することを目的としています。
            ユーザーは、この目的に沿って当サイトを利用するものとします。
          </p>

          <h2 className="text-xl font-semibold mt-6 mb-3">3. 禁止事項</h2>
          <p>
            ユーザーは、当サイトの利用にあたり、以下の行為をしてはなりません：
          </p>
          <ul>
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

          <h2 className="text-xl font-semibold mt-6 mb-3">
            4. 当サイトの提供の停止等
          </h2>
          <p>
            運営者は、以下のいずれかの事由があると判断した場合、ユーザーに事前に通知することなく当サイトの全部または一部の提供を停止または中断することができるものとします：
          </p>
          <ul>
            <li>
              当サイトにかかるコンピュータシステムの保守点検または更新を行う場合
            </li>
            <li>
              地震、落雷、火災、停電または天災などの不可抗力により、当サイトの提供が困難となった場合
            </li>
            <li>コンピュータまたは通信回線等が事故により停止した場合</li>
            <li>その他、運営者が当サイトの提供が困難と判断した場合</li>
          </ul>

          <h2 className="text-xl font-semibold mt-6 mb-3">5. 免責事項</h2>
          <p>
            運営者は、当サイトに掲載されている情報の正確性、適切性、有用性等について、いかなる保証も行いません。
            ユーザーは、自己の責任において当サイトを利用するものとし、当サイトの利用によって生じた損害について、運営者は一切の責任を負いません。
          </p>

          <h2 className="text-xl font-semibold mt-6 mb-3">
            6. サイト内容の変更等
          </h2>
          <p>
            運営者は、ユーザーに通知することなく、当サイトの内容を変更しまたは当サイトの提供を中止することができるものとし、これによってユーザーに生じた損害について一切の責任を負いません。
          </p>

          <h2 className="text-xl font-semibold mt-6 mb-3">7. 利用規約の変更</h2>
          <p>
            運営者は、必要と判断した場合には、ユーザーに通知することなくいつでも本規約を変更することができるものとします。
            なお、本規約の変更後、当サイトの利用を開始した場合には、当該ユーザーは変更後の規約に同意したものとみなします。
          </p>

          <h2 className="text-xl font-semibold mt-6 mb-3">
            8. 準拠法・裁判管轄
          </h2>
          <p>
            本規約の解釈にあたっては、日本法を準拠法とします。
            当サイトに関して紛争が生じた場合には、運営者の所在地を管轄する裁判所を専属的合意管轄とします。
          </p>
        </CardContent>
      </Card>
      <div className="mt-6 flex justify-between">
        <Button asChild>
          <Link href="/">ホームに戻る</Link>
        </Button>
        <Button asChild>
          <Link href="/privacy-policy">プライバシーポリシー</Link>
        </Button>
      </div>
    </div>
  );
}

"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowLeft,
  Calendar,
  Clock,
  Share2,
  Bookmark,
  BookmarkCheck,
} from "lucide-react";
import { Footer } from "@/components/footer";
import { Badge } from "@/components/ui/badge";

// ブログ記事のタイプ定義
interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  coverImage: string;
  date: string;
  readTime: string;
  author: {
    name: string;
    avatar: string;
  };
  categories: string[];
  featured?: boolean;
  content?: string; // 記事の本文
}

// サンプルのブログ投稿データ（実際のプロジェクトではAPIからデータを取得するなど）
const samplePosts: BlogPost[] = [
  {
    id: "nextjs-app-router",
    title: "Next.js 13のApp Routerとは？従来のPages Routerとの違い",
    excerpt:
      "Next.js 13で導入されたApp Routerの基本概念と、従来のPages Routerからの移行方法について解説します。",
    coverImage: "/images/blog/nextjs-app-router.jpg",
    date: "2023-12-15",
    readTime: "8分",
    author: {
      name: "Ryota Hamada",
      avatar: "/images/avatar.jpg",
    },
    categories: ["Next.js", "React", "フロントエンド"],
    featured: true,
    content: `
# Next.js 13のApp Routerとは？

Next.js 13では、従来のPages Routerに代わる新しいルーティングシステムとして**App Router**が導入されました。この記事では、App Routerの基本概念と、従来のPages Routerからの移行方法について解説します。

## App Routerの主な特徴

App Routerは、React 18の新機能（Server Components、Suspense、Streaming）を活用するために設計されたルーティングシステムです。主な特徴は以下の通りです：

- **ネストされたルーティング**: ファイルシステムベースのルーティングで、UIのネスト化も自然に表現できます
- **レイアウト**: 複数のルート間で共有されるUIを効率的に管理できます
- **Server Components**: デフォルトでサーバーコンポーネントとして動作し、必要に応じてクライアントコンポーネントを使用できます
- **ローディング UI**: Suspenseを活用した読み込み状態の管理ができます
- **ストリーミング**: UIの段階的なレンダリングが可能です

## App DirectoryとPages Directoryの違い

App RouterはNext.jsプロジェクト内の\`app\`ディレクトリで動作します。従来のPages Routerは\`pages\`ディレクトリで動作します。両者は共存できるため、段階的な移行が可能です。

主な違いは以下の通りです：

| 機能 | App Router (\`app\`) | Pages Router (\`pages\`) |
|------|-------------------|----------------------|
| レンダリングモデル | Reactサーバーコンポーネント | Pages |
| データフェッチ | fetch() APIとReact Suspense | getServerSideProps, getStaticProps |
| キャッシング | 細粒度のHTTPキャッシュ | ルートレベルのキャッシュ |
| バンドリング | コンポーネントごとの最適化 | ルートごとの最適化 |
| レイアウト | 共有レイアウト | \_app.js, \_document.js |
| ネスティング | レイアウトのネスト化 | 限定的 |

## App Routerでのルーティング設計

App Routerでは、特殊なファイル規約を使用してルーティングを設計します：

- \`page.js\`: URLからアクセス可能なページUIを定義
- \`layout.js\`: 複数のページ間で共有されるUIを定義
- \`loading.js\`: ページやレイアウトの読み込み状態を定義
- \`error.js\`: エラー状態のUIを定義
- \`not-found.js\`: 404エラーのUIを定義

例えば、以下のようなファイル構造を考えてみましょう：

\`\`\`
app/
├── layout.js      # 全ページ共通のレイアウト
├── page.js        # ホームページ (/)
└── blog/
    ├── layout.js  # ブログ記事共通のレイアウト
    ├── page.js    # ブログ一覧ページ (/blog)
    └── [slug]/
        └── page.js # 個別ブログ記事ページ (/blog/article-1)
\`\`\`

## Pages Routerからの移行戦略

既存のNext.jsアプリケーションをApp Routerに移行する場合、以下の戦略がおすすめです：

1. **段階的に移行する**: AppとPagesは共存できるため、一度にすべてを移行する必要はありません
2. **共通レイアウトから移行**: 最初に\`_app.js\`と\`_document.js\`をApp Routerの\`layout.js\`に移行します
3. **単純なページから移行**: 複雑な機能を持たないシンプルなページから移行を始めます
4. **データフェッチを更新**: getServerSidePropsやgetStaticPropsを新しいデータフェッチ手法に更新します

## まとめ

App Routerは、Next.jsの将来的な方向性を示す重要な機能です。React 18の新機能を活用し、より柔軟で効率的なアプリケーション開発が可能になります。既存のアプリケーションは段階的に移行できるため、新しい機能を徐々に取り入れていくことができます。
    `,
  },
  {
    id: "typescript-tips",
    title: "実務で使えるTypeScriptの高度な型テクニック",
    excerpt:
      "型ガード、ユーティリティ型、条件付き型など、実務で役立つTypeScriptの高度な型テクニックを紹介します。",
    coverImage: "/images/blog/typescript-tips.jpg",
    date: "2023-11-28",
    readTime: "10分",
    author: {
      name: "Ryota Hamada",
      avatar: "/images/avatar.jpg",
    },
    categories: ["TypeScript", "JavaScript", "プログラミング"],
    content: `
# 実務で使えるTypeScriptの高度な型テクニック

TypeScriptは静的型付けによってJavaScriptの開発体験を向上させるプログラミング言語です。基本的な型定義は多くの開発者が理解していますが、より複雑な問題を解決するための高度な型テクニックはあまり知られていません。この記事では、実務で本当に役立つTypeScriptの高度な型テクニックを紹介します。

## 1. 型ガードを使った型の絞り込み

型ガードは、条件分岐内で変数の型を絞り込むための手法です。

### カスタム型ガード関数

\`\`\`typescript
interface User {
  id: number;
  name: string;
}

interface Admin {
  id: number;
  name: string;
  privileges: string[];
}

// isAdmin は型ガード関数
function isAdmin(user: User | Admin): user is Admin {
  return 'privileges' in user;
}

function showUserInfo(user: User | Admin) {
  console.log(user.name);
  
  if (isAdmin(user)) {
    // この中では user は Admin 型として扱われる
    console.log('権限:', user.privileges.join(', '));
  }
}
\`\`\`

## 2. ユーティリティ型の活用

TypeScriptには多くの組み込みユーティリティ型があります。これらを組み合わせることで強力な型定義が可能になります。

### Partial, Required, Pick, Omit

\`\`\`typescript
interface User {
  id: number;
  name: string;
  email: string;
  age?: number;
}

// 全てのプロパティをオプショナルにする
type PartialUser = Partial<User>;

// 全てのプロパティを必須にする
type RequiredUser = Required<User>;

// 特定のプロパティだけを選択する
type UserBasicInfo = Pick<User, 'id' | 'name'>;

// 特定のプロパティを除外する
type UserWithoutEmail = Omit<User, 'email'>;
\`\`\`

## 3. 条件付き型（Conditional Types）

条件に基づいて型を選択できるのが条件付き型です。

\`\`\`typescript
type IsString<T> = T extends string ? 'yes' : 'no';

// 'yes' 型になる
type Answer1 = IsString<'hello'>;

// 'no' 型になる
type Answer2 = IsString<number>;
\`\`\`

### infer キーワードを使った型の抽出

\`\`\`typescript
// 配列の要素の型を抽出する
type ElementType<T> = T extends (infer U)[] ? U : never;

type NumberArray = number[];
// 結果は number 型
type ExtractedType = ElementType<NumberArray>;

// 関数の戻り値の型を抽出する
type ReturnType<T> = T extends (...args: any[]) => infer R ? R : never;

function greet(): string {
  return 'Hello';
}

// 結果は string 型
type GreetReturn = ReturnType<typeof greet>;
\`\`\`

## 4. マップ型（Mapped Types）

既存の型から新しい型を生成するための強力な手法です。

\`\`\`typescript
type Readonly<T> = {
  readonly [P in keyof T]: T[P];
};

interface User {
  id: number;
  name: string;
}

// 全てのプロパティが readonly になる
type ReadonlyUser = Readonly<User>;

// カスタムマップ型
type Nullable<T> = {
  [P in keyof T]: T[P] | null;
};

// 全てのプロパティが null 許容になる
type NullableUser = Nullable<User>;
\`\`\`

## 5. Template Literal Types

TypeScript 4.1で導入されたTemplate Literal Typesを使うと、文字列リテラル型を組み合わせて新しい型を作成できます。

\`\`\`typescript
type EventName = 'click' | 'scroll' | 'mousemove';
type EventHandler<T extends string> = \`on\${Capitalize<T>}\`;

// 'onClick' | 'onScroll' | 'onMousemove' 型になる
type DOMEventHandlers = EventHandler<EventName>;
\`\`\`

## まとめ

TypeScriptの高度な型システムを理解し活用することで、より安全で保守性の高いコードを書くことができます。これらのテクニックは特に大規模なプロジェクトや複雑なライブラリ開発の際に非常に価値を発揮します。
    `,
  },
  // 他の記事も同様に内容を追加...
];

export default function BlogPostPage() {
  const params = useParams();
  const slug = params.slug as string;
  const [post, setPost] = useState<BlogPost | null>(null);
  const [isSaved, setIsSaved] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // 通常はAPIからデータを取得するが、ここではサンプルデータから検索
    const foundPost = samplePosts.find((p) => p.id === slug);
    setPost(foundPost || null);
    setIsLoading(false);

    // ローカルストレージから保存状態を取得（実際の実装時）
    const savedPosts = JSON.parse(localStorage.getItem("savedPosts") || "[]");
    setIsSaved(savedPosts.includes(slug));
  }, [slug]);

  const toggleSave = () => {
    setIsSaved(!isSaved);
    // 実際の実装ではローカルストレージに保存するなどの処理を行う
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-zinc-950 text-zinc-100 flex items-center justify-center">
        <div className="animate-pulse text-xl">Loading...</div>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="min-h-screen bg-zinc-950 text-zinc-100 flex flex-col items-center justify-center p-4">
        <h1 className="text-2xl font-bold mb-4">記事が見つかりません</h1>
        <p className="text-zinc-400 mb-6">
          お探しの記事は存在しないか、移動した可能性があります。
        </p>
        <Link
          href="/Blog"
          className="px-4 py-2 bg-zinc-800 rounded-lg hover:bg-zinc-700 transition-colors flex items-center"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          ブログ一覧に戻る
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100">
      <div className="max-w-4xl mx-auto px-4 py-16 sm:px-6">
        {/* ナビゲーション */}
        <div className="mb-8">
          <Link
            href="/Blog"
            className="inline-flex items-center text-sm text-zinc-400 hover:text-zinc-100 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            ブログ一覧に戻る
          </Link>
        </div>

        {/* 記事ヘッダー */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <div className="flex flex-wrap gap-2 mb-3">
            {post.categories.map((category) => (
              <Badge key={category} variant="default">
                {category}
              </Badge>
            ))}
          </div>

          <h1 className="text-3xl sm:text-4xl font-bold mb-4 text-zinc-100">
            {post.title}
          </h1>

          <div className="flex flex-wrap items-center justify-between gap-4 text-zinc-400 text-sm mb-6">
            <div className="flex items-center gap-6">
              <div className="flex items-center">
                <Calendar className="w-4 h-4 mr-2" />
                {new Date(post.date).toLocaleDateString("ja-JP")}
              </div>
              <div className="flex items-center">
                <Clock className="w-4 h-4 mr-2" />
                {post.readTime}
              </div>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={toggleSave}
                className="flex items-center gap-1 px-3 py-1.5 rounded-lg bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 transition-colors"
              >
                {isSaved ? (
                  <>
                    <BookmarkCheck className="w-4 h-4 text-blue-400" />
                    <span className="text-xs">保存済み</span>
                  </>
                ) : (
                  <>
                    <Bookmark className="w-4 h-4" />
                    <span className="text-xs">保存</span>
                  </>
                )}
              </button>

              <button className="flex items-center gap-1 px-3 py-1.5 rounded-lg bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 transition-colors">
                <Share2 className="w-4 h-4" />
                <span className="text-xs">共有</span>
              </button>
            </div>
          </div>
        </motion.div>

        {/* アイキャッチ画像 */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7 }}
          className="rounded-xl overflow-hidden mb-10 bg-zinc-800 aspect-[21/9] relative"
        >
          {/* 実際の画像が準備できたときにImage コンポーネントに置き換え */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-purple-900/20"></div>
          <div className="absolute inset-0 flex items-center justify-center text-zinc-600">
            <span>アイキャッチ画像</span>
          </div>
          {/* 
          実際の実装時は以下のようにImage コンポーネントを使用
          <Image
            src={post.coverImage}
            alt={post.title}
            fill
            priority
            sizes="(max-width: 768px) 100vw, 768px"
            className="object-cover"
          />
          */}
        </motion.div>

        {/* 記事本文 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="prose prose-invert prose-zinc max-w-none
            prose-headings:font-semibold prose-headings:tracking-tight
            prose-h1:text-3xl prose-h2:text-2xl prose-h2:mt-10 prose-h3:text-xl 
            prose-a:text-blue-400 hover:prose-a:text-blue-300
            prose-pre:bg-zinc-900 prose-pre:border prose-pre:border-zinc-800
            prose-code:text-blue-300 prose-code:bg-zinc-800/50 prose-code:px-1 prose-code:py-0.5 prose-code:rounded
            prose-strong:text-zinc-100
            prose-img:rounded-xl prose-img:mx-auto
            prose-hr:border-zinc-800"
        >
          {/* マークダウンコンテンツを表示 */}
          <div
            dangerouslySetInnerHTML={{
              __html: post.content
                ? post.content
                    .replace(/# (.*)/g, "<h1>$1</h1>")
                    .replace(/## (.*)/g, "<h2>$1</h2>")
                    .replace(/### (.*)/g, "<h3>$1</h3>")
                    .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
                    .replace(/`(.*?)`/g, "<code>$1</code>")
                    .replace(/\n\n/g, "<br><br>")
                : "",
            }}
          />
        </motion.div>

        {/* 記事フッター */}
        <div className="mt-16 pt-8 border-t border-zinc-800">
          <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-zinc-800 overflow-hidden relative">
                {/* プロフィール画像 */}
                <div className="absolute inset-0 flex items-center justify-center text-zinc-600 text-xs">
                  Avatar
                </div>
                {/* 
                実際の実装時はImage コンポーネントを使用
                <Image
                  src={post.author.avatar}
                  alt={post.author.name}
                  fill
                  className="object-cover"
                />
                */}
              </div>
              <div>
                <p className="font-medium">{post.author.name}</p>
                <p className="text-zinc-400 text-sm">著者</p>
              </div>
            </div>

            <div className="flex gap-2">
              <button className="px-4 py-2 bg-zinc-800 hover:bg-zinc-700 rounded-lg transition-colors text-sm">
                前の記事
              </button>
              <button className="px-4 py-2 bg-zinc-800 hover:bg-zinc-700 rounded-lg transition-colors text-sm">
                次の記事
              </button>
            </div>
          </div>
        </div>

        <div className="mt-16">
          <Footer />
        </div>
      </div>
    </div>
  );
}

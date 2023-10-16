# next_blog

## 😚 Local Environment Setup

- Node.js >=18.17.1 install
- package install

```bash
npm install
```

```bash
npm run dev
```

open <http://localhost:3000/>

## 💻 Production Upload

```bash
npm run build
```

## 👉 Git Flow

main ブランチにマージすると自動デプロイの処理が実行されます。

- main: <>
- develop: main へアップする前の確認用のブランチ。
- feature: 機能の追加用。develop から分岐して、develop に適宜マージする。

## 📦 Components

- セクション単位で分割したファイルについては`/partials`に逃す。
- 接頭辞を揃える事を意識する。 ex) PageHoge 、ButtonHoge、 BaseHoge、CardHoge

## 🌙 Font

- 英語: Advent Pro
- 日本語: NOTO SANS JP

## Image

```bash
import Image from "next:images";
import SampleImage from "../assets/sample-01.jpg";

<Image src="" width={} height={} alt="" format="webp" quality={75} />
```

・quality
quality={75} // {number 1-100}
1 最適化された画像の品質。との間の整数 100。 は 100 最高の品質、つまり最大のファイル サイズです。デフォルトは です 75。

https://nextjs.org/docs/pages/api-reference/components/image

## 😌 Link

```bash
import Link from "next:link";

<Link href="" />
```

## ✋ Lint

```bash
npm run lint:check
```

```bash
npm run lint:fix
```

Lint はプリコミット時に必ず実行されます。<br>
以下の vscode プラグインをインストールすると vscode 保存時にも Lint が実行されます。

- [prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
- [markuplint](https://marketplace.visualstudio.com/items?itemName=yusukehirao.vscode-markuplint)
- [eslint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- [stylelint](https://marketplace.visualstudio.com/items?itemName=stylelint.vscode-stylelint)

## 🥳 Style

以下3つを読み込む
- @use "../variables" as *;
- @use "../functions" as *;
- @use "../mixins" as *;

# 🤫 Rule

基本的には入れ子にしない。
  
入れ子として許可するもの
- mixins 例) @include sp()
- modifierのdata属性 例)[data-style="pć"]
- 擬似要素
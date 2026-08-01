# Brand Presentation

カスタムジャパン社内向けに作成した、取扱ブランドの調査・マーケティング戦略資料です。

| ブランド | ディレクトリ | 公開資料 |
| --- | --- | --- |
| BabyFace | [`babyface/`](./babyface/) | [BabyFace Brand Study](https://babyface-brand-study.customjapan-6721.chatgpt.site/) |
| OVER Racing | [`over-racing/`](./over-racing/) | [OVER Racing Brand Study](https://over-racing-brand-study.customjapan-6721.chatgpt.site/) |
| BETA Tools | [`beta-tools/`](./beta-tools/) | [BETA Tools Brand Study](https://beta-tools-brand-study.customjapan-6721.chatgpt.site/) |

GitHub Pages: [https://akawabe-prog.github.io/presentation/](https://akawabe-prog.github.io/presentation/)

各ディレクトリは独立したWebプロジェクトです。調査根拠、ブランド・商品分析、競合状況、カスタムジャパンの社内資産活用、部門横断施策、実行計画を収録しています。

## ローカル実行

対象ディレクトリで次を実行します。

```bash
npm install
npm run dev
```

## 注意事項

- 公開情報を基にしたデスク調査であり、販売シェアや社内KPIは実績データとの照合が必要です。
- 画像・ロゴ・商品情報を外部施策へ転用する際は、各ブランドの利用許諾範囲を確認してください。

## GitHub Pages用の静的書き出し

各プロジェクトをビルドした後、リポジトリ直下で次を実行します。

```bash
node scripts/export-github-pages.mjs
```

生成された `docs/` を、GitHub Pagesの公開元として使用します。

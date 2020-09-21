# TextAlive App API script tag example

TextAlive App API のサンプルコードです。
発声中のフレーズと現在のビートの情報を表示するシンプルな作例です。

ビルドツールを何も使わず `script` タグで API を読み込んでいる点以外は [phrase example](https://github.com/TextAliveJp/textalive-app-phrase) とまったく同内容です。

デモページ: https://textalivejp.github.io/textalive-app-script-tag/

TextAlive ホストと接続された状態をテストするには [TextAlive App Debugger](https://developer.textalive.jp/app/run/?ta_app_url=https%3A%2F%2Ftextalivejp.github.io%2Ftextalive-app-script-tag%2F&ta_song_url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DygY2qObZv24) のページにアクセスしてください。

## 違う楽曲で試すには

TextAlive App API で開発されたWebアプリケーションは、（特定の楽曲向けに作り込んでいない限り）URLのクエリパラメタで `ta_song_url={楽曲のURL}` を指定すると異なる楽曲で演出を試せます。

- [ブレス・ユア・ブレス by 和田たけあき feat. 初音ミク](https://textalivejp.github.io/textalive-app-script-tag/?ta_song_url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3Da-Nf3QUFkOU)
- [グリーンライツ・セレナーデ by Omoi feat. 初音ミク](https://textalivejp.github.io/textalive-app-script-tag/?ta_song_url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DXSLhsjepelI)

## 開発

[Node.js](https://nodejs.org/) をインストールしている環境で以下のコマンドを実行すると、開発用サーバが起動します。

```sh
npm install
npm run dev
```

## ビルド

以下のコマンドで `docs` 以下にビルド済みファイルが生成されます。 [サンプルコードのデモページ](https://textalivejp.github.io/textalive-app-script-tag/) は [GitHub Pages](https://pages.github.com/) で、このリポジトリの `docs` 以下のファイルが提供されています。

```sh
npm run build
```

## TextAlive App API

![TextAlive](https://i.gyazo.com/thumb/1000/5301e6f642d255c5cfff98e049b6d1f3-png.png)

TextAlive App API は、音楽に合わせてタイミングよく歌詞が動くWebアプリケーション（リリックアプリ）を開発できるJavaScript用のライブラリです。

TextAlive App API について詳しくはWebサイト [TextAlive for Developers](https://developer.textalive.jp/) をご覧ください。

---
https://github.com/TextAliveJp/textalive-app-script-tag

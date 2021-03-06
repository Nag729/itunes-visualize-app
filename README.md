# :bulb: README!

# Kickoff!

## [Flask](https://a2c.bitbucket.io/flask/)

<img src="https://a2c.bitbucket.io/flask/_images/logo-full.png" width="500px">

- ~~Flask インストールしてアプリ立ち上げ~~
- ~~ファイル置いた状態で`xml`ファイルの読み込み~~
- ~~pandas インポートして DataFrame 化~~
- ~~DataFrame のデータを JSON に変換して return~~

## [React](https://ja.reactjs.org/)

<img src="https://dwglogo.com/wp-content/uploads/2017/09/React_logo.png" width="500px">

- ~~React プロジェクト作成~~
- ~~axios インポートして HTTP 通信テスト~~
- ~~material-ui のインポート~~
- ~~Flask から返した JSON でテーブル表示~~
- パラメータ指定して HTTP 通信

## GitHub

- ~~GitHub にプロジェクト作って Collaborator 追加~~

## [Heroku](https://jp.heroku.com/)

<img src="https://cdn-ak.f.st-hatena.com/images/fotolife/m/mickey-STRANGE/20180507/20180507210630.jpg" width="500px">

### How To Deploy

1. `/frontend_react`ディレクトリの React アプリケーションを`npm tun build`コマンドでビルド
2. 作成された`/build`ディレクトリを`/backend_flask`にコピー  
   `cp -r build ./../backend_flask`
3. Heroku にアプリケーションをデプロイ  
   `heroku login` -> `git subtree push --prefix backend_flask/ heroku master`

### 役に立ったリンク集

- :link: [Flask で React アプリを走らせる](https://qiita.com/sand/items/49af68f1af296724e9b8)
- :link: [Heroku に Flask をデプロイ](https://tanuhack.com/deploy-flask-heroku/)
- :link: [GitHub から Heroku にデプロイ](https://qiita.com/sho7650/items/ebd87c5dc2c4c7abb8f0)
- :link: [Heroku でサブディレクトリをデプロイ](https://qrunch.net/@yumechi/entries/8d7uwLWuOFtA09sn)

# Issues

- ファイルアップロード機能追加
  - [material-ui-dropzone](https://github.com/Yuvaleros/material-ui-dropzone)が使えそう
  - ~~axiosのPOST通信でファイルを送ってFlaskで受け取るまで実装~~
  - ファイル情報をDBに保存
- ソート機能追加
  - ソートはクライアントでもできそうだけど
- 各カラムでの`GROUP BY`機能追加
- 期間を絞る機能追加
  - `Release Date`/`Date Added`
- 「Twitter で共有」機能追加

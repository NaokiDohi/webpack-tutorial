# Webpack-Tutorial

#### Webpack のインストール

```
% npm init // licenseはUNLICENSEDを指定

% ls // package.jsonの確認

% npm install --save-dev webpack@5.15.0 webpack-cli@4.3.1

```

#### npm install 時のオプションについて

- `-g` でグローバルに追加される
- `--save` で `dependencies` に追加される
- `--save-dev` で `devDependencies` に追加される

--save と--save-dev はパッケージとして公開する時に影響する。
dependencies は `npm install` の際に一緒にインストールされる。
devDependencies は `npm install` してもインストールされない。

パブリックに公開したい場合は、--save にすると良い。

### ビルド

```
% mkdir src // Webpackのデフォルト設定（後ほど変更可）

% echo "console.log('Hello Webpack')" > src/index.js

% npx webpack (--mode production) // distに出力されるファイルが見にくいが軽量。
% npx webpack --mode development // distに出力されるファイルが人間にみやすい形で出力される。
```

### モジュールの作成

```
% mkdir src/modules

% echo "export default () => {
  console.log('Hello World in the module')
}" > src/modules/greeting.js
```

```
% vim src/index.js

import greeting from './modules/greeting'

console.log('This is index.js')
greeting()
```

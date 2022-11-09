const path = require('path')
module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'output.js',
  },
  module: {
    rules: [
      {
        test: /\.css/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
          },
        ],
      },
    ],
  },
}

// test:には対象ファイルを正規表現で記述。
// loaderは下から適応される。その為順番はこの通りにする事。
// css-loaderでcssを使用できるようにし、style-loaderでCSSを適用している。

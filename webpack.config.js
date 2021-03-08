const path = require('path')

module.exports = {
  entry: './src/index.tsx',
  mode: 'development',
  output: {
    path: path.resolve(__dirname, 'www'),
    filename: 'index.bundle.js'
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.jsx']
  },
  devtool: 'inline-source-map',
  module: {
  rules: [
      {
        test: /\.(tsx|ts)?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  }
}

const path = require('path')
module.exports = {
  entry: path.resolve(__dirname, './src/index.js'),
  output: {
    path: 'dist/assets',
    filename: 'bundle.js',
  },
  module: {
    rules: [
    ],
  },
}

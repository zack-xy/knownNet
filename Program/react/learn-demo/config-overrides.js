const { override, addWebpackAlias, addDecoratorsLegacy, fixBabelImports } = require('customize-cra');
const path = require('path')

 module.exports = override(
   addWebpackAlias({
     assets: path.resolve(__dirname, './src/assets'),
     components: path.resolve(__dirname, './src/components'),
     pages: path.resolve(__dirname, './src/pages'),
     common: path.resolve(__dirname, './src/common')
   }),
   // antd按需加载
   fixBabelImports("import", {
    libraryName: "antd",
    libraryDirectory: "es",
    style: "css"
   }),
   addDecoratorsLegacy() // 配置装饰器
);

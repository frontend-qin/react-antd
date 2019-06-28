const path = require('path')

const {
  override,
  fixBabelImports,
  addLessLoader,
  addWebpackAlias
} = require('customize-cra')
module.exports = override(
  fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: true
  }),
  // 配置皮肤
  addLessLoader({
    javascriptEnabled: true,
    modifyVars: {
      '@primary-color': '#1DA57A'
    }
  }),
  // 配置别名
  addWebpackAlias({
    '@': path.resolve(__dirname, 'src'),
    '@img': path.resolve(__dirname, 'src/images'),
    '@store': path.resolve(__dirname, 'src/store')
  })
)

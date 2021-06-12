module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/portfolio-model/'
    : '/',
  chainWebpack: config => {
    config.module.rules.delete('eslint');
  }
}
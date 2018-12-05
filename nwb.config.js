module.exports = {
  type: 'react-component',
  npm: {
    esModules: true,
    umd: {
      global: 'loginCtrl',
      externals: {
        react: 'React'
      }
    }
  }
}

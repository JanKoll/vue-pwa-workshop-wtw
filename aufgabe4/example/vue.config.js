// vue.config.js

/**
 * @type {import('@vue/cli-service').ProjectOptions}
 */
module.exports = {
  // ...other vue-cli plugin options...
  pwa: {
    name: 'FCS',
    themeColor: '#333333',
    msTileColor: '#000000',
    appleMobileWebAppCapable: 'yes',
    appleMobileWebAppStatusBarStyle: 'black'
    // manifestOptions: {
    //   start_url: '/',
    // }
  }
}
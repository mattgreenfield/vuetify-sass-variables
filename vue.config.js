const VuetifyLoaderPlugin = require('vuetify-loader/lib/plugin')
const myStyles = '~@/styles/variables.scss';

module.exports = {
    css: {
        loaderOptions: {
            sass: {
                data: `@import "${myStyles}"`,
            },
        },
    },
    configureWebpack: (config) => {
        config.plugins.push(new VuetifyLoaderPlugin());
      },
      chainWebpack: (config) => {

        // Fixes Vuetify Sass vars for single file components
        // @see https://vuetifyjs.com/en/customization/sass-variables#single-file-components
        ["vue-modules", "vue", "normal-modules", "normal"].forEach((match) => {
          config.module.rule('scss').oneOf(match).use('sass-loader')
            .tap(opt => Object.assign(opt, { data: `@import "${myStyles}";` }))
        })
      },
}
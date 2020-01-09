import StylelintPlugin from 'stylelint-webpack-plugin'

export default {
    mode: 'universal',
    /*
     ** Headers of the page
     */
    router: {
        base: '/easy-vitae/',
        middleware: 'page'
    },
    head: {
        title: process.env.npm_package_name || '',
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: './favicon-32x32.png' }
        ]
    },
    /*
     ** Customize the progress-bar color
     */
    loading: { color: '#fff' },
    /*
     ** Global CSS
     */
    css: [
        './assets/scss/styles.scss'
    ],
    /*
     ** Plugins to load before mounting the App
     */
    plugins: [
    ],
    /*
     ** Nuxt.js dev-modules
     */
    buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
        '@nuxtjs/eslint-module'
    ],
    /*
     ** Nuxt.js modules
     */
    modules: [
        // Doc: https://axios.nuxtjs.org/usage
        '@nuxtjs/axios',
        '@nuxtjs/style-resources'
    ],
    styleResources: {
        scss: [
            './assets/scss/settings/_settings.scss',
            './assets/scss/tools/_tools.scss',
            './assets/scss/foundations/_foundations.scss'
        ]
    },
    /*
     ** Axios module configuration
     ** See https://axios.nuxtjs.org/options
     */
    axios: {
    },
    /*
     ** Build configuration
     */
    build: {
        /*
         ** You can extend webpack config here
         */
        plugins: [
            new StylelintPlugin({
                files: ['**/*.s?(a|c)ss', '**/*.vue']
            })
        ],
        extend (config, ctx) {
        }
    }
}

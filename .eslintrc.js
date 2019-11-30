module.exports = {
    root: true,
    env: {
        browser: true,
        node: true
    },
    parserOptions: {
        parser: 'babel-eslint'
    },
    extends: [
        '@nuxtjs',
        'standard',
        'plugin:nuxt/recommended',
        'plugin:vue/recommended'
    ],
    // add your custom rules here
    rules: {
        indent: ['error', 4],
        'vue/html-indent': ['error', 4, {
            attribute: 1,
            baseIndent: 1,
            closeBracket: 0,
            alignAttributesVertically: true
        }],
        'vue/script-indent': ['warning', 4, {
            baseIndent: 1
        }],
        'vue/html-self-closing': ['warning', {
            html: {
                void: 'never',
                normal: 'any',
                component: 'always'
            }
        }],
        'vue/max-attributes-per-line': ['warning', {
            singleline: 4,
            multiline: {
                max: 1,
                allowFirstLine: false
            }
        }]
    },
    overrides: [{
        files: ['*.vue'],
        rules: {
            indent: 'off'
        }
    }]
}

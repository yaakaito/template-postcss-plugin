const postcss = require('postcss')

module.exports = postcss.plugin('postcss-plugin-template', (options) => {
    return (root) => {
        root.walkAtRules('media-tablet', rule => {
            rule.name = 'media'
            rule.params = ` screen and (max-width: ${options.base}px)`
            return rule
        })
        return root
    }
})

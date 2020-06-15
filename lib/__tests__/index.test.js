const postcss = require('postcss')
const plugin = require('../index')

test('test', async () => {
    const src = `
            @media-tablet {
                color: #fff;
            }
        `
    const { css } = await postcss([
        plugin({
            base: 1024,
        }),
    ]).process(src)
    expect(css).toMatchInlineSnapshot(`
        "
                    @media screen and (max-width: 1024px) {
                        color: #fff;
                    }
                "
    `)
})

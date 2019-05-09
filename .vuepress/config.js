module.exports = {
  title: 'web系のメモ',
  description: '気になったことや引っかかったところの備忘録的なメモ',
  head: [
    // ['link', { rel: 'icon', href: '/assets/img/avator.jpg' }],
  ],
  meta: [
    { charset: 'utf-8' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' }
  ],
  locales: {
    '/': {
      lang: 'ja',
    },
  },
  dest: 'docs',
  ga: 'UA-104636607-2',
  // theme: 'meteorlxy',
  themeConfig: {
    personalInfo: {
      nickname: 'taku-ando',
      description: 'だいたい引っかかったところの備忘録的なメモ',
      // email: 'ほげほげ',
      location: 'Fukuoka',
      // organization: 'Xi\'an Jiao Tong University',
      avator: '/assets/img/user_image.jpg',
      sns: {
        github: {
          account: 'taku-ando',
          link: 'https://github.com/taku-ando'
        }
        // twitter: {
        //   account: 'meteorlxy_cn',
        //   link: 'https://twitter.com/meteorlxy_cn'
        // }
      }
    },
    headerBackground: {
      useGeo: true
    },
    lastUpdated: false,
    nav: [
      { text: 'Home', link: '/', exact: true },
      { text: 'Posts', link: '/posts/', exact: false  },
      { text: 'About', link: '/about/', exact: false  }, 
    ]
  },
  markdown: {
    toc: {
      includeLevel: [2, 3, 4]
    }
  },
  chainWebpack: (config, isServer) => {
    if (isServer === false) {
      config.node.set('Buffer', false)
 
      config.optimization.splitChunks({
        maxInitialRequests: 5,
        cacheGroups: {
          vue: {
            test: /[\\/]node_modules[\\/](vue|vue-router)[\\/]/,
            name: 'vendor.vue',
            chunks: 'all'
          },
          commons: {
            test: /[\\/]node_modules[\\/]/,
            priority: -10,
            name: 'vendor.commons',
            chunks: 'all'
          }
        }
      })
    }
  },
  base: '/'
}
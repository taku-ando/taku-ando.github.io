module.exports = {
  title: 'web系のメモ',
  description: '気になったことや引っかかったところの備忘録的なメモ',
  theme: '@vuepress/theme-blog', // OR shortcut: @vuepress/blog
  plugins: [
    "@vuepress/blog"
  ],

  theme: 'meteorlxy',

  themeConfig: {
    lang: 'ja-JP',

    personalInfo: {
      nickname: 'taku-ando',
      description: 'だいたい引っかかったところの備忘録的なメモ',
      location: 'Fukuoka',
      avatar: '/assets/img/user_image.jpg',
      sns: {
        github: {
          account: 'taku-ando',
          link: 'https://github.com/taku-ando'
        }
      }
    },
    
    modifyBlogPluginOptions(blogPluginOptions) {
      return blogPluginOptions
    },

    nav: [
      { text: 'Home', link: '/', exact: true },
      { text: 'Posts', link: '/posts/', exact: false  },
      { text: 'About', link: '/about/', exact: false  }, 
    ],
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
  }
}

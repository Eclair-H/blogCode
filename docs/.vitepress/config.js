export default {
  lang: 'zn-ch',
  title: '一期一会',
  description: "ECLAIR'S BLOG.",
  themeConfig: {
    siteTitle: '一期一会',
    logo: '/avatar.png',
    nav: [
      { text: '吉光片羽', link: '/technology/', activeMatch: '/technology/' },
      { text: '雪泥鸿爪', link: '/record/', activeMatch: '/record/' },
    ],
    sidebar: {
      '/technology/': [
        {
          text: '前端常用utils',
          items: [
            { text: 'Function', link: '/technology/' },
            { text: 'RegularCheck', link: '/technology/regularCheck' },
            { text: 'DateFormat', link: '/technology/dateFormat' },
            { text: 'Style', link: '/technology/style' },
          ],
        },
      ],
      '/record/': [
        {
          text: '随记',
          items: [
            { text: '2022年', link: '/record/' }, // /reading/index.md
          ],
        },
        {
          text: '阅读',
          items: [{ text: '儒道至圣', link: '/record/book_RDZS' }],
        },
      ],
    },
    socialLinks: [{ icon: 'github', link: 'https://github.com/Eclair-H' }],
    // footer: {
    //   message: 'Released under the MIT License.',
    //   copyright: 'Copyright © 2019-present Evan You',
    // },
  },
};

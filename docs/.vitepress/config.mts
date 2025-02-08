import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  head: [
    // 配置网站的图标（显示在浏览器的 tab 上）
    ["link", { rel: "icon", href: `logo.svg` }],
  ],
  title: "NCJE",
  description: "NCJE Wiki",
  themeConfig: {
    search: {
      provider: 'local'
    },
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '主页', link: '/' },
      { text: '文档', link: '/about' }
    ],
    sidebar: [
      {
        text: '文档',
        items: [
          { text: '关于服务器', link: '/about'
          },
          { text: '玩家守则', link: '/rule',
            items: [
              { text: 'QQ群规定', link: '/qq' },
              { text: '服务器规定', link: '/server' }
            ]
          },
          { text: '加入服务器', link: '/join',
          },
          { text: '常见问题', link: '/faq',
          }
        ]
      },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/N-Creeper/ncje-wiki' }
    ]
  }
})



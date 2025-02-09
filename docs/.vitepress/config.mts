import { defineConfig } from 'vitepress'

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
    footer: {
      copyright: 'Copyright © 2025 NCJE'
    },
    nav: [
      { text: '主页', link: '/' },
      { text: '文档', link: '/about' }
    ],
    sidebar: [
      {
        text: '基础内容',
        items: [
          { text: '关于服务器', link: '/about' },
          { text: '玩家规定', link: '/rule',
            items: [
              { text: 'QQ群规定', link: '/qq' },
              { text: '服务器规定', link: '/server' }
            ]
          },
          { text: '加入服务器', link: '/join' },
          { text: '赞助相关', link: '/donate' },
          { text: '意见/问题反馈', link: '/feedback' }
        ]
      },
      {
        text: '服务器内容',
        items: [
          { text: '常用指令', link: '/command' },
          { text: '玩法', link: '/fun',
            items: [
              { text: '关于主世界', link: '/world' },
              { text: '空岛生存', link: '/skyblock' },
              { text: '单方块生存', link: '/oneblock' },
              { text: '钓鱼机制', link: '/fishing' }
            ]
          },
          { text: '物品', link: '/items',
            items: [
              { text: '农作物', link: '/crops' },
              { text: '武器', link: '/weapons' },
              { text: '家具装饰', link: '/furniture' }
            ]
          },
          { text: '常见问题', link: '/faq' }
        ]
      }
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/N-Creeper/ncje-wiki' }
    ]
  }
})
